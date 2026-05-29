/** Canvas pixel-scene palette — keep in sync with :root vars in globals.css */

export type PixelPalette = {
  bg: string;
  bgLight: string;
  star: string;
  desk: string;
  screen: string;
  glow: string;
  glowDim: string;
  scanline: string;
  skin: string;
  hair: string;
  shirt: string;
  chair: string;
  particle: string;
};

export function readPixelPalette(): PixelPalette {
  if (typeof document === "undefined") {
    return DEFAULT_PALETTE;
  }
  const s = getComputedStyle(document.documentElement);
  const v = (name: string, fallback: string) =>
    s.getPropertyValue(name).trim() || fallback;
  return {
    bg: v("--pixel-scene-bg", DEFAULT_PALETTE.bg),
    bgLight: v("--pixel-scene-bg-light", DEFAULT_PALETTE.bgLight),
    star: v("--pixel-scene-star", DEFAULT_PALETTE.star),
    desk: v("--pixel-scene-desk", DEFAULT_PALETTE.desk),
    screen: v("--pixel-scene-screen", DEFAULT_PALETTE.screen),
    glow: v("--pixel-scene-glow", DEFAULT_PALETTE.glow),
    glowDim: v("--pixel-scene-glow-dim", DEFAULT_PALETTE.glowDim),
    scanline: v("--pixel-scene-scanline", DEFAULT_PALETTE.scanline),
    skin: v("--pixel-scene-skin", DEFAULT_PALETTE.skin),
    hair: v("--pixel-scene-hair", DEFAULT_PALETTE.hair),
    shirt: v("--pixel-scene-shirt", DEFAULT_PALETTE.shirt),
    chair: v("--pixel-scene-chair", DEFAULT_PALETTE.chair),
    particle: v("--pixel-scene-particle", DEFAULT_PALETTE.particle),
  };
}

const DEFAULT_PALETTE: PixelPalette = {
  bg: "#111111",
  bgLight: "#000000",
  star: "#ffffff",
  desk: "#525252",
  screen: "#000000",
  glow: "#ffffff",
  glowDim: "#737373",
  scanline: "#404040",
  skin: "#d4a574",
  hair: "#000000",
  shirt: "#a3a3a3",
  chair: "#525252",
  particle: "#737373",
};

export type Star = { x: number; y: number; phase: number };

export type Particle = {
  x: number;
  y: number;
  speed: number;
  char: string;
  life: number;
  maxLife: number;
};

const CODE_CHARS = ["0", "1", "{", "}", "<", ">", "/", "=", ";"];

export function createStars(w: number, h: number): Star[] {
  return Array.from({ length: 60 }, () => ({
    x: Math.floor(Math.random() * w),
    y: Math.floor(Math.random() * (h * 0.6)),
    phase: Math.random() * Math.PI * 2,
  }));
}

type SceneOptions = {
  scale?: number;
  reducedMotion?: boolean;
  animate?: boolean;
};

