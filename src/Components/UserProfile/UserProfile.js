import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setUserData(location.state.detail);
  }, [location]);

  return (
    <div>
      okaayyyy
      <div>hello</div>
    </div>
  );
};

export default UserProfile;
