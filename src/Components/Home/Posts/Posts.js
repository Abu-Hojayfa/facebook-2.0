import React, { useEffect, useState } from "react";
import moment from "moment";
import Reacts from "./Reacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faShare } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
  const [allPosts, setAllPosts] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/allposts")
      .then((res) => res.json())
      .then((data) => setAllPosts(data.reverse()));
  }, []);

  return (
    <div id="posts" className="all-posts mt-3">
      {allPosts &&
        allPosts.map((post) => (
          <div key={post._id}>
            <div className="postProfile d-flex align-items-center">
              <img className="img-fluid" src={post.profileImg} alt="" />

              <div className="profileInfo">
                <h5>{post.name}</h5>

                <p
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={post.time}
                >
                  {moment(`${post.time}`, "MMMM Do YYYY, h:mm:ss a").fromNow()}
                </p>
              </div>
            </div>

            <div className="thePost">
              <p>{post.description}</p>
              <img className="img-fluid" src={post.postImg} alt="" />
              <div className="reactn-cmnt-info">
                <p>
                  {post.reacts.like +
                    post.reacts.love +
                    post.reacts.haha +
                    post.reacts.wow +
                    post.reacts.sad +
                    post.reacts.angry}{" "}
                  Reacts
                </p>
              </div>
            </div>

            <div className="reaction-cmnt-share d-flex">
              <Reacts id={post._id} reacts={post.reacts} />
              <div className="d-flex shareBtn">
                <FontAwesomeIcon icon={faCommentAlt} />
                <p>Comments</p>
              </div>
              <div className="d-flex shareBtn">
                <FontAwesomeIcon icon={faShare} />
                <p>Share</p>
              </div>
            </div>
          </div>
        ))}
      <h3 className="text-center">No more posts</h3>
    </div>
  );
};

export default Posts;
