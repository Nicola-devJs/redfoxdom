import React from "react";
import { Input } from "@/shared/ui/input";
import { ContentSubstrate } from "@/shared/ui/contentSubstrate";

export default function AdminPropertiesPage() {
  return (
    <ContentSubstrate title="Information">
      <Input label="Title" required />
    </ContentSubstrate>
  );
}
