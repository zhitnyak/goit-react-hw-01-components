import User from './components/social-profile/User';
import users from './components/social-profile/user.json';

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
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={Static} />;
    </div>
  );
};

export default App;
