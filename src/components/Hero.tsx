import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 top-0 left-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none opacity-40" />

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center">
          {/* <motion.h1 
            className="font-display text-[6vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            TURNING VISION
            {/* Turning Vision  */}
          <br />
          {/* INTO PIXELS */}
          {/* Into Pixels */}
          {/* </motion.h1> */}

          <motion.h1
            className="
                      font-display
                      text-[6vw]
                      leading-[0.8]
                      font-bold
                      tracking-tighter
                      text-transparent
                      bg-clip-text
                      bg-[length:200%_200%]
                      bg-gradient-to-r
                      from-white
                      via-blue-300
                      to-red-500
                      mb-8
                    "
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              opacity: { duration: 3, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 3, ease: [0.16, 1, 0.3, 1] },
              backgroundPosition: {
                duration: 6,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            TURNING VISION
            <br />
            INTO PIXELS
          </motion.h1>


          <motion.p
            className="max-w-xl text-lg md:text-xl text-white/60 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* We transform brands through strategy, design, and technology.
            Creating digital experiences that matter. */}
            A creative film studio crafting cinematic stories through craft, technology, and intent.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
