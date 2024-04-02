import React from "react";
import ManagingBrand from "../components/ManagingBrand";
import DashboardProfileDetails from "../components/DashboardProfileDetails";
import AppHeading from "../baseComponents/AppHeading";
import Button from "../baseComponents/Button";

const brands = [
  {
    brandName: "Brand name",
    description:
      "Total us Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the systemers in the system",
    numOfSubmissions: 10,
  },
  {
    brandName: "Brand name",
    description:
      "Total us Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the systemers in the system",
    numOfSubmissions: 10,
  },
  {
    brandName: "Brand name",
    description:
      "Total us Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the systemers in the system",
    numOfSubmissions: 10,
  },
];

function AgencyDashboardPage() {
  return (
    <div className="flex justify-between w-full gap-12">
      <DashboardProfileDetails name="Agency name" />
      <div className="flex flex-col gap-5 ">
        <AppHeading>Brendovi kojima upravljate</AppHeading>
        {brands.map((item, index) => (
          <ManagingBrand
            key={index}
            brandName={item.brandName}
            description={item.description}
            numOfSubmissions={item.numOfSubmissions}
            btn="Uredi"
          />
        ))}
      </div>
    </div>
  );
}

export default AgencyDashboardPage;
