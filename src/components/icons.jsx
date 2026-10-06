const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const IconSearch = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const IconHeart = ({ filled = false, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <path d="M19.5 12.6 12 20.1l-7.5-7.5A4.9 4.9 0 0 1 12 6.9a4.9 4.9 0 0 1 7.5 5.7Z" />
  </svg>
);

export const IconMenu = (props) => (
  <svg {...base} {...props}>
    <path d="M3 7h18" />
    <path d="M3 12h18" />
    <path d="M3 17h12" />
  </svg>
);

export const IconClose = (props) => (
  <svg {...base} {...props}>
    <path d="m5 5 14 14" />
    <path d="M19 5 5 19" />
  </svg>
);

export const IconArrowRight = (props) => (
  <svg {...base} {...props}>
    <path d="M4 12h16" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export const IconArrowLeft = (props) => (
  <svg {...base} {...props}>
    <path d="M20 12H4" />
    <path d="m11 5-7 7 7 7" />
  </svg>
);

export const IconArrowUpRight = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
);

export const IconArrowDown = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v16" />
    <path d="m5 13 7 7 7-7" />
  </svg>
);

export const IconChevronDown = (props) => (
  <svg {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconChevronLeft = (props) => (
  <svg {...base} {...props}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const IconChevronRight = (props) => (
  <svg {...base} {...props}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconPin = (props) => (
  <svg {...base} {...props}>
    <path d="M12 21.5s-7-5.6-7-10.7a7 7 0 1 1 14 0c0 5.1-7 10.7-7 10.7Z" />
    <circle cx="12" cy="10.6" r="2.5" />
  </svg>
);

export const IconBed = (props) => (
  <svg {...base} {...props}>
    <path d="M3 20h18" />
    <path d="M4 20V9.5A2.5 2.5 0 0 1 6.5 7h11A2.5 2.5 0 0 1 20 9.5V20" />
    <path d="M4 14h16" />
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
  </svg>
);

export const IconBath = (props) => (
  <svg {...base} {...props}>
    <path d="M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
    <path d="M6 18v2" />
    <path d="M10 18v2" />
    <path d="M14 18v2" />
    <path d="M18 18v2" />
    <path d="M6 12V6a2 2 0 0 1 2-2h4" />
  </svg>
);

export const IconArea = (props) => (
  <svg {...base} {...props}>
    <path d="M15 3h6v6" />
    <path d="M9 21H3v-6" />
    <path d="m21 3-7 7" />
    <path d="m3 21 7-7" />
  </svg>
);

export const IconShield = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l7 2.8v5.4c0 4.3-2.9 7.3-7 8.8-4.1-1.5-7-4.5-7-8.8V5.8Z" />
    <path d="m9 11.6 2 2 4.2-4.6" />
  </svg>
);

export const IconMap = (props) => (
  <svg {...base} {...props}>
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
    <path d="M9 4v14" />
    <path d="M15 6v14" />
  </svg>
);

export const IconHeadset = (props) => (
  <svg {...base} {...props}>
    <path d="M4 14v-3a8 8 0 0 1 16 0v3" />
    <path d="M4 14a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2v-5Z" />
    <path d="M20 14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5Z" />
    <path d="M18 19a4 4 0 0 1-4 3" />
  </svg>
);

export const IconSparkle = (props) => (
  <svg {...base} {...props}>
    <path d="m12 4 1.9 5.6 5.6 1.9-5.6 1.9L12 19l-1.9-5.6L4.5 11.5l5.6-1.9Z" />
    <path d="m18.4 3.5.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6Z" />
  </svg>
);

export const IconInstagram = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.3 6.7h.01" />
  </svg>
);

export const IconFacebook = (props) => (
  <svg {...base} {...props}>
    <path
      fill="currentColor"
      stroke="none"
      d="M13.5 21v-7h2.4l.4-2.7h-2.8V9.5c0-.8.3-1.5 1.6-1.5h1.3V5.6s-1.1-.2-2.2-.2c-2.2 0-3.7 1.3-3.7 3.7v2.2H8v2.7h2.5v7h3Z"
    />
  </svg>
);

export const IconLinkedIn = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M8.2 10.5V17" />
    <path d="M8.2 7.2v.01" />
    <path d="M12 17v-3.9a2.1 2.1 0 0 1 4.2 0V17" />
  </svg>
);

export const IconCheck = (props) => (
  <svg {...base} {...props}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

export const IconPlus = (props) => (
  <svg {...base} {...props}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export const IconMinus = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14" />
  </svg>
);

export const IconExpand = (props) => (
  <svg {...base} {...props}>
    <path d="M9 3H3v6" />
    <path d="M15 3h6v6" />
    <path d="M9 21H3v-6" />
    <path d="M15 21h6v-6" />
  </svg>
);

export const IconUpload = (props) => (
  <svg {...base} {...props}>
    <path d="M12 16V4" />
    <path d="m6 10 6-6 6 6" />
    <path d="M4 20h16" />
  </svg>
);

export const IconQuote = (props) => (
  <svg {...base} {...props}>
    <path d="M8 7H5a3 3 0 0 0-3 3v4h6v-7Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M20 7h-3a3 3 0 0 0-3 3v4h6v-7Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M9 14v2a3 3 0 0 1-3 3" />
    <path d="M19 14v2a3 3 0 0 1-3 3" />
  </svg>
);

export const IconClock = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const IconCalendar = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
    <path d="M3.5 10.5h17" />
  </svg>
);

export const IconMail = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const IconPhone = (props) => (
  <svg {...base} {...props}>
    <path d="M6.7 3.5 9 4.6c.8.3 1.1 1.2.8 2l-.7 2a14 14 0 0 0 6.3 6.3l2-.7c.8-.3 1.7 0 2 .8l1.1 2.3c.6 1.2-.5 2.6-1.8 2.5C12.9 19.5 4.5 11.2 4.2 5.2c-.1-1.3 1.3-2.4 2.5-1.7Z" />
  </svg>
);

export const IconUser = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
  </svg>
);

