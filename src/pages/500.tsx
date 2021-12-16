import * as React from 'react';
import {withLayout} from "@/layout/Layout";
import {Title} from "@/client/app/components";

export const Error500 = (): JSX.Element => {

    return <Title variant="h1">500 Fail</Title>;

};

export default withLayout(Error500);
