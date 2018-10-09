import React from 'react';
import AdminLogin from './AdminLogin';
import {connect} from 'react-redux';

function mapStoreToProps(store){
    
    return {
        email: store.adminLogin.email,
        password: store.adminLogin.password,
        User: store.adminLogin.user
    };

    
};

export default connect(mapStoreToProps)(AdminLogin); 