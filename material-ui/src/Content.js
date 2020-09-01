import React from 'react';

import { Grid } from '@material-ui/core';
import CoffeeCard from './CoffeeCard';

const Content = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <CoffeeCard
                    title="Keurig K-Duo"
                    subtitle="$149.99"
                    avatarUrl="https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png"
                    imageSrc="https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg"
                    description="Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup "
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard />
            </Grid>
        </Grid>
    )
};

export default Content;
