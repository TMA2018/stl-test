import React from 'react';
import './app-header.css';
import styled from 'styled-components';
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'black' : 'red'};
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;


const AppHeader = ({allUsers, important}) =>{
    return (
        <Header colored>
            <h1>Tala Mikhail</h1>
            <h2>Your list have {allUsers} users, important {important}</h2>
        </Header> 
    )
}

export default AppHeader;