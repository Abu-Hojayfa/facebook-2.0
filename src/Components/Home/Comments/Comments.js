import React, { useState } from "react";
import "./Comments.css";
import send from "../../../images/send.png";

const Comments = ({ postId, allComments }) => {
  const [comment, setComment] = useState();
  const img = localStorage.getItem("profileImg");
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");

  const handleBlur = (e) => {
    setComment(e.target.value);
  };
  const doAPost = () => {
    const data = {
      id: postId,
      mainData: {
        email: email,
        profileImg: img,
        name: name,
        comment: comment,
      },
    };
    fetch("http://localhost:5000/writecmnt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {});
    document.getElementById(`clearInputId${postId}`).value = "";
    setComment();
  };

  const alertForDes = () => {
    alert("Please Write Something in Comment Section😐");
  };

  return (
    <div className="containerComnt">
      <div className="cmntInput d-flex">
        <img className="img-fluid userProfilEimg" src={img} alt="" />
        <input
          id={`clearInputId${postId}`}
          onBlur={(e) => handleBlur(e)}
          className="form-control typeComment"
          placeholder="Write a Comment"
          type="text"
        />
        <img
          onClick={comment ? doAPost : alertForDes}
          className="img-fluid userProfilEimg mx-3"
          src={send}
          alt=""
        />
      </div>
    </div>
  );
};

export default Comments;
