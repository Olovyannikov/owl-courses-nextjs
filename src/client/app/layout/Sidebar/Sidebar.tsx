import s from './Sidebar.module.scss';
import {ISidebarProps} from "./ISidebarProps";

export const Sidebar = ({...props}: ISidebarProps): JSX.Element => {
    return (
        <aside {...props}>
            sidebar
        </aside>
    )
}