import { Box, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Button } from '@mui/material'
import { useState, React, useEffect } from 'react'
import { createAPIEndpoint } from '../actions/api';
import { DataGrid } from '@mui/x-data-grid';
import NewRecordForm from './NewRecordForm';

export default function HomePage() {

    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);

    const onClickHandle = () => {
        setOpen(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await createAPIEndpoint('cars').fetchAll();
            setCars(response.data);
        };

        fetchData();
    }, []);

    const columns = [
        { field: 'carBrand', headerName: 'Car brand', width: 220 },
        { field: 'model', headerName: 'Model', width: 220 },
        { field: 'year', headerName: 'Year', width: 220 }
    ]

    const rows = [
        cars.map((row) => (
            { id: row.carId, carBrand: row.carBrand, model: row.carModel, year: row.carYear }
        ))
    ]

    console.log(cars);

    return (
        <Box sx={{ width: '650px', m: 'auto', position: 'relative' }}>
            <Button variant='contained'
                sx={{ position: 'absolute', bottom: '0', right: '0', mb: "70px" }}
                onClick={onClickHandle}>
                Add new entry
            </Button>
            {open && <NewRecordForm />}
            {/* <TableContainer component={Paper} sx={{ width: '650px', m: '100px auto ' }}>
                <Table
                    sx={{ minWidth: '650px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ textAlign: 'center' }}>Car Brand</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Model</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cars.map((row) => (
                                <TableRow key={row.carId}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {row.carBrand}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {row.carModel}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {row.carYear}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer> */}
            {/* <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div> */}
        </Box>

    )
}
