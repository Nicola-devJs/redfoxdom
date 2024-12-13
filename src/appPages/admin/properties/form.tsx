import { ContentSubstrate, Input, Textarea } from "@/shared/ui/index";
import React from "react";

export default function AdminPropertiesForm() {
  return (
    <>
      <ContentSubstrate title="Information">
        <Input label="Title" required />
        <Textarea />
      </ContentSubstrate>
    </>
  );
}
