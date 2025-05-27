"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tiers = [{ name: "Silver" }, { name: "Gold" }, { name: "Diamond" }];

const accountSizes = [
  { size: "$5,000", price: "$25" },
  { size: "$10,000", price: "$25" },
  { size: "$20,000", price: "$25" },
  { size: "$40,000", price: "$25" },
];

const features = [
  { name: "Profit target", value: "5%" },
  { name: "Max drawdown", value: "10%" },
  { name: "Daily drawdown", value: "5%" },
  { name: "Leverage", value: "Up to 1:200 / RCF 1:100" },
  { name: "Minimum trades", value: "4" },
  { name: "Maximum days", value: "Unlimited" },
  { name: "Profit split", value: "80% - 90%" },
  { name: "Refund of fee", value: "200%" },
  { name: "Maximum funding", dynamic: true },
];

// Subtle fade + slide animation for content
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Particle background component for sparkle effect
function ParticleBackground() {
  return (
    <svg
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    >
      {[...Array(30)].map((_, i) => {
        const cx = Math.random() * 100;
        const cy = Math.random() * 100;
        const r = Math.random() * 1.5 + 0.3;
        const dur = 4 + Math.random() * 3;
        return (
          <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r={r} fill="rgba(72, 187, 120, 0.4)">
            <animate
              attributeName="r"
              values={`${r};${r + 1};${r}`}
              dur={`${dur}s`}
              repeatCount="indefinite"
              begin={`${i * 0.2}s`}
            />
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur={`${dur}s`}
              repeatCount="indefinite"
              begin={`${i * 0.2}s`}
            />
          </circle>
        );
      })}
    </svg>
  );
}

export default function ProgramTiers() {
  const [activeTier, setActiveTier] = useState(1); // Default Gold

  // Controls for 3D tilt effect on cards
  const tiltControls = useAnimation();
  
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Create rotation transforms based on mouse position
  const rotateX = useTransform(y, (val) => (val - 0.5) * 15);
  const rotateY = useTransform(x, (val) => (val - 0.5) * -15);

  // Handler for mouse move over cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width; // 0 to 1
    const posY = (e.clientY - rect.top) / rect.height; // 0 to 1
    x.set(posX);
    y.set(posY);
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  useEffect(() => {
    // Initialize center tilt
    x.set(0.5);
    y.set(0.5);
  }, []);

  return (
    <section
      id="programs"
      className="relative py-24 bg-gradient-to-b from-[#060b0d] via-[#0a151d] to-[#060b0d] text-white overflow-hidden select-none"
    >
      {/* Particle Sparkle Background */}
      <ParticleBackground />

      {/* Huge blurred glow shapes for depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-green-400/30 via-teal-400/20 to-transparent blur-[180px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[8%] w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-emerald-500/35 to-transparent blur-[140px] animate-pulse-slow delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-24 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(72,187,120,0.8)]">
            Best prices in the prop industry!
          </h2>
          <p className="mt-5 text-white/80 text-xl md:text-2xl tracking-wider font-light">
            Choose your training program and account size.
          </p>
        </motion.div>

        {/* Tier Selector with neon underline */}
        <motion.div
          className="flex justify-center mb-20 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="inline-flex bg-black/60 rounded-full p-2 shadow-inner backdrop-blur-md gap-4 border border-teal-500/30">
            {tiers.map((tier, index) => {
              const isActive = activeTier === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTier(index)}
                  aria-pressed={isActive}
                  className={`relative px-10 py-3 text-sm font-semibold rounded-full flex items-center justify-center transition-all duration-400
                    ${
                      isActive
                        ? "bg-gradient-to-r from-green-400 to-teal-400 text-black shadow-lg shadow-teal-500/70 scale-110"
                        : "text-white/70 hover:text-white hover:scale-105"
                    }
                    focus:outline-none focus:ring-4 focus:ring-teal-400/60 focus:ring-offset-2 focus:ring-offset-[#060b0d]
                  `}
                >
                  {tier.name}
                  {/* Animated neon underline */}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-1 left-4 right-4 h-[3px] bg-gradient-to-r from-green-400 to-teal-400 rounded-full shadow-[0_0_10px_rgba(72,187,120,0.9)]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Desktop Table with 3D tilt */}
        <motion.div
          className="hidden md:block rounded-xl overflow-x-auto shadow-2xl border border-emerald-600/30 bg-black/40 backdrop-blur-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          ref={cardRef}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 800,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <table className="w-full text-sm border-collapse table-fixed select-none">
            <colgroup>
              <col className="bg-white/5" />
              {accountSizes.map((_, idx) => (
                <col
                  key={idx}
                  className={`transition-colors duration-300 group/col-${idx} hover:bg-emerald-700/20`}
                />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th className="sticky top-0 z-20 bg-gradient-to-r from-green-800 to-teal-900 text-white/90 font-semibold text-xl py-6 px-8 tracking-wide drop-shadow-[0_0_10px_rgba(72,187,120,0.75)] border-b border-teal-600/40">
                  Training program
                </th>
                {accountSizes.map((size, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className={`relative z-10 text-center font-bold tracking-wide text-lg px-8 py-7 cursor-pointer
                      ${
                        activeTier === 1 && idx === 1
                          ? "text-emerald-400"
                          : "text-white/70"
                      }
                    `}
                  >
                    <span className="block">{size.size}</span>
                    <span className="block mt-1 font-normal text-sm text-white/60 tracking-widest">
                      {size.price}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 border-t border-white/10">
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`group hover:bg-emerald-700/10 transition-colors duration-300 ${
                    feature.dynamic ? "italic text-emerald-300" : ""
                  }`}
                >
                  <th
                    scope="row"
                    className="text-white/70 font-semibold px-8 py-5 text-left select-text"
                  >
                    {feature.name}
                  </th>
                  {accountSizes.map((_, colIdx) => (
                    <td
                      key={colIdx}
                      className="text-center px-8 py-5 text-white/50 font-light"
                    >
                      {feature.dynamic
                        ? `$${(colIdx + 1) * 5000}`
                        : feature.value || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <motion.div
          className="md:hidden flex flex-col gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {accountSizes.map((size, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-xl bg-gradient-to-r from-green-900 via-teal-900 to-green-900 shadow-xl shadow-green-600/60 p-8 border border-green-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px 6px rgba(72, 187, 120, 0.7)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">
                  {tiers[activeTier].name}
                </h3>
                <span className="text-2xl font-semibold text-white/80">{size.size}</span>
              </div>
              <p className="text-sm text-white/70 font-light tracking-wide">
                Price: <span className="font-semibold text-green-400">{size.price}</span>
              </p>
              <ul className="mt-5 space-y-2 text-white/60 font-light text-sm leading-relaxed">
                {features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex justify-between border-b border-green-700/30 pb-1">
                    <span>{feature.name}</span>
                    <span className="font-semibold text-green-300">
                      {feature.dynamic ? `$${(idx + 1) * 5000}` : feature.value || "-"}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                aria-label={`Select ${tiers[activeTier].name} tier at ${size.size}`}
                className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-green-400 to-teal-400 text-black font-bold text-lg shadow-lg shadow-teal-500/50 hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-teal-400"
                onClick={() => alert(`Selected ${tiers[activeTier].name} - ${size.size}`)}
              >
                Choose Plan <ArrowRight className="inline ml-2" size={20} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
