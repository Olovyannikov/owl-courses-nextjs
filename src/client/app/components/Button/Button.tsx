import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
import {IButton} from "./IButton";
import {Icon} from "../Icon/Icon";

export const Button = ({
                           variant = 'primary',
                           icon = 'none',
                           className,
                           children,
                           ...props
                       }: IButton) =>
    <button className={cn(s.btn, className, s[variant])} type="button" {...props}>
        {children}
        {icon !== 'none' &&
            <span className={cn(s.icon, s[icon])}>
                <Icon width={6} height={10} iconName={'arrow'}/>
            </span>}
    </button>