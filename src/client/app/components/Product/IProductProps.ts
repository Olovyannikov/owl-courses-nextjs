import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ProductModel} from "@/client/types/product.interface";

export interface IProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    product: ProductModel;
}