import s from './Card.module.scss';
import {ICardProps} from "./ICardProps";
import cn from "classnames";
import {ForwardedRef, forwardRef} from "react";
import {motion} from "framer-motion";

export const Card = motion(forwardRef(({variant = 'white', className, children, ...props}: ICardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element =>
    <div className={cn(className, s.card, s[variant])} ref={ref} {...props}>{children}</div>
));