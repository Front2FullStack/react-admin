import axios from 'axios'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { User } from '../models/user'
import { Button, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'

export default function Users() {
    const [users, setUsers] = useState<User[]>([])
    const [page, setPage] = useState(0)
    const perPage = 10;
    useEffect(() => {
        (async () =>{
            const { data } = await axios.get('promoters');
            setUsers(data)
        })()
    }, [])
    return (
            <Layout>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.slice(page * perPage, (page +1) * perPage).map(user => {
                            return(
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.first_name} {user.last_name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Button variant="contained"
                                        href={`users/${user.id}/links`}
                                        color="primary">
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                   
               
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                            count={users.length}
                            onPageChange={(e , newPage) => setPage(newPage)}
                            rowsPerPage={perPage}
                            page={page}
                            rowsPerPageOptions={[]}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Layout>
    )
}
