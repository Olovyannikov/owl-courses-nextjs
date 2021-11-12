import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 's' | 'm';
    variant?: 'outline' | 'fill';
    color?: 'primary' | 'danger' | 'light' | 'success';
    href?: string;
}