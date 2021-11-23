import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ReviewModel} from "@/client/types/product.interface";

export interface IReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: ReviewModel;
}