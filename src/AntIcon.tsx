import { createElement, useEffect, useMemo, useState } from "react";
import { ValueStatus } from "mendix";

import { AntIconContainerProps } from "../typings/AntIconProps";
import AntIconComponent from "./components/AntIconComponent";

// import { PropertySafetyOutlined } from "@ant-design/icons";

export default function AntIcon(props: AntIconContainerProps): any {
    const iconSourceList = useMemo(() => props.iconSourceList.map(d => d.url), [props.iconSourceList]);
    const [icon, setIcon] = useState<string | undefined>();
    const iconStyle = { ...props.style, "font-size": props.fontsize };
    useEffect(() => {
        if (props.valueAttribute && props.valueAttribute.status === ValueStatus.Available) {
            setIcon(props.valueAttribute.value?.toString());
        }
        if (!props.valueAttribute) {
            setIcon(props.datasourceType === "addon" ? props.value : props.buildInIcon);
        }
    }, [props.valueAttribute, props.datasourceType, props.value, props.buildInIcon]);
    return (
        <AntIconComponent
            iconSourceList={iconSourceList}
            class={props.class}
            style={iconStyle}
            name={props.name}
            tabIndex={props.tabIndex}
            icon={icon}
            spin={props.spin}
            rotate={props.rotate}
        ></AntIconComponent>
    );
}
