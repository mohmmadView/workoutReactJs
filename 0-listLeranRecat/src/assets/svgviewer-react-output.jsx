const SVGComponent = ({text , className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 275 93"
    className={`fill-slate-500 stroke-orange-200  ${className}`} 
  >
    <defs>
      <style className="style-fonts">
        {
          '\n      @font-face {\n        font-family: "Virgil";\n        src: url("https://unpkg.com/@excalidraw/excalidraw@0.14.0/dist/excalidraw-assets/Virgil.woff2");\n      }\n      @font-face {\n        font-family: "Cascadia";\n        src: url("https://unpkg.com/@excalidraw/excalidraw@0.14.0/dist/excalidraw-assets/Cascadia.woff2");\n      }\n    '
        }
      </style>
    </defs>
    <g strokeLinecap="round" transform="translate(10 10) rotate(0 127.5 36.5)">
      <path
        d="M16.7 -3.96 L246.34 -0.88 L251.02 6.95 L256.41 16.8 L254.75 65.67 L251.26 69.17 L236.04 70.1 L9.47 69.88 L6.45 65.53 L-1.87 58.84 L1.27 13.94 L0.76 6.61 L21.3 -0.44"
        stroke="none"
        strokeWidth={0}
       
      />
      <path
        d="M18.25 0 M18.25 0 C78.92 -0.27, 143.6 0.13, 236.75 0 M18.25 0 C62.44 -0.38, 109.05 -2.4, 236.75 0 M236.75 0 C252.19 2.48, 254.83 6.73, 255 18.25 M236.75 0 C246.63 -2.52, 252.24 5.84, 255 18.25 M255 18.25 C254.34 26.71, 253.2 30.88, 255 54.75 M255 18.25 C257.27 25.55, 257.35 35.94, 255 54.75 M255 54.75 C256.22 69.51, 246.3 71.2, 236.75 73 M255 54.75 C255.71 69.38, 250.74 72.94, 236.75 73 M236.75 73 C169.2 75.58, 92.24 73.27, 18.25 73 M236.75 73 C177.14 69.95, 121.7 68.79, 18.25 73 M18.25 73 C2.38 70.64, -2.28 65.64, 0 54.75 M18.25 73 C6.61 76.31, 0.78 70.01, 0 54.75 M0 54.75 C-1.13 49.2, 3 37.6, 0 18.25 M0 54.75 C-0.55 39.51, 0.96 27.91, 0 18.25 M0 18.25 C-0.55 3.59, 6.98 1.04, 18.25 0 M0 18.25 C-0.52 2.54, 5.77 0.17, 18.25 0"
       
        strokeWidth={2}
        fill="none"
      />
    </g>
    <g transform="translate(68.5 27.5) rotate(0 69 19)">
      <text
        x={69}
        y={30}
        fontFamily="Helvetica, Segoe UI Emoji"
        fontSize="32px"
        fill="#a61e4d"
        textAnchor="middle"
        style={{
          whiteSpace: "pre",
        }}
        direction="ltr"
      >
        {`${text}`}
      </text>
    </g>
  </svg>
);
export default SVGComponent;
