"use client";
import { IconX } from "@tabler/icons-react";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import NavigationBarBrand from "../shared/navigation-bar-brand";

export default function MobileMenuModal({
  setOpen,
  children,
}: {
  children: React.ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  useLockBodyScroll();
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={
        "fixed inset-0 z-50 flex h-full min-h-screen w-full flex-col bg-background"
      }
    >
      <div className="container z-50 mt-4 flex items-center justify-between px-4">
        <NavigationBarBrand />

        <button
          className="flex-shrink-0 border border-foreground px-4 py-2 text-foreground hover:text-primary dark:text-foreground"
          onClick={() => setOpen(false)}
        >
          <IconX />
        </button>
      </div>
      {children}
    </motion.div>
  );
}
