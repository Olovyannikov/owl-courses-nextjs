import {withLayout} from "../client/app/layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "@/client/types/menu.interface";
import {API} from "@/client/utils/api";

const Search = (): JSX.Element => {

    return (
        <>search
        </>
    )
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find,
        {firstCategory});
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface IndexProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}