import styled from "styled-components";

export const ProfileCard = styled.div`
max-width: 600px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
export const StatsWrap = styled.ul`
    display: flex;
    gap: 20px;
    background-color: beige;
    margin: 0 auto;
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const UserName = styled.p`
    font-size: 16px;
    font-style: italic;
`