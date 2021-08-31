import React, { useState } from "react";
import { FacebookSelector } from "@charkour/react-reactions";
import "./Posts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngry,
  faHeart,
  faLaughSquint,
  faSadCry,
  faSurprise,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Reacts = (props) => {
  const [emojiSelector, setEmojiSelector] = useState(false);
  const [reactionInPost, setReactionInPost] = useState(null);
  const [countReact, setCountReact] = useState(props.reacts);

  const selectedEmoji = (reaction) => {
    setReactionInPost(reaction);
    const newReactValue = countReact[reaction] + 1;

    const newReact = props.reacts;

    newReact[reaction] = newReactValue;

    fetch("http://localhost:5000/addreact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: props.id,
        reacts: newReact,
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <div className="animation-story">
      <div className="reactionSystems" style={{ position: "relative" }}>
        <div
          className={emojiSelector ? "fbSelector_Active" : "fbSelector_Idle"}
        >
          <FacebookSelector onSelect={(e) => selectedEmoji(e)} iconSize={35} />
        </div>
      </div>

      <div
        className="pain"
        onClick={() => setEmojiSelector(!emojiSelector)}
        style={{ float: "right" }}
      >
        {reactionInPost === null || reactionInPost === "like" ? (
          <p
            style={{
              color: `${reactionInPost === "like" ? "#4292FF" : "#fff"}`,
            }}
            className="d-flex"
          >
            <FontAwesomeIcon className="mx-3 mt-1" icon={faThumbsUp} /> Like
          </p>
        ) : reactionInPost === "love" ? (
          <p className="d-flex" style={{ color: "#EC2A45" }}>
            <FontAwesomeIcon className="mx-3 mt-1" icon={faHeart} />{" "}
            {reactionInPost.charAt(0).toUpperCase() + reactionInPost.slice(1)}
          </p>
        ) : reactionInPost === "haha" ? (
          <p className="d-flex" style={{ color: "#F8B93B" }}>
            <FontAwesomeIcon className="mx-3 mt-1" icon={faLaughSquint} />{" "}
            {reactionInPost.charAt(0).toUpperCase() + reactionInPost.slice(1)}
          </p>
        ) : reactionInPost === "wow" ? (
          <p className="d-flex" style={{ color: "#F8B13C" }}>
            <FontAwesomeIcon className="mx-3 mt-1" icon={faSurprise} />{" "}
            {reactionInPost.charAt(0).toUpperCase() + reactionInPost.slice(1)}
          </p>
        ) : reactionInPost === "sad" ? (
          <p className="d-flex" style={{ color: "#F8B13C" }}>
            <FontAwesomeIcon className="mx-3 mt-1" icon={faSadCry} />{" "}
            {reactionInPost.charAt(0).toUpperCase() + reactionInPost.slice(1)}
          </p>
        ) : (
          <p className="d-flex" style={{ color: "#E66139" }}>
            <FontAwesomeIcon className="mx-3 mt-1" icon={faAngry} />{" "}
            {reactionInPost.charAt(0).toUpperCase() + reactionInPost.slice(1)}
          </p>
        )}
      </div>
    </div>
  );
};

export default Reacts;
