import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ProductModel} from "@/client/types/product.interface";

export interface IProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    product: ProductModel;
}