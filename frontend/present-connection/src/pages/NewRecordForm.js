import React from 'react'
import { TextField, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function NewRecordForm() {
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
                        <TextField
                            id="car-brand"
                            label="Car brand"
                            variant="outlined"
                        />
                        <TextField
                            id="model"
                            label="Model"
                            variant="outlined"
                        />
                        <TextField
                            id="year"
                            label="Year"
                            variant="outlined"
                        />
                        <TextField
                            id="fuel-type"
                            label="Fuel type"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column"
                        style={{ gap: 15 }}>
                        <TextField
                            id="car-body-style"
                            label="Car body style"
                            variant="outlined"
                        />
                        <TextField
                            id="type-of-gearbox"
                            label="Type of gearbox"
                            variant="outlined"
                        />
                        <TextField
                            id="colour"
                            label="Colour"
                            variant="outlined"
                        />
                        <TextField
                            id="number-of-doors"
                            label="Number of doors"
                            variant="outlined"
                        />
                        <Button variant="contained">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
