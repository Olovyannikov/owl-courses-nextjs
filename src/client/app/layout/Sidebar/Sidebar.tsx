import cn from "classnames";
import Link from 'next/link';
import {Menu} from "../Menu/Menu";
import {useRouter} from "next/router";
import s from './Sidebar.module.scss';
import {ISidebarProps} from "./ISidebarProps";
import {Icon, Search} from "@/components/index";

export const Sidebar = ({className, ...props}: ISidebarProps): JSX.Element => {
    const router = useRouter();

    return (
        <aside className={cn(className, s.sidebar)} {...props} >
            <div className={s.logo}>
                {router.pathname === '/' ? <Icon width={160} height={43} iconName={'logo'}/> :
                    <Link href={"/"}><a><Icon width={160} height={43} iconName={'logo'}/></a></Link>}
            </div>
            <div className={s.search}>
                <Search/>
            </div>
            <Menu/>
        </aside>
    )
}