import sprite from '@/sprite';
import {IIcon} from "./IIcon";

export const Icon = ({width, height, iconName}: IIcon): JSX.Element => {
    return (
        <svg width={width} height={height}>
            <use href={`${sprite.src}#${iconName}`}/>
        </svg>
    )
}