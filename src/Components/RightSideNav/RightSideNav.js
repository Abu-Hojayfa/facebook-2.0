import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./RightSideNav.css";

const RightSideNav = () => {
  const [allUsers, setAllUsers] = useState([]);
  let history = useHistory();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  const handleClick = (user) => {
    console.log(user);
    history.push({
      pathname: "/userProfile",
      state: { data: user },
    });
  };

  return (
    <div className="rightSideNav">
      <h3 className="rightContacts">All Login Accounts</h3>

      <div className="">
        {allUsers.length > 0 &&
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
          ))}
      </div>
    </div>
  );
};

export default RightSideNav;
