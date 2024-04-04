import React from "react";
import LogoPlaceholder from "../assets/placeHolders/logo-placeholder.svg";
import SocialStats from "../baseComponents/SocialStats";
import AppHeading from "../baseComponents/AppHeading";
import Paragraph from "../baseComponents/Paragraph";
import VerifiedBadge from "../assets/icons/verified-badge.svg";
import StartIcon from "../assets/icons/star-icon.svg";

function DashboardProfileDetails({ data, type }) {
  return (
    <div className="flex flex-col gap-6 w-[20%]">
      <img src={LogoPlaceholder} alt="logo" className="w-[240px]" />

      <div className="flex gap-5 items-center">
        <AppHeading>{data.name}</AppHeading>
        {type === "creator" && <img src={VerifiedBadge} className="w-[30px]" />}
      </div>

      {type === "creator" ? (
        <div className="flex items-center gap-4">
          <div className="flex">
            <img src={StartIcon} alt="star" />
            <img src={StartIcon} alt="star" />
            <img src={StartIcon} alt="star" />
            <img src={StartIcon} alt="star" />
            <img src={StartIcon} alt="star" />
          </div>
          <Paragraph>30 recenzija</Paragraph>
        </div>
      ) : null}
      <SocialStats
        igUsername="ime_prezime"
        igFollowers={20000}
        ytUsername="ime_prezime"
        ytFollowers={13500}
        ttUsername="ime_prezime"
        ttFollowers={10000}
      />
      <Paragraph app>
        Lorem ipsum dolor sit amet. Qui fuga recusandae et assumenda mollitia
        aut molestiae quisquam et dolor repellendus vel illo sunt sit fugit
        quae. Eum doloribus eligendi est quia fugiat est nulla dolor cum libero
        ratione. Et rerum illo ut dolores odit et dicta impedit.
      </Paragraph>
      <Paragraph app>
        Lorem ipsum dolor sit amet. Qui fuga recusandae et assumenda mollitia
        aut molestiae quisquam et dolor repellendus vel illo sunt sit fugit
        quae. Eum doloribus eligendi est quia fugiat est nulla dolor cum libero
        ratione. Et rerum illo ut dolores odit et dicta impedit.
      </Paragraph>
    </div>
  );
}

export default DashboardProfileDetails;
