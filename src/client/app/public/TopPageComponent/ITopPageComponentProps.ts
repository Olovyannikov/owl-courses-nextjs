import {TopLevelCategory, TopPageModel} from "@/client/types/page.interface";
import {ProductModel} from "@/client/types/product.interface";

export interface ITopPageComponentProps extends Record<string, unknown> {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}