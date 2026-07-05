"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/config";

type ContactFormProps = {
  dictionary: Dictionary;
};

function makeSchema(messages: Dictionary["contact"]["form"]["validation"]) {
  return z.object({
    name: z.string().trim().min(2, messages.name),
    phone: z
      .string()
      .trim()
      .min(6, messages.phone)
      .regex(/^[0-9+()\-\s]+$/, messages.phone),
    email: z.string().trim().email(messages.email),
    message: z.string().trim().min(5, messages.message),
  });
}

type ContactValues = z.infer<ReturnType<typeof makeSchema>>;

const fieldClass =
  "text-body w-full rounded-full border border-neutral-200 bg-white px-5 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200";

export function ContactForm({ dictionary }: ContactFormProps) {
  const t = dictionary.contact.form;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(makeSchema(t.validation)),
    mode: "onTouched",
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  async function onSubmit() {
    // Static site for now: simulate submission. A CMS/API can replace this.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="grid h-full place-items-center rounded-[16px] bg-white p-8 text-center shadow-design-sm">
        <div>
          <h3 className="text-h3 font-bold text-primary-700">
            {t.successTitle}
          </h3>
          <p className="text-body mx-auto mt-3 max-w-md text-neutral-600">
            {t.successMessage}
          </p>
          <Button
            type="button"
            onClick={() => {
              reset();
              setSubmitted(false);
            }}
            className="mt-6 h-11 rounded-full bg-primary-500 px-6 text-base font-semibold text-primary-900 shadow-design-md hover:bg-primary-600 active:bg-primary-700"
          >
            {t.sendAnother}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Field label={t.nameLabel} error={errors.name?.message}>
        <input
          type="text"
          autoComplete="name"
          placeholder={t.namePlaceholder}
          className={`${fieldClass} h-12`}
          {...register("name")}
        />
      </Field>

      <Field label={t.phoneLabel} error={errors.phone?.message}>
        <input
          type="tel"
          autoComplete="tel"
          placeholder={t.phonePlaceholder}
          className={`${fieldClass} h-12`}
          {...register("phone")}
        />
      </Field>

      <Field label={t.emailLabel} error={errors.email?.message}>
        <input
          type="email"
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          className={`${fieldClass} h-12`}
          {...register("email")}
        />
      </Field>

      <Field label={t.messageLabel} error={errors.message?.message}>
        <textarea
          rows={5}
          placeholder={t.messagePlaceholder}
          className={`${fieldClass} resize-none rounded-[24px]! py-3`}
          {...register("message")}
        />
      </Field>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-full bg-primary-500 text-base font-semibold text-primary-900 shadow-design-md transition hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-100 disabled:text-neutral-400"
      >
        {isSubmitting ? t.submitting : t.submit}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-body mb-2 block font-medium text-neutral-900">
        {label}
        <span className="text-red-500">*</span>
      </span>
      {children}
      {error ? (
        <span className="text-small mt-1.5 block text-red-700">{error}</span>
      ) : null}
    </label>
  );
}
