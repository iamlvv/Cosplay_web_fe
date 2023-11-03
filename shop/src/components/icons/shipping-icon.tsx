const ShippingIcon: React.FC<React.SVGAttributes<{}>> = ({
  width = 23,
  height = 24,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_368_9311)">
        <path
          d="M19.1666 8.60384H16.2916V4.77051H2.87492C1.82075 4.77051 0.958252 5.63301 0.958252 6.68717V17.2288H2.87492C2.87492 18.8197 4.15909 20.1038 5.74992 20.1038C7.34075 20.1038 8.62492 18.8197 8.62492 17.2288H14.3749C14.3749 18.8197 15.6591 20.1038 17.2499 20.1038C18.8408 20.1038 20.1249 18.8197 20.1249 17.2288H22.0416V12.4372L19.1666 8.60384ZM5.74992 18.6663C4.9545 18.6663 4.31242 18.0243 4.31242 17.2288C4.31242 16.4334 4.9545 15.7913 5.74992 15.7913C6.54534 15.7913 7.18742 16.4334 7.18742 17.2288C7.18742 18.0243 6.54534 18.6663 5.74992 18.6663ZM18.6874 10.0413L20.5658 12.4372H16.2916V10.0413H18.6874ZM17.2499 18.6663C16.4545 18.6663 15.8124 18.0243 15.8124 17.2288C15.8124 16.4334 16.4545 15.7913 17.2499 15.7913C18.0453 15.7913 18.6874 16.4334 18.6874 17.2288C18.6874 18.0243 18.0453 18.6663 17.2499 18.6663Z"
          fill="#737373"
        />
      </g>
      <defs>
        <clipPath id="clip0_368_9311">
          <rect
            width="23"
            height="23"
            fill="white"
            transform="translate(0 0.9375)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShippingIcon;