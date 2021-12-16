import s from './Up.module.scss';
import {Icon} from "@/components/Icon/Icon";
import {useScrollY} from "@/client/hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {Button} from "@/client/app/components";

export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({opacity: y / document.body.scrollHeight});
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <motion.div
            className={s.up}
            animate={controls}
            initial={{opacity: 0}}
        >
            <Button aria-label="Наверх" icon onClick={scrollToTop}>
                <Icon iconName={'up'} width={20} height={12}/>
            </Button>
        </motion.div>
    )
}