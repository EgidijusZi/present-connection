import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { createAPIEndpoint } from '../actions/api';
import { TextField, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function DetailsPage() {

    const params = useParams();

    const [cars, setCars] = useState({});

    useEffect(() => {

        const fetchData = async () => {
            const response = await createAPIEndpoint('cars/details').fetchById(params.id);
            setCars(response.data);
        }

        fetchData()

    }, [params.id])

    if (!cars.length) {
        return;
    }

    console.log(cars);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container direction="row"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}>
                <Grid item>
                    <Grid container direction="column"
                        //marginTop - workaround to match column rows...
                        style={{ gap: 15, marginTop: '-51.5px' }}>
                        {cars.map((row) => {
                            return (
                                <>
                                    <TextField
                                    name="carBrand"
                                    id="car-brand"
                                    label="Car brand"
                                    variant="outlined"
                                    value={row.carBrand}
                                    disabled={true}
                                />
                                <TextField
                                    name="carModel"
                                    id="model"
                                    label="Model"
                                    variant="outlined"
                                    value={row.carModel}
                                    disabled={true}
                                />
                                <TextField
                                    name="carYear"
                                    id="year"
                                    label="Year"
                                    variant="outlined"
                                    value={row.carYear}
                                    disabled={true}
                                />
                                <TextField
                                    name="carFuelType"
                                    id="fuel-type"
                                    label="Fuel type"
                                    variant="outlined"
                                    value={row.carFuelType}
                                    disabled={true}
                                />
                                </>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column"
                        style={{ gap: 15 }}>
                        {
                            cars.map((row) => {
                                return (
                                    <>
                                        <TextField
                                        name="carBodyStyle"
                                        id="car-body-style"
                                        label="Car body style"
                                        variant="outlined"
                                        value={row.carBodyStyle}
                                        disabled={true}
                                    />
                                    <TextField
                                        name="carTypeOfGearbox"
                                        id="type-of-gearbox"
                                        label="Type of gearbox"
                                        variant="outlined"
                                        value={row.carTypeOfGearbox}
                                        disabled={true}
                                    />
                                    <TextField
                                        name="carColour"
                                        id="colour"
                                        label="Colour"
                                        variant="outlined"
                                        value={row.carColour}
                                        disabled={true}
                                    />
                                    <TextField
                                        name="carNumberOfDoors"
                                        id="number-of-doors"
                                        label="Number of doors"
                                        variant="outlined"
                                        value={row.carNumberOfDoors}
                                        disabled={true}
                                    />
                                    </>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
