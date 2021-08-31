import React from "react";
import "./Story.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Story = () => {
  return (
    <div className="storyMain m-auto">
      <div className="d-flex pt-4 ">
      <div className="holder">
        <div className="addYourStory" style={{backgroundImage:`url(${localStorage.getItem("profileImg")})`}}></div>
      </div>

      <div className="holder">
        <div className="addStory story-2">
          <p>
            <FontAwesomeIcon icon={faUserCircle} />
          </p>
          <p>Astra</p>
        </div>
      </div>

      <div className="holder">
        <div className="addStory story-3">
          <p>
            <FontAwesomeIcon icon={faUserCircle} />
          </p>
          <p>Selena Goumj</p>
        </div>
      </div>

      <div className="holder">
        {" "}
        <div className="addStory story-4">
          <p>
            <FontAwesomeIcon icon={faUserCircle} />
          </p>
          <p>Valkaray</p>
        </div>
      </div>

      <div className="holder">
        <div className="addStory story-5">
          <p>
            <FontAwesomeIcon icon={faUserCircle} />
          </p>
          <p>Cristaiana</p>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Story;
