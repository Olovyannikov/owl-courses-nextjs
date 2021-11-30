import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
import {IButton} from "./IButton";
import {Icon} from "../Icon/Icon";

export const Button = ({
                           children,
                           variant = 'primary',
                           className,
                           icon = 'none',
                           ...props
                       }: IButton) => {

    return (
        <button className={cn(s.btn, className, {
            [s.primary]: variant === 'primary',
            [s.outlineSecondary]: variant === 'outline-secondary'
        })} type="button" {...props}>{children}{icon !== 'none' &&
        <span className={cn(s.icon, {[s.down]: icon === 'down', [s.right]: icon === 'right'})}>
            <Icon width={6} height={10} iconName={'arrow'}/>
        </span>}
        </button>
    )
}
