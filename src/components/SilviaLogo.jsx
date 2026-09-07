function SilviaLogo({ className = '', title = 'Silvia', ...props }) {
  return (
    <svg
      viewBox="0 0 720 190"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <g transform="translate(10 8) skewX(-11)">
        <text
          x="26"
          y="116"
          fill="currentColor"
          fontFamily="Michroma, sans-serif"
          fontSize="106"
          letterSpacing="-8"
        >
          SILVIA
        </text>
        <path fill="currentColor" d="M15 140 650 121 706 132 402 165 33 161Z" />
        <path fill="currentColor" d="m43 38 104-11-38 18-73 12Z" />
        <path fill="currentColor" d="m251 122 48-74 17 2-39 78Z" />
        <path fill="currentColor" d="m411 120 35-76 19 5-25 75Z" />
      </g>
    </svg>
  )
}

export default SilviaLogo