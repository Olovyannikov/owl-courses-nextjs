import s from './Menu.module.scss';
import cn from "classnames";
import Link from "next/link";
import {Icon} from "@/components/Icon/Icon";
import {useContext} from "react";
import {useRouter} from "next/router";
import {AppContext} from "../../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../../types/menu.interface";
import {firstLevelMenu} from "../../../utils/utils";

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            m._id.secondCategory == secondCategory ? m.isOpened = !m.isOpened : '';
            return m;
        }));
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menuItem => (
                    <div key={menuItem.route}>
                        <Link href={`/${menuItem.route}`}>
                            <a className={cn(s.firstLevel, s.link, {
                                [s.active]: menuItem.id === firstCategory
                            })}>
                                <Icon iconName={menuItem.icon}/>
                                {menuItem.name}
                            </a>
                        </Link>
                        {menuItem.id == firstCategory && buildSecondLevel(menuItem)}
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={s.secondLevelWrapper}>
                {menu?.map(m => {
                    m.pages.map(p => p.alias).includes(router.asPath.split('/')[2]) ? m.isOpened = true : '';
                    return (
                        <div key={m._id.secondCategory}>
                            <button className={s.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</button>
                            <div className={cn(s.secondLevelBlock, {
                                [s.active]: m.isOpened
                            })}>{buildThirdLevel(m.pages, menuItem.route)}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link key={p.alias} href={`/${route}/${p.alias}`}><a className={cn(s.thirdLevel, {
                    [s.active]: `/${route}/${p.alias}` == router.asPath
                })}>{p.category}</a></Link>
            ))
        )
    }

    return (
        <div className={s.menu}>
            {buildFirstLevel()}
        </div>
    )
}