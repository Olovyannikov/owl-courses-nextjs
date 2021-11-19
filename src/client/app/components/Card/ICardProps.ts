import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    variant?: 'white' | 'blue';
}