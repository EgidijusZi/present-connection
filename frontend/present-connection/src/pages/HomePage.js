import { Box, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Button } from '@mui/material'
import { useState, React } from 'react'
import NewRecordForm from './NewRecordForm';

export default function HomePage() {

    const [cars, setCars] = useState();
    const [open, setOpen] = useState(false);

    const onClickHandle = () => {
        setOpen(true);
    }

    return (
        <Box sx={{ width: '650px', m: 'auto', position: 'relative' }}>
            <Button variant='contained'
            sx={{ position: 'absolute', bottom: '0', right: '0', mb: "70px"}}
            onClick={onClickHandle}>
                Add new entry
            </Button>
            {open && <NewRecordForm />}
            <TableContainer component={Paper} sx={{ width: '650px', m: '100px auto ' }}>
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
                        {/* {
                        cars.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    {row.carBrand}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>
                                    {row.model}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>
                                    {row.year}
                                </TableCell>
                            </TableRow>
                        ))
                    } */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}
