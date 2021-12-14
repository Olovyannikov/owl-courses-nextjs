import cn from "classnames";
import Link from "next/link";
import {useContext, useState} from "react";
import s from './Menu.module.scss';
import {motion, useReducedMotion} from "framer-motion";
import {useRouter} from "next/router";
import {Icon} from "@/components/Icon/Icon";
import {firstLevelMenu} from "../../../utils/utils";
import {AppContext} from "../../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../../types/menu.interface";

export const Menu = (): JSX.Element => {
    const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        visible: {
            marginBottom: 20,
            gap: "5px",
            transition: shouldReduceMotion ? {} : {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        hidden: {marginBottom: 0, gap: 0}
    }

    const variantsChildren = {
        visible: {opacity: 1, height: 'fit-content'},
        hidden: {opacity: shouldReduceMotion ? 1 : 0, height: 0}
    }

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                setAnnounce(m.isOpened ? 'closed' : 'opened');
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    }

    const buildFirstLevel = () => {
        return (
            <ul>
                {firstLevelMenu.map(menuItem => (
                    <li key={menuItem.route} aria-expanded={menuItem.id == firstCategory}>
                        <Link href={`/${menuItem.route}`}>
                            <a className={cn(s.firstLevel, s.link, {
                                [s.active]: menuItem.id === firstCategory
                            })}>
                                <Icon iconName={menuItem.icon}/>
                                {menuItem.name}
                            </a>
                        </Link>
                        {menuItem.id == firstCategory && buildSecondLevel(menuItem)}
                    </li>
                ))}
            </ul>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <ul className={s.secondLevelWrapper}>
                {menu?.map(m => {
                    m.pages.map(p => p.alias).includes(router.asPath.split('/')[2]) ? m.isOpened = true : '';
                    return (
                        <li key={m._id.secondCategory}>
                            <button
                                aria-expanded={m.isOpened}
                                className={s.secondLevel}
                                onClick={() => openSecondLevel(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </button>
                            <motion.ul
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={s.secondLevelBlock}
                            >
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                            </motion.ul>
                        </li>
                    )
                })}
            </ul>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (
            pages.map(p => (
                <motion.li variants={variantsChildren} key={p._id}>
                    <Link href={`/${route}/${p.alias}`}>
                        <a
                            aria-current={`/${route}/${p.alias}` == router.asPath ? 'page' : false}
                            tabIndex={isOpened ? 0 : -1}
                            className={cn(s.thirdLevel, {
                                [s.active]: `/${route}/${p.alias}` == router.asPath
                            })}>{p.category}</a>
                    </Link>
                </motion.li>
            ))
        )
    }

    return (
        <nav className={s.menu} role="navigation">
            {announce &&
                <span role="log" className="visually-hidden">{announce == 'opened' ? 'Развернуто' : 'Свернуто'}</span>}
            {buildFirstLevel()}
        </nav>
    )
}