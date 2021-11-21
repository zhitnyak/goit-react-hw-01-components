// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// const user = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const data1 = users[0];
// const data2 = users[1];

// function User({ name, tag, location, ava, followers, views, likes }) {
//   //   console.log(props);
//   return (
//     <div class="profile">
//       <div class="description">
//         <img src={ava} alt={name} class="avatar" />
//         <p class="name">{name}</p>
//         <p class="tag">{tag}</p>
//         <p class="location">{location}</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">{followers}</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">{views}</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// const els = (
//   <div>
//     {user1}
//     {user2}
//   </div>
// );
// console.log(user);

// <User
//   name={data1.username}
//   tag={data1.tag}
//   location={data1.location}
//   ava={data1.avatar}
//   followers={data1.stats.followers}
//   views={data1.stats.views}
//   likes={data1.stats.likes}
// />;

ReactDOM.render(<App />, document.querySelector('#root'));

// ReactDOM.render(el, document.querySelector('#root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
