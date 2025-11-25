import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LayoutNode {
  label: string;
  top: number; // %
  left: number; // %
  isCenter?: boolean;
}

interface Position {
  label: string;
  x: number;
  y: number;
}

const layout: LayoutNode[] = [
  { label: "Full Stack", top: 50, left: 50, isCenter: true },
  { label: "React", top: 40, left: 75 },
  { label: "Node.js", top: 65, left: 70 },
  { label: "React Native", top: 75, left: 45 },
  { label: "TypeScript", top: 60, left: 25 },
  { label: "SQL/NoSQL", top: 35, left: 35 },
  { label: "UX/UI", top: 30, left: 55 },
];

export default function SkillsFloating () {
  const containerRef = useRef<HTMLDivElement>(null);

  const magneticRadius = 120; // px
  const magneticStrength = 0.18;

  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMouse(null);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const newPositions: Position[] = layout.map((node) => {
      const baseX = (node.left / 100) * rect.width;
      const baseY = (node.top / 100) * rect.height;

      if (!mouse || node.isCenter) {
        return { label: node.label, x: baseX, y: baseY };
      }

      const dx = mouse.x - baseX;
      const dy = mouse.y - baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > magneticRadius) {
        return { label: node.label, x: baseX, y: baseY };
      }

      const force = (1 - dist / magneticRadius) * magneticStrength;

      return {
        label: node.label,
        x: baseX + dx * force,
        y: baseY + dy * force,
      };
    });

    setPositions(newPositions);
  }, [mouse]);

  return (
    <div
      ref={ containerRef }
      className="absolute inset-0 pointer-events-auto"
      onMouseMove={ handleMouseMove }
      onMouseLeave={ handleMouseLeave }
    >
      {/* BURBUJAS MAGNÉTICAS */ }
      { positions.map((node, i) => {
        const isCenter = node.label === "Full Stack";

        return (
          <motion.div
            key={ node.label }
            className={
              "absolute px-5 py-2.5 rounded-full text-sm shadow-sm backdrop-blur-md border select-none pointer-events-none " +
              (isCenter
                ? "bg-[#1A1A1A] text-white dark:bg-[#F1F0EF] dark:text-black font-bold"
                : "bg-white/80 text-[#1A1A1A] dark:bg-[#333]/80 dark:text-[#F1F0EF]")
            }
            style={ {
              left: node.x,
              top: node.y,
              transform: "translate(-50%, -50%)",
            } }
            animate={ {
              y: [0, isCenter ? -4 : -6, 0],
              opacity: [0.9, 1, 0.9],
            } }
            transition={ {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            } }
          >
            { node.label }
          </motion.div>
        );
      }) }
    </div>
  );
}