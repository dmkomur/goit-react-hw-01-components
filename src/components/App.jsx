import { Profile } from './Profile/Profile';
import { AppConteiner } from './App.styled'
import { Statistics } from './Statistics/Statistics'
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './Transaction/Transaction';

import userData from '../assets/user.json' 
import statData from '../assets/data.json' 
import friendsData from '../assets/friends.json' 
import transactions from '../assets/'

export const App = () => {
  return (
    <AppConteiner>
      <Profile userName={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      
      <Statistics stat={statData} title="Load stat" />
      
      <FriendsList friends={friendsData} />

      <TransactionHistory items={transactions} />;

    </AppConteiner>
    );
};


