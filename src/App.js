import User from './components/social-profile/User';
import users from './components/social-profile/user.json';

import StaticList from './components/statics/StaticList';
import data from './components/statics/data.json';

import './App.css';
const App = () => {
  return (
    <div>
      <User
        name={users.username}
        tag={users.tag}
        location={users.location}
        ava={users.avatar}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
      <StaticList title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
