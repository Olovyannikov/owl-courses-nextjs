import s from './Layout.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {ILayoutProps} from "./ILayoutProps";
import {FunctionComponent} from "react";

const Layout = ({children}: ILayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <Main>
                <Sidebar/>
                <div>{children}</div>
            </Main>
            <Footer/>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): (props: T) => void => {
    return function withLayoutComponent(props: T): JSX.Element {
        return <Layout><Component {...props}/></Layout>
    }
}