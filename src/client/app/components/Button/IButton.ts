import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface IButton extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
    children: ReactNode;
    variant?: 'primary' | 'outline-secondary';
    arrow?: 'right' | 'down' | 'none';
    icon?: boolean;
}