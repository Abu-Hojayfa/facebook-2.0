import React from "react";
import moment from "moment";
import Reacts from "./Reacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faShare } from "@fortawesome/free-solid-svg-icons";
import Comments from "../Comments/Comments";
import Loader from "../../../images/loader.gif";

const Posts = ({ allPost }) => {
  return (
    <div id="posts" className="all-posts mt-3">
      {allPost.length > 0 ? (
        allPost.map((post) => (
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
              {post.postImg && (
                <img className="img-fluid" src={post.postImg} alt="" />
              )}
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
            <Comments postId={post._id} postComments={post.comments} />
          </div>
        ))
      ) : (
        <img className="img-fluid loaderImage" src={Loader} alt="Loading img" />
      )}
      <h3 className="text-center">No more posts</h3>
    </div>
  );
};

export default Posts;
