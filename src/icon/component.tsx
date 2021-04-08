import React from 'react';


interface SVGProps {
    svgId: string,
    className?: string,
    style?: React.CSSProperties,
    color?: string,
    onClick?: (event: React.MouseEvent) => void,
}

interface IconProps {
    type: string
    className?: string,
    style?: React.CSSProperties,
    color?: string,
    onClick?: (event: React.MouseEvent) => void,
}

const loading = (props: SVGProps) => {
    const chooseCode = (props.color) ? props.color : '#00839E';
    return ([
        <defs key={`1_${props.svgId}`}>
            <radialGradient id='loading-radial' cx='.5' cy='.5' r='.9' fx='1' fy='1'>
                <stop offset="20%" stopColor="white" stopOpacity='0' />
                <stop offset="90%" stopColor={chooseCode} stopOpacity='0.9' />
                <stop offset="95%" stopColor={chooseCode} stopOpacity='0.95' />
                <stop offset="100%" stopColor={chooseCode} />
            </radialGradient>
        </defs>,
        <circle cx="8" cy="8" r="8" fill="none" stroke='url(#loading-radial)' strokeWidth={2} key={`2_${props.svgId}`} />,
    ]);
}

const write = (props: SVGProps) => ([
    <path d='M0 16 H 16' style={{ stroke: props.color }} strokeWidth={1} key={`1_${props.svgId}`} fill='none' />,
    <path d='M4 10 3 13 6 12 14 4 12 2 Z' style={{ stroke: props.color }} strokeWidth={1} key={`2_${props.svgId}`} fill='none' />,
    <path d='M4.5 10.5 5.5 11.5' style={{ stroke: props.color }} strokeWidth={1} key={`3_${props.svgId}`} fill='none' />,
    <path d='M11.5 5.5 10.5 4.5' style={{ stroke: props.color }} strokeWidth={1} key={`4_${props.svgId}`} fill='none' />,
]);