export const IconHome = (props) => (
  <svg {...base} {...props}>
    <path d="m3.5 10.5 8.5-7 8.5 7" />
    <path d="M5.5 9v11h13V9" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export const IconKey = (props) => (
  <svg {...base} {...props}>
    <circle cx="8" cy="15" r="4.5" />
    <path d="m11.5 11.5 8.5-8.5" />
    <path d="M17 5l2.5 2.5" />
    <path d="M14.5 7.5 17 10" />
  </svg>
);

export const IconBuilding = (props) => (
  <svg {...base} {...props}>
    <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    <path d="M16 9h3a1 1 0 0 1 1 1v11" />
    <path d="M3 21h18" />
    <path d="M8 7h4" />
    <path d="M8 11h4" />
    <path d="M8 15h4" />
  </svg>
);

export const IconGlobe = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
  </svg>
);

export const IconFilter = (props) => (
  <svg {...base} {...props}>
    <path d="M4 5h16" />
    <path d="M7 12h10" />
    <path d="M10 19h4" />
  </svg>
);

export const IconStar = ({ filled = true, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.6}
    aria-hidden
    {...props}
  >
    <path d="m12 3 2.7 5.8 6.3.6-4.7 4.2 1.4 6.2L12 17l-5.7 2.8 1.4-6.2L3 9.4l6.3-.6Z" />
  </svg>
);

export const IconGrid = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="4" width="7" height="7" rx="1" />
    <rect x="13" y="4" width="7" height="7" rx="1" />
    <rect x="4" y="13" width="7" height="7" rx="1" />
    <rect x="13" y="13" width="7" height="7" rx="1" />
  </svg>
);

export const IconList = (props) => (
  <svg {...base} {...props}>
    <path d="M8 6h13" />
    <path d="M8 12h13" />
    <path d="M8 18h13" />
    <path d="M3 6h.01" />
    <path d="M3 12h.01" />
    <path d="M3 18h.01" />
  </svg>
);

export const IconImage = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="9" r="1.5" />
    <path d="m4 17.5 5-4.5 4 3.5 3-2.5 4 3.5" />
  </svg>
);

export const IconCamera = (props) => (
  <svg {...base} {...props}>
    <path d="M4 8h3l1.6-2.2A1 1 0 0 1 9.4 5.5h5.2a1 1 0 0 1 .8.3L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);