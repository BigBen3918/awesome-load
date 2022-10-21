import React from "react";
import styled from "styled-components";

interface SpinInterface {
    width?: String;
    height?: String;
    color1?: String;
    color2?: String;
    duration?: Number;
}

const ColorSchema = {
    Red: "#ff0000",
    Blue: "#0000FF",
    Green: "#00FF00",
    Pink: "",
    Orange: "",
    Yellow: "",
    Purple: "",
    Brown: "",
    White: "",
    Black: "",
    Azure: "",
    Cyan: "",
    Olive: "",
    Ivory: "",
    Silver: "",
    Gray: "",
    Maroon: "",
    Charcoal: "",
    Coral: "",
    Wheat: "",
    Lime: "",
};

const Spin_1 = styled.div`
    width: ${(props: any) => props.width};
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid;
    border-color: #000 #0000;
    animation: spin_1 1s infinite;

    @keyframes spin_1 {
        to {
            transform: rotate(0.5turn);
        }
    }
`;

export const CircleSpin = (props: SpinInterface) => {
    const { color1, color2, duration, height, width } = props;

    return <Spin_1 width={width} height={height} borderColor={color1} />;
};
