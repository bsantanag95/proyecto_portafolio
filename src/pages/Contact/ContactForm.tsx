import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Input, Textarea } from "../../components/ui";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../i18n";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const initialState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validate(data: FormData, t: typeof translations.es) {
  const errors: Partial<FormData> = {};

  if (data.firstName.trim().length < 2)
    errors.firstName = t.contact.errors.firstName;

  if (data.lastName.trim().length < 2)
    errors.lastName = t.contact.errors.lastName;

  if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = t.contact.errors.email;

  if (data.subject.trim().length < 3) errors.subject = t.contact.errors.subject;

  if (data.message.trim().length < 10)
    errors.message = t.contact.errors.message;

  if (data.phone && !/^[0-9+\s()-]{6,}$/.test(data.phone))
    errors.phone = t.contact.errors.phone;

  return errors;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>("idle");
  const { t } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form, t);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      await emailjs.send(
        "service_65jq3u3",
        "template_ila7qac",
        {
          ...form,
          phone: form.phone || "No proporcionado",
        },
        "AyU6anDJLLQudP3-3",
      );

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
    space-y-5
    rounded-xl
    bg-white/70 dark:bg-zinc-900/60
    backdrop-blur
    border border-zinc-200 dark:border-zinc-800
    shadow-md shadow-black/5
    p-5 sm:p-6
  "
    >
      {/* Nombre / Apellido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label={t.contact.fields.firstName}
          name="firstName"
          value={form.firstName}
          error={errors.firstName}
          onChange={handleChange}
        />
        <Input
          label={t.contact.fields.lastName}
          name="lastName"
          value={form.lastName}
          error={errors.lastName}
          onChange={handleChange}
        />
      </div>

      {/* Email / Teléfono */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label={t.contact.fields.email}
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={handleChange}
        />
        <Input
          label={t.contact.fields.phone}
          name="phone"
          value={form.phone}
          error={errors.phone}
          onChange={handleChange}
        />
      </div>

      <Input
        label={t.contact.fields.subject}
        name="subject"
        value={form.subject}
        error={errors.subject}
        onChange={handleChange}
      />

      <Textarea
        label={t.contact.fields.message}
        name="message"
        value={form.message}
        error={errors.message}
        onChange={handleChange}
      />

      <button
        className="
    inline-flex items-center gap-2
    rounded-lg px-5 py-2.5
    text-sm font-medium
    bg-linear-to-r from-emerald-500 to-emerald-600
    text-white
    shadow shadow-emerald-500/20
    hover:from-emerald-400 hover:to-emerald-500
    active:scale-95
    transition-all cursor-pointer
  "
      >
        <Send size={16} />
        {status === "loading" ? t.contact.submitting : t.contact.submit}
      </button>

      <p className="text-xs text-zinc-500 dark:text-zinc-500">
        {t.contact.privacy}
      </p>

      {/* Feedback */}
      {status === "success" && (
        <p className="text-sm text-emerald-600 flex items-center gap-2">
          {t.contact.success}
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-500 flex items-center gap-2">
          <span className="text-lg">⚠️</span>
          {t.contact.error}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
