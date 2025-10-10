"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface TallyPopupProps {
  formId: string;
  buttonText?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
  children?: React.ReactNode;
}

export function TallyPopup({
  formId,
  buttonText = "Open Form",
  buttonVariant = "hero",
  buttonSize = "lg",
  buttonClassName = "",
  children
}: TallyPopupProps) {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const openTallyPopup = () => {
    // @ts-ignore - Tally is loaded via external script
    if (window.Tally) {
      // @ts-ignore
      window.Tally.openPopup(formId, {
        layout: "modal",
        width: 700,
        autoClose: 3000,
      });
    }
  };

  return (
    <Button
      variant={buttonVariant}
      size={buttonSize}
      className={buttonClassName}
      onClick={openTallyPopup}
    >
      {children || buttonText}
    </Button>
  );
}
