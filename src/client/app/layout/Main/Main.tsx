import s from './Main.module.scss';
import {IMainProps} from './IMainProps';
import cn from "classnames";

export const Main = ({children, className, ...props}: IMainProps): JSX.Element =>
    <main className={cn(className, s.main)} {...props}>{children}</main>
