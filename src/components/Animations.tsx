"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStagger = ({ children }: { children: React.ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={
        shouldReduceMotion
          ? {}
          : {
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
};
