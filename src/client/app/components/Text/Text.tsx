import cn from "classnames";
import s from './Text.module.scss';
import {ITextProps} from "./ITextProps";

export const Text = ({size = 'md', children, className, ...props}: ITextProps): JSX.Element => {
    return <p className={cn(s.text, className, {
        [s.small]: size === 'sm',
        [s.medium]: size === 'md',
        [s.large]: size === 'lg'
    })} {...props}>{children}</p>

}