"use client";
import React, { useState } from "react";
import { PropertyGallery } from "./gallery";
import { Slider } from "@/shared/UI/slider/slider";
import { Modal } from "@/shared/UI/modal/modal";
import { mockTestImages } from "@/shared/constants/property";
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
