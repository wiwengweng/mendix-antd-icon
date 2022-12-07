import { createElement } from "react";
import { AntdIconPreviewProps } from "../typings/AntdIconProps";
import AntdIconComponent from "./components/AntdIconComponent";

declare function require(name: string): string;

export function preview(props: AntdIconPreviewProps): any {
    // console.log(parseStyle(props.style));

    return (
        <AntdIconComponent
            icon={props.datasourceType === "addon" ? props.value : props.buildInIcon}
            class={props.className}
            // style={props.style}
            spin={props.spin}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/AntdIcon.css");
}
