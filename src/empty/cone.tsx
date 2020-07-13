import React from 'react';


/**
 * btoa() as defined by the HTML and Infra specs, which mostly just references
 * RFC 4648.
 */
function btoa(s: string) {
    let i;
    // String conversion as required by Web IDL.
    s = `${s}`;
    // "The btoa() method must throw an "InvalidCharacterError" DOMException if
    // data contains any character whose code point is greater than U+00FF."
    for (i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 255) {
            return null;
        }
    }
    let out = "";
    for (i = 0; i < s.length; i += 3) {
        const groupsOfSix: Array<number | undefined> = [undefined, undefined, undefined, undefined];
        groupsOfSix[0] = s.charCodeAt(i) >> 2;
        groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;
        if (s.length > i + 1) {
            groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
            groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
        }
        if (s.length > i + 2) {
            const tmp = groupsOfSix[2];
            if (typeof tmp !== 'undefined')
                groupsOfSix[2] = tmp | s.charCodeAt(i + 2) >> 6;
            groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
        }
        for (let j = 0; j < groupsOfSix.length; j++) {
            if (typeof groupsOfSix[j] === "undefined") {
                out += "=";
            } else {
                const tmp = groupsOfSix[j];
                if (typeof tmp !== 'undefined')
                    out += btoaLookup(tmp);
            }
        }
    }
    return out;
}

/**
 * Lookup table for btoa(), which converts a six-bit number into the
 * corresponding ASCII character.
 */
function btoaLookup(idx: number) {
    if (idx < 26) {
        return String.fromCharCode(idx + "A".charCodeAt(0));
    }
    if (idx < 52) {
        return String.fromCharCode(idx - 26 + "a".charCodeAt(0));
    }
    if (idx < 62) {
        return String.fromCharCode(idx - 52 + "0".charCodeAt(0));
    }
    if (idx === 62) {
        return "+";
    }
    if (idx === 63) {
        return "/";
    }
    // Throw INVALID_CHARACTER_ERR exception here -- won't be hit in the tests.
    return undefined;
}
  
declare type ConeProps = {
    backgroundColor: string;
    color: string;
    className: string;
    style: React.CSSProperties;
}

export default class Cone extends React.Component<Partial<ConeProps>> {
    render() {
        const { backgroundColor, color, className, style } = this.props;
        let wrapperClass = `cypd-cone-view${className?` ${className}`:''}`;
        let bg_svg_raw = `<svg xmlns='http://www.w3.org/2000/svg' width='160px' height='100px' overflow='visible'>`; 
        bg_svg_raw += `<path style=' stroke:none;fill:${color?color:'white'};transform:scale(1.6) translate(30px,5px)' d='M 27.457031 24.121094 L 21.550781 2.332031 C 21.175781 0.957031 19.921875 0 18.5 0 L 17.5 0 C 16.078125 0 14.824219 0.957031 14.449219 2.332031 L 8.546875 24.121094 C 8.417969 24.589844 8.625 25.082031 9.046875 25.320312 C 9.210938 25.410156 13.121094 27.5625 18 27.5625 C 22.878906 27.5625 26.789062 25.410156 26.953125 25.320312 C 27.375 25.082031 27.582031 24.589844 27.457031 24.121094 Z M 15.046875 8.300781 C 16.046875 8.464844 17.039062 8.578125 18 8.578125 C 18.960938 8.578125 19.953125 8.464844 20.953125 8.300781 L 21.488281 10.253906 C 19.132812 10.773438 16.867188 10.773438 14.511719 10.253906 Z M 18 21.234375 C 15.511719 21.234375 13.289062 20.589844 11.84375 20.039062 L 12.339844 18.21875 C 13.851562 18.6875 15.820312 19.125 18 19.125 C 20.179688 19.125 22.148438 18.6875 23.660156 18.21875 L 24.15625 20.042969 C 22.710938 20.589844 20.488281 21.234375 18 21.234375 Z M 18 21.234375 '/>`;
        bg_svg_raw += `<path style=' stroke:none;fill:${color?color:'white'};transform:scale(1.6) translate(30px,5px)' d='M 32.53125 21.691406 L 28.25 19.011719 L 29.492188 23.566406 C 29.875 24.972656 29.253906 26.453125 27.976562 27.160156 C 27.523438 27.417969 23.339844 29.671875 18 29.671875 C 12.660156 29.671875 8.476562 27.417969 8.019531 27.160156 C 6.746094 26.453125 6.125 24.972656 6.507812 23.566406 L 7.75 19.011719 L 3.46875 21.691406 C 1.492188 22.925781 1.46875 25.792969 3.40625 27.070312 L 15.101562 35.132812 C 16.859375 36.285156 19.132812 36.292969 20.898438 35.132812 L 32.59375 27.066406 C 34.53125 25.792969 34.507812 22.925781 32.53125 21.691406 Z M 32.53125 21.691406 '/>`; 
        bg_svg_raw += `<text x='80' y='90' font-family='Arial' fill='${color?color:'white'}' text-anchor='middle'>Under Construction</text></svg>`;
        const bg_string = 'url("data:image/svg+xml;base64,' + btoa(bg_svg_raw) + '")';
        return <div className={wrapperClass} style={style}><div style={{ backgroundColor: (backgroundColor)?backgroundColor:'black', backgroundImage: bg_string }} className='background'/></div>;
    }
};
