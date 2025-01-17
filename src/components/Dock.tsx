import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface DockItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface DockContextType {
  mouseX: React.MotionValue;
}

const DockContext = React.createContext<DockContextType | null>(null);

export function Dock({ className, children, ...props }: DockProps) {
  const mouseX = useMotionValue(0);

  return (
    <DockContext.Provider value={{ mouseX }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(0)}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 flex h-16 items-end gap-4 rounded-2xl bg-white/10 px-4 backdrop-blur-md border border-white/25 z-50",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
}

export function DockItem({ className, children, ...props }: DockItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const context = React.useContext(DockContext);

  if (!context) {
    throw new Error("DockItem must be used within a Dock");
  }

  const { mouseX } = context;

  const distance = useMotionValue(0);
  const widthSync = useMotionValue(48);

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  React.useEffect(() => {
    const unsubscribeDistance = mouseX.on("change", (latestX) => {
      if (!ref.current || latestX === 0) {
        distance.set(0);
        widthSync.set(48);
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;

      const distanceValue = Math.abs(latestX - itemCenterX);
      distance.set(distanceValue);

      const maxScale = 1.5;
      const maxDistance = 150;
      const scale = Math.max(
        1,
        1 +
          (maxScale - 1) *
            (1 - Math.min(distanceValue, maxDistance) / maxDistance)
      );

      widthSync.set(48 * scale);
    });

    return () => {
      unsubscribeDistance();
    };
  }, [mouseX, distance, widthSync]);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn("aspect-square", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
