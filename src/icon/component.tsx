import React from 'react';


interface SVGProps {
    svgId: string,
    className?: string,
    style?: React.CSSProperties,
    viewBox?: string,
    color?: string,
    onClick?: (event: React.MouseEvent) => void,
}

interface IconProps {
    type: string
    className?: string,
    style?: React.CSSProperties,
    viewBox?: string,
    color?: string,
    onClick?: (event: React.MouseEvent) => void,
}

const loading = (props: SVGProps) => {
    const chooseCode = (props.color)?props.color:'#00839E';
    return ([
        <defs key={`1_${props.svgId}`}>
            <radialGradient id='loading-radial' cx='.5' cy='.5' r='.9' fx='1' fy='1'>
                <stop offset="20%" stopColor="white" stopOpacity='0' />
                <stop offset="90%" stopColor={chooseCode}  stopOpacity='0.9'/>
                <stop offset="95%" stopColor={chooseCode}  stopOpacity='0.95'/>
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

const arrowLeft = (props: SVGProps) => ([
    <polyline points='10,0 2,8 10,16' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
]);

const left = (props: SVGProps) => ([
    <polyline points='8,2 2,8 8,14' style={{ stroke: props.color }} strokeWidth={3} key={`1_${props.svgId}`} fill='none' />,
    <polyline points='2,8 14,8' style={{ stroke: props.color }} strokeWidth={3} key={`2_${props.svgId}`} fill='none' />,
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

const sissors = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 7.105469 9.507812 C 7.035156 9.492188 6.972656 9.449219 6.9375 9.386719 L 1.652344 0.378906 C 1.589844 0.273438 1.613281 0.140625 1.707031 0.0585938 C 1.800781 -0.0195312 1.9375 -0.0195312 2.03125 0.0585938 L 3.65625 1.402344 C 3.667969 1.410156 3.679688 1.421875 3.6875 1.433594 L 7.90625 6.476562 C 7.945312 6.519531 7.964844 6.574219 7.964844 6.632812 L 8.011719 8.800781 C 8.015625 8.804688 8.015625 8.808594 8.011719 8.8125 C 8.011719 8.886719 7.976562 8.960938 7.914062 9.007812 L 7.308594 9.460938 C 7.25 9.503906 7.175781 9.519531 7.105469 9.507812 Z M 7.105469 9.507812 "/>,
    <path key={`2_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 2.054688 0.078125 L 3.65625 1.402344 C 3.667969 1.410156 3.679688 1.421875 3.6875 1.433594 L 7.90625 6.476562 C 7.945312 6.519531 7.964844 6.574219 7.964844 6.632812 L 8.011719 8.800781 C 8.015625 8.804688 8.015625 8.808594 8.015625 8.8125 C 8.011719 8.886719 7.976562 8.960938 7.914062 9.007812 L 7.496094 9.320312 Z M 2.054688 0.078125 "/>,
    <path key={`3_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 10.441406 15.632812 C 11.144531 15.199219 11.367188 14.277344 10.933594 13.570312 L 8.023438 8.832031 L 7.039062 9.433594 C 6.222656 9.9375 5.835938 10.917969 6.09375 11.839844 L 6.746094 14.183594 C 7.191406 15.773438 9.035156 16.496094 10.441406 15.632812 Z M 7.71875 13.910156 L 7.066406 11.566406 C 6.929688 11.082031 7.136719 10.558594 7.566406 10.296875 L 7.675781 10.226562 C 7.683594 10.222656 7.695312 10.222656 7.699219 10.230469 L 10.074219 14.101562 C 10.214844 14.328125 10.144531 14.628906 9.914062 14.773438 C 9.515625 15.015625 9.035156 15.058594 8.601562 14.886719 C 8.167969 14.71875 7.84375 14.359375 7.71875 13.910156 Z M 7.71875 13.910156 "/>,
    <path key={`4_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 10.675781 15.238281 C 9.269531 16.101562 7.429688 15.378906 6.984375 13.789062 L 6.332031 11.445312 C 6.1875 10.941406 6.242188 10.417969 6.449219 9.96875 C 6.054688 10.488281 5.910156 11.179688 6.09375 11.839844 L 6.746094 14.183594 C 7.191406 15.773438 9.035156 16.496094 10.441406 15.632812 C 10.722656 15.457031 10.929688 15.207031 11.042969 14.917969 C 10.941406 15.042969 10.820312 15.148438 10.675781 15.238281 Z M 10.675781 15.238281 "/>,
    <path key={`5_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 6.683594 6.972656 C 6.578125 6.972656 6.484375 6.90625 6.449219 6.8125 C 6.410156 6.710938 6.4375 6.59375 6.519531 6.527344 C 6.597656 6.460938 6.714844 6.449219 6.804688 6.5 C 6.898438 6.550781 6.949219 6.65625 6.929688 6.761719 C 6.910156 6.882812 6.804688 6.972656 6.683594 6.972656 Z M 6.683594 6.972656 "/>,
    <path key={`6_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 9.378906 7.394531 C 9.371094 7.324219 9.332031 7.261719 9.273438 7.21875 L 0.683594 1.277344 C 0.585938 1.207031 0.449219 1.21875 0.363281 1.308594 C 0.277344 1.394531 0.265625 1.53125 0.335938 1.628906 L 1.554688 3.351562 C 1.5625 3.363281 1.574219 3.375 1.585938 3.386719 L 6.296875 7.96875 C 6.339844 8.007812 6.390625 8.035156 6.449219 8.039062 L 8.609375 8.25 C 8.613281 8.25 8.617188 8.25 8.617188 8.25 C 8.695312 8.253906 8.773438 8.222656 8.824219 8.164062 L 9.320312 7.59375 C 9.367188 7.539062 9.390625 7.46875 9.378906 7.394531 Z M 9.378906 7.394531 "/>,
    <path key={`7_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 0.351562 1.65625 L 1.554688 3.351562 C 1.5625 3.363281 1.574219 3.375 1.585938 3.386719 L 6.296875 7.96875 C 6.339844 8.007812 6.390625 8.035156 6.449219 8.039062 L 8.609375 8.25 C 8.613281 8.25 8.617188 8.25 8.617188 8.25 C 8.695312 8.253906 8.773438 8.222656 8.824219 8.164062 L 9.164062 7.769531 Z M 0.351562 1.65625 "/>,
    <path key={`8_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 14.070312 7.386719 L 11.78125 6.558594 C 10.882812 6.234375 9.875 6.546875 9.3125 7.320312 L 8.636719 8.261719 L 13.148438 11.515625 C 13.820312 12 14.753906 11.847656 15.238281 11.179688 C 16.207031 9.839844 15.621094 7.949219 14.070312 7.386719 Z M 14.636719 9.289062 C 14.773438 9.734375 14.695312 10.207031 14.421875 10.585938 C 14.265625 10.804688 13.957031 10.855469 13.738281 10.699219 L 10.058594 8.042969 C 10.050781 8.035156 10.050781 8.027344 10.054688 8.019531 L 10.132812 7.914062 C 10.425781 7.503906 10.964844 7.335938 11.4375 7.507812 L 13.726562 8.335938 C 14.164062 8.496094 14.496094 8.839844 14.636719 9.289062 Z M 14.636719 9.289062 "/>,
    <path key={`9_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 14.070312 7.386719 L 11.78125 6.558594 C 10.882812 6.234375 9.875 6.546875 9.3125 7.320312 L 8.636719 8.261719 L 13.148438 11.515625 C 13.820312 12 14.753906 11.847656 15.238281 11.179688 C 16.207031 9.839844 15.621094 7.949219 14.070312 7.386719 Z M 14.636719 9.289062 C 14.773438 9.734375 14.695312 10.207031 14.421875 10.585938 C 14.265625 10.804688 13.957031 10.855469 13.738281 10.699219 L 10.058594 8.042969 C 10.050781 8.035156 10.050781 8.027344 10.054688 8.019531 L 10.132812 7.914062 C 10.425781 7.503906 10.964844 7.335938 11.4375 7.507812 L 13.726562 8.335938 C 14.164062 8.496094 14.496094 8.839844 14.636719 9.289062 Z M 14.636719 9.289062 "/>,
    <path key={`10_${props.svgId}`} style={{ fill: props.color }} stroke='none' d="M 15.320312 10.789062 C 14.835938 11.460938 13.898438 11.609375 13.226562 11.128906 L 8.847656 7.96875 L 8.636719 8.261719 L 13.148438 11.515625 C 13.820312 12 14.753906 11.847656 15.238281 11.179688 C 15.496094 10.820312 15.644531 10.421875 15.691406 10.023438 C 15.617188 10.289062 15.492188 10.546875 15.320312 10.789062 Z M 15.320312 10.789062 "/>,
    <path key={`11_${props.svgId}`} fill='white' stroke='none' d="M 6.632812 7.019531 C 6.53125 7.019531 6.433594 6.953125 6.398438 6.859375 C 6.359375 6.757812 6.386719 6.644531 6.46875 6.574219 C 6.550781 6.503906 6.671875 6.496094 6.761719 6.550781 C 6.851562 6.605469 6.898438 6.714844 6.878906 6.816406 C 6.855469 6.929688 6.75 7.019531 6.632812 7.019531 Z M 6.632812 7.019531 "/>,
]);

const _import = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M2 8 12 8 M8 4 12 8 8 12' fill='none'/>,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M0 4 0 0 16 0 16 16 0 16 0 12' fill='none'/>,
]);

const download = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M8 2 8 12 M4 8 8 12 12 8' fill='none'/>,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M1 12 1 16 15 16 15 12' fill='none'/>,
]);

const upload = (props: SVGProps) => ([
    <path key={`1_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M8 2 8 12 M4 6 8 2 12 6' fill='none'/>,
    <path key={`2_${props.svgId}`} style={{ stroke: props.color }} strokeWidth={2} d='M1 12 1 16 15 16 15 12' fill='none'/>,
]);

const clock = (props: SVGProps) => ([
    <circle cx='8' cy='8' r='8' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill='none' />,
    <path d='M8 0 8 16' style={{ stroke: props.color }} strokeWidth={1} key={`2_${props.svgId}`} fill='none' />,
    // <path d='M12 1.0718 4 14.9282' style={{ stroke: props.color }} strokeWidth={1} key={`3_${props.svgId}`} fill='none' />,
    <path d='M0 8 16 8' style={{ stroke: props.color }} strokeWidth={1} key={`4_${props.svgId}`} fill='none' />,
    <circle cx='8' cy='8' r='5' style={{ stroke: props.color }} strokeWidth={0} key={`5_${props.svgId}`} fill='white' />,
    <path d='M8 0 8 8 11 11' style={{ stroke: props.color }} strokeWidth={2} key={`6_${props.svgId}`} fill='none' />,
]);

const ledGreen = (props: SVGProps) => ([
    <radialGradient id='fc-led-green-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#abff7e" />
        <stop offset="60%" stopColor="#84ff43" />
        <stop offset="90%" stopColor='#57dd10' />
    </radialGradient>,
    <filter id='led-green-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#abff7e' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='8' cy='8' r='9' stroke='none' key={`3_${props.svgId}`} filter='url(#led-green-blur)' />,
    <circle cx='8' cy='8' r='8' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-green-light)' />,
]);

const ledYellow = (props: SVGProps) => ([
    <radialGradient id='fc-led-yellow-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#fbee8e">
            {/* <animate dur='1.5s' attributeName='stop-color' values='#fbee8e; #e9d22a; #fbee8e' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="45%" stopColor="#fefc56">
            {/* <animate dur='1.5s' attributeName='stop-color' values='#fefc56; #e9d22a; #fefc56' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="90%" stopColor='#e9d22a' />
    </radialGradient>,
    <filter id='led-yellow-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#fbee8e' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='8' cy='8' r='9' stroke='none' key={`3_${props.svgId}`} filter='url(#led-yellow-blur)' />,
    <circle cx='8' cy='8' r='8' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-yellow-light)' />,
]);

const ledRed = (props: SVGProps) => ([
    <radialGradient id='fc-led-red-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#ff8383">
            {/* <animate dur='0.75s' attributeName='stop-color' values='#ff8383; #e01919; #ff8383' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="60%" stopColor="#ff3f3f">
            {/* <animate dur='0.75s' attributeName='stop-color' values='#ff3f3f; #e01919; #ff3f3f' repeatCount='indefinite'/> */}
        </stop>
        <stop offset="90%" stopColor='#e01919' />
    </radialGradient>,
    <filter id='led-red-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#ff8383' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='8' cy='8' r='9' stroke='none' key={`3_${props.svgId}`} filter='url(#led-red-blur)' />,
    <circle cx='8' cy='8' r='8' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-red-light)' />,
]);

const ledGray = (props: SVGProps) => ([
    <radialGradient id='fc-led-gray-light' cx='.5' cy='.5' r='.5' key={`1_${props.svgId}`}>
        <stop offset="20%" stopColor="#9b9b9b"/>
        <stop offset="60%" stopColor="#8c8c8c"/>
        <stop offset="90%" stopColor='#6c6c6c' />
    </radialGradient>,
    <filter id='led-gray-blur' width='200%' height='200%' key={`2_${props.svgId}`}>
        <feGaussianBlur in='SourceAlpha' stdDeviation='1' result='blur' />
        <feOffset in='blur' dx='0' dy='0' result='offsetBlur' />
        <feFlood floodColor='#9b9b9b' floodOpacity='1' result='offsetColor' />
        <feComposite in='offsetColor' in2='offsetBlur' operator='in' result='offsetBlur' />
    </filter>,
    <circle cx='8' cy='8' r='9' stroke='none' key={`3_${props.svgId}`} filter='url(#led-gray-blur)' />,
    <circle cx='8' cy='8' r='8' stroke='none' key={`4_${props.svgId}`} fill='url(#fc-led-gray-light)' />,
]);

const cypDevice = (props: SVGProps) => ([
    <path d='M0 4 16 4 16 12 0 12 Z' style={{ stroke: props.color }} strokeWidth={2} key={`1_${props.svgId}`} fill='none' />,
    <path d='M15 5 12 11' style={{ stroke: props.color }} strokeWidth={1} key={`2_${props.svgId}`} fill='none' />,
    <path d='M12 5 9 11' style={{ stroke: props.color }} strokeWidth={1} key={`3_${props.svgId}`} fill='none' />,
    <path d='M9 5 6 11' style={{ stroke: props.color }} strokeWidth={1} key={`4_${props.svgId}`} fill='none' />,
]);

const cyplogo = (props: SVGProps) => ([
    <path style={{ fill: props.color }} d="M13.837094140487364,3.767714874709207 l-0.8821174165903569,-0.5227334066005692 c-0.399329924879161,-0.23664714554828062 -0.8911482727027799,-0.23664714554828062 -1.290478197581939,0 L6.460337937852195,6.329172496942728 c-0.399329924879161,0.23664714554828062 -0.6452390987909704,0.6739275981958015 -0.6452390987909704,1.1472218892923611 v1.0364100786799286 c0,0.47862178199138955 0.2515145328781407,0.9199511277189786 0.6579030579371249,1.15468037654512 l1.5256956682801912,0.8806342449151449 l-0.0010380294382094143,-1.7929137857455697 c-0.00031140883146282475,-0.47393359000394014 0.24622058274327238,-0.9119598913767358 0.6462771282291797,-1.1485004871071194 l3.539057566631164,-2.0929580729423085 c0.05626119555095024,-0.03324354318372969 0.12643198557390625,0.008417435613829004 0.12643198557390625,0.0750110717991849 v1.638416549795544 c0,0.47308119146076777 -0.24580537096798888,0.9102550942903906 -0.6449276899595073,1.1469022398386712 L7.998697565278539,10.548012536557389 v4.979392639760369 c0,0.06670018600325262 0.07027459296677742,0.10836116480081084 0.12653578851772745,0.0750110717991849 l1.1452578791764425,-0.6787223400011468 c0.399329924879161,-0.23664714554828062 0.6453429017347906,-0.6738210483779042 0.6453429017347906,-1.1472218892923611 l-0.0001038029438209416,-1.8044211660783989 l3.9214676116675085,-2.3239580781420703 c0.39922612193533935,-0.23664714554828062 0.6452390987909704,-0.6738210483779042 0.6452390987909704,-1.1472218892923611 v-3.586147220944829 C14.482333239278338,4.441642472905005 14.236424065366528,4.0043620202574886 13.837094140487364,3.767714874709207 z" key={`1_${props.svgId}`}/>,
    <path style={{ fill: props.color }} d="M3.676446787518377,9.790230231676986 v-3.5921140107470366 c0,-0.4732942910965607 0.24601297685563064,-0.9105747437440805 0.6452390987909704,-1.1472218892923611 l5.713729239679878,-3.386153212752969 c0.05626119555095024,-0.033350093001626314 0.05626119555095024,-0.11667205059674352 0,-0.1499155937804732 l-1.391582264863536,-0.824695590519446 c-0.399329924879161,-0.23664714554828062 -0.8911482727027799,-0.23664714554828062 -1.290478197581939,0 l-5.19315747641786,3.0775849401245052 c-0.399329924879161,0.23664714554828062 -0.6452390987909704,0.6739275981958015 -0.6452390987909704,1.1472218892923611 v6.155382979884802 c0,0.4731877412786646 0.24601297685563064,0.910468193926184 0.6452390987909704,1.1471153394744642 l3.528158257529965,2.0910401762201705 c0.05626119555095024,0.033350093001626314 0.12663959146154832,-0.008417435613829004 0.12653578851772745,-0.07511762161708156 l-0.0028026794831654206,-2.3630618613101113 c0,-0.03079289737210857 -0.016089456292245927,-0.05934824856838922 -0.04224779813512318,-0.07479797216339183 l-1.448051066302127,-0.8579391337031752 C3.9224597643740085,10.700911525238965 3.676446787518377,10.263417972955654 3.676446787518377,9.790230231676986 z" key={`2_${props.svgId}`}/>
]);

const Senario = (props: SVGProps) => ([
    <defs key={`1_${props.svgId}`}>
        <radialGradient id='test1' cx='0.5' cy='0.5' r='0.5'>
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="90%" stopColor="#FFFF77" />
            <stop offset="95%" stopColor="#FFFF33" />
            <stop offset="100%" stopColor="#FF7744" />
        </radialGradient>
        <linearGradient id='test2' gradientTransform='rotate(90)'>
            <stop offset="0%" stopColor="#EEEE00" />
            <stop offset="40%" stopColor="#FF5511" />
            <stop offset="78%" stopColor="#880000" />
            <stop offset="80%" stopColor="black" />
        </linearGradient>
        <radialGradient id='test3' cx='.72' cy='1' r='1' fx='.72' fy='0'>
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity='0.3' />
            <stop offset="30%" stopColor="#FFFF33" stopOpacity='0.15' />
            <stop offset="60%" stopColor="#FFFF33" stopOpacity='0.05' />
            <stop offset="100%" stopColor="black" stopOpacity='0' />
        </radialGradient>
    </defs>,
    <rect x="0" y="0" width="250" height="500" fill='url(#test2)' key={`2_${props.svgId}`} />,
    <circle cx='180' cy='250' r='50' fill='url(#test1)' key={`3_${props.svgId}`} />,
    <rect x="0" y="200" width="250" height="300" fill='url(#test3)' key={`4_${props.svgId}`} />,
]);

const TYPE_ICON_DRAW_INDEX: { [s: string]: {
    className: string,
    generator: (props: SVGProps) => Array<React.ReactNode>,
} } = {
    'loading': { className: 'fc-loading', generator: loading },
    'write': { className: 'write', generator: write },
    'arrow-left': { className: 'arrow-left', generator: arrowLeft },
    'arrow-right': { className: 'arrow-right', generator: arrowRight },
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
    'led-gray': { className: 'fc-led-gray', generator: ledGray },
    'cyp-device': { className: 'document', generator: cypDevice },
    'cyplogo': { className: 'cyplogo', generator: cyplogo },
    'senario': { className: 'senario', generator: Senario },
    'scissors': { className: 'scissors', generator: sissors },
    'cancel': { className: 'cancel', generator: cancel },
    'import': { className: 'import', generator: _import },
    'download': { className: 'download', generator: download },
    'upload': { className: 'upload', generator: upload },
}

export default class Icon extends React.Component<IconProps> {
    id: string = Math.random().toString();
    render() {
        const { className, type, style, onClick, ...otherProps } = this.props;
        if (type in TYPE_ICON_DRAW_INDEX) {
            var svgClass = 'cypd-icon ' + TYPE_ICON_DRAW_INDEX[type].className;
            var wrapperClass = 'cypd-icon-wrapper' + (className ? ` ${className}` : '')
            wrapperClass += (onClick ? ' clickable' : '');
            return <div className={wrapperClass} style={style} onClick={onClick}><svg className={svgClass} {...otherProps}>{TYPE_ICON_DRAW_INDEX[type].generator({...otherProps, svgId: this.id})}</svg></div>;
        } else { return <div className='cypd-icon-wrapper'/>; }
    }
}