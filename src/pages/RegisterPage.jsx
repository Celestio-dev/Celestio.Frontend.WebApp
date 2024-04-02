import React from "react";
import Button from "../baseComponents/Button";
import LandingHeading from "../baseComponents/LandingHeading";
import Paragraph from "../baseComponents/Paragraph";
import InputField from "../baseComponents/InputField";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RegisterPage(props) {
  const navigate = useNavigate();

  const onRegister = () => {
    console.log("Register");
    navigate("/app");
  };

  return (
    <div className="mt-12 flex flex-col gap-7 justify-center items-center w-[530px] ">
      <LandingHeading>
        {props.type == "agency" ? "Registriraj se" : "Registriraj se"}
      </LandingHeading>

      <Paragraph className="text-center" size>
        Ponude za kreiranje sadržaja udaljene su samo par klikova!
      </Paragraph>

      <div className="flex flex-col w-full gap-4">
        <Button
          label="Prijavi se s Google"
          icon="google"
          type="secondary"
          linkTo="creator-login"
          className="w-full"
        />
        <Button
          label="Prijavi se s Instagram"
          type="secondary"
          linkTo="creator-login"
          className="w-full"
          icon="ig"
        />
      </div>

      <div className="flex w-full gap-3 items-center justify-center">
        <div className="border-b-[1px] border-light-text w-full"></div>
        <Paragraph className="text-center text-[14px] w-[20%]">ILI</Paragraph>
        <div className="border-b-[1px] border-light-text w-full"></div>
      </div>

      <div className="w-full flex items-center justify-center flex-col gap-4">
        <InputField type="text" label="Ime" placeholder="Npr. Marko" />
        <InputField type="text" label="Prezime" placeholder="Npr. Horvat" />
        <InputField
          type="email"
          label="Email adresa"
          placeholder="marko@primjer.com"
        />
        <InputField
          type="password"
          label="Kreiraj lozinku"
          placeholder="******"
        />
        <InputField
          type="password"
          label="Ponovi lozinku"
          placeholder="******"
        />
      </div>

      <Button
        label="Prijavi se"
        type="primary"
        linkTo="creator-login"
        className="w-full"
        onClick={onRegister}
      />
      <Paragraph className="text-center text-[16px]">
        Registracijom prihvaćate naše{" "}
        <Link className="text-primary">Uvjete korištenja</Link>
      </Paragraph>
    </div>
  );
}

export default RegisterPage;
