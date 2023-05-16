import PropTypes from 'prop-types';
import { Friend, Indicator} from './FriendListItem.styled';

export const FriendsListItem = ({ avatar, isOnline, name, id }) => {
  return <Friend key={id}> 
    <Indicator isOnline={isOnline}></Indicator>
    <img src={avatar} alt="User avatar" width="48" />
    <p >{name}</p>
</Friend>
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  isOnline: PropTypes.bool
}
  

