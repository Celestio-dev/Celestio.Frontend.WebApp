import React from "react";
import Button from "../baseComponents/Button";
import Heading from "../baseComponents/Heading";
import Paragraph from "../baseComponents/Paragraph";

function LandingPage() {
  return (
    <div className="flex justify-start">
      <div className="mt-[10%] flex flex-col gap-5 w-[50%] ">
        <Heading>Dobrodošli na Celestio Content platformu</Heading>
        <Paragraph size>
          Ponude za kreiranje sadržaja udaljene su samo par klikova!
        </Paragraph>
        <div className="flex justify-start gap-[30px]">
          <Button
            label="Prijava za kreatore"
            type="primary"
            linkTo="creator-login"
          />
          <Button
            label="Prijava za agencije"
            type="primary"
            linkTo="agency-login"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
