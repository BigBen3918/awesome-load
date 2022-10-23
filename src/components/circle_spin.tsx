import React from "react";
import styled from "styled-components";

interface SpinInterface {
    type:
        | "Spin_1"
        | "Spin_2"
        | "Spin_3"
        | "Spin_4"
        | "Spin_5"
        | "Spin_6"
        | "Spin_7"
        | "Spin_8"
        | "Spin_9"
        | "Spin_10"
        | "Spin_11"
        | "Spin_12"
        | "Spin_13"
        | "Spin_14"
        | "Spin_15"
        | "Spin_16"
        | "Spin_17"
        | "Spin_18";
    width?: String;
    height?: String;
    color1?: String;
    color2?: String;
    duration?: Number;
}

interface SpinInnerInterface {
    width?: String;
    height?: String;
    color1?: String;
    color2?: String;
    duration?: Number;
}

const Spin_1 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid;
    border-color: ${(props: any) => props.color1 || "#000"}
        ${(props: any) => props.color2 || "#0000"};
    animation: spin ${(props: any) => props.duration || 1}s infinite;

    @keyframes spin {
        to {
            transform: rotate(0.5turn);
        }
    }
`;
const Spin_2 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid ${(props: any) => props.color1 || "lightblue"};
    border-right-color: ${(props: any) => props.color2 || "orange"};
    animation: spin ${(props: any) => props.duration || 1}s infinite linear;

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
`;
const Spin_3 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${(props: any) => props.color1 || "#25b09b"};
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: spin ${(props: any) => props.duration || 1}s infinite linear;

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
`;
const Spin_4 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    --b: 8px; /* the border thickness */
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 1px;
    background: conic-gradient(
            #0000 10%,
            ${(props: any) => props.color1 || "#f03355"}
        )
        content-box;
    -webkit-mask: repeating-conic-gradient(
            #0000 0deg,
            #000 1deg 20deg,
            #0000 21deg 36deg
        ),
        radial-gradient(
            farthest-side,
            #0000 calc(100% - var(--b) - 1px),
            #000 calc(100% - var(--b))
        );
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    animation: spin ${(props: any) => props.duration || 1}s infinite steps(10);

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
`;
const Spin_5 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    --b: 8px; /* the border thickness */
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${(props: any) => props.color1 || "#514b82"};
    -webkit-mask: repeating-conic-gradient(
            #0000 0deg,
            #000 1deg 70deg,
            #0000 71deg 90deg
        ),
        radial-gradient(
            farthest-side,
            #0000 calc(100% - var(--b) - 1px),
            #000 calc(100% - var(--b))
        );
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    animation: spin ${(props: any) => props.duration || 1}s infinite;

    @keyframes spin {
        to {
            transform: rotate(0.5turn);
        }
    }
`;
const Spin_6 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 3px;
    background: radial-gradient(
                farthest-side,
                ${(props: any) => props.color1 || "#ffa516"} 95%,
                #0000
            )
            50% 0/12px 12px no-repeat,
        radial-gradient(
                farthest-side,
                #0000 calc(100% - 5px),
                ${(props: any) => props.color2 || "#ffa516"} calc(100% - 4px)
            )
            content-box;
    animation: spin ${(props: any) => props.duration || 2}s infinite;

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
`;
const Spin_7 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    aspect-ratio: 1;
    --_c: radial-gradient(
        farthest-side,
        ${(props: any) => props.color1 || "#25b09b"} 92%,
        #0000
    );
    background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    animation: spin ${(props: any) => props.duration || 1}s infinite;

    @keyframes spin {
        to {
            transform: rotate(0.5turn);
        }
    }
`;
const Spin_8 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    aspect-ratio: 1;
    color: ${(props: any) => props.color1 || "#f03355"};
    --_c: no-repeat radial-gradient(farthest-side, currentColor 92%, #0000);
    background: var(--_c) 50% 0 /12px 12px, var(--_c) 50% 100%/12px 12px,
        var(--_c) 100% 50%/12px 12px, var(--_c) 0 50%/12px 12px,
        var(--_c) 50% 50%/12px 12px,
        conic-gradient(from 90deg at 4px 4px, #0000 90deg, currentColor 0) -4px -4px /
            calc(50% + 2px) calc(50% + 2px);
    animation: spin ${(props: any) => props.duration || 1}s infinite linear;

    @keyframes spin {
        to {
            transform: rotate(0.5turn);
        }
    }
`;
const Spin_9 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(
                farthest-side,
                ${(props: any) => props.color1 || "#f03355"} 95%,
                #0000
            )
            50% 1px/12px 12px no-repeat,
        radial-gradient(
            farthest-side,
            #0000 calc(100% - 14px),
            ${(props: any) => props.color2 || "#ccc"} 0
        );
    animation: spin ${(props: any) => props.duration || 2}s infinite linear;

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
`;
const Spin_10 = styled.div<SpinInnerInterface>`
    width: ${(props: any) => props.width || "50px"};
    height: ${(props: any) => props.height || "unset"};
    aspect-ratio: 1;
    color: ${(props: any) => props.color1 || "#854f1d"};
    border-radius: 50%;
    display: grid;
    background: conic-gradient(
                from 90deg at 4px 4px,
                #0000 90deg,
                currentColor 0
            ) -4px -4px / calc(50% + 2px) calc(50% + 2px),
        radial-gradient(
                farthest-side,
                currentColor 6px,
                #0000 7px calc(100% - 6px),
                currentColor calc(100% - 5px)
            )
            no-repeat;
    animation: spin ${(props: any) => props.duration || 2}s infinite linear;
    position: relative;

    :before {
        content: "";
        border-radius: inherit;
        background: inherit;
        transform: rotate(45deg);
    }

    @keyframes spin {
        to {
            transform: rotate(0.5turn);
        }
    }
`;

export const CircleSpin = (props: SpinInterface) => {
    const { type, color1, color2, duration, height, width } = props;

    return (
        <>
            {(!type || type === "Spin_1") && (
                <Spin_1
                    width={width}
                    height={height}
                    color1={color1}
                    color2={color2}
                    duration={duration}
                />
            )}
            {type === "Spin_2" && (
                <Spin_2
                    width={width}
                    height={height}
                    color1={color1}
                    color2={color2}
                    duration={duration}
                />
            )}
            {type === "Spin_3" && (
                <Spin_3
                    width={width}
                    height={height}
                    color1={color1}
                    duration={duration}
                />
            )}
            {type === "Spin_4" && (
                <Spin_4
                    width={width}
                    height={height}
                    color1={color1}
                    duration={duration}
                />
            )}
            {type === "Spin_5" && (
                <Spin_5
                    width={width}
                    height={height}
                    color1={color1}
                    duration={duration}
                />
            )}
            {type === "Spin_6" && (
                <Spin_6
                    width={width}
                    height={height}
                    color1={color1}
                    color2={color2}
                    duration={duration}
                />
            )}
            {type === "Spin_7" && (
                <Spin_7
                    width={width}
                    height={height}
                    color1={color1}
                    duration={duration}
                />
            )}
            {type === "Spin_8" && (
                <Spin_8
                    width={width}
                    height={height}
                    color1={color1}
                    duration={duration}
                />
            )}
            {type === "Spin_9" && (
                <Spin_9
                    width={width}
                    height={height}
                    color1={color1}
                    color2={color2}
                    duration={duration}
                />
            )}
            {type === "Spin_10" && (
                <Spin_10
                    width={width}
                    height={height}
                    color1={color1}
                    duration={duration}
                />
            )}
        </>
    );
};
