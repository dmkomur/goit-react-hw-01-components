import PropTypes from 'prop-types';
import {StatisticCard, StatsHeader, StatsList, StatsItem} from './Statistics.styled'


export const Statistics = ({stat, title} ) => {
  return <StatisticCard >
    {title && <StatsHeader>{ title }</StatsHeader>}
    <StatsList>
      {stat.map(el => (<StatsItem color={getRandomHexColor() } key={el.id}>
        <span>{ el.label}</span>
        <span>{ el.percentage}</span>
    </StatsItem>))}
   </StatsList>
  </StatisticCard>
}

Statistics.propTypes = {  
    title: PropTypes.string,
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        
    }),
}

function getRandomHexColor() {
  let hexChars = "0123456789ABCDEF";
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexChars.length);
    color += hexChars[randomIndex];
  }
  
  return color;
}
