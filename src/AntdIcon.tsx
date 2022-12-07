import { createElement, useEffect, useMemo, useState } from "react";
import { ValueStatus } from "mendix";

import { AntdIconContainerProps } from "../typings/AntdIconProps";
import AntdIconComponent from "./components/AntdIconComponent";

// import { PropertySafetyOutlined } from "@ant-design/icons";

export default function AntIcon(props: AntdIconContainerProps): any {
    const iconSourceList = useMemo(() => props.iconSourceList.map(d => d.url), [props.iconSourceList]);
    const [icon, setIcon] = useState<string | undefined>();
    const iconStyle = { ...props.style, "font-size": props.fontsize + "px" };
    useEffect(() => {
        if (props.valueAttribute && props.valueAttribute.status === ValueStatus.Available) {
            setIcon(props.valueAttribute.value?.toString());
        }
        if (!props.valueAttribute) {
            setIcon(props.datasourceType === "addon" ? props.value : props.buildInIcon);
        }
    }, [props.valueAttribute, props.datasourceType, props.value, props.buildInIcon]);
    return (
        <AntdIconComponent
            iconSourceList={iconSourceList}
            class={props.class}
            style={iconStyle}
            name={props.name}
            tabIndex={props.tabIndex}
            icon={icon}
            spin={props.spin}
            rotate={props.rotate}
        ></AntdIconComponent>
    );
}
