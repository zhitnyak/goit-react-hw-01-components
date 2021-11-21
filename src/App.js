import User from './components/User';
import users from './user.json';

import './App.css';
const App = () => {
  return (
    <User
      name={users.username}
      tag={users.tag}
      location={users.location}
      ava={users.avatar}
      followers={users.stats.followers}
      views={users.stats.views}
      likes={users.stats.likes}
    />
  );
};

export default App;
