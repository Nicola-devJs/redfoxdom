import React from "react";
import { Routes } from "@/shared/constants/routes";
import { AuthPageComponent } from "../../components/auth/authComponentsPage/authPageComponent";

export default function LoginPage() {
  return <AuthPageComponent authPage={Routes.LOGIN} />;
}