export function mountPixelScene(
  canvas: HTMLCanvasElement,
  container: HTMLElement,
  options: SceneOptions = {}
) {
  const scale = options.scale ?? 3;
  const reducedMotion = options.reducedMotion ?? false;
  const animate = options.animate ?? !reducedMotion;

  const ctx = canvas.getContext("2d");
  if (!ctx) return { destroy: () => {} };

  let palette = readPixelPalette();
  let W = 400;
  let H = 200;
  let stars: Star[] = [];
  const particles: Particle[] = [];
  let tick = 0;
  let particleTimer = 0;
  let animId = 0;

  const px = (x: number, y: number, color: string, size = 1) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  };

  const spawnParticle = () => {
    const monitorX = Math.floor(W * 0.55);
    const monitorY = Math.floor(H * 0.45);
    particles.push({
      x: monitorX + Math.floor(Math.random() * 20) - 10,
      y: monitorY,
      speed: 0.3 + Math.random() * 0.4,
      char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]!,
      life: 0,
      maxLife: 60 + Math.floor(Math.random() * 40),
    });
  };

  const drawCharacter = (t: number) => {
    const bx = Math.floor(W * 0.42);
    const by = Math.floor(H * 0.52);
    for (let x = -4; x <= 4; x++) px(bx + x, by, palette.chair);
    for (let y = -8; y <= 0; y++) px(bx + 4, by + y, palette.chair);
    px(bx - 1, by - 1, palette.shirt);
    px(bx + 1, by - 1, palette.shirt);
    px(bx - 1, by - 2, palette.shirt);
    px(bx + 1, by - 2, palette.shirt);
    for (let x = -2; x <= 2; x++) {
      for (let y = -6; y <= -3; y++) px(bx + x, by + y, palette.shirt);
    }
    const armY = Math.floor(t / 20) % 2 === 0 ? by - 3 : by - 4;
    px(bx - 3, armY, palette.skin);
    px(bx - 4, armY, palette.skin);
    px(bx + 3, armY, palette.skin);
    px(bx + 4, armY, palette.skin);
    for (let x = -2; x <= 2; x++) {
      for (let y = -10; y <= -7; y++) px(bx + x, by + y, palette.skin);
    }
    for (let x = -2; x <= 2; x++) px(bx + x, by - 10, palette.hair);
    px(bx - 2, by - 9, palette.hair);
    px(bx - 1, by - 8, palette.hair);
  };

  const drawMonitor = (t: number) => {
    const mx = Math.floor(W * 0.55);
    const my = Math.floor(H * 0.38);
    const glowColor = Math.floor(t / 30) % 2 === 0 ? palette.glow : palette.glowDim;
    px(mx, my + 12, palette.hair);
    px(mx, my + 13, palette.hair);
    for (let x = -3; x <= 3; x++) px(mx + x, my + 14, palette.hair);
    for (let x = -10; x <= 10; x++) {
      for (let y = 0; y <= 10; y++) px(mx + x, my + y, palette.screen);
    }
    for (let x = -8; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) px(mx + x, my + y, glowColor);
    }
    for (let y = 2; y <= 8; y += 2) {
      for (let x = -8; x <= 8; x++) px(mx + x, my + y, palette.scanline);
    }
    ctx.strokeStyle = palette.hair;
    ctx.lineWidth = 1;
    ctx.strokeRect(mx - 10, my, 21, 11);
  };

  const drawDesk = () => {
    const dy = Math.floor(H * 0.62);
    for (let x = Math.floor(W * 0.3); x <= Math.floor(W * 0.75); x++) {
      for (let y = 0; y <= 2; y++) px(x, dy + y, palette.desk);
    }
    px(Math.floor(W * 0.32), dy + 3, palette.desk);
    px(Math.floor(W * 0.32), dy + 4, palette.desk);
    px(Math.floor(W * 0.72), dy + 3, palette.desk);
    px(Math.floor(W * 0.72), dy + 4, palette.desk);
  };

  const drawFloor = () => {
    const fy = Math.floor(H * 0.67);
    ctx.fillStyle = palette.bgLight;
    ctx.fillRect(0, fy, W, H - fy);
    for (let x = 0; x < W; x += 2) px(x, fy, palette.desk);
  };

  const drawScene = (t: number) => {
    palette = readPixelPalette();
    ctx.fillStyle = palette.bg;
    ctx.fillRect(0, 0, W, H);
    stars.forEach((s) => {
      if (Math.sin(t * 0.05 + s.phase) > 0.3) px(s.x, s.y, palette.star);
    });
    drawFloor();
    drawDesk();
    drawMonitor(t);
    drawCharacter(t);
    if (animate) {
      particleTimer++;
      if (particleTimer % 15 === 0) spawnParticle();
    }
    ctx.font = "6px monospace";
    ctx.textBaseline = "top";
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]!;
      p.y -= p.speed;
      p.life++;
      ctx.globalAlpha = Math.max(0, 1 - p.life / p.maxLife);
      ctx.fillStyle = palette.particle;
      ctx.fillText(p.char, p.x, p.y);
      if (p.life >= p.maxLife) particles.splice(i, 1);
    }
    ctx.globalAlpha = 1;
  };

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    W = Math.max(320, Math.floor(w / scale));
    H = Math.max(200, Math.floor(h / scale));
    canvas.width = W;
    canvas.height = H;
    ctx.imageSmoothingEnabled = false;
    stars = createStars(W, H);
    particles.length = 0;
  };

  const loop = () => {
    drawScene(tick);
    if (animate) {
      tick++;
      animId = requestAnimationFrame(loop);
    }
  };

  resize();
  tick = 0;
  loop();

  const ro = new ResizeObserver(resize);
  ro.observe(container);

  return {
    destroy: () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    },
  };
}
