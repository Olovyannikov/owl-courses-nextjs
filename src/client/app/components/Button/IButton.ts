import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    variant?: 'primary' | 'outline-secondary';
    icon?: 'right' | 'down' | 'none';
}