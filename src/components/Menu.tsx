import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink to={'/users'} className="nav-link active" aria-current="page">
                    <span data-feather="userss"></span>
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/products'} className="nav-link active" aria-current="page">
                    <span data-feather="product"></span>
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/orders'} className="nav-link active" aria-current="page">
                    <span data-feather="orders"></span>
                    Orders
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    )
}
