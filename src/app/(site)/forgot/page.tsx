import React from "react";
import { Routes } from "@/shared/constants/routes";
import { AuthPageComponent } from "../../components/auth/authComponentsPage/authPageComponent";

export default function ForgotPage() {
  return <AuthPageComponent authPage={Routes.FORGOT} />;
}
