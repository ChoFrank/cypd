import React from 'react';


// /**
//  * btoa() as defined by the HTML and Infra specs, which mostly just references
//  * RFC 4648.
//  */
// function btoa(s: string) {
//     let i;
//     // String conversion as required by Web IDL.
//     s = `${s}`;
//     // "The btoa() method must throw an "InvalidCharacterError" DOMException if
//     // data contains any character whose code point is greater than U+00FF."
//     for (i = 0; i < s.length; i++) {
//         if (s.charCodeAt(i) > 255) {
//             return null;
//         }
//     }
//     let out = "";
//     for (i = 0; i < s.length; i += 3) {
//         const groupsOfSix: Array<number | undefined> = [undefined, undefined, undefined, undefined];
//         groupsOfSix[0] = s.charCodeAt(i) >> 2;
//         groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;
//         if (s.length > i + 1) {
//             groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
//             groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
//         }
//         if (s.length > i + 2) {
//             const tmp = groupsOfSix[2];
//             if (typeof tmp !== 'undefined')
//                 groupsOfSix[2] = tmp | s.charCodeAt(i + 2) >> 6;
//             groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
//         }
//         for (let j = 0; j < groupsOfSix.length; j++) {
//             if (typeof groupsOfSix[j] === "undefined") {
//                 out += "=";
//             } else {
//                 const tmp = groupsOfSix[j];
//                 if (typeof tmp !== 'undefined')
//                     out += btoaLookup(tmp);
//             }
//         }
//     }
//     return out;
// }

// /**
//  * Lookup table for btoa(), which converts a six-bit number into the
//  * corresponding ASCII character.
//  */
// function btoaLookup(idx: number) {
//     if (idx < 26) {
//         return String.fromCharCode(idx + "A".charCodeAt(0));
//     }
//     if (idx < 52) {
//         return String.fromCharCode(idx - 26 + "a".charCodeAt(0));
//     }
//     if (idx < 62) {
//         return String.fromCharCode(idx - 52 + "0".charCodeAt(0));
//     }
//     if (idx === 62) {
//         return "+";
//     }
//     if (idx === 63) {
//         return "/";
//     }
//     // Throw INVALID_CHARACTER_ERR exception here -- won't be hit in the tests.
//     return undefined;
// }
  
declare type EmptyProps = {
    className: string;
    style: React.CSSProperties;
    text: string;
    textColor: string;
}

export default class Empty extends React.Component<Partial<EmptyProps>> {
    render() {
        const { className, style, text, textColor } = this.props;
        let wrapperClass = `cypd-empty-view${className?` ${className}`:''}`;
        // let bg_svg_raw = `<svg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' overflow='visible'>`;
        // bg_svg_raw += `<ellipse cx='47' cy='60' rx='27' ry='5' stroke='none' fill='rgba(170,170,170,0.5)' />`;
        // bg_svg_raw += `<path d='M22 45 32 30 62 30 72 45 57 45 55 50 39 50 37 45 Z' stroke='rgba(170,170,170,0.8)' fill='white' stroke-linejoin='round' />`;
        // bg_svg_raw += `<path d='M72 45 57 45 55 50 39 50 37 45 22 45 22 60 72 60 Z' stroke='rgba(170,170,170,0.8)' fill='rgb(238,238,238)' stroke-linejoin='round' />`;
        // bg_svg_raw += `<text x='47' y='85' font-family='Arial' fill='${textColor?textColor:'rgba(170,170,170,0.8)'}' text-anchor='middle'>${text?text:'No Data'}</text></svg>`;
        // const bg_string = 'url("data:image/svg+xml;base64,' + btoa(bg_svg_raw) + '")';
        // return <div className={wrapperClass} style={style}><div style={{backgroundImage: bg_string }} className='background'/></div>;
        return <div className={wrapperClass} style={style}>
            <svg width='100px' height='100px' overflow='visible'>
                <ellipse cx='47' cy='60' rx='27' ry='5' style={{ stroke: 'none', fill: 'rgba(170,170,170,0.5)' }} />
                <path d='M22 45 32 30 62 30 72 45 57 45 55 50 39 50 37 45 Z' style={{ stroke: 'rgba(170,170,170,0.8)', fill: 'white', strokeLinejoin: 'round' }} />
                <path d='M72 45 57 45 55 50 39 50 37 45 22 45 22 60 72 60 Z' style={{ stroke: 'rgba(170,170,170,0.8)', fill: 'rgb(238,238,238)', strokeLinejoin: 'round' }} />
                <text x='47' y='85' style={{ fontFamily: 'Arial', fill: (textColor?textColor:'rgba(170,170,170,0.8)'), textAnchor: 'middle' }}>{text?text:'No Data'}</text>
            </svg>
        </div>;
    }
};
