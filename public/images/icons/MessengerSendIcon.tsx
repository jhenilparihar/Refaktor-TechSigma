interface IconProps {
  className?: string;
}

const MessengerSendIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_313_9643)">
        <path
          d="M25.8908 13.4949L12.9455 14.1847"
          stroke="#8F8F8F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.8906 13.4951L10.4108 21.9911L12.9453 14.1849L9.59564 6.69218L25.8906 13.4951Z"
          stroke="#8F8F8F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_313_9643">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(13.3696) rotate(41.95)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MessengerSendIcon;
