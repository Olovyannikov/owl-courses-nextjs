import {withLayout} from "../client/app/layout/Layout";
import {useState} from "react";
import {Title, Button, Rating} from "@/components/index";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../client/types/menu.interface";

const Index = ({menu}: IndexProps): JSX.Element => {

    return (

        <ul>
            {menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
        </ul>
    )
}

export default withLayout(Index);

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
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