/// <reference types="react" />
interface SpinInterface {
    type: "Spin_1" | "Spin_2" | "Spin_3" | "Spin_4" | "Spin_5" | "Spin_6" | "Spin_7" | "Spin_8" | "Spin_9" | "Spin_10" | "Spin_11" | "Spin_12" | "Spin_13" | "Spin_14" | "Spin_15" | "Spin_16" | "Spin_17" | "Spin_18";
    width?: String;
    height?: String;
    color1?: String;
    color2?: String;
    duration?: Number;
}
export declare const CircleSpin: (props: SpinInterface) => JSX.Element;
export {};
