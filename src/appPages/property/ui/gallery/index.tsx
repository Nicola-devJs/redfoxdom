"use client";
import React, { useState } from "react";
import { PropertyGallery } from "./gallery";
import { Slider } from "@/shared/ui/slider/slider";
import { Modal } from "@/shared/ui/modal/modal";
import { mockTestImages } from "@/shared/constants/mockData";
import { createPortal } from "react-dom";

export const GalleryAndSlider = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <PropertyGallery
        images={Object.values(mockTestImages)}
        onOpenGalleryDetails={handleOpenModal}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Slider />
      </Modal>
    </>
  );
};
