import {withLayout} from "../client/app/layout/Layout";
import {useEffect, useState} from "react";
import {Title, Button, Rating} from "@/components/index";

const Home = (): JSX.Element => {
    const [rating, setRating] = useState<number>(4);

    return (
        <></>
    )
}

export default withLayout(Home);