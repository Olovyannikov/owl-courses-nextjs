import s from './Main.module.scss';
import {IMainProps} from './IMainProps';

export const Main = ({children, ...props}: IMainProps): JSX.Element => <main {...props}>{children}</main>
