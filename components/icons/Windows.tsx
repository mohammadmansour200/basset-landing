interface WindowsProps {
  width?: string;
}
function Windows({ width = "70" }: WindowsProps) {
  return (
    <svg
      fill="currentColor"
      width={width}
      viewBox="0 0 32 32"
      role="graphics-symbol"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path d="M14.687 16.75h16.309v14.246l-16.12-2.251zM1.004 16.75h12.184v11.81l-12.184-1.69zM14.687 3.44l16.309-2.436v14.246h-16.309zM1.004 5.314l12.184-1.686v11.81h-12.184z" />
      </g>
    </svg>
  );
}

export default Windows;
