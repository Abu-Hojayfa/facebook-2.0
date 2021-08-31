import React from "react";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  return (
    <div className="leftSideNav ps-5">
      <div className="leftSideNavProfile ps-2">
        <img
          className="img-fluid profileMiniIcon"
          src={`${localStorage.getItem("profileImg")}`}
          alt=""
        />
        <span className="ProfileIconIndicator">
          {localStorage.getItem("name")}
        </span>
      </div>
      <div className="leftNavIcon d-flex align-items-center">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png?_nc_eui2=AeH7VLkOJTGHskdNl5TmcE3GFjhaWUpP68wWOFpZSk_rzCim6yQMMOhfF8jH2LU9xhx1nGG-_ViiqwJ7EBZNUTK5"
          alt=""
          style={{ height: "40px", width: "40px" }}
        />
        <p>COVID-19 Information Center</p>
      </div>

      <div className="leftNavIcon d-flex align-items-center">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeGY1R1PcvgFTqU30bvPXokjqfpKmA4GtxSp-kqYDga3FEHYk9InnzO9N3mjOrMG5N7yyMQIbVmTFZlESHiSURA4"
          alt=""
          style={{ height: "40px", width: "40px" }}
        />
        <p>Friends</p>
      </div>

      <div className="leftNavIcon d-flex align-items-center">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeFGDdWWK5Ti2Cvynih0_vhK-5kYScafj0T7mRhJxp-PRDkzWt4mH84Pp9VSP5WpiYatE9zctDGf1q3HYs01cLGE"
          alt=""
          style={{ height: "40px", width: "40px" }}
        />
        <p>Saved</p>
      </div>

      <div className="leftNavIcon d-flex align-items-center">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeFclVnZzq1Yxg-vnNQXh1sPtEPFOzh_t-u0Q8U7OH-3674rxhClBxVNcWYgbAx2LOAFNZ7-K4TuWZxfQz3hqafb"
          alt=""
          style={{ height: "40px", width: "40px" }}
        />
        <p>Pages</p>
      </div>

      <div className="leftNavIcon d-flex align-items-center">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeEh3W06KBE49XSpqh4zqf8UZ3xAUM5_bWpnfEBQzn9tamUBOCe-sZy3zsJyxAglk6RLl3nNHjQrf1ZX28lbjsoP"
          alt=""
          style={{ height: "40px", width: "40px" }}
        />
        <p>Groups</p>
      </div>
    </div>
  );
};

export default LeftSideNav;
