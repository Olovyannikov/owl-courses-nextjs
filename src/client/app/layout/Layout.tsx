import cn from "classnames";
import {Main} from "./Main/Main";
import s from './Layout.module.scss';
import {Up} from "@/components/index";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Sidebar} from "./Sidebar/Sidebar";
import {ILayoutProps} from "./ILayoutProps";
import {AppContextProvider, IAppContext} from "../../context/app.context";
import React, {FunctionComponent, useState, KeyboardEvent, useRef} from "react";

const Layout = ({children}: ILayoutProps): JSX.Element => {
    const [isSkip, setSkip] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }

        setSkip(false);
    }

    return (
        <div className={s.wrapper}>
            <a
                onFocus={() => setSkip(true)}
                onBlur={() => setSkip(false)}
                onKeyDown={skipContentAction}
                tabIndex={1} className={cn(s.skip, {[s.displayed]: isSkip})}>
                Сразу к содержанию
            </a>
            <Header className={s.header}/>
            <Main className={s.main}>
                <Sidebar className={s.sidebar}/>
                <div className={s.content} ref={bodyRef} tabIndex={0}>{children}</div>
            </Main>
            <Footer className={s.footer}/>
            <Up/>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>): (props: T) => void => {
    return function withLayoutComponent(props: T): JSX.Element {
        return(
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout><Component {...props}/></Layout>
            </AppContextProvider>)
    }
}