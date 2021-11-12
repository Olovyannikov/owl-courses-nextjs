import {ITagProps} from "./ITagProps";
import s from './Tag.module.scss';
import cn from "classnames";

export const Tag = ({variant = 'fill', size = 's', href, children, color, className, ...props}: ITagProps): JSX.Element => {
    return (
        <div className={cn(s.tag, className, {
            [s.s]: size === 's',
            [s.m]: size === 'm',
            [s.primary]: color === 'primary',
            [s.success]: color === 'success',
            [s.danger]: color === 'danger',
            [s.light]: color === 'light',
            [s.outline]: variant === 'outline',
        })} {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    )
}