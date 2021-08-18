
import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import Layout from '../components/Layout'
import {Link} from "../models/Link"
import axios from 'axios'
const Links = (props: any) => {
    const [links, setLinks] = useState<Link[]>([])
    const [page, setPage] = useState(0)
    const perPage = 10;
    useEffect(() => {
        (async () =>{
            const { data } = await axios.get(`users/${props.match.params.id}/links`);
            setLinks(data)
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Layout>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Code</TableCell>
                            <TableCell>Count</TableCell>
                            <TableCell>Revenue</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {links.slice(page * perPage, (page +1) * perPage).map(link => {
                            return(
                                <TableRow key={link.id}>
                                    <TableCell>{link.code}</TableCell>
                                    <TableCell>{link.orders?.length}</TableCell>
                                    <TableCell>{link.orders?.reduce((s,o) => s + o.total,0)}</TableCell>
                                </TableRow>
                            )
                        })}
                   
               
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                            count={links.length}
                            onPageChange={(e , newPage) => setPage(newPage)}
                            rowsPerPage={perPage}
                            page={page}
                            rowsPerPageOptions={[]}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Layout>
            
        </div>
    )
}

export default Links
