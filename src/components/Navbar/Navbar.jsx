import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

Navbar = () => {
    const { location } = this.props;
    return (
        <div className='home-nav'>
            <div className='navbar'>

                <img className='logo' src='https://uploads-ssl.webflow.com/5717c4de40b3bdeb02777ff4/598129e0c2a8fb000172a22e_Full%20Color.png' />

                <div className='nav-items' >
                    <Link to='/' className={location.pathname === '/' ? 'nav-item w--current' : 'nav-item'}>
                        SPEAK
                    </Link>
                    <Link to='/SignUp' className={location.pathname === '/SignUp' ? 'nav-item w--current' : 'nav-item'}>
                        SIGN UP
                    </Link>
                    <Link to='/Connect' onClick={this.getActive} className={location.pathname === '/Connect' ? 'nav-item w--current' : 'nav-item'}>
                        CONNECT
                    </Link>
                    <Link to='/Shirts' onClick={this.getActive} className={location.pathname === '/Shirts' ? 'nav-item w--current' : 'nav-item'}>
                        SHIRTS
                    </Link>
                    <Link to='/Learn' onClick={this.getActive} className={location.pathname === '/Learn' ? 'nav-item w--current' : 'nav-item'}>
                        LEARN
                    </Link>
                    <Link to='/Jobs' onClick={this.getActive} className={location.pathname === '/Jobs' ? 'nav-item w--current' : 'nav-item'}>
                        JOBS
                    </Link>
                    <Link to='/AdminLogin' onClick={this.getActive} className={location.pathname === '/AdminLogin' ? 'nav-item w--current' : 'nav-item'}>
                        ADMIN
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar);


