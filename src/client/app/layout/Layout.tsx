import s from './Layout.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {ILayoutProps} from "./ILayoutProps";
import {AppContextProvider, IAppContext} from "../../context/app.context";
import React, {FunctionComponent} from "react";
import {Up} from "@/components/index";

const Layout = ({children}: ILayoutProps): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <Header className={s.header}/>
            <Main className={s.main}>
                <Sidebar className={s.sidebar}/>
                <div className={s.content}>{children}</div>
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