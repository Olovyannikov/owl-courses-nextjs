import {withLayout} from "../client/app/layout/Layout";
import {useState} from "react";
import {Title, Button, Rating} from "@/components/index";

const Index = (): JSX.Element => {
    const [rating, setRating] = useState<number>(4);

    return (
        <>123</>
    )
}

export default withLayout(Index);