import { useState, React } from 'react'
import { TextField, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { createAPIEndpoint } from '../actions/api';
import { useNavigate } from "react-router-dom";

export default function NewRecordForm() {

    let navigate = useNavigate();

    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        const value = e.target.value;
        setInputs({
            ...inputs,
            [e.target.name]: value
        })
    }

    const handleRequest = e => {
        e.preventDefault();
        createAPIEndpoint('create').post(inputs);
        navigate('/');
    }

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
                            name="carBrand"
                            id="car-brand"
                            label="Car brand"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            name="carModel"
                            id="model"
                            label="Model"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            name="carYear"
                            id="year"
                            label="Year"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            name="carFuelType"
                            id="fuel-type"
                            label="Fuel type"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column"
                        style={{ gap: 15 }}>
                        <TextField
                            name="carBodyStyle"
                            id="car-body-style"
                            label="Car body style"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            name="carTypeOfGearbox"
                            id="type-of-gearbox"
                            label="Type of gearbox"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            name="carColour"
                            id="colour"
                            label="Colour"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            name="carNumberOfDoors"
                            id="number-of-doors"
                            label="Number of doors"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <Button variant="contained"
                            onClick={handleRequest}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
