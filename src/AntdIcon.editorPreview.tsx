import { createElement, useEffect, useMemo, useState } from "react";
import { AntdIconPreviewProps } from "../typings/AntdIconProps";
import AntdIconComponent from "./components/AntdIconComponent";

declare function require(name: string): string;

export function preview(props: AntdIconPreviewProps): any {
    // console.log(parseStyle(props.style));
    const iconSourceList = useMemo(() => props.iconSourceList.map(d => d.url), [props.iconSourceList]);
    const [icon, setIcon] = useState<string | undefined>();
    useEffect(() => {
        if (props.valueAttribute) {
            setIcon(props.valueAttribute);
        }
        if (!props.valueAttribute) {
            setIcon(props.datasourceType === "addon" ? props.value : props.buildInIcon);
        }
    }, [props.valueAttribute, props.datasourceType, props.value, props.buildInIcon]);
    return (
        <AntdIconComponent
            iconSourceList={iconSourceList}
            icon={icon}
            class={props.class}
            style={props.styleObject}
            spin={props.spin}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/AntdIcon.css");
}
