"use client";

import PhoneInput, { type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import en from "react-phone-number-input/locale/en";
import ar from "react-phone-number-input/locale/ar";

type ContactPhoneInputProps = {
  id?: string;
  value: Value | undefined;
  onChange: (value: Value | undefined) => void;
  locale: "en" | "ar";
  placeholder?: string;
  required?: boolean;
};

export function ContactPhoneInput({
  id,
  value,
  onChange,
  locale,
  placeholder,
  required,
}: ContactPhoneInputProps) {
  const labels = locale === "ar" ? ar : en;

  return (
    <div className="contact-phone-wrap" dir="ltr">
      <PhoneInput
        id={id}
        international
        countryCallingCodeEditable={false}
        defaultCountry="EG"
        flags={flags}
        labels={labels}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="contact-phone-input"
        numberInputProps={{
          className: "contact-phone-number",
          required,
          autoComplete: "tel",
          inputMode: "tel",
        }}
        countrySelectProps={{
          className: "contact-phone-country",
        }}
      />
    </div>
  );
}

export type { Value as PhoneValue };
