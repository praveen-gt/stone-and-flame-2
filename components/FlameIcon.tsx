interface FlameIconProps {
  className?: string;
  size?: number;
}

export default function FlameIcon({ className, size = 24 }: FlameIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C12 2 8 7 8 12C8 14.209 9.791 16 12 16C14.209 16 16 14.209 16 12C16 10.5 15.5 9.5 15 8.5C14.5 10 13.5 11 12 11C12 11 13 7 12 2Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 22C8.134 22 5 18.866 5 15C5 11 8 7.5 9 6.5C9 9.5 11 11 12 11C11 12 10 13 10 15C10 16.657 10.895 18 12 18C13.105 18 14 16.657 14 15C14 13 13 12 12 11C13 11 15 9.5 15 6.5C16 7.5 19 11 19 15C19 18.866 15.866 22 12 22Z"
        fill="currentColor"
      />
    </svg>
  );
}
