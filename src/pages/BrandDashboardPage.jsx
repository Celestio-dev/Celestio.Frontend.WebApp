import React from "react";
import Brief from "../components/Brief";
import DashboardProfileDetails from "../components/DashboardProfileDetails";
import AppHeading from "../baseComponents/AppHeading";
import Button from "../baseComponents/Button";

const array = [
  {
    briefName: "Total Users",
    description:
      "Total us Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the systemers in the system",
    dueDate: "2022-12-12",
    price: "100",
    numCreators: 10,
  },
  {
    briefName: "Total Users",
    description:
      "Total users Total users in the system otal users in the system otal users in the system Total users  Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the systemin the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system in the system",
    dueDate: "2022-12-12",
    price: "100",
    numCreators: 10,
  },
  {
    briefName: "Total Users",
    description:
      "Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system Total users in the system otal users in the system otal users in the system",
    dueDate: "2022-12-12",
    price: "100",
    numCreators: 10,
  },
];

function BrandDashboardPage() {
  return (
    <div className="flex justify-between w-full gap-12">
      <DashboardProfileDetails name="Brand name" />
      <div className="flex flex-col gap-5">
        <AppHeading>UGC zahtjevi</AppHeading>
        <div className="flex justify-start items-end h-full w-full">
          <Button label="Napravi novi UGC zahtjev" type="primary" />
        </div>
        {array.map((item, index) => (
          <Brief
            key={index}
            briefName={item.briefName}
            price={item.price}
            description={item.description}
            dueDate={item.dueDate}
            numCreators={item.numCreators}
            btn="Uredi"
          />
        ))}
      </div>
    </div>
  );
}

export default BrandDashboardPage;
