import { Friends } from './FriendsList.styled'
import { FriendsListItem } from '../FriendsListItem/FriendListItem'
import PropTypes from 'prop-types';


export const FriendsList = ({friends}) => {
  return <Friends>   
    {friends.map(el => (<FriendsListItem {...el} />))}
</Friends>
}


FriendsList.propTypes = {
  friends: PropTypes.array
}