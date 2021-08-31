import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Posts from '../Posts/Posts';
import Story from '../Story/Story';

const Main = () => {
  return (
    <div>
      <Story />
      <CreatePost />
      <Posts />
    </div>
  );
};

export default Main;