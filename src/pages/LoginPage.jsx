import React from "react";
import Button from "../baseComponents/Button";
import LandingHeading from "../baseComponents/LandingHeading";
import Paragraph from "../baseComponents/Paragraph";
import InputField from "../baseComponents/InputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { logInAgency } from "../slices/AgencySlice";
import { logInCreator } from "../slices/CreatorSlice";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = () => {
    if (email == "") setEmailError(true);
    else setEmailError(false);

    if (password == "") setPasswordError(true);
    else setPasswordError(false);

    if (email == "" || password == "") return;

    if (props.type == "agency") {
      dispatch(logInAgency({}));
      navigate("/app/agency/");
    } else {
      dispatch(logInCreator({}));
      navigate("/app/creator/");
    }
  };

  return (
    <div className="mt-12 flex flex-col gap-7 justify-center items-center w-[630px] ">
      <LandingHeading>
        {props.type == "agency" ? "Pozdrav Agencija!" : "Pozdrav Kreatoru!"}
      </LandingHeading>
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <Paragraph size>Prvi put si ovdje?</Paragraph>
        <Button
          label="Prvo se registiraj"
          type="primary"
          linkTo={
            props.type == "agency" ? "/agency-register" : "/creator-register"
          }
          className="w-full"
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full gap-3 justify-center items-center">
          <div className="border-b-[1px] border-light-text w-full"></div>
          <Paragraph className="text-center text-[15px] w-full">
            AKO VEĆ IMAŠ RAČUN
          </Paragraph>
          <div className="border-b-[1px] border-light-text w-full"></div>
        </div>

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
        <Paragraph className="text-center text-[15px] w-[20%]">ILI</Paragraph>
        <div className="border-b-[1px] border-light-text w-full"></div>
      </div>

      <div className="w-full flex items-center justify-center flex-col gap-4">
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
          label="Upiši lozinku"
          placeholder="******"
          value={password}
          showError={passwordError}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        label="Prijavi se"
        type="primary"
        className="w-full"
        onClick={onLogin}
      />
    </div>
  );
}

export default LoginPage;
