import React from "react";
import igIcon from "../assets/icons/ig-icon.svg";
import ttIcon from "../assets/icons/tt-icon.svg";
import ytIcon from "../assets/icons/yt-icon.svg";
import userIcon from "../assets/icons/user.svg";
import Paragraph from "./Paragraph";

function SocialStats(props) {
  const igFollowers = props.igFollowers.toLocaleString();
  const ytFollowers = props.ytFollowers.toLocaleString();
  const ttFollowers = props.ttFollowers.toLocaleString();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-start items-center text-black gap-5">
        <div className="flex justify-between items-center w-[150px]">
          <img src={igIcon} alt="instagram icon" />
          <Paragraph app>@{props.igUsername}</Paragraph>
        </div>
        <div className="flex justify-between items-start gap-3">
          <img src={userIcon} alt="user icon" />
          <Paragraph app>{igFollowers}</Paragraph>
        </div>
      </div>
      <div className="flex justify-start items-center text-black gap-5">
        <div className="flex justify-between items-center w-[150px]">
          <img src={ttIcon} alt="tiktok icon" />
          <Paragraph app>@{props.ttUsername}</Paragraph>
        </div>
        <div className="flex justify-start items-center gap-3">
          <img src={userIcon} alt="user icon" />
          <Paragraph app>{ttFollowers}</Paragraph>
        </div>
      </div>
      <div className="flex justify-start items-center text-black gap-5">
        <div className="flex justify-between items-center w-[150px]">
          <img src={ytIcon} alt="youtube icon" />
          <Paragraph app>@{props.ytUsername}</Paragraph>
        </div>
        <div className="flex justify-between items-start gap-3">
          <img src={userIcon} alt="user icon" />
          <Paragraph app>{ytFollowers}</Paragraph>
        </div>
      </div>
    </div>
  );
}

export default SocialStats;
