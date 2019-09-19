import React from 'react';

const Logo = ({fontSize}) => {
    const styles = {
        color: '#E29D28',
        textDecoration: 'none',
        fontSize,
        fontWeight: 'bold'
    }
    return(
        <a  style={styles}  href='#'>
            Shef
            <span style={{color: '#292F36'}}>Me</span>
        </a>)
    }

    export default Logo