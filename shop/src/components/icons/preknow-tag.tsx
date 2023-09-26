import React, { FC } from 'react';

type PreKnowTagIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

const PreKnowTagIcon: FC<PreKnowTagIconProps> = ({
  width = 20,
  height = 20,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_251_8423)">
        <path
          opacity="0.55"
          d="M17.78 3.59002C17.45 2.94302 16.778 2.50002 16 2.50002H10.835C10.3 2.50002 9.78903 2.71402 9.41302 3.09302L2.59302 9.98302C2.59302 9.98502 2.59303 9.98602 2.59103 9.98602C2.34703 10.239 2.17902 10.54 2.09102 10.86L0.740025 8.55502C0.180025 7.60202 0.500025 6.37702 1.45202 5.81802L9.82302 0.925018C10.283 0.655018 10.833 0.580018 11.35 0.720018L16.34 2.05702C17.095 2.26002 17.633 2.87102 17.78 3.59002Z"
          fill="#737373"
          fillOpacity="0.55"
        />
        <path
          d="M10.835 2.5H16C17.105 2.5 18 3.395 18 4.5V9.672C18 10.202 17.79 10.712 17.414 11.086L10.596 17.904C9.819 18.682 8.56 18.686 7.776 17.914L2.61 12.814C1.824 12.039 1.816 10.774 2.59 9.986C2.592 9.986 2.593 9.986 2.593 9.984L9.413 3.094C9.79 2.714 10.3 2.5 10.835 2.5ZM13.5 8.5C14.328 8.5 15 7.828 15 7C15 6.172 14.328 5.5 13.5 5.5C12.672 5.5 12 6.172 12 7C12 7.828 12.672 8.5 13.5 8.5Z"
          fill="#737373"
        />
      </g>
      <defs>
        <clipPath id="clip0_251_8423">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PreKnowTagIcon;
