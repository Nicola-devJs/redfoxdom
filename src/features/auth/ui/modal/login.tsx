import { mockTestImages } from "@/shared/constants/mockData";
import React from "react";
import { AuthModal } from ".";
import { Routes } from "@/shared/constants/routes";
import { signInWithCredentials } from "@/features/auth/model/actions/signInAction";
import { Form } from "@/shared/ui/index";
import { LoginForm } from "../form/loginForm";

interface IProps {
  onClose: () => void;
}

export const LoginModal = ({ onClose }: IProps) => {
  const handleAuthAction = async (data: FormData) => {
    try {
      await signInWithCredentials(data);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      console.log("loaded");
    }
  };

  return (
    <AuthModal
      img={mockTestImages.obzor}
      sublink={{
        text: "Don`t you have an account?",
        pageName: "Register",
        link: Routes.REGISTER,
      }}
      onClose={onClose}
      title="Login"
    >
      <Form serverAction={handleAuthAction} className="mb-4">
        <LoginForm />
      </Form>
    </AuthModal>
  );
};
