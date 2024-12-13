"use client";
import React, { ReactNode } from "react";
import { useFormState } from "react-dom";

interface IProps {
  serverAction: (formDate: FormData) => Promise<void>;
  initialState?: any;
  children: ReactNode;
  className?: string;
}

export const Form = ({
  children,
  serverAction,
  initialState,
  className,
}: IProps) => {
  const state = useFormState(serverAction, initialState);

  console.log(state);

  return (
    <form action={serverAction} className={className}>
      {children}
    </form>
  );
};
