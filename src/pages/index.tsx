import axios from "axios";
import {GetStaticProps} from "next";
import {API} from "@/client/utils/api";
import {withLayout} from '@/client/app/layout/Layout';
import {MenuItem} from "@/client/types/menu.interface";

const Index = ({menu}: IndexProps): JSX.Element => {

    return (
        <></>
    )
}

export default withLayout(Index);

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