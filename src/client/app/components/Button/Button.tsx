import React, {useEffect} from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
import {IButton} from "./IButton";
import {Icon} from "../Icon/Icon";
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

    useEffect(() => {
        scale.onChange((s) => console.log(s))
    }, []);

    return (
        <motion.button style={{scale}} whileHover={{scale: 1.05}}
                       className={cn(s.btn, className, s[variant], {[s.icon]: icon})} type="button" {...props}>
            {children}
            {arrow !== 'none' &&
                <span className={cn(s.arrow)}>
                <Icon width={6} height={10} iconName={'arrow'}/>
            </span>}
        </motion.button>
    )
}