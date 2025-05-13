import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  opacity?: number;
};

export const Spotlight = ({ className, fill, opacity = 0.2 }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] w-[1200px] h-[600px]",
        className
      )}
      viewBox="0 0 3840 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1920"
          cy="300"
          rx="1920"
          ry="300"
          fill={fill || "white"}
          fillOpacity={opacity}
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0"
          width="3840"
          height="600"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur stdDeviation="100" result="blur" />
        </filter>
      </defs>
    </svg>
  );
};


// import React from "react";
// import { cn } from "@/lib/utils";

// type SpotlightProps = {
//   className?: string;
//   fill?: string;
// };

// export const Spotlight = ({ className, fill }: SpotlightProps) => {
//   return (
//     <svg
//       className={cn(
//         "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
//         className
//       )}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 3787 2842"
//       fill="none"
//     >
//       <g filter="url(#filter)">
//         <ellipse
//           cx="1924.71"
//           cy="273.501"
//           rx="1924.71"
//           ry="273.501"
//           transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
//           fill={fill || "white"}
//           fillOpacity="0.40"
//         ></ellipse>
//       </g>
//       <defs>
//         <filter
//           id="filter"
//           x="0.860352"
//           y="0.838989"
//           width="3785.16"
//           height="2840.26"
//           filterUnits="userSpaceOnUse"
//           colorInterpolationFilters="sRGB"
//         >
//           <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//           <feBlend
//             mode="normal"
//             in="SourceGraphic"
//             in2="BackgroundImageFix"
//             result="shape"
//           ></feBlend>
//           <feGaussianBlur
//             stdDeviation="151"
//             result="effect1_foregroundBlur_1065_8"
//           ></feGaussianBlur>
//         </filter>
//       </defs>
//     </svg>
//   );
// };
