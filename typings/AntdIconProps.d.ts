/**
 * This file was generated from AntdIcon.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type DatasourceTypeEnum = "buildin" | "addon";

export type BuildInIconEnum = "apartment" | "robot" | "bug" | "comment" | "verified" | "whatsapp" | "search" | "retweet" | "login" | "woman" | "plus" | "clear" | "collapse" | "expand" | "table" | "translate" | "GIF" | "Partition" | "index" | "aim" | "compress" | "expend" | "group" | "send" | "Report" | "View" | "shortcut" | "ungroup" | "CI" | "Dollar" | "frown" | "EURO" | "copyright" | "Pound" | "smile" | "trademark" | "timeout" | "earth" | "YUAN" | "sync" | "transaction" | "undo" | "redo" | "reload" | "reloadtime" | "message" | "dashboard" | "issuesclose" | "poweroff" | "logout" | "piechart" | "setting" | "eye" | "location" | "export" | "save" | "Import" | "appstore" | "layout" | "control" | "codelibrary" | "detail" | "wallet" | "adduser" | "deleteteam" | "deleteuser" | "addteam" | "user" | "team" | "areachart" | "linechart" | "barchart" | "pointmap" | "container" | "book" | "filesearch" | "file" | "alert" | "delete" | "bulb" | "bell" | "USB" | "skin" | "home" | "filter" | "like" | "unlike" | "unlock" | "lock" | "customerservice" | "rocket" | "shopping" | "folder" | "accountbook" | "contacts" | "carryout" | "calendar" | "scan" | "select" | "barcode" | "camera" | "cluster" | "gateway" | "car" | "printer" | "read" | "video" | "notification" | "sound" | "qrcode" | "fund" | "image" | "mail" | "heart" | "block" | "error" | "star" | "gold" | "heatmap" | "wifi" | "edit" | "key" | "api" | "disconnect" | "highlight" | "link" | "man" | "pushpin" | "phone" | "shake" | "tag" | "wrench" | "scissor" | "mr" | "share" | "branches" | "fork" | "shrink" | "arrawsalt" | "verticalright" | "verticalleft" | "right" | "left" | "up" | "down" | "fullscreen" | "doubleleft" | "doubleright" | "arrowright" | "arrowup" | "arrowleft" | "arrowdown" | "upload" | "exclaimination" | "infomation" | "code" | "check" | "desktop" | "stop" | "thunderbolt";

export interface IconSourceListType {
    url: string;
}

export interface IconSourceListPreviewType {
    url: string;
}

export interface AntdIconContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasourceType: DatasourceTypeEnum;
    buildInIcon: BuildInIconEnum;
    value: string;
    valueAttribute?: EditableValue<string>;
    fontsize: number;
    rotate: number;
    spin: boolean;
    iconSourceList: IconSourceListType[];
}

export interface AntdIconPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    datasourceType: DatasourceTypeEnum;
    buildInIcon: BuildInIconEnum;
    value: string;
    valueAttribute: string;
    fontsize: number | null;
    rotate: number | null;
    spin: boolean;
    iconSourceList: IconSourceListPreviewType[];
}
