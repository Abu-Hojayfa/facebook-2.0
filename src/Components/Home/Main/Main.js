import React, { useEffect, useState } from "react";
import CreatePost from "../CreatePost/CreatePost";
import Posts from "../Posts/Posts";
import Story from "../Story/Story";

const Main = () => {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-thicket-51760.herokuapp.com/allposts")
      .then((res) => res.json())
      .then((data) => setAllPosts(data.reverse()));
  }, []);
  return (
    <div>
      <Story />
      <CreatePost />
      <Posts allPost={allPosts} />
    </div>
  );
};

export default Main;
