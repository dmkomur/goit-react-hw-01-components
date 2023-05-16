import PropTypes from 'prop-types';
import {ProfileCard, StatsWrap, StatsItem, UserName} from './Profile.styled'

export const Profile = ({ userName, tag, location, avatar, stats }) => {
    return <ProfileCard>
  <div>
    <img
      src={avatar}
      alt={userName}
    />
     <UserName>{ userName}</UserName>
     <p>{tag}</p>
    <UserName>{location}</UserName>
  </div>

  <StatsWrap>
    <StatsItem>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span>Views</span>
      <span>{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </StatsItem>
  </StatsWrap>
</ProfileCard>
}


Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    }),
}