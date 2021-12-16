import * as React from 'react';
import {withLayout} from "@/layout/Layout";
import {Title} from "@/client/app/components";

export const Error404 = (): JSX.Element => {

    return <Title variant="h1">404 Not Found</Title>;

};

export default withLayout(Error404);