const arrowRight = (props: SVGProps) => ([
    <polyline points='4,0 12,8 4,16' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);

const right = (props: SVGProps) => ([
    <polyline points='6,2 14,8 6,14' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
    <polyline points='2,8 14,8' style={{ stroke: props.color }} strokeWidth={3} key={`2_${props.svgId}`} fill='none' />,
]);

const solidRight = (props: SVGProps) => ([
    <path d='M4 4 12 8 4 12Z' style={{ stroke: props.color, fill: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);

const arrowLeft = (props: SVGProps) => ([
    <polyline points='10,0 2,8 10,16' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);

const forward = (props: SVGProps) => ([
    <path d='M0 2 0 14 8 8Z M8 2 8 14 16 8Z' style={{ fill: props.color, stroke: 'none' }} key={`1_${props.svgId}`} fill='none' />,
]);

const backward = (props: SVGProps) => ([
    <path d='M0 8 8 2 8 14Z M8 8 16 2 16 14Z' style={{ fill: props.color, stroke: 'none' }} key={`1_${props.svgId}`} fill='none' />,
]);

const next = (props: SVGProps) => ([
    <path d='M4 2 4 14 12 8Z' style={{ fill: props.color, stroke: 'none' }} key={`1_${props.svgId}`} fill='none' />,
    <path d='M12 2.5 12 13.5' style={{ fill: 'none', stroke: props.color }} strokeWidth={2} key={`2_${props.svgId}`} fill='none' />,
]);

const previous = (props: SVGProps) => ([
    <path d='M12 2 12 14 4 8Z' style={{ fill: props.color, stroke: 'none' }} key={`1_${props.svgId}`} fill='none' />,
    <path d='M4 2.5 4 13.5' style={{ fill: 'none', stroke: props.color }} strokeWidth={2} key={`2_${props.svgId}`} fill='none' />,
]);

const stop = (props: SVGProps) => ([
    <rect x='2' y='2' width='12' height='12' style={{ stroke: props.color, fill: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);

const left = (props: SVGProps) => ([
    <polyline points='8,2 2,8 8,14' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
    <polyline points='2,8 14,8' style={{ stroke: props.color }} strokeWidth={3} key={`2_${props.svgId}`} fill='none' />,
]);

const solidLeft = (props: SVGProps) => ([
    <path d='M12 4 4 8 12 12Z' style={{ stroke: props.color, fill: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);


const zoomOut = (props: SVGProps) => ([
    <circle cx="7" cy="7" r="7" fill="none" style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} />,
    <path d='M3.3 7 10.7 7' style={{ stroke: props.color }} strokeWidth={2} key={`2_${props.svgId}`} fill='none' />,
    <path d='M11.95 11.95 16 16' style={{ stroke: props.color }} strokeWidth={2} key={`3_${props.svgId}`} fill='none' />,
]);

const zoomIn = (props: SVGProps) => ([
    <circle cx="7" cy="7" r="7" fill="none" style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} />,
    <path d='M3.3 7 10.7 7 M7 3.3 7 10.7' style={{ stroke: props.color }} strokeWidth={2} key={`2_${props.svgId}`} fill='none' />,
    <path d='M11.95 11.95 16 16' style={{ stroke: props.color }} strokeWidth={2} key={`3_${props.svgId}`} fill='none' />,
]);

const minus = (props: SVGProps) => ([
    <path d='M4 8 12 8' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);

const plus = (props: SVGProps) => ([
    <path d='M4 8 12 8 M8 4 8 12' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);

const cancel = (props: SVGProps) => ([
    <path d='M1 1 15 15 M15 1 1 15' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);

const circlePlus = (props: SVGProps) => ([
    <circle cx="8" cy="8" r="8" style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill="none" />,
    <path d='M0 8 16 8 M8 0 8 16' style={{ stroke: props.color }} strokeWidth={3} key={`2_${props.svgId}`} fill='none' />,
]);

const squarePlus = (props: SVGProps) => ([
    <rect width='16' height='16' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill="none" />,
    <path d='M5 8 11 8 M8 5 8 11' style={{ stroke: props.color }} strokeWidth={3} key={`2_${props.svgId}`} fill='none' />,
]);

const squareMinus = (props: SVGProps) => ([
    <rect width='16' height='16' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill="none" />,
    <path d='M5 8 11 8' style={{ stroke: props.color }} strokeWidth={3} key={`2_${props.svgId}`} fill='none' />,
]);

const trashcan = (props: SVGProps) => ([
    <path d='M2 3 14 3' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill='none' />,
    <path d='M6 7 6.1 12' style={{ stroke: props.color }} strokeWidth={1} key={`2_${props.svgId}`} fill='none' />,
    <path d='M3.5 3 4 16 12 16 12.5 3' style={{ stroke: props.color }} strokeWidth={2} key={`3_${props.svgId}`} fill='none' />,
    <path d='M6 3 6.1 1 9.9 1 10 3' style={{ stroke: props.color }} strokeWidth={2} key={`4_${props.svgId}`} fill='none' />,
]);

const edit = (props: SVGProps) => ([
    <path d='M8 0 16 0 M0 16 16 16 M0 8 0 16 M 16 0 16 16' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill='none' />,
    <path d='M0 0 11 11 M5 11 11 11 M11 5 11 11' style={{ stroke: props.color }} strokeWidth={2} key={`2_${props.svgId}`} fill='none' />,
]);

const document = (props: SVGProps) => ([
    <path d='M2 0 10 0 14 4 14 16 2 16 Z' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill='none' />,
    <path d='M9 1 9 5 13 5' style={{ stroke: props.color }} strokeWidth={2} key={`2_${props.svgId}`} fill='none' />,
]);

const save = (props: SVGProps) => ([
    <path d='M0 0 12 0 16 4 16 16 0 16 Z' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill='none' />,
    <path d='M5 0 5 4 11 4 11 0' style={{ stroke: props.color }} strokeWidth={2} key={`2_${props.svgId}`} fill='none' />,
    <path d='M4 16 4 9 12 9 12 16' style={{ stroke: props.color }} strokeWidth={2} key={`3_${props.svgId}`} fill='none' />,
]);

const calendar = (props: SVGProps) => ([
    <rect x='0' y='2' width='16' height='14' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill='none' />,
    <path d='M4 0 4 4' style={{ stroke: props.color }} strokeWidth={2} key={`2_${props.svgId}`} fill='none' />,
    <path d='M12 0 12 4' style={{ stroke: props.color }} strokeWidth={2} key={`3_${props.svgId}`} fill='none' />,
    <path d='M0 6.667 H 16' style={{ stroke: props.color }} strokeWidth={1} key={`4_${props.svgId}`} fill='none' />,
    <path d='M0 9.334 H 16' style={{ stroke: props.color }} strokeWidth={1} key={`5_${props.svgId}`} fill='none' />,
    <path d='M0 12.663 H 16' style={{ stroke: props.color }} strokeWidth={1} key={`6_${props.svgId}`} fill='none' />,
    <path d='M4 6.667 V 14' style={{ stroke: props.color }} strokeWidth={1} key={`7_${props.svgId}`} fill='none' />,
    <path d='M8 6.667 V 14' style={{ stroke: props.color }} strokeWidth={1} key={`8_${props.svgId}`} fill='none' />,
    <path d='M12 6.667 V 14' style={{ stroke: props.color }} strokeWidth={1} key={`9_${props.svgId}`} fill='none' />,
]);

const scissors = (props: SVGProps) => ([
    <path d='M6 0 10 16 8 16 Z' style={{ stroke: props.color }} strokeWidth={2} fill={props.color} key={`1_${props.svgId}`} />,
    <path d='M0 6 16 10 16 8 Z' style={{ stroke: props.color }} strokeWidth={2} fill={props.color} key={`2_${props.svgId}`} />,
    <path d='M7.36 8 7.6 16 6.5 15 Z' style={{ stroke: props.color }} strokeWidth={2} fill={props.color} key={`3_${props.svgId}`} />,
    <path d='M8 7.36 16 7.6 15 6.5 Z' style={{ stroke: props.color }} strokeWidth={2} fill={props.color} key={`4_${props.svgId}`} />,
    <path d='M7.36 7.36 10 16 6.5 15 Z' style={{ stroke: props.color }} fill='white' key={`5_${props.svgId}`} />,
    <path d='M7.36 7.36 16 10 15 6.5 Z' style={{ stroke: props.color }} fill='white' key={`6_${props.svgId}`} />,
    <circle cx="7.5" cy="7.5" r="0.1" key={`7_${props.svgId}`} fill="white" />,
]);

const move = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M0 8 16 8 M2 5 0 8 2 11 M14 5 16 8 14 11' fill='none' />,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M8 0 8 16 M5 2 8 0 11 2 M5 14 8 16 11 14' fill='none' />,
]);

const exit = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M11 5 11 1 1 1 1 14 11 14 11 11' fill='none' />,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M10 8 15 8 M 13.5 6 15 8 13.5 10' fill='none' />,
    <path key={`3_${props.svgId}`} style={{ stroke: props.color, fill: props.color }} strokeWidth={1} d='M1 1 7 3 7 16 1 14' />,
]);

const _import = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M2 8 12 8 M8 4 12 8 8 12' fill='none' />,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M0 4 0 0 16 0 16 16 0 16 0 12' fill='none' />,
]);

const download = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M8 2 8 12 M4 8 8 12 12 8' fill='none' />,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M1 12 1 16 15 16 15 12' fill='none' />,
]);

const upload = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M8 2 8 12 M4 6 8 2 12 6' fill='none' />,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M1 12 1 16 15 16 15 12' fill='none' />,
]);

const home = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M1 7.5 8 2 15 7.5' fill='none' />,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color, fill: props.color }} strokeWidth={2} d='M4 9 4 15 12 15 12 9 8 6Z'/>,
    <path key={`3_${props.svgId}`} style={{ stroke: 'white', fill: 'white' }} strokeWidth={2} d='M7 14 9 14 9 12 7 12Z'/>,
    <path key={`4_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M12 2 12 4.2' fill='none'/>,
]);

const pushpin = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color, fill: props.color }} strokeWidth={2} d='M10 2 14 6 C10 8, 10 8, 10 13Z M10 13 3 6 C8 6, 8 6, 10 2Z' />,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M12 4 2 14'/>,
]);

const forbid = (props: SVGProps) => ([
    <circle key={`1_${props.svgId}`} cx='8' cy='8' r='7' style={{ stroke: props.color }} strokeWidth={2} fill='none' />,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M12 4 4 12'/>,
]);

const clock = (props: SVGProps) => ([
    <path transform="scale(0.038) translate(-45 -60)" fill={props.color} key={`1_${props.svgId}`} d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933 C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8 s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z" />,
    <path transform="scale(0.038) translate(-45 -60)" fill={props.color} key={`2_${props.svgId}`} d="M238.933,51.2c-9.426,0-17.067,7.641-17.067,17.067v170.667c0,9.426,7.641,17.067,17.067,17.067S256,248.359,256,238.933 V68.267C256,58.841,248.359,51.2,238.933,51.2z" />,
    <path transform="scale(0.038) translate(-45 -60)" fill={props.color} key={`3_${props.svgId}`} d="M409.6,221.867h-17.067c-9.426,0-17.067,7.641-17.067,17.067S383.108,256,392.533,256H409.6 c9.426,0,17.067-7.641,17.067-17.067S419.026,221.867,409.6,221.867z" />,
    <path transform="scale(0.038) translate(-45 -60)" fill={props.color} key={`4_${props.svgId}`} d="M238.933,375.467c-9.426,0-17.067,7.641-17.067,17.067V409.6c0,9.426,7.641,17.067,17.067,17.067S256,419.026,256,409.6 v-17.067C256,383.108,248.359,375.467,238.933,375.467z" />,
    <path transform="scale(0.038) translate(-45 -60)" fill={props.color} key={`5_${props.svgId}`} d="M85.333,221.867H68.267c-9.426,0-17.067,7.641-17.067,17.067S58.841,256,68.267,256h17.067 c9.426,0,17.067-7.641,17.067-17.067S94.759,221.867,85.333,221.867z" />,
]);

// const ledGreen = (props: SVGProps) => ([
//     <defs key={`1_${props.svgId}`}>
//         <linearGradient id="fc-led-green-lg" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
//             <stop offset="0.03" stopColor="#00ff5d" />
//             <stop offset="0.509" stopColor="#00de00" />
//             <stop offset="0.524" stopColor="#00e00a" />
//             <stop offset="0.621" stopColor="#00e948" />
//             <stop offset="0.715" stopColor="#00f17a" />
//             <stop offset="0.801" stopColor="#00f7a2" />
//             <stop offset="0.881" stopColor="#00fbbf" />
//             <stop offset="0.949" stopColor="#00fed0" />
//             <stop offset="1" stopColor="#00ffd6" />
//         </linearGradient>
//         <filter id="Green_light" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse">
//             <feOffset in="SourceAlpha" />
//             <feGaussianBlur stdDeviation="4" result="blur" />
//             <feFlood floodColor="#36f508" />
//             <feComposite operator="in" in2="blur" />
//             <feComposite in="SourceGraphic" />
//         </filter>
//     </defs>,
//     <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Green_light)" key={`2_${props.svgId}`}>
//         <path id="Green_light-2" data-name="Green light" d="M8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0Z" fill="url(#fc-led-green-lg)" />
//     </g>
// ]);

// const ledYellow = (props: SVGProps) => ([
//     <defs key={`1_${props.svgId}`}>
//         <linearGradient id="fc-led-yellow-lg" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
//             <stop offset="0.03" stopColor="#ff0" />
//             <stop offset="0.509" stopColor="#ffde00" />
//             <stop offset="0.607" stopColor="#ffe800" />
//             <stop offset="0.833" stopColor="#fff900" />
//             <stop offset="1" stopColor="#ff0" />
//         </linearGradient>
//         <filter id="Yellow_light" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
//             <feOffset in="SourceAlpha" />
//             <feGaussianBlur stdDeviation="5" result="blur" />
//             <feFlood floodColor="#ded009" />
//             <feComposite operator="in" in2="blur" />
//             <feComposite in="SourceGraphic" />
//         </filter>
//     </defs>,
//     <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Yellow_light)" key={`2_${props.svgId}`}>
//         <ellipse id="Yellow_light-2" data-name="Yellow light" cx="8" cy="8" rx="8" ry="8" fill="url(#fc-led-yellow-lg)" />
//     </g>
// ]);

// const ledRed = (props: SVGProps) => ([
//     <defs key={`1_${props.svgId}`}>
//         <linearGradient id="fc-led-red-lg" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
//             <stop offset="0.03" stopColor="#ff5d5d" />
//             <stop offset="0.509" stopColor="red" />
//             <stop offset="0.51" stopColor="#ff1313" />
//             <stop offset="0.512" stopColor="#ff3030" />
//             <stop offset="0.514" stopColor="#ff4141" />
//             <stop offset="0.515" stopColor="#ff4747" />
//             <stop offset="0.774" stopColor="#ff9292" />
//             <stop offset="1" stopColor="#ffd6d6" />
//         </linearGradient>
//         <filter id="Red_light" x="-12" y="-12" width="44" height="44" filterUnits="userSpaceOnUse">
//             <feOffset in="SourceAlpha" />
//             <feGaussianBlur stdDeviation="4" result="blur" />
//             <feFlood floodColor="#f60808" />
//             <feComposite operator="in" in2="blur" />
//             <feComposite in="SourceGraphic" />
//         </filter>
//     </defs>,
//     <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Red_light)" key={`2_${props.svgId}`}>
//         <path id="Red_light-2" data-name="Red light" d="M8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0Z" fill="url(#fc-led-red-lg)" />
//     </g>
// ]);

// const ledGray = (props: SVGProps) => ([
//     <defs key={`1_${props.svgId}`}>
//         <linearGradient id="fc-led-gray-lg" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
//             <stop offset="0" stopColor="#d4d4d4" />
//             <stop offset="0.36" stopColor="#7e7e7e" stopOpacity="0.98" />
//             <stop offset="1" stopColor="#e2e2e2" />
//         </linearGradient>
//         <filter id="Gray_light" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse">
//             <feOffset dy="3" in="SourceAlpha" />
//             <feGaussianBlur stdDeviation="3" result="blur" />
//             <feFlood floodOpacity="0.161" />
//             <feComposite operator="in" in2="blur" />
//             <feComposite in="SourceGraphic" />
//         </filter>
//     </defs>,
//     <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Gray_light)" key={`2_${props.svgId}`}>
//         <ellipse id="Gray_light-2" data-name="Gray light" cx="8" cy="8" rx="8" ry="8" fill="url(#fc-led-gray-lg)" />
//     </g>
// ]);

const ledGreen = (props: SVGProps) => ([
    <radialGradient id='fc-led-green-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#82ff61" />
        <stop offset="50%" stopColor="#75ff50" />
        <stop offset="90%" stopColor='#5bff2f' />
        {/* <stop offset="20%" stopColor="#abff7e" />
        <stop offset="45%" stopColor="#84ff43" />
        <stop offset="90%" stopColor='#57dd10' /> */}
    </radialGradient>,
    <filter id='led-green-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#82ff61' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='10' cy='8' r='9' stroke='none' key={`3_${props.svgId}`} filter='url(#led-green-blur)' />,
    <circle cx='10' cy='8' r='8' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-green-light)' />,
]);

const ledYellow = (props: SVGProps) => ([
    <radialGradient id='fc-led-yellow-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#fad97f">
            {/* <animate dur='1.5s' attributeName='stopColor' values='#fbee8e; #e9d22a; #fbee8e' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="40%" stopColor="#f8ce5c">
            {/* <animate dur='1.5s' attributeName='stopColor' values='#fefc56; #e9d22a; #fefc56' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="90%" stopColor='#ffc629' />
    </radialGradient>,
    <filter id='led-yellow-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#fad97f' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='10' cy='8' r='8' stroke='none' key={`3_${props.svgId}`} filter='url(#led-yellow-blur)' />,
    <circle cx='10' cy='8' r='7' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-yellow-light)' />,
]);

const ledRed = (props: SVGProps) => ([
    <radialGradient id='fc-led-red-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#f1719a">
            {/* <animate dur='0.75s' attributeName='stopColor' values='#ff8383; #e01919; #ff8383' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="40%" stopColor="#ff6193">
            {/* <animate dur='0.75s' attributeName='stopColor' values='#ff3f3f; #e01919; #ff3f3f' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="90%" stopColor='#b92454' />
    </radialGradient>,
    <filter id='led-red-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#f1719a' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='10' cy='8' r='8' stroke='none' key={`3_${props.svgId}`} filter='url(#led-red-blur)' />,
    <circle cx='10' cy='8' r='7' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-red-light)' />,
]);

const ledBlue = (props: SVGProps) => ([
    <radialGradient id='fc-led-blue-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#7cf1ff">
            {/* <animate dur='0.75s' attributeName='stopColor' values='#ff8383; #e01919; #ff8383' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="40%" stopColor="#61fdff">
            {/* <animate dur='0.75s' attributeName='stopColor' values='#ff3f3f; #e01919; #ff3f3f' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="90%" stopColor='#24b9a5' />
    </radialGradient>,
    <filter id='led-blue-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#71e3f1' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='10' cy='8' r='8' stroke='none' key={`3_${props.svgId}`} filter='url(#led-blue-blur)' />,
    <circle cx='10' cy='8' r='7' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-blue-light)' />,
]);

const ledGray = (props: SVGProps) => ([
    <radialGradient id='fc-led-gray-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#9b9b9b" />
        <stop offset="60%" stopColor="#8c8c8c" />
        <stop offset="90%" stopColor='#6c6c6c' />
    </radialGradient>,
    <filter id='led-gray-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#9b9b9b' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='10' cy='8' r='8' stroke='none' key={`3_${props.svgId}`} filter='url(#led-gray-blur)' />,
    <circle cx='10' cy='8' r='7' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-gray-light)' />,
]);

const warning = (props: SVGProps) => ([
    <path transform='scale(0.73)' d='M12.5 2 22.026 20 2.974 20 Z' stroke='#ff9b02' strokeWidth='3' strokeLinejoin='round' fill='#ff9b02' key={`1_${props.svgId}`} />,
    <path transform='scale(0.73)' d='M11.1 7 13.9 7 12.5 15 Z' stroke='none' fill='white' key={`2_${props.svgId}`} />,
    <circle transform='scale(0.73)' cx='12.5' cy='17.4' r='1.4' stroke='none' fill='white' key={`3_${props.svgId}`} />,
    <circle transform='scale(0.73)' cx='12.5' cy='7' r='1.4' stroke='none' fill='white' key={`4_${props.svgId}`} />,
]);

const cypDevice = (props: SVGProps) => ([
    <path d='M0 4 16 4 16 12 0 12 Z' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill='none' />,
    <path d='M15 5 12 11' style={{ stroke: props.color }} strokeWidth={1} key={`2_${props.svgId}`} fill='none' />,
    <path d='M12 5 9 11' style={{ stroke: props.color }} strokeWidth={1} key={`3_${props.svgId}`} fill='none' />,
    <path d='M9 5 6 11' style={{ stroke: props.color }} strokeWidth={1} key={`4_${props.svgId}`} fill='none' />,
]);

const cyplogo = (props: SVGProps) => ([
    <path style={{ fill: props.color, stroke: props.color }} d="M13.837094140487364,3.767714874709207 l-0.8821174165903569,-0.5227334066005692 c-0.399329924879161,-0.23664714554828062 -0.8911482727027799,-0.23664714554828062 -1.290478197581939,0 L6.460337937852195,6.329172496942728 c-0.399329924879161,0.23664714554828062 -0.6452390987909704,0.6739275981958015 -0.6452390987909704,1.1472218892923611 v1.0364100786799286 c0,0.47862178199138955 0.2515145328781407,0.9199511277189786 0.6579030579371249,1.15468037654512 l1.5256956682801912,0.8806342449151449 l-0.0010380294382094143,-1.7929137857455697 c-0.00031140883146282475,-0.47393359000394014 0.24622058274327238,-0.9119598913767358 0.6462771282291797,-1.1485004871071194 l3.539057566631164,-2.0929580729423085 c0.05626119555095024,-0.03324354318372969 0.12643198557390625,0.008417435613829004 0.12643198557390625,0.0750110717991849 v1.638416549795544 c0,0.47308119146076777 -0.24580537096798888,0.9102550942903906 -0.6449276899595073,1.1469022398386712 L7.998697565278539,10.548012536557389 v4.979392639760369 c0,0.06670018600325262 0.07027459296677742,0.10836116480081084 0.12653578851772745,0.0750110717991849 l1.1452578791764425,-0.6787223400011468 c0.399329924879161,-0.23664714554828062 0.6453429017347906,-0.6738210483779042 0.6453429017347906,-1.1472218892923611 l-0.0001038029438209416,-1.8044211660783989 l3.9214676116675085,-2.3239580781420703 c0.39922612193533935,-0.23664714554828062 0.6452390987909704,-0.6738210483779042 0.6452390987909704,-1.1472218892923611 v-3.586147220944829 C14.482333239278338,4.441642472905005 14.236424065366528,4.0043620202574886 13.837094140487364,3.767714874709207 z" key={`1_${props.svgId}`} />,
    <path style={{ fill: props.color, stroke: props.color }} d="M3.676446787518377,9.790230231676986 v-3.5921140107470366 c0,-0.4732942910965607 0.24601297685563064,-0.9105747437440805 0.6452390987909704,-1.1472218892923611 l5.713729239679878,-3.386153212752969 c0.05626119555095024,-0.033350093001626314 0.05626119555095024,-0.11667205059674352 0,-0.1499155937804732 l-1.391582264863536,-0.824695590519446 c-0.399329924879161,-0.23664714554828062 -0.8911482727027799,-0.23664714554828062 -1.290478197581939,0 l-5.19315747641786,3.0775849401245052 c-0.399329924879161,0.23664714554828062 -0.6452390987909704,0.6739275981958015 -0.6452390987909704,1.1472218892923611 v6.155382979884802 c0,0.4731877412786646 0.24601297685563064,0.910468193926184 0.6452390987909704,1.1471153394744642 l3.528158257529965,2.0910401762201705 c0.05626119555095024,0.033350093001626314 0.12663959146154832,-0.008417435613829004 0.12653578851772745,-0.07511762161708156 l-0.0028026794831654206,-2.3630618613101113 c0,-0.03079289737210857 -0.016089456292245927,-0.05934824856838922 -0.04224779813512318,-0.07479797216339183 l-1.448051066302127,-0.8579391337031752 C3.9224597643740085,10.700911525238965 3.676446787518377,10.263417972955654 3.676446787518377,9.790230231676986 z" key={`2_${props.svgId}`} />
]);

const revert = (props: SVGProps) => ([
    <path style={{ fill: 'none', stroke: props.color }} strokeWidth={3} d="M8 14 A 6 6 45 1 0 2 8" key={`1_${props.svgId}`} />,
    <path style={{ fill: props.color, stroke: props.color }} strokeWidth={3} d="M0 8 4 8 2 11Z" key={`2_${props.svgId}`} />,
]);

const dashboard = (props: SVGProps) => ([
    <g key={`1_${props.svgId}`} transform="translate(-213.752 -80.537)">
        <path style={{ fill: props.color }} d="M214.4,96.282l.248.255H227.4l.249-.255a9.27,9.27,0,1,0-13.253,0Zm6.626-14.052a7.573,7.573,0,0,1,5.654,12.615H215.367a7.573,7.573,0,0,1,5.654-12.615Z" transform="translate(0)" />
        <path style={{ fill: props.color }} d="M221.8,95.058a1.8,1.8,0,0,0,1.739-2.355l2.887-3.11-1.339-1.243-2.882,3.1a1.87,1.87,0,0,0-.4-.048,1.826,1.826,0,1,0,0,3.652Z" transform="translate(-0.886 -0.934)" />
        <path style={{ fill: props.color }} d="M221.8,85.015a.9.9,0,1,0-.648-.265A.963.963,0,0,0,221.8,85.015Z" transform="translate(-0.734 -0.217)" />
        <path style={{ fill: props.color }} d="M218.6,85.873a.947.947,0,0,0,.649-.264.917.917,0,0,0-1.3-1.3.942.942,0,0,0-.265.648.923.923,0,0,0,.265.639A.912.912,0,0,0,218.6,85.873Z" transform="translate(-0.477 -0.287)" />
        <path style={{ fill: props.color }} d="M216.262,88.21a.917.917,0,0,0,.913-.913.916.916,0,1,0-.913.913Z" transform="translate(-0.289 -0.478)" />
        <path style={{ fill: props.color }} d="M214.756,91.141a.964.964,0,0,0,.649.265.946.946,0,0,0,.648-.265.914.914,0,1,0-1.3,0Z" transform="translate(0 -0.739)" />
        <path style={{ fill: props.color }} d="M215.615,93.041a.912.912,0,1,0,1.3,0A.959.959,0,0,0,215.615,93.041Z" transform="translate(-0.289 -1)" />
        <path style={{ fill: props.color }} d="M226.69,93.041a.894.894,0,0,0-.273.648.9.9,0,0,0,.913.913.924.924,0,0,0,.647-.275.878.878,0,0,0,.266-.638.964.964,0,0,0-.266-.648A.943.943,0,0,0,226.69,93.041Z" transform="translate(-1.179 -1)" />
        <path style={{ fill: props.color }} d="M227.539,89.845a.925.925,0,0,0,0,1.3.946.946,0,0,0,.648.265.932.932,0,0,0,.649-.274.922.922,0,0,0,.264-.639.913.913,0,0,0-1.561-.648Z" transform="translate(-1.461 -0.739)" />
        <path style={{ fill: props.color }} d="M227.33,88.21a.958.958,0,0,0,.647-.264.924.924,0,0,0,0-1.3.917.917,0,1,0-.647,1.561Z" transform="translate(-1.179 -0.478)" />
        <path style={{ fill: props.color }} d="M224.992,85.873a.919.919,0,0,0,.638-.264.931.931,0,0,0,.275-.649.942.942,0,0,0-.265-.648.956.956,0,0,0-1.3,0,.928.928,0,0,0,0,1.3A.963.963,0,0,0,224.992,85.873Z" transform="translate(-0.991 -0.287)" />
    </g>,
]);

const grid = (props: SVGProps) => ([
    <path id="ic_view_quilt_24px" d="M10.588,19.275h5.49V12.686h-5.49ZM4,19.275H9.49V5H4Zm13.177,0h5.49V12.686h-5.49ZM10.588,5v6.588H22.667V5Z" transform="translate(-4 -5)" fill={props.color} stroke='transparent' key={`1_${props.svgId}`} />
]);

const device = (props: SVGProps) => ([
    <path id="Device_icon_blue" d="M20,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V14A1,1,0,0,0,20,13ZM7,19a2,2,0,1,1,2-2A2.006,2.006,0,0,1,7,19ZM20,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM7,9A2,2,0,1,1,9,7,2.006,2.006,0,0,1,7,9Z" transform="scale(0.9) translate(-5 -3)" fill={props.color} stroke='transparent' key={`1_${props.svgId}`} />
]);

const update = (props: SVGProps) => ([
    <path d="M412.907,214.08C398.4,140.693,333.653,85.333,256,85.333c-61.653,0-115.093,34.987-141.867,86.08 
        C50.027,178.347,0,232.64,0,298.667c0,70.72,57.28,128,128,128h277.333C464.213,426.667,512,378.88,512,320 
        C512,263.68,468.16,218.027,412.907,214.08z M298.667,277.333v85.333h-85.333v-85.333h-64L256,170.667l106.667,106.667H298.667z"
        transform="scale(0.038) translate(-45 -60)" style={{ fill: props.color, stroke: props.color }} key={`1_${props.svgId}`} />
]);

const setting = (props: SVGProps) => ([
    <path id="ic_settings_24px" d="M19.911,13.288a8.012,8.012,0,0,0,.072-1.007,8.012,8.012,0,0,0-.072-1.007l2.169-1.7a.519.519,0,0,0,.123-.658L20.148,5.362a.517.517,0,0,0-.627-.226l-2.56,1.028a7.511,7.511,0,0,0-1.737-1.007l-.391-2.724a.5.5,0,0,0-.5-.432H10.217a.5.5,0,0,0-.5.432L9.322,5.156A7.9,7.9,0,0,0,7.585,6.164L5.025,5.136a.5.5,0,0,0-.627.226L2.342,8.919a.507.507,0,0,0,.123.658l2.169,1.7a8.153,8.153,0,0,0-.072,1.007,8.153,8.153,0,0,0,.072,1.007l-2.169,1.7a.519.519,0,0,0-.123.658L4.4,19.2a.517.517,0,0,0,.627.226L7.585,18.4A7.511,7.511,0,0,0,9.322,19.4l.391,2.724a.5.5,0,0,0,.5.432h4.112a.5.5,0,0,0,.5-.432l.391-2.724A7.9,7.9,0,0,0,16.961,18.4l2.56,1.028a.5.5,0,0,0,.627-.226L22.2,15.642a.519.519,0,0,0-.123-.658Zm-7.638,2.591a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,12.273,15.879Z" transform="translate(-4 -3) scale(0.88)" fill={props.color} key={`1_${props.svgId}`} stroke='transparent' />
]);

const scene = (props: SVGProps) => ([
    <path transform="scale(0.033) translate(-35 40)" d="m149.332031 106.667969c0 23.5625-19.101562 42.664062-42.664062 42.664062-23.566407 0-42.667969-19.101562-42.667969-42.664062 0-23.566407 19.101562-42.667969 42.667969-42.667969 23.5625 0 42.664062 19.101562 42.664062 42.667969zm0 0" fill={props.color} key={`1_${props.svgId}`} />,
    <path transform="scale(0.033) translate(-35 40)" d="m448 0h-384c-35.285156 0-64 28.714844-64 64v256c0 1.195312.296875 2.324219.363281 3.519531-.300781 2.558594-.171875 5.140625.765625 7.574219 5.269532 29.996094 31.382813 52.90625 62.871094 52.90625h384c35.285156 0 64-28.714844 64-64v-256c0-35.285156-28.714844-64-64-64zm-384 42.667969h384c11.753906 0 21.332031 9.578125 21.332031 21.332031v169.367188l-112.210937-112.214844c-14.59375-14.59375-38.335938-14.59375-52.90625 0l-101.546875 101.546875-26.882813-26.878907c-14.589844-14.59375-38.335937-14.59375-52.90625 0l-80.210937 80.210938v-212.03125c0-11.753906 9.578125-21.332031 21.332031-21.332031zm0 0" fill={props.color} key={`2_${props.svgId}`} />
]);

const volumn = (props: SVGProps) => ([
    <path d="M206.896,0.874c-3.958-1.688-8.458-0.885-11.563,2.042L85.479,106.665H10.667C4.771,106.665,0,111.436,0,117.332v149.333 c0,5.896,4.771,10.667,10.667,10.667h74.813l109.854,103.75c2.021,1.917,4.667,2.917,7.333,2.917 c1.417,0,2.854-0.281,4.229-0.875c3.896-1.677,6.438-5.531,6.438-9.792V10.665C213.333,6.405,210.792,2.551,206.896,0.874z" transform="scale(0.038) translate(40 0)" fill={props.color} key={`1_${props.svgId}`} />,
    <path d="M262.452,132.214l-15.199,15.199c-3.505,3.505-4.44,9.168-1.513,13.168c6.449,8.819,10.26,19.682,10.26,31.418 c0,11.736-3.811,22.599-10.26,31.417c-2.927,4-1.992,9.664,1.513,13.169l15.199,15.198c4.655,4.656,12.259,3.939,16.28-1.276 c12.495-16.208,19.935-36.505,19.935-58.508c0-22.004-7.44-42.301-19.935-58.509 C274.711,128.275,267.107,127.557,262.452,132.214z" transform="scale(0.038) translate(40 0)" fill={props.color} key={`2_${props.svgId}`} />,
    <path d="M338.423,71.905c-4.01-4.53-11.151-4.512-15.428-0.234l-15.092,15.092c-4.043,4.042-4.005,10.395-0.27,14.721 c20.991,24.307,33.701,55.954,33.701,90.514c0,34.56-12.71,66.207-33.701,90.516c-3.736,4.326-3.772,10.677,0.27,14.719 l15.092,15.092c4.277,4.279,11.418,4.296,15.43-0.233C366.771,280.085,384,238.016,384,191.999 C384,145.981,366.771,103.912,338.423,71.905z" transform="scale(0.038) translate(40 0)" fill={props.color} key={`3_${props.svgId}`} />,
]);

const idea = (props: SVGProps) => ([
    <path d="M374.031,241.75c-6.671-54.43-49.629-97.28-104.076-103.813c-4.688-0.535-9.402-0.803-14.121-0.804 c-48.118,0.074-91.444,29.154-109.742,73.657c-18.298,44.503-7.957,95.649,26.193,129.548c18.16,17.391,28.56,41.357,28.857,66.5 v13.733h109.714v-13.804c0.083-24.667,10.118-48.256,27.831-65.424c26.754-25.813,39.84-62.686,35.343-99.589V241.75z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`1_${props.svgId}`} />,
    <path d="M256,512c11.62-0.013,21.975-7.335,25.862-18.286h-51.723C234.025,504.665,244.38,511.987,256,512z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`2_${props.svgId}`} />,
    <path d="M210.286,466.286c0.007,5.047,4.096,9.136,9.143,9.143h73.143c5.047-0.007,9.136-4.096,9.143-9.143v-27.429h-91.429 V466.286z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`3_${props.svgId}`} />,
    <path d="M256,82.286c10.099,0,18.286-8.187,18.286-18.286V18.286C274.286,8.187,266.099,0,256,0s-18.286,8.187-18.286,18.286V64 C237.714,74.099,245.901,82.286,256,82.286z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`4_${props.svgId}`} />,
    <path d="M101.679,127.54c7.236,6.911,18.626,6.911,25.862,0c3.43-3.429,5.357-8.081,5.357-12.931 c0-4.85-1.927-9.502-5.357-12.931L95.214,69.357C91.786,65.927,87.135,64,82.286,64s-9.5,1.927-12.929,5.357 C65.927,72.785,64,77.436,64,82.286s1.927,9.5,5.357,12.929L101.679,127.54z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`5_${props.svgId}`} />,
    <path d="M82.286,256c0-10.099-8.187-18.286-18.286-18.286H18.286C8.191,237.724,0.01,245.905,0,256 c0.01,10.095,8.191,18.276,18.286,18.286H64C74.099,274.286,82.286,266.099,82.286,256z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`6_${props.svgId}`} />,
    <path d="M119.356,379.699c-6.32-1.689-13.06,0.126-17.677,4.761l-32.321,32.326c-3.43,3.428-5.357,8.079-5.357,12.929 s1.927,9.5,5.357,12.929c7.234,6.911,18.623,6.911,25.857,0l32.326-32.321c4.634-4.617,6.45-11.357,4.761-17.677 S125.676,381.388,119.356,379.699z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`7_${props.svgId}`} />,
    <path d="M410.321,384.46c-4.617-4.634-11.357-6.45-17.677-4.761s-11.256,6.625-12.945,12.945s0.126,13.06,4.761,17.677 l32.326,32.321c7.234,6.911,18.623,6.911,25.857,0c3.43-3.428,5.357-8.079,5.357-12.929s-1.927-9.5-5.357-12.929L410.321,384.46z " transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`8_${props.svgId}`} />,
    <path d="M493.714,237.714H448c-10.099,0-18.286,8.187-18.286,18.286s8.187,18.286,18.286,18.286h45.714 c10.099,0,18.286-8.187,18.286-18.286S503.813,237.714,493.714,237.714z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`9_${props.svgId}`} />,
    <path d="M410.321,127.54l32.321-32.326c4.619-4.619,6.423-11.351,4.732-17.661c-1.691-6.31-6.619-11.238-12.929-12.929 c-6.31-1.691-13.042,0.113-17.661,4.732l-32.326,32.321c-3.43,3.429-5.357,8.081-5.357,12.931c0,4.85,1.927,9.502,5.357,12.931 C391.695,134.451,403.086,134.451,410.321,127.54z" transform="scale(0.036) translate(-45 -60)" fill={props.color} key={`10_${props.svgId}`} />,
]);

const scenario = (props: SVGProps) => ([
    <g id="Group_1425" data-name="Group 1425" transform="translate(-844 -701.023) scale(1.1)" key={`1_${props.svgId}`} >
        <g id="Group_2" data-name="Group 2" transform="translate(765 632.023) scale(1.1)">
            <path id="Subtraction_1" data-name="Subtraction 1" d="M5.415,11.508H2.031V6.092H0L6.77,0l6.769,6.092H11.508v5.415H8.123V7.446H5.415v4.061ZM6.77,2.769A1.539,1.539,0,1,0,8.308,4.308,1.54,1.54,0,0,0,6.77,2.769Z" transform="translate(0 4.292) scale(1.1)" fill={props.color} />            
            <g id="Ellipse_34" data-name="Ellipse 34" transform="translate(5.334 0) scale(1.1)" fill="none" stroke={props.color} strokeWidth="1">
                <circle cx="2" cy="2" r="2" stroke="none" />
                <circle cx="2" cy="2" r="1.5" fill="none" />
            </g>
            <g id="Ellipse_35" data-name="Ellipse 35" transform="translate(12 5.333) scale(1.1)" fill="none" stroke={props.color} strokeWidth="1">
                <circle cx="2" cy="2" r="2" stroke="none" />
                <circle cx="2" cy="2" r="1.5" fill="none" />
            </g>
            <path id="Path_9029" data-name="Path 9029" d="M771.572,635.938l-4.884,4.577,2.538,2.192" transform="translate(-841.649 -697.53) scale(1.1)" fill="none" stroke={props.color} strokeWidth="1" />
            <path id="Path_9030" data-name="Path 9030" d="M778.875,636.438l4.385,3.923" transform="translate(-848.336 -697.722) scale(1.1)" fill="none" stroke={props.color} strokeWidth="1" />
        </g>
    </g>
]);
const hexNo = (props: SVGProps) => ([
    <g transform="translate(-116.439 -608.381)" key={`1_${props.svgId}`} >
        <g>
            <g>
                <path style={{ fill: props.color, stroke: props.color }} d="M126.872,624.146h-5.529a1.939,1.939,0,0,1-1.614-.863l-3.962-5.944a1.93,1.93,0,0,1,0-2.152l3.962-5.943a1.937,1.937,0,0,1,1.614-.863h5.529a1.939,1.939,0,0,1,1.615.863l3.962,5.944a1.932,1.932,0,0,1,0,2.151l-3.962,5.943A1.939,1.939,0,0,1,126.872,624.146Zm-5.529-14.432a.607.607,0,0,0-.505.27l-3.962,5.943a.6.6,0,0,0,0,.672h0l3.962,5.944a.607.607,0,0,0,.505.27h5.529a.605.605,0,0,0,.5-.271l3.962-5.943a.6.6,0,0,0,0-.671l-3.962-5.944a.607.607,0,0,0-.5-.27Z"/>
            </g>
        </g>
        <g>
            <path style={{ fill: props.color, stroke: props.color }} d="M127.036,616.93h-5.857a.667.667,0,1,1,0-1.333h5.857a.667.667,0,1,1,0,1.333Z"/>
        </g>
    </g>
]);
const hexYes = (props: SVGProps) => ([
    <g transform="translate(-87.552 -608.595)" key={`1_${props.svgId}`}>
        <g>
            <g>
                <path style={{ fill: props.color, stroke: props.color }} d="M95.436,624.931a1.926,1.926,0,0,1-1.076-.327l-5.944-3.962a1.937,1.937,0,0,1-.864-1.614V613.5a1.933,1.933,0,0,1,.864-1.613l5.944-3.963a1.934,1.934,0,0,1,2.151,0l5.943,3.963a1.934,1.934,0,0,1,.865,1.613v5.53a1.937,1.937,0,0,1-.865,1.614L96.511,624.6A1.927,1.927,0,0,1,95.436,624.931Zm0-16a.6.6,0,0,0-.335.1h0l-5.943,3.962a.6.6,0,0,0-.271.5v5.53a.605.605,0,0,0,.271.505l5.943,3.962a.6.6,0,0,0,.671,0l5.943-3.962a.605.605,0,0,0,.271-.505V613.5a.6.6,0,0,0-.271-.5l-5.943-3.962A.606.606,0,0,0,95.435,608.929Zm-.7-.452h0Z"/>
            </g>
        </g>
        <g>
            <path style={{ fill: props.color, stroke: props.color }} d="M94.52,618.856a.667.667,0,0,1-.472-.2l-2.02-2.02a.667.667,0,0,1,.943-.943l1.549,1.548,3.38-3.38a.666.666,0,1,1,.943.942l-3.851,3.852A.664.664,0,0,1,94.52,618.856Z"/>
        </g>
    </g>
]);
const heart = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} transform='scale(0.028) translate(20 45)' style={{ fill: 'white', stroke: props.color }} strokeWidth='60' d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm0 0"/>,
]);
const heartSolid = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} transform='scale(0.028) translate(20 45)' style={{ fill: props.color, stroke: props.color }} strokeWidth='60' d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm0 0"/>,
]);
// const scenario = (props: SVGProps) => ([
//     <defs key={`1_${props.svgId}`}>
//         <radialGradient id='test1' cx='0.5' cy='0.5' r='0.5'>
//             <stop offset="0%" stopColor="#FFFFFF" />
//             <stop offset="90%" stopColor="#FFFF77" />
//             <stop offset="95%" stopColor="#FFFF33" />
//             <stop offset="100%" stopColor="#FF7744" />
//         </radialGradient>
//         <linearGradient id='test2' gradientTransform='rotate(90)'>
//             <stop offset="0%" stopColor="#EEEE00" />
//             <stop offset="40%" stopColor="#FF5511" />
//             <stop offset="78%" stopColor="#880000" />
//             <stop offset="80%" stopColor="black" />
//         </linearGradient>
//         <radialGradient id='test3' cx='.72' cy='1' r='1' fx='.72' fy='0'>
//             <stop offset="0%" stopColor="#FFFFFF" stopOpacity='0.3' />
//             <stop offset="30%" stopColor="#FFFF33" stopOpacity='0.15' />
//             <stop offset="60%" stopColor="#FFFF33" stopOpacity='0.05' />
//             <stop offset="100%" stopColor="black" stopOpacity='0' />
//         </radialGradient>
//     </defs>,
//     <rect x="0" y="0" width="250" height="500" fill='url(#test2)' key={`2_${props.svgId}`} />,
//     <circle cx='180' cy='250' r='50' fill='url(#test1)' key={`3_${props.svgId}`} />,
//     <rect x="0" y="200" width="250" height="300" fill='url(#test3)' key={`4_${props.svgId}`} />,
// ]);

const TYPE_ICON_DRAW_INDEX: {
    [s: string]: {
        className: string,
        generator: (props: SVGProps) => Array<React.ReactNode>,
    }
} = {
    'loading': { className: 'fc-loading', generator: loading },
    'write': { className: 'write', generator: write },
    'arrow-left': { className: 'arrow-left', generator: arrowLeft },
    'arrow-right': { className: 'arrow-right', generator: arrowRight },
    'solid-left': { className: 'solid-left', generator: solidLeft },
    'solid-right': { className: 'solid-right', generator: solidRight },
    'forward': { className: 'forward', generator: forward },
    'backward': { className: 'backward', generator: backward },
    'next': { className: 'next', generator: next },
    'previous': { className: 'previous', generator: previous },
    'left': { className: 'left', generator: left },
    'right': { className: 'right', generator: right },
    'zoom-out': { className: 'minus', generator: zoomOut },
    'zoom-in': { className: 'plus', generator: zoomIn },
    'minus': { className: 'minus', generator: minus },
    'plus': { className: 'plus', generator: plus },
    'circle-plus': { className: 'plus-circle', generator: circlePlus },
    'square-plus': { className: 'square-circle', generator: squarePlus },
    'square-minus': { className: 'square-circle', generator: squareMinus },
    'trashcan': { className: 'trashcan', generator: trashcan },
    'edit': { className: 'edit-box', generator: edit },
    'document': { className: 'document', generator: document },
    'save': { className: 'save', generator: save },
    'calendar': { className: 'calendar', generator: calendar },
    'clock': { className: 'clock', generator: clock },
    'led-green': { className: 'fc-led-green', generator: ledGreen },
    'led-yellow': { className: 'fc-led-yellow', generator: ledYellow },
    'led-red': { className: 'fc-led-red', generator: ledRed },
    'led-blue': { className: 'fc-led-blue', generator: ledBlue },
    'led-gray': { className: 'fc-led-gray', generator: ledGray },
    'warning': { className: 'fc-warning', generator: warning },
    'cyp-device': { className: 'document', generator: cypDevice },
    'cyplogo': { className: 'cyplogo', generator: cyplogo },
    'revert': { className: 'revert', generator: revert },
    'scenario': { className: 'fc-scenario', generator: scenario },
    // 'scenario': { className: 'scenario', generator: scenario },
    'scissors': { className: 'scissors', generator: scissors },
    'cancel': { className: 'cancel', generator: cancel },
    'exit': { className: 'exit', generator: exit },
    'import': { className: 'import', generator: _import },
    'download': { className: 'download', generator: download },
    'dashboard': { className: 'fc-dashboard', generator: dashboard },
    'device': { className: 'fc-device', generator: device },
    'update': { className: 'update', generator: update },
    'upload': { className: 'upload', generator: upload },
    'setting': { className: 'fc-setting', generator: setting },
    'scene': { className: 'scene', generator: scene },
    'volumn': { className: 'volumn', generator: volumn },
    'idea': { className: 'idea', generator: idea },
    'move': { className: 'move', generator: move },
    'stop': { className: 'stop', generator: stop },
    'grid': { className: 'grid', generator: grid },
    'home': { className: 'home', generator: home },
    'pushpin': { className: 'pushpin', generator: pushpin },
    'forbid': { className: 'forbid', generator: forbid },
    'hexigon-no': { className: 'hexigon-no', generator: hexNo },
    'hexigon-yes': { className: 'hexigon-yes', generator: hexYes },
    'heart': { className: 'heart', generator: heart },
    'heart-solid': { className: 'heart-solid', generator: heartSolid },
}

export default class Icon extends React.Component<IconProps> {
    id: string = Math.random().toString();
    render() {
        const { className, type, style, onClick, ...otherProps } = this.props;
        if (type in TYPE_ICON_DRAW_INDEX) {
            var svgClass = 'cypd-icon ' + TYPE_ICON_DRAW_INDEX[type].className;
            var wrapperClass = 'cypd-icon-wrapper' + (className ? ` ${className}` : '')
            wrapperClass += (onClick ? ' clickable' : '');
            return <div className={wrapperClass} style={style} onPointerUp={onClick} onClick={(window.PointerEvent) ? undefined : onClick}><svg className={svgClass} {...otherProps}>{TYPE_ICON_DRAW_INDEX[type].generator({ ...otherProps, svgId: this.id })}</svg></div>;
        } else { return <div className='cypd-icon-wrapper' />; }
    }
}