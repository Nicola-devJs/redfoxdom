"use client";
import React, { useState } from "react";
import { PropertyGallery } from "./ui/index";
import { mockTestImages } from "@/shared/constants/mockData";
import { Modal, Slider } from "@/shared/ui";

export const GallerySlider = () => {
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
