import sprite from '@/sprite/';
import {IIcon} from "./IIcon";

export const Icon = ({width, height, iconName, ...props}: IIcon): JSX.Element => {
    return (
        <svg width={width} height={height} {...props}>
            <use href={`${sprite.src}#${iconName}`}/>
        </svg>
    )
}