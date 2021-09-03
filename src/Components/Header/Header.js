import React from "react";
import "./Header.css";
import logo from "../../images/facebook-logo-png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faBell,
  faHome,
  faPlayCircle,
  faPlus,
  faSortDown,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router";

const Header = () => {
  let history = useHistory();
  const goToHome = () => {
    history.push("/home");
  };

  return (
    <div className="headerMain sticky-top">
      <ReactTooltip
        place="bottom"
        className="extraClassTool"
        type="dark"
        effect="solid"
      />
      <div onClick={()=> {goToHome()}} className="header m-auto row">
        <div className="logoArea d-flex align-items-center col ">
          <img className="img-fluid logoImg" src={logo} alt="" />
          <p>Facebook 2.O</p>
        </div>

        <div className="postIndicateArea m-auto d-flex align-items-center col-7">
          <div
            onClick={() => goToHome()}
            className="p"
            data-tip="Home"
          >
            <FontAwesomeIcon icon={faHome} />
          </div>

          <div className="p" data-tip="Friends">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>

          <div className="p" data-tip="Videos">
            <FontAwesomeIcon icon={faPlayCircle} />
          </div>

          <div className="p" data-tip="Groups">
            <FontAwesomeIcon icon={faUsers} />
          </div>

          <div className="p" data-tip="Things, you don't LIKE !!">
            <FontAwesomeIcon icon={faAd} />
          </div>
        </div>
        <div className="infoIndicateArea d-flex align-items-center col">
          <div data-tip="Profile" className="p  d-flex align-items-center">
            <img
              className="img-fluid profileMiniIcon"
              src={`${localStorage.getItem("profileImg")}`}
              alt=""
            />
            <span className="ProfileIconIndicator">
              {localStorage.getItem("name").split(" ")[0]}
            </span>
          </div>

          <div className="p" data-tip="Create">
            <FontAwesomeIcon icon={faPlus} />
          </div>

          <div className="p" data-tip="Messenger 2.O">
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </div>

          <div className="p" data-tip="Notifications">
            <FontAwesomeIcon icon={faBell} />
          </div>

          <div className="p" data-tip="Accounts">
            <FontAwesomeIcon icon={faSortDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
