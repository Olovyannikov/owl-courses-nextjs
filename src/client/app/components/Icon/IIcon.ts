import {SVGProps} from "react";

export interface IIcon extends SVGProps<SVGSVGElement> {
    iconName: string;
    width?: string | number;
    height?: string | number;
}