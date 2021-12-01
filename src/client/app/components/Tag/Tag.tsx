import {ITagProps} from "./ITagProps";
import s from './Tag.module.scss';
import cn from "classnames";

export const Tag = ({
                        variant = 'fill',
                        size = 's',
                        href,
                        children,
                        color = 'primary',
                        className,
                        ...props
                    }: ITagProps): JSX.Element =>
    <div className={cn(s.tag, className, s[size], s[color], s[variant])} {...props}>
        {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
