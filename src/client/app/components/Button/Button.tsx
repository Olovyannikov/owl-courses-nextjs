import React from 'react';
import cn from 'classnames';
import {Icon} from "../Icon/Icon";
import {IButton} from "./IButton";
import s from './Button.module.scss';
import {motion, useMotionValue} from 'framer-motion';

export const Button = ({
                           variant = 'primary',
                           arrow = 'none',
                           className,
                           children,
                           icon = false,
                           ...props
                       }: IButton) => {

    const scale = useMotionValue(1);

    return (
        <motion.button style={{scale}} whileHover={{scale: 1.05}}
                       className={cn(s.btn, className, s[variant], {[s.icon]: icon})} type="button" {...props}>
            {children}
            {arrow !== 'none' &&
                <span className={cn(s.arrow, s[arrow])}>
                    <Icon width={6} height={10} iconName={'arrow'}/>
                </span>
            }
        </motion.button>
    )
}