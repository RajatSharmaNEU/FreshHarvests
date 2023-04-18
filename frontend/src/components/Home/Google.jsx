import React from "react";
import GoogleBadgeIcon from "../../images/google-play-badge.svg";

const Google = () => {
  return (
    <div className="footer_play">
      <img
        className="google_badge_footer"
        src={GoogleBadgeIcon}
        alt="google"
      />
    </div>
  );
};

export default Google;