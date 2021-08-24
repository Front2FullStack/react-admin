import { Dispatch, useEffect, useState } from 'react';
import Nav from './Nav';
import Menu from './Menu';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { User } from "../models/user"
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/setUserAction';

const Layout = (props: any) => {
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        // async can be handled in useEffect like this
       (async () => {
        try {
            const {data} = await axios.get('user'); 
            props.setUser(data)
        } catch(e) {
            setRedirect(true)
        }
       
       })();
    }, [])

    if(redirect){
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
             <Nav user={null}/>
            <div className="container-fluid">
                <div className="row">
                <Menu/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="table-responsive">
                        {props.children}
                    </div>
                </main>
                </div>
            </div>
        </div>
    )
}

// getting events for other components and will be handled with it
const mapStateToProps = (state: {user: User}) => ({
    user: state.user
})

// to fire event to dispatch for other components
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setUser: (user: User) => dispatch(setUser(user))  
})


// connecting module with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
