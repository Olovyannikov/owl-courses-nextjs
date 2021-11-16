import s from './Layout.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {ILayoutProps} from "./ILayoutProps";
import {FunctionComponent} from "react";

const Layout = ({children}: ILayoutProps): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <Header className={s.header}/>
            <Main className={s.main}>
                <Sidebar className={s.sidebar}/>
                <div className={s.content}>{children}</div>
            </Main>
            <Footer className={s.footer}/>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): (props: T) => void => {
    return function withLayoutComponent(props: T): JSX.Element {
        return <Layout><Component {...props}/></Layout>
    }
}