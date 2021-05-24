import React, { FunctionComponent } from 'react';

interface Props {
    crust: string;
    flavor: string;
    size: string;
    table: BigInteger;
    isLoading: boolean;
    error: Error | string;
}

const PizzaComponent: FunctionComponent<Props> = props => {
    const {crust, flavor, size, table, isLoading, error } = props;
    if(error) {
        console.log('error: ', error);
        return <div>{error}</div>
    }

    if (isLoading) {
        return <div>{'Loading..'}</div>
    }

    return<div><h3>Crust : </h3>{crust}<h3>Flavor : </h3>{flavor}<h3>Size : </h3>{size}</div>

}

export default PizzaComponent