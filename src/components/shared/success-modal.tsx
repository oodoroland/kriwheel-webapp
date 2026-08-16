"use client";

import { Button } from "@/components/shared/button";
import { Icon } from "@/components/shared/icon";
import { Modal } from "@/components/shared/modal";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
};

/**
 * Confirmation dialog shown after a form submits successfully - unmissable
 * regardless of scroll position. Shared so both forms confirm identically.
 */
export function SuccessModal({
  open,
  onClose,
  title,
  message,
}: SuccessModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="success-modal-title">
      <div className="p-unit-xl flex flex-col items-center text-center gap-4">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
        >
          <Icon name="close" />
        </button>

        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
          <Icon name="check_circle" className="text-secondary text-4xl" filled />
        </div>
        <h3
          id="success-modal-title"
          className="font-display font-bold text-2xl text-primary"
        >
          {title}
        </h3>
        <p className="text-on-surface-variant">{message}</p>

        <Button variant="accent" onClick={onClose} className="mt-2 w-full">
          Done
        </Button>
      </div>
    </Modal>
  );
}
