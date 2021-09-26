import React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function List() {
    const [users, setUsers] = React.useState([]);

    const list = users.map((user, index) => (
        <TableRow key={`user-${index}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center" component="th" scope="row">
                {index}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.nickname}</TableCell>
        </TableRow>
    ));

    React.useEffect(() => {
        axios.get('/back/users').then((response) => {
            setUsers(response.data);
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">순번</TableCell>
                        <TableCell>이메일주소</TableCell>
                        <TableCell>닉네임</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{list}</TableBody>
            </Table>
        </TableContainer>
    );
}
