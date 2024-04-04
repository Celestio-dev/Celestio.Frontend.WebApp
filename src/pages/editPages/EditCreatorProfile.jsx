import React from "react";
import EditInfo from "../../components/EditInfo";
import Heading from "../../baseComponents/AppHeading";
import { useSelector } from "react-redux";

function EditCreatorProfile() {
  const creator = useSelector((state) => state.creator);

  return (
    <div className="w-full flex flex-col gap-5">
      <Heading>
        {creator.name != "" && creator.categories.length != 0
          ? "Uredite svoj profil"
          : "Popunite svoj profil"}
      </Heading>
      <EditInfo
        type={"creator"}
        firstTime={
          creator.name == "" || creator.categories.length == 0 ? true : false
        }
        name={creator.name}
      />
    </div>
  );
}

export default EditCreatorProfile;
