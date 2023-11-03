const CheckIcon: React.FC<React.SVGAttributes<{}>> = ({
  width = 48,
  height = 48,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M45.54 24.4375C45.54 36.3336 35.8961 45.9775 24 45.9775C12.1038 45.9775 2.45996 36.3336 2.45996 24.4375C2.45996 12.5413 12.1038 2.89746 24 2.89746C35.8961 2.89746 45.54 12.5413 45.54 24.4375Z"
        stroke="#129AA6"
        strokeWidth="3"
      />
      <path
        d="M14.3999 23.9686L21.4143 30.983L33.7196 18.6777"
        stroke="#129AA6"
        strokeWidth="3"
      />
    </svg>
  );
};

export default CheckIcon;
