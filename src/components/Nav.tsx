import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { User } from '../models/user';

const Nav = (props: {user: User | null}) => {
  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="javascript:;">
          Promoter Admin
        </a>
        <ul className="my-2 my-md-0 mr-md-3">
          <Link to={'/profile'}  className="p-2 text-white text-decoration-none">
            {props.user?.first_name} {props.user?.last_name}
          </Link>
            <Link  to={'/login'} className="p-2 text-white text-decoration-none" href="javascript:;"
            onClick={async () => { await axios.post('logout')}}
            >
              Sign out
            </Link>
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = (state: {user: User}) => ({
  user: state.user
})

export default connect(mapStateToProps,null)(Nav)
