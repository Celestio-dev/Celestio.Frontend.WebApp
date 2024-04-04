import React from "react";
import InputField from "../baseComponents/InputField";
import FileInput from "../baseComponents/FileInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import EditCategories from "./EditCategories";
import Button from "../baseComponents/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategories, setCreatorName } from "../slices/CreatorSlice";
import { setAgencyName } from "../slices/AgencySlice";

const categories = [
  "kategorija1",
  "kategorija2",
  "kategorija3",
  "kategorija4",
  "kategorija5",
  "kategorija6",
  "kategorija7",
];

function EditInfo(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Creator
  const [selectedCategories, setSelectedCategories] = useState(
    useSelector((state) => state.creator.categories)
  );

  // Creator and Agency
  const [image, setImage] = useState("");
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState("");
  const [igUsername, setIgUsername] = useState("");
  const [igLink, setIgLink] = useState("");
  const [igFollowers, setIgFollowers] = useState("");
  const [ttUsername, setTtUsername] = useState("");
  const [ttLink, setTtLink] = useState("");
  const [ttFollowers, setTtFollowers] = useState("");
  const [ytUsername, setYtUsername] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [ytFollowers, setYtFollowers] = useState("");

  // Agency
  const [agencyName, setAgencyNameLocal] = useState("");
  const [website, setWebsite] = useState("");

  //Errors
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [agencyNameError, setAgencyNameError] = useState(false);

  const saveProfileDataHandler = () => {
    if (name === "") {
      setNameError(true);
      return;
    } else setNameError(false);

    if (description === "") {
      setDescriptionError(true);
      return;
    } else setDescriptionError(false);

    if (props.type === "creator") {
      dispatch(addCategories(selectedCategories));
      dispatch(setCreatorName(name));
      navigate("/app/creator");
    } else if (props.type === "agency") {
      if (agencyName === "") {
        setAgencyNameError(true);
        return;
      } else setAgencyNameError(false);

      dispatch(setAgencyName(name));
      navigate("/app/agency");
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-secondary p-[30px] rounded-3xl h-[800px] justify-between">
      <div className="flex w-full gap-5">
        <div className="flex flex-col gap-5">
          <FileInput
            label={
              props.type == "agency" ? "Dodajte logotip" : "Dodajte fotografiju"
            }
            id="logo-input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {props.type == "creator" && (
            <EditCategories
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          )}
        </div>
        <div className="w-full flex flex-col gap-5">
          <InputField
            label="Ime i prezime"
            type="text"
            placeholder="Npr. Marko Markovic"
            value={name}
            onChange={(e) => setName(e.target.value)}
            showError={nameError}
          />
          {!props.type == "creator" && (
            <InputField
              label="Ime agencije"
              type="text"
              placeholder="Npr. Agency 404"
              value={agencyName}
              onChange={(e) => setAgencyNameLocal(e.target.value)}
              showError={agencyNameError}
            />
          )}
          <InputField
            label="Kratki opis"
            type="textarea"
            placeholder="Npr. Student, fotograf, influenser"
            value={description}
            className="h-[280px]"
            onChange={(e) => setDescription(e.target.value)}
            showError={descriptionError}
          />
          {!props.type == "creator" && (
            <InputField
              label="Web stranica"
              type="text"
              placeholder="npr. www.celestio.dev"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              notRequired
            />
          )}
          <div></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          {!props.firstTime && <Button label="Izbriši profil" type="danger" />}
        </div>
        <div className="flex gap-3 ">
          {!props.firstTime && <Button label="Odbaci" type="white" />}
          <Button
            label="Spremi"
            type="primary"
            onClick={saveProfileDataHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default EditInfo;
