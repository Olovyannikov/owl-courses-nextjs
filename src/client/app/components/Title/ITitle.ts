import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ITitle extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    variant: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}