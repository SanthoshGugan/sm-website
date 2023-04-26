import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
   return ( 
   <>
        Social Media Header Component
    </>
    );
};


const mapStateToProps = (state) => {
    return {
        user: state?.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
