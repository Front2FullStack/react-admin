import React from 'react'
import { User } from '../models/user';

export default function Nav(props: {user: User | null}) {
    return (
      <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="javascript.void()">
            Promoter Admin
          </a>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="javascript.void()">
                Sign out
              </a>
            </div>
          </div>
        </header>
      </div>
    );
}
