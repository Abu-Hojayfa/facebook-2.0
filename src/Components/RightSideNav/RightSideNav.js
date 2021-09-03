import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./RightSideNav.css";
import Loader from '../../images/loader.gif';

const RightSideNav = () => {
  const [allUsers, setAllUsers] = useState([]);
  let history = useHistory();
  useEffect(() => {
    fetch("https://limitless-thicket-51760.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data.reverse()));
  }, []);

  const handleClick = (user) => {
    history.push({
      pathname: `/userProfile?${user.uid}`,
      state: { userData: user },
    });
  };

  return (
    <div className="rightSideNav">
      <h3 className="rightContacts">All Login Accounts</h3>

      <div className="scrollingAccount">
        {allUsers.length > 0 ?
          allUsers.map((user) => (
            <div
              className="userProfilE d-flex align-items-center"
              key={user.uid}
              onClick={(e) => handleClick(user)}
            >
              <img className="img-fluid userProfilEimg" src={user.photoURL} alt="" />
              <div className="profileInfo">
                <h5>{user.displayName}</h5>
              </div>
            </div>
          )):<img className="img-fluid loaderImage" src={Loader} alt="Loading img" />}
      </div>
    </div>
  );
};

export default RightSideNav;
