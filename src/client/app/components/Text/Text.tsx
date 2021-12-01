import cn from "classnames";
import s from './Text.module.scss';
import {ITextProps} from "./ITextProps";

export const Text = ({size = 'md', children, className, ...props}: ITextProps): JSX.Element =>
    <p className={cn(s.text, className, s[size])} {...props}>{children}</p>
