import cn from "classnames";
import Link from "next/link";
import {useContext} from "react";
import s from './Menu.module.scss';
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {Icon} from "@/components/Icon/Icon";
import {firstLevelMenu} from "../../../utils/utils";
import {AppContext} from "../../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../../types/menu.interface";

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 20,
            gap: "5px",
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        hidden: {marginBottom: 0, gap: 0}
    }

    const variantsChildren = {
        visible: {opacity: 1, height: 'fit-content'},
        hidden: {opacity: 0, height: 0}
    }

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
                            <button tabIndex={0} className={s.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</button>
                            <motion.ul
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={cn(s.secondLevelBlock)}
                            >
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                            </motion.ul>
                        </div>
                    )
                })}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (
            pages.map(p => (
                <motion.li variants={variantsChildren} key={p._id}>
                    <Link href={`/${route}/${p.alias}`}>
                        <a tabIndex={isOpened ? 0 : -1} className={cn(s.thirdLevel, {
                        [s.active]: `/${route}/${p.alias}` == router.asPath
                    })}>{p.category}</a>
                    </Link>
                </motion.li>
            ))
        )
    }

    return (
        <div className={s.menu}>
            {buildFirstLevel()}
        </div>
    )
}