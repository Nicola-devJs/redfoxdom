import React from "react";
import { Routes } from "@/shared/constants/routes";
import { AuthPageComponent } from "../../../features/auth/ui/authComponentsPage/authPageComponent";

export default function ForgotPage() {
  return <AuthPageComponent authPage={Routes.FORGOT} />;
}
