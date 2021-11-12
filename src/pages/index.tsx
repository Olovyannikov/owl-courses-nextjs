import {useEffect, useState} from "react";
import {Title,Button} from "@/components/";

const Home = (): JSX.Element => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log('Counter: ' + counter);
        return function clean() {
            console.log('Unmount');
        }
    });

    return (
        <>
            <Title variant={'h1'}>
                {counter}
            </Title>
            <Button icon={'right'} onClick={() => setCounter(counter => counter + 1)}>Click Me!</Button>
        </>
    )
}

export default Home;