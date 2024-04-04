import React from "react";
import InputField from "../baseComponents/InputField";
import FileInput from "../baseComponents/FileInput";
import { useState } from "react";
import Button from "../baseComponents/Button";
import { useDispatch } from "react-redux";
import {
  addSingleBrand,
  updateBrand,
  deleteBrand,
} from "../slices/AgencySlice";

function AddBrand(props) {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [name, setName] = useState(props.brandData ? props.brandData.name : "");
  const [description, setDescription] = useState(
    props.brandData ? props.brandData.description : ""
  );
  const [igUsername, setIgUsername] = useState("");
  const [igLink, setIgLink] = useState("");
  const [igFollowers, setIgFollowers] = useState("");
  const [ttUsername, setTtUsername] = useState("");
  const [ttLink, setTtLink] = useState("");
  const [ttFollowers, setTtFollowers] = useState("");
  const [ytUsername, setYtUsername] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [ytFollowers, setYtFollowers] = useState("");

  const [website, setWebsite] = useState(
    props.brandData ? props.brandData.website : ""
  );

  //Errors
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const saveBrandDataHandler = () => {
    if (name === "") {
      setNameError(true);
      return;
    }
    setNameError(false);
    if (description === "") {
      setDescriptionError(true);
      return;
    }
    setDescriptionError(false);

    if (props.brandData) {
      dispatch(
        updateBrand({
          name,
          description,
          image,
          website,
          id: props.brandData.id,
          briefs: props.brandData.briefs,
        })
      );
    } else
      dispatch(
        addSingleBrand({
          name,
          description,
          image,
          website,
          id: Math.random(),
          briefs: [],
        })
      );

    if (!props.empty) props.onClick();
  };

  return (
    <div className="flex flex-col gap-5 bg-secondary p-[30px] rounded-3xl h-[800px] justify-between">
      <div className="flex w-full gap-5">
        <div className="flex flex-col gap-5">
          <FileInput
            label={"Dodajte logotip"}
            id="logo-input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            notRequired
          />
        </div>
        <div className="w-full flex flex-col gap-5">
          <InputField
            label="Ime brenda"
            type="text"
            placeholder="Npr. Celestio"
            value={name}
            onChange={(e) => setName(e.target.value)}
            showError={nameError}
          />
          <InputField
            label="Kratki opis"
            type="textarea"
            placeholder="Npr. Student, fotograf, influenser"
            value={description}
            className="h-[280px]"
            onChange={(e) => setDescription(e.target.value)}
            showError={descriptionError}
          />
          <InputField
            label="Web stranica"
            type="text"
            placeholder="npr. www.celestio.dev"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            notRequired
          />
          <div></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          {props.brandData && (
            <Button
              label="Izbriši brend"
              type="danger"
              onClick={() => {
                dispatch(deleteBrand(props.brandData.id));
                props.delete();
              }}
            />
          )}
        </div>
        <div className="flex gap-3 ">
          {!props.empty && !props.brandData && (
            <Button label="Odbaci" type="white" onClick={props.onClick} />
          )}
          <Button
            label="Spremi"
            type="primary"
            onClick={saveBrandDataHandler}
          />
        </div>
      </div>
    </div>
  );
}
export default AddBrand;
