import React from 'react';

import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';
import coffeeMakerList from './constants';

const Content = () => {
    const getCoffeeMakerCard = (coffeeMakerData) => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard {...coffeeMakerData} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={2}>
            {coffeeMakerList.map(coffeeMaker => getCoffeeMakerCard(coffeeMaker))}
        </Grid>
    )
};

export default Content;
