import s from './Sidebar.module.scss';
import {ISidebarProps} from "./ISidebarProps";
import {Menu} from "../Menu/Menu";
import {Icon} from "@/components/index";
import cn from "classnames";

export const Sidebar = ({className, ...props}: ISidebarProps): JSX.Element => {
    return (
        <aside className={cn(className, s.sidebar)} {...props} >
            <div className={s.logo}>
                <Icon width={160} height={43} iconName={'logo'}/>
            </div>
            <div className={s.search}>search</div>
            <Menu/>
        </aside>
    )
}