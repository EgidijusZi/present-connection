import { Box, Button } from '@mui/material'
import { useState, React, useEffect } from 'react'
import { createAPIEndpoint } from '../actions/api';
import { DataGrid } from '@mui/x-data-grid';
import NewRecordForm from './NewRecordForm';
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    let navigate = useNavigate();

    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);

    let rows = [];

    const columns = [
        { field: 'carBrand', headerName: 'Car brand', width: 220 },
        { field: 'model', headerName: 'Model', width: 220 },
        { field: 'year', headerName: 'Year', width: 220 }
    ]

    const onClickHandle = () => {
        setOpen(true);
        navigate('cars/create');
    }

    const handleRowClick = (props) => {
        navigate(`/cars/details/${props.row.id}`);
    }

    useEffect(() => {

        const fetchData = async () => {
            const response = await createAPIEndpoint('cars').fetchAll();
            setCars(response.data);
        }

        fetchData()

    }, [])

    if (!cars.length) {
        return;
    } else {
        cars.map((row) => rows.push({ id: row.carId, carBrand: row.carBrand, model: row.carModel, year: row.carYear }))
    }


    return (
        <Box sx={{ width: '670px', m: '100px auto', position: 'relative' }}>
            <Button variant='contained'
                sx={{ position: 'absolute', bottom: '0', right: '0', mb: "-50px" }}
                onClick={onClickHandle}>
                Add new entry
            </Button>
            {open && <NewRecordForm />}
            <div style={{ height: 380, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    onRowClick={handleRowClick}
                />
            </div>
        </Box>

    )
}
