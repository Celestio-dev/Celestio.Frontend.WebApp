import React from "react";
import Button from "../baseComponents/Button";
import LandingHeading from "../baseComponents/LandingHeading";
import Paragraph from "../baseComponents/Paragraph";
import InputField from "../baseComponents/InputField";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  logInAgency,
  setAgencyName,
  setManagerName,
} from "../slices/AgencySlice";
import { logInCreator, setCreatorName } from "../slices/CreatorSlice";
import { useDispatch } from "react-redux";

function RegisterPage(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = () => {
    if (firstName == "") setFirstNameError(true);
    else setFirstNameError(false);

    if (lastName == "") setLastNameError(true);
    else setLastNameError(false);

    if (email == "") setEmailError(true);
    else setEmailError(false);

    if (password == "") setPasswordError(true);
    else setPasswordError(false);

    if (confirmPassword !== password) setConfirmPasswordError(true);
    else setConfirmPasswordError(false);

    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      password == "" ||
      confirmPassword !== password
    )
      return;

    if (props.type == "agency") {
      dispatch(logInAgency({}));
      dispatch(setManagerName(firstName + " " + lastName));
      navigate("/app/agency/edit");
    } else {
      dispatch(logInCreator({}));
      dispatch(setCreatorName(firstName + " " + lastName));
      navigate("/app/creator/edit");
    }
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
        <InputField
          type="text"
          label="Ime"
          placeholder="Npr. Marko"
          value={firstName}
          showError={firstNameError}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          type="text"
          label="Prezime"
          placeholder="Npr. Horvat"
          value={lastName}
          showError={lastNameError}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputField
          type="email"
          label="Email adresa"
          placeholder="marko@primjer.com"
          value={email}
          showError={emailError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          label="Kreiraj lozinku"
          placeholder="******"
          value={password}
          showError={passwordError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          label="Ponovi lozinku"
          placeholder="******"
          value={confirmPassword}
          showError={confirmPasswordError}
          errorMessage="Lozinke se ne podudaraju"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <Button
        label="Prijavi se"
        type="primary"
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
