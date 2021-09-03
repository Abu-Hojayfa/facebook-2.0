import React, { useEffect, useState } from "react";
import "./Comments.css";
import send from "../../../images/send.png";

const Comments = ({ postId, postComments }) => {
  const [comment, setComment] = useState();
  const [allComments, setAllComments] = useState(postComments);
  const [hiding, setHiding] = useState(true);
  const [hideCmnts, setHideCmnts] = useState([]);
  const img = localStorage.getItem("profileImg");
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");

  useEffect(() => {
    if (hiding === true) {
      setHideCmnts(allComments.slice(0, 2));
    }
    if (hiding === false) {
      setHideCmnts(allComments);
    }
  }, [hiding, allComments]);

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
    fetch("https://limitless-thicket-51760.herokuapp.com/writecmnt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setAllComments(data.reverse()));
    document.getElementById(`clearInputId${postId}`).value = "";
    setComment();
  };

  const alertForDes = () => {
    alert("Please Write Something in Comment Section😐");
  };

  const handleHiding = () => {
    if (allComments.length > 2) {
      setHiding(!hiding);
    }
  };

  return (
    <div className="containerComnt">
      <div className="cmntInput d-flex mb-3">
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
      {allComments &&
        hideCmnts.map((cmnt, index) => (
          <div key={index} className="d-flex mt-3">
            <img
              className="img-fluid userProfilEimg"
              src={cmnt.profileImg}
              alt=""
            />
            <div className="cmntInfo">
              <p>{cmnt.name}</p>
              <p>{cmnt.comment}</p>
            </div>
          </div>
        ))}
      {allComments.length ? (
        <p className="hidingCmnts" onClick={(e) => handleHiding()}>
          {allComments.length > 2 && hiding ? "See More Comments" : "No More Comments"}
        </p>
      ) : (
        ""
      )}
      {allComments.length ? (
        ""
      ) : (
        <p className="noCmnts text-secondary">No Comments yet</p>
      )}
    </div>
  );
};

export default Comments;
