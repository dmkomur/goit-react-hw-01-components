import { Friends } from './FriendsList.styled'
import { FriendsListItem } from '../FriendsListItem/FriendListItem'


export const FriendsList = ({friends}) => {
  return <Friends>   
    {friends.map(el => (<FriendsListItem {...el} />))}
</Friends>
}
