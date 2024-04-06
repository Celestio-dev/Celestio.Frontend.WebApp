import React from "react";
import EditInfo from "../../components/EditInfo";
import Heading from "../../baseComponents/AppHeading";
import { useSelector } from "react-redux";

function EditAgencyProfile() {
  const agency = useSelector((state) => state.agency);

  return (
    <div className="w-full flex flex-col gap-5">
      <Heading>
        {agency.description != ""
          ? "Uredite informacije o agenciji"
          : "Dodajte informacije o agenciji"}
      </Heading>
      <EditInfo
        type="agency"
        firstTime={agency.description == "" ? true : false}
        name={agency.managerName}
      />
    </div>
  );
}

export default EditAgencyProfile;
