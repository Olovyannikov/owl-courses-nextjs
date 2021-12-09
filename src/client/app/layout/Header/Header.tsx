import cn from "classnames";
import s from './Header.module.scss';
import {useRouter} from "next/router";
import { motion } from 'framer-motion';
import {useEffect, useState} from "react";
import {Icon} from "@/components/Icon/Icon";
import {IHeaderProps} from "./IHeaderProps";
import {Button} from "@/client/app/components";
import {Sidebar} from "@/layout/Sidebar/Sidebar";

export const Header = ({className, ...props}: IHeaderProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {opacity: 1, x: 0, transition: {stiffness: 20}},
        closed: {opacity: 0, x: '100%'}
    }

    return (
        <header className={cn(className, s.header)} {...props}>
            <Icon iconName={'logo'} width={160} height={43}/>
            <Button icon variant={'outline-secondary'} onClick={() => setIsOpened(!isOpened)}><Icon width={20} height={17} iconName={'burger'}/></Button>
            <motion.div className={s.menu} variants={variants} initial={'closed'} animate={isOpened ? 'opened' : 'closed'}>
                <Sidebar/>
                <Button className={s.close} icon variant="outline-secondary" onClick={() => setIsOpened(!isOpened)}><Icon iconName="cross" width={19} height={19}/></Button>
            </motion.div>
        </header>
    )
}
