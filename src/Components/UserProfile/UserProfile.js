import React, { useEffect, useState } from "react";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import "./UserProfileStyle.css";
import Posts from "../Home/Posts/Posts";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setUserData(location.state.userData);
  }, [location]);

  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    fetch(`https://limitless-thicket-51760.herokuapp.com/userpost?${userData.email}`)
      .then((res) => res.json())
      .then((data) => setUserPost(data.reverse()));
  }, [userData.email]);

  return (
    <div className="containerOfUserProfile">
      <div className="useProfile">
        <div className="userProfileImg">
          <img className="img-fluid" src={userData.photoURL} alt="" />
        </div>
        <h5 className="text-center profileName">
          {userData.displayName}
          {userData.emailVerified ? (
            <FontAwesomeIcon
              className="ismailVeri"
              icon={faCheckCircle}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Your Email is Verified"
            />
          ) : (
            <FontAwesomeIcon
              className="ismailVeri noEmailVeri"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Your Email is not Verified"
              icon={faTimesCircle}
            />
          )}
        </h5>

        <h5 className="postCreatedHeader">
          Post Created by {userData.displayName} :
        </h5>

        <Posts allPost={userPost} />
      </div>
    </div>
  );
};

export default UserProfile;
