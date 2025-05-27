'use client';
import { motion } from 'framer-motion';

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 0.3,
    transition: {
      pathLength: { delay: i * 0.2, type: 'spring', duration: 2, bounce: 0 },
      opacity: { delay: i * 0.2, duration: 0.5 },
    },
  }),
};

const ValueProposition = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side with animated lines */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      id="gridGradient"
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fx="50%"
                      fy="50%"
                    >
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <circle cx="200" cy="200" r="180" fill="url(#gridGradient)" />

                  {/* Hexagonal Grid with animation */}
                  <g stroke="#4ade80" strokeWidth="1">
                    {[
                      'M200,40 L340,120 L340,280 L200,360 L60,280 L60,120 Z',
                      'M200,80 L300,140 L300,260 L200,320 L100,260 L100,140 Z',
                      'M200,120 L260,160 L260,240 L200,280 L140,240 L140,160 Z',
                    ].map((d, i) => (
                      <motion.path
                        key={i}
                        d={d}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                      />
                    ))}

                    {[
                      { x1: 200, y1: 40, x2: 200, y2: 360 },
                      { x1: 60, y1: 120, x2: 340, y2: 120 },
                      { x1: 60, y1: 280, x2: 340, y2: 280 },
                    ].map((line, i) => (
                      <motion.line
                        key={`line-${i}`}
                        {...line}
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i + 3}
                      />
                    ))}
                  </g>

                  <circle cx="200" cy="200" r="5" fill="#4ade80">
                    <animate
                      attributeName="opacity"
                      values="1;0.3;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <text
                    x="200"
                    y="200"
                    fontSize="40"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="#ffffff"
                    filter="url(#glow)"
                  >
                    Our Capital
                  </text>
                  <text
                    x="200"
                    y="250"
                    fontSize="40"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="#ffffff"
                    filter="url(#glow)"
                  >
                    Your Success
                  </text>

                  <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Right side with text */}
          <div className="lg:w-1/2">
            <div className="inline-block mb-6">
              <div className="text-sm px-4 py-2 border border-prop-green/30 rounded-full bg-prop-green/5 text-prop-green">
                What is FXology?
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trade on Forex and other markets with capital
              <span className="block text-prop-green mt-2">up to 640,000 USD!</span>
            </h2>

            <p className="text-white/70 mb-8 text-lg">
              We provide unique trading programs for Forex traders, based upon which we search for
              the best options to work together with. We provide you with Training accounts that
              you can use to trade and earn commission without the risk of losing your own funds!
            </p>

            <p className="text-white/70 mb-8 text-lg">
              You are presented with a choice of the widest variety of training programs on the
              market - it is up to you to choose based on your experience and preference. Whether
              you are a rookie, advanced or experienced trader, we are certain that you will find
              the most perfectly suited program.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                ['Bitcoin', '+2.07%', 'text-prop-green', 'bg-prop-green'],
                ['Ethereum', '+2.07%', 'text-prop-green', 'bg-prop-green'],
                ['BNB', '-0.4%', 'text-red-500', 'bg-red-500'],
                ['Solana', '+2.07%', 'text-prop-green', 'bg-prop-green'],
              ].map(([name, change, textColor, dotColor], i) => (
                <div
                  key={i}
                  className={`bg-black/40 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 text-sm transition-all duration-300 hover:border-prop-green hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] card-glow`}
                >
                  <div className={`w-2 h-2 ${dotColor} rounded-full`}></div>
                  <span>{name}</span>
                  <span className={textColor}>{change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
