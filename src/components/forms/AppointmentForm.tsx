"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, ChevronDown, Clock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import type { Dictionary, Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type AppointmentFormProps = {
  dictionary: Dictionary;
  locale: Locale;
};

function makeSchema(messages: Dictionary["book"]["validation"]) {
  return z.object({
    name: z.string().trim().min(2, messages.name),
    phone: z
      .string()
      .trim()
      .min(6, messages.phone)
      .regex(/^[0-9+()\-\s]+$/, messages.phone),
    email: z.string().trim().email(messages.email),
    service: z.string().min(1, messages.service),
    date: z.string().min(1, messages.date),
    time: z.string().min(1, messages.time),
  });
}

type AppointmentValues = z.infer<ReturnType<typeof makeSchema>>;

const fieldClass =
  "text-body h-12 w-full rounded-full border border-neutral-200 bg-white px-5 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200";

export function AppointmentForm({ dictionary, locale }: AppointmentFormProps) {
  const t = dictionary.book;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(makeSchema(t.validation)),
    mode: "onTouched",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
    },
  });

  const serviceValue = watch("service");
  const dateValue = watch("date");
  const timeValue = watch("time");

  const selectedService = services.find((item) => item.slug === serviceValue);
  const serviceName = selectedService
    ? locale === "km"
      ? selectedService.titleKm
      : selectedService.title
    : "";

  const intl = locale === "km" ? "km-KH" : "en-US";
  const formattedDate = dateValue
    ? new Date(`${dateValue}T00:00:00`).toLocaleDateString(intl, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const formattedTime = timeValue
    ? new Date(`1970-01-01T${timeValue}`).toLocaleTimeString(intl, {
        hour: "numeric",
        minute: "2-digit",
      })
    : "";

  const showSummary = Boolean(serviceName && formattedDate && formattedTime);

  async function onSubmit() {
    // Static site for now: simulate submission. A CMS/API can replace this.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[32px] bg-primary-50 p-8 text-center shadow-design-md sm:p-12">
        <h2 className="text-h3 font-bold text-primary-700">{t.successTitle}</h2>
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
          {t.bookAnother}
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[24px] bg-primary-50 p-6 shadow-design-md sm:p-8 lg:p-12"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label={t.nameLabel} error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={fieldClass}
            {...register("name")}
          />
        </Field>

        <Field label={t.phoneLabel} error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            className={fieldClass}
            {...register("phone")}
          />
        </Field>

        <Field label={t.emailLabel} error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClass}
            {...register("email")}
          />
        </Field>

        <Field label={t.serviceLabel} error={errors.service?.message}>
          <div className="relative">
            <select
              className={cn(
                fieldClass,
                "cursor-pointer appearance-none pr-12",
                serviceValue ? "text-neutral-900" : "text-neutral-400",
              )}
              {...register("service")}
            >
              <option value="" disabled>
                {t.servicePlaceholder}
              </option>
              {services.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {locale === "km" ? item.titleKm : item.title}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-neutral-500"
              aria-hidden="true"
            />
          </div>
        </Field>

        <Field label={t.dateLabel} error={errors.date?.message}>
          <PickerInput
            type="date"
            placeholder={t.datePlaceholder}
            icon={<Calendar className="size-5 text-neutral-500" aria-hidden />}
            register={register("date")}
            hasValue={Boolean(dateValue)}
          />
        </Field>

        <Field label={t.timeLabel} error={errors.time?.message}>
          <PickerInput
            type="time"
            placeholder={t.timePlaceholder}
            icon={<Clock className="size-5 text-neutral-500" aria-hidden />}
            register={register("time")}
            hasValue={Boolean(timeValue)}
          />
        </Field>
      </div>

      {showSummary ? (
        <p className="text-body mt-6 text-primary-700">
          {t.summaryPrefix}{" "}
          <strong className="font-semibold">{serviceName}</strong>{" "}
          {t.summaryMiddle}{" "}
          <strong className="font-semibold">
            {formattedDate} {t.summaryAt} {formattedTime}
          </strong>
          .
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 h-12 w-full rounded-full bg-primary-500 text-base font-semibold text-primary-900 shadow-design-md transition hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-100 disabled:text-neutral-400"
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

function PickerInput({
  type,
  placeholder,
  icon,
  register,
  hasValue,
}: {
  type: "date" | "time";
  placeholder: string;
  icon: React.ReactNode;
  register: ReturnType<ReturnType<typeof useForm<AppointmentValues>>["register"]>;
  hasValue: boolean;
}) {
  const { onBlur, ...registerProps } = register;

  return (
    <div className="relative">
      <input
        {...registerProps}
        type="text"
        placeholder={placeholder}
        onFocus={(event) => {
          event.target.type = type;
          event.target.showPicker?.();
        }}
        onBlur={(event) => {
          onBlur(event);
          if (!event.target.value) event.target.type = "text";
        }}
        className={cn(
          fieldClass,
          "pr-12 [&::-webkit-calendar-picker-indicator]:opacity-0",
          hasValue ? "text-neutral-900" : "text-neutral-400",
        )}
      />
      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
        {icon}
      </span>
    </div>
  );
}
