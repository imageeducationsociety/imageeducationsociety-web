"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/types/zTypes";
import { useEffect, useState } from "react";
import { useToast } from "@/context/toastContext";

type FormData = z.infer<typeof formSchema>;

const Form = () => {
  const [submitting, setSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const storedTime = localStorage.getItem("lastFormSubmission");
    if (storedTime) {
      setLastSubmissionTime(parseInt(storedTime));
    }
  }, []);

  const { addToast } = useToast();

  const onSubmit = async (formData: FormData) => {
    try {
      if (formData.website) {
        // Silently reject the submission
        console.log("Bot submission detected");
        // Fake success message to confuse bots
        addToast("Message sent successfully!", "success", 10000);
        reset();
        return;
      }
      // Check submission time interval (5 minutes)
      const now = Date.now();
      if (lastSubmissionTime && now - lastSubmissionTime < 5 * 60 * 1000) {
        const remainingMinutes = Math.ceil(
          (5 * 60 * 1000 - (now - lastSubmissionTime)) / 60000
        );
        addToast(
          `Please wait ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""} before sending another message.`,
          "info",
          10000
        );
        return;
      }

      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Store submission time
      localStorage.setItem("lastFormSubmission", Date.now().toString());
      setLastSubmissionTime(Date.now());

      addToast(
        "Message sent successfully! Please wait for a response. (check spam folder)",
        "success",
        10000
      );
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error(error);
      addToast("Failed to send message. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form id="ContactForm" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name")} />
      {errors.name && <span className="error">{errors.name.message}</span>}
      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email && <span className="error">{errors.email.message}</span>}
      <input
        type="tel"
        placeholder="Mobile"
        maxLength={10}
        inputMode="numeric"
        pattern="\d{10}"
        {...register("mobile", {
          required: "Mobile number is required",
          pattern: {
            value: /^\d{10}$/,
            message: "Please enter a valid 10 digit mobile number",
          },
        })}
        onInput={(e) => {
          const input = e.target as HTMLInputElement;
          // Remove all non-digit characters and limit to 10 digits
          input.value = input.value.replace(/\D/g, "").slice(0, 10);
        }}
      />
      {errors.mobile && <span className="error">{errors.mobile.message}</span>}
      <textarea placeholder="Message" rows={5} {...register("message")} />
      {errors.message && (
        <span className="error">{errors.message.message}</span>
      )}
      <input
        type="text"
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        placeholder="Website"
        style={{ display: "none" }}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default Form;
