import React, { FC } from 'react';

type PreKnowCartIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

const PreKnowCartIcon: FC<PreKnowCartIconProps> = ({
  width = 20,
  height = 20,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.178 13.088H5.453C4.999 13.088 4.543 12.724 4.543 12.27L3.727 1.818H0V0H4.544C4.999 0 5.454 0.364 5.454 0.818L5.544 2.09H18.994C19.268 2.09 19.541 2.18 19.724 2.454C19.904 2.636 19.994 2.908 19.904 3.181L18.087 12.361C17.997 12.816 17.632 13.089 17.177 13.089L17.178 13.088ZM6.27 11.27H16.36L17.814 3.908H5.634L6.271 11.27H6.27ZM6.362 18.985C7.366 18.985 8.18 18.172 8.18 17.168C8.18 16.164 7.366 15.35 6.362 15.35C5.358 15.35 4.544 16.164 4.544 17.168C4.544 18.172 5.358 18.985 6.362 18.985ZM15.542 18.985C16.546 18.985 17.359 18.172 17.359 17.168C17.359 16.164 16.545 15.35 15.541 15.35C14.537 15.35 13.723 16.164 13.723 17.168C13.723 18.172 14.537 18.985 15.541 18.985H15.542Z"
        fill="#324552"
      />
    </svg>
  );
};

export default PreKnowCartIcon;
