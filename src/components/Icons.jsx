function Icon({ children, className = "size-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "size-5" }) {
  return (
    <Icon className={className}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </Icon>
  );
}

export function GithubIcon({ className = "size-5" }) {
  return (
    <Icon className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3" />
      <path
        d="
          M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61
          c3.14-.35 6.44-1.54 6.44-7
          A5.44 5.44 0 0 0 19 4.77
          A5.07 5.07 0 0 0 18.91 1
          S17.73.65 15 2.48
          a13.38 13.38 0 0 0-6 0
          C6.27.65 5.09 1 5.09 1
          A5.07 5.07 0 0 0 5 4.77
          a5.44 5.44 0 0 0-1.5 3.75
          c0 5.42 3.3 6.61 6.44 7
          A3.37 3.37 0 0 0 9 18.13V22
        "
      />
    </Icon>
  );
}

export function LinkedinIcon({ className = "size-5" }) {
  return (
    <Icon className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Icon>
  );
}

export function MailIcon({ className = "size-5" }) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </Icon>
  );
}

export function ExternalLinkIcon({ className = "size-4" }) {
  return (
    <Icon className={className}>
      {/* Open box */}
      <path d="M15 13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h5" />

      {/* Arrow leaving the box */}
      <path d="M15 4h5v5" />
      <path d="m10 14 10-10" />
    </Icon>
  );
}

export function CurlyArrow({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 160 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Main curly arrow */}
      <path
        d="
          M 8 22
          C 35 10, 58 12, 76 28
          C 92 42, 98 59, 88 68
          C 77 78, 60 70, 61 56
          C 62 42, 79 32, 96 35
          C 116 38, 132 52, 143 69
        "
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arrow head */}
      <path
        d="
          M 130 66
          C 135 69, 139 70, 143 69
          C 142 64, 142 60, 144 56
        "
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
