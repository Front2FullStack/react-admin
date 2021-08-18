import axios from 'axios'
import {useState, useEffect} from 'react'
import { Product } from '../../models/product'
import Layout from '../../components/Layout'
import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow , Button} from '@material-ui/core'

const Products= () => {
    const [products, setProducts] = useState<Product[]>([])
    const [page, setPage] = useState(0)
    const perPage = 10;

    useEffect(() => {
        (
        async() => {
            const {data} = await axios.get('products')
            setProducts(data)
        }
        )();
    }, [])

    const delAction = async (id : number) =>{

        if(window.confirm('Are you sure ?')){
            await axios.delete(`products/${id}`)
        }

        setProducts(products.filter(p => p.id !== id))

    }
    return (
        <Layout>
            <div className="pt-3 pb-2 mb-3 border-bottom d-flex">
                <Button href={'/products/create'} variant="contained" color="primary"> Add </Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {products.slice(page * perPage, (page +1) * perPage).map(product => {
                            return(
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell><img alt={product.title} src={product.image} width={50}/></TableCell>
                                    <TableCell>{product.title}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>
                                        <Button variant="contained"
                                        onClick={() => delAction(product.id)}
                                            color="secondary">
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination 
                        count={products.length}
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

export default Products
