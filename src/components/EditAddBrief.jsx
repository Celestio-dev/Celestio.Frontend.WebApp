import React from "react";
import InputField from "../baseComponents/InputField";
import FileInput from "../baseComponents/FileInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../baseComponents/Button";
import { useDispatch } from "react-redux";
import {
  addSingleBrief,
  setSelectedBrand,
  updateBrief,
  deleteBrief,
} from "../slices/AgencySlice";
import EditCategories from "./EditCategories";

const categoriesForChoosing = [
  "kategorija1",
  "kategorija2",
  "kategorija3",
  "kategorija4",
  "kategorija5",
  "kategorija6",
  "kategorija7",
];

function EditAddBrief(props) {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [name, setName] = useState(props.briefData ? props.briefData.name : "");
  const [description, setDescription] = useState(
    props.briefData ? props.briefData.description : ""
  );
  const [dueDate, setDueDate] = useState(
    props.briefData ? props.briefData.dueDate : ""
  );
  const [budget, setBudget] = useState(
    props.briefData ? props.briefData.budget : ""
  );
  const [numOfApplications, setNumOfApplications] = useState(
    props.briefData ? props.briefData.numOfApplications : ""
  );
  const [selectedCategories, setSelectedCategories] = useState(
    props.briefData ? props.briefData.selectedCategories : []
  );

  //Errors

  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [dueDateError, setDueDateError] = useState(false);
  const [budgetError, setBudgetError] = useState(false);
  const [numOfApplicationsError, setNumOfApplicationsError] = useState(false);

  const saveBriefDataHandler = () => {
    if (name === "") {
      setNameError(true);
      return;
    } else setNameError(false);

    if (budget === "") {
      setBudgetError(true);
      return;
    } else setBudgetError(false);

    if (numOfApplications === "") {
      setNumOfApplicationsError(true);
      return;
    } else setNumOfApplicationsError(false);

    if (dueDate === "") {
      setDueDateError(true);
      return;
    } else setDueDateError(false);

    if (description === "") {
      setDescriptionError(true);
      return;
    } else setDescriptionError(false);

    if (props.briefData) {
      dispatch(
        updateBrief({
          name,
          description,
          image,
          budget,
          dueDate,
          numOfApplications,
          selectedCategories,
          id: props.briefData.id,
          brandId: props.brandId,
        })
      );
    } else
      dispatch(
        addSingleBrief({
          name,
          description,
          image,
          dueDate,
          budget,
          numOfApplications,
          selectedCategories,
          id: Math.random(),
          brandId: props.brandId,
        })
      );

    dispatch(setSelectedBrand(props.brandId));

    if (!props.empty) props.onClick();
  };

  return (
    <div className="flex flex-col gap-5 bg-secondary p-[30px] rounded-3xl h-[800px] justify-between">
      <div className="flex w-full gap-5 ">
        <div className="flex flex-col gap-5 w-[280px]">
          <FileInput
            label={"Dodajte fotografiju"}
            id="image-input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            notRequired
          />
          <EditCategories
            categories={categoriesForChoosing}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="w-full flex flex-col gap-5">
          <InputField
            label="Ime UGC zahtjeva"
            type="text"
            placeholder="Npr. Celestio"
            value={name}
            onChange={(e) => setName(e.target.value)}
            showError={nameError}
          />

          <InputField
            label="Budžet (€)"
            type="number"
            placeholder="npr. 200"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            showError={budgetError}
          />
          <InputField
            label="Broj potrebnih prijava"
            type="number"
            placeholder="npr. 50"
            value={numOfApplications}
            onChange={(e) => setNumOfApplications(e.target.value)}
            showError={numOfApplicationsError}
          />

          <InputField
            label="Rok za prijave"
            type="text"
            placeholder="Unesite format DD/MM/YYYY"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            showError={dueDateError}
          />

          <InputField
            label="Opis zahtjeva"
            type="textarea"
            placeholder="Npr. Student, fotograf, influenser"
            value={description}
            className="h-[280px]"
            onChange={(e) => setDescription(e.target.value)}
            showError={descriptionError}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          {props.briefData && (
            <Button
              label="Izbriši brief"
              type="danger"
              onClick={() => {
                dispatch(
                  deleteBrief({
                    brandId: props.brandId,
                    briefId: props.briefData.id,
                  })
                );
                props.delete();
              }}
            />
          )}
        </div>
        <div className="flex gap-3 ">
          {!props.empty && !props.briefData && (
            <Button label="Odbaci" type="white" onClick={props.onClick} />
          )}
          <Button
            label="Spremi"
            type="primary"
            onClick={saveBriefDataHandler}
          />
        </div>
      </div>
    </div>
  );
}
export default EditAddBrief;
