import { Profile } from './Profile/Profile';
import { AppConteiner } from './App.styled'
import { Statistics } from './Statistics/Statistics'

import userData from '../assets/user.json' 
import statData from '../assets/data.json' 


export const App = () => {
  return (
    <AppConteiner>
      <Profile userName={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      
      <Statistics stat={ statData } title="Load stat"/>

    </AppConteiner>
    );
};


