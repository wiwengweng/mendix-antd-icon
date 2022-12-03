import {
    changePropertyIn,
    Problem,
    Properties,
    Property,
    transformGroupsIntoTabs,
    RowLayoutProps,
    StructurePreviewProps,
    hidePropertyIn,
    hidePropertiesIn
} from "@mendix-cn/piw-utils-internal";
import { AntIconPreviewProps } from "../typings/AntIconProps";

export function getProperties(
    values: AntIconPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    changePropertyIn(
        defaultProperties,
        values,
        (prop: Property) => {
            console.log(prop);
        },
        "buildInIcon"
    );
    if (values.datasourceType === "addon") {
        hidePropertyIn(defaultProperties, values, "buildInIcon");
    } else {
        hidePropertiesIn(defaultProperties, values, ["value", "iconSourceList"]);
    }
    if (values.valueAttribute) {
        hidePropertiesIn(defaultProperties, values, ["value", "buildInIcon"]);
    }
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}

export const getPreview = (values: AntIconPreviewProps): StructurePreviewProps => {
    console.log(values);
    const iconSvgImage = `<svg t="1669945908116" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2333" width="200" height="200"><path d="M512 953.856c-20.48 0-40.96-6.144-58.368-18.944-2.048-1.536-247.808-200.192-348.672-349.184C71.68 536.064 25.6 467.968 25.6 370.176 25.6 204.8 157.184 70.144 318.464 70.144c72.192 0 140.288 26.624 193.536 74.752a287.1296 287.1296 0 0 1 193.536-74.752c161.28 0 292.864 134.656 292.864 300.032 0 97.792-46.08 165.888-79.872 215.552-100.864 148.992-346.624 347.648-348.672 349.184-17.408 12.8-37.376 18.944-57.856 18.944zM318.464 158.72c-112.64 0-204.288 94.72-204.288 211.456 0 70.656 34.304 121.344 64.512 165.888 85.504 126.464 305.664 310.272 327.68 327.68 3.584 2.56 8.192 2.56 11.776 0 22.016-16.896 242.176-200.704 327.68-327.168 30.208-44.544 64.512-95.232 64.512-165.888 0-116.736-91.648-211.456-204.8-211.456-61.952 0-119.808 28.672-158.72 78.336-8.704 9.728-21.504 15.872-34.816 15.872-13.312 0-26.624-6.144-34.816-16.896a200.5504 200.5504 0 0 0-158.72-77.824z" fill="" p-id="2334"></path></svg>`;
    const titleHeader: RowLayoutProps = {
        type: "RowLayout",
        columnSize: "grow",
        padding: 5,
        borders: true,
        borderWidth: 1,
        borderRadius: 5,
        children: [
            {
                type: "Container",
                grow: 1,
                children: [
                    {
                        type: "Text",
                        content: "Antd Icon",
                        fontSize: 10
                    }
                ]
            },
            // {
            //     type: "Text",
            //     content: values.valueAttribute
            //         ? `{{绑定属性 ${values.valueAttribute}}}`
            //         : values.datasourceType === "addon"
            //         ? values.value
            //         : values.buildInIcon
            // },
            {
                type: "Image",
                document: iconSvgImage,
                grow: 0,
                height: 16
            }
        ]
    };
    return {
        type: "Container",
        children: [titleHeader]
    };
};

export function check(values: AntIconPreviewProps): Problem[] {
    const errors: Problem[] = [];
    if (values.datasourceType === "addon" && !values.valueAttribute && values.value === "") {
        errors.push({
            message: "图标代码不能为空"
        });
    }

    return errors;
}
