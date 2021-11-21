import PropTipes from 'prop-types';

const User = ({ name, tag, location, ava, followers, views, likes }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={ava} alt={name} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

User.propTypes = {
  ava: PropTipes.string,
  name: PropTipes.string,
  tag: PropTipes.string,
  location: PropTipes.string,
  followers: PropTipes.number,
  views: PropTipes.number,
  likes: PropTipes.number,
};

export default User;
