import { motion } from "framer-motion";

export function Marquee() {
  const text = "STRATEGY — BRANDING — DIGITAL — CONTENT — ";
  
  return (
    <div className="w-full py-20 overflow-hidden border-y border-white/10 bg-white/[0.02]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {[...Array(4)].map((_, i) => (
        <span
  key={i}
  className="
    font-display
    text-8xl md:text-[10rem]
    font-bold
    px-4
    opacity-30
    bg-gradient-to-r
    from-purple-400
    via-blue-500
    to-red-500
    bg-clip-text
    text-transparent
  "
>
  {text}
</span>

        ))}
      </motion.div>
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
