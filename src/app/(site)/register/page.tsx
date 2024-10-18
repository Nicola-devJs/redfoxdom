import React from "react";

import { Routes } from "@/shared/constants/routes";
import { AuthPageComponent } from "../../components/auth/authComponentsPage/authPageComponent";

export default function RegisterPage() {
  return <AuthPageComponent authPage={Routes.REGISTER} />;
}
