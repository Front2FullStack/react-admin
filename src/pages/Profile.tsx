import { Button, TextField } from "@material-ui/core"
import axios from "axios"
import { useState, useEffect, SyntheticEvent } from "react"
import Layout from "../components/Layout"

const Profile = () => {
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirm, setPasswordConfirm] = useState("")


    useEffect( () => {
            (
                async () => {
                    const {data} = await axios.get(`user`)
                    setFirstName(data.first_name);
                    setLastName(data.last_name);
                    setEmail(data.email);
                }
            )()
        
    },[])

    const infoSubmit = async (e : SyntheticEvent) =>{
        e.preventDefault()

        await axios.put('user/info',{
            first_name,
            last_name,
            email
        })
    }

    const passwordSubmit = async (e : SyntheticEvent) =>{
        e.preventDefault()
        await axios.put('users/password',{
            password,
            password_confirm
        })
    }
    return (
        <Layout>
            <h3>Account Information</h3>
            <form onSubmit={infoSubmit}>
                <div className="mb-3">
                    <TextField value={first_name} label="First Name" onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <TextField value={last_name} label="Last Name" onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <TextField value={email} label="Email" onChange={e => setEmail(e.target.value)}/>
                </div>
        
                <Button variant="contained" color="primary" type="submit" >Submit</Button>
            </form>

            <h3 className="mt-4">Change Password</h3>
            <form  onSubmit={passwordSubmit}>
                <div className="mb-3">
                    <TextField value={password} type="password" label="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <TextField value={password_confirm} type="password" label="Password Confirm" onChange={e => setPasswordConfirm(e.target.value)}/>
                </div>

                <Button variant="contained" color="primary" type="submit" >Submit</Button>
            </form>
            
        </Layout>
    )
}

export default Profile
