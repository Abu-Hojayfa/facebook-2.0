import React from "react";
import moment from "moment";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./CreatePost.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const CreatePost = () => {
  const [formData, setFromData] = useState({
    profileImg: localStorage.getItem("profileImg"),
    postImg: "",
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    description: "",
    time: "",
    comments: [],
    reacts: { like: 0, haha: 0, wow: 0, love: 0, sad: 0, angry: 0 },
  });

  const addDescription = (e) => {
    const data = { ...formData };
    data.description = e.target.value;
    data.time = moment().format("MMMM Do YYYY, h:mm:ss a");
    setFromData(data);
  };

  const uploadAImg = (e) => {
    const ImgData = new FormData();
    ImgData.set("key", `${process.env.REACT_APP_IMG_KEY}`);
    ImgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", ImgData)
      .then(function (response) {
        const imgLink = response.data.data.display_url;
        const data = { ...formData };
        data.postImg = imgLink;
        setFromData(data);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const doAPost = () => {
    fetch("https://limitless-thicket-51760.herokuapp.com/doapost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  const alertForDes = () => {
    alert("Please Write Something. 😐");
  };

  return (
    <div className="CreatePostMain mt-4">
      <div className="post d-flex align-items-center">
        <img
          className="img-fluid"
          src={`${localStorage.getItem("profileImg")}`}
          alt="Profile"
        />
        <Popup
          trigger={
            <p className="p">
              What is on your mind, {localStorage.getItem("name").split(" ")[0]}
              ?
            </p>
          }
          modal
          nested
        >
          {(close) => (
            <div className="postAreaCreate">
              <button className="popUpClose" onClick={close}>
                <p>&times;</p>
              </button>
              <h3 className="text-center pt-3 py-3">Create Post</h3>

              <div className="postArea">
                <div className="postProfile d-flex align-items-center">
                  <img
                    className="img-fluid"
                    src={localStorage.getItem("profileImg")}
                    alt=""
                  />

                  <div className="profileInfo">
                    <h5>{localStorage.getItem("name")}</h5>

                    <p>{moment().format(" DD MMMM, YYYY")}</p>
                  </div>
                </div>
                <div className="mainPost">
                  <textarea
                    onChange={addDescription}
                    name="description"
                    placeholder={`What's going on your mind, ${
                      localStorage.getItem("name").split(" ")[0]
                    }? Write Here`}
                  ></textarea>
                  <div className="addImg">
                    <label className="fileUpload d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon
                        style={{ marginRight: "20px" }}
                        icon={faImages}
                      />
                      <input
                        onChange={uploadAImg}
                        name="postImg"
                        className="upload"
                        type="file"
                      />
                      <span>
                        {formData.postImg === ""
                          ? "Upload an Image"
                          : "Image Added"}
                      </span>
                    </label>
                  </div>{" "}
                  <br />
                  <button
                    onClick={
                      formData.description.length > 0 ? doAPost : alertForDes
                    }
                    className={`btn ${
                      formData.description.length > 0
                        ? "readyPost"
                        : "postBtnMute"
                    }`}
                  >
                    Ready To Post
                  </button>
                </div>
              </div>
            </div>
          )}
        </Popup>{" "}
      </div>
    </div>
  );
};

export default CreatePost;
