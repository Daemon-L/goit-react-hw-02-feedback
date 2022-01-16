import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    padding: 0;
    list-style: none;
`;

export const Button = styled.button`
    height: 26px;
    margin-right: 15px;

    font-weight: 700;
    border: 1px solid gray;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        background-color: #7ea3e9;
    }

    /* :last-child {
        margin-right: 0;
    } */
`;