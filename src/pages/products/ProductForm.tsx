import { Button, TextField } from "@material-ui/core"
import axios from "axios"
import { SyntheticEvent, useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import Layout from "../../components/Layout"

const ProductForm = (props: any) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [redirect, setRedirect] = useState(false)


    useEffect( () => {
        if(props.match.params.id){
            (
                async () => {
                    const {data} = await axios.get(`products/${props.match.params.id}`)
                    setTitle(data.title);
                    setDescription(data.description);
                    setImage(data.image);
                    setPrice(data.price);
                }
            )()
        }
    },[props.match.params])

    const submit = async (e : SyntheticEvent) =>{
        e.preventDefault();

        const data ={
            title,
            description,
            image,
            price
        }

        // eslint-disable-next-line
        if (props.match.params.id){
            await axios.put(`products/${props.match.params.id}`, data)
        } else {
            await axios.post('products', data)
        }

       

        setRedirect(true)

    } 

    if(redirect){
        return <Redirect to={'/products'}/>
    }
    
    return (
        <Layout>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <TextField value={title} label="Title" onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <TextField value={description} label="Description" minRows={4} maxRows={6} multiline onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <TextField value={image} label="Image" onChange={e => setImage(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <TextField value={price} label="Price" type="number" onChange={e => setPrice(e.target.value)}/>
                </div>
                <Button variant="contained" color="primary" type="submit" >Submit</Button>
            </form>
            
        </Layout>
    )
}

export default ProductForm
