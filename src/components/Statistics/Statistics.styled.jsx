import styled from "styled-components";

export const StatisticCard = styled.section`
max-width: 600px;
    background-color: gray;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
export const StatsHeader = styled.h2`
   font-size: 30px;
   color: blue;
`

export const StatsList = styled.ul`
    display: flex;
    gap: 8px;
    justify-content: space-around;
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    background-color: ${getRandomHexColor()} ;
    gap: 8px;
`

function getRandomHexColor() {
  let hexChars = "0123456789ABCDEF";
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexChars.length);
    color += hexChars[randomIndex];
  }
  
  return color;
}
