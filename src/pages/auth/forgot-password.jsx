import React, { useState } from "react";
import CommonForm from "@/components/common/form";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const forgotFormControl = [
  {
    name: "email",
    type: "email",
    componentType: "input",
    placeholder: "Enter your email",
    label: "Email",
    required: true,
  },
];

export default function ForgotPassword() {
  const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    if (!formData.email) {
      toast.error("Please enter an email address.");
      return;
    }

    setLoading(true);
    try {
      // only placeholder since API is not implemented
      await new Promise((r) => setTimeout(r, 700));
      toast.success(
        "if email is registered, a password reset link will be sent to that address."
      );
      // optional: setFormData({ email: "" });
    } catch (err) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Forgot your password?
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter your registered email to receive a password reset link.
        </p>
      </div>

      <CommonForm
        formControls={forgotFormControl}
        buttonText={loading ? "Sending..." : "Send reset link"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className="text-sm text-center">
        <Link
          to="/auth/login"
          className="font-medium text-primary hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
