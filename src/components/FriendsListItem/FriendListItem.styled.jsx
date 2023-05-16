import styled from "styled-components";

export const Friend = styled.ul`
    background-color: #ce9797;
    display: flex;
    gap: 20px;
     
`
export const Indicator = styled.span`
    width: 12px;
    height: 12px;
    background-color: ${props => props.isOnline ? "green" : "red"};
`