import React from 'react';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
    margin: 30px auto;
    width: 300px;
    padding: 15px;
    border: 1px solid black;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = ( props ) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        // <div className="person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};

export default person;