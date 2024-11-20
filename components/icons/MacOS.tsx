interface MacOSProps {
  width?: string;
}
function MacOS({ width = "70" }: MacOSProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      fill="#000000"
      role="graphics-symbol"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <rect width="512" height="512" rx="15%" fill="currentColor" />
        <path d="M282 170v-4c-52 0-5 34 0 4zm24-18c7-21 43-23 47 3h-10c-3-15-28-16-28 11 0 15 23 24 28 6h10c-6 33-59 21-47-20zm-146-16h10v9c5-12 27-13 31 1 7-15 35-14 35 7v37h-11v-34c0-15-22-15-22 1v33h-11v-35c-2.447-9.36-14.915-11.23-20-3l-2 5v33h-10zm23 259c-47 0-76-33-76-86s29-85 76-85 77 33 77 85-29 86-77 86zm88-205c-29 7-33-30-3-31l14-1v-4c1-12-19-13-22-2h-10a14 14 0 012-7c8-14 41-14 41 8v37h-10v-9a18 18 0 01-12 9zm68 205c-36-2-61-19-63-49h24c23 72 146-5 25-30-19-4-33-13-39-24-38-74 109-96 113-20h-23c-7-49-98-22-65 12 14 14 43 13 64 22 50 23 26 91-36 89zM183 245c-32 0-52 25-52 64s20 64 52 64 53-24 53-64-20-64-53-64z" />
      </g>
    </svg>
  );
}

export default MacOS;
