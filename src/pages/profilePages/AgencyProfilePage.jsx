import React, { useEffect } from "react";
import ManagingBrand from "../../components/ManagingBrand";
import DashboardProfileDetails from "../../components/DashboardProfileDetails";
import AppHeading from "../../baseComponents/AppHeading";
import Button from "../../baseComponents/Button";
import { useSelector } from "react-redux";
import Paragraph from "../../baseComponents/Paragraph";
import AddBrand from "../../components/EditAddBrand";
import { useState } from "react";

function AgencyProfilePage() {
  const agency = useSelector((state) => state.agency);
  const agencyBrands = useSelector((state) => state.agency.brands);

  const [addingNewBrand, setAddingNewBrand] = useState(false);
  const [editingBrand, setEditingBrand] = useState(false);
  const [editingBrandId, setEditingBrandId] = useState("");

  const editingBrandHandler = (id) => {
    setEditingBrand((state) => !state);
    setEditingBrandId(id);
  };

  const deleteBrandHandler = (id) => {
    setEditingBrand(false);
    setEditingBrandId("");
  };

  return (
    <div className="flex justify-between w-full gap-12">
      <DashboardProfileDetails data={agency} />

      <div className="flex flex-col gap-5 w-[80%]">
        {agencyBrands.length === 0 ? (
          <>
            <AppHeading>Još nema dodanih brendova!</AppHeading>
            <Paragraph app>Dodajte brend u par klikova</Paragraph>
            <AddBrand
              empty={true}
              onClick={() => setAddingNewBrand((state) => !state)}
            />
          </>
        ) : (
          <>
            <AppHeading>Brendovi kojima upravljate</AppHeading>
            <div className="flex justify-start">
              <Button
                type="primary"
                onClick={() => setAddingNewBrand((state) => !state)}
                label="Dodajte brend"
              />
            </div>
            {addingNewBrand && (
              <AddBrand
                visible={addingNewBrand}
                onClick={() => setAddingNewBrand((state) => !state)}
              />
            )}
            {editingBrand && (
              <AddBrand
                visible={addingNewBrand}
                onClick={() => {
                  setEditingBrand((state) => !state);
                  setEditingBrandId("");
                }}
                brandData={agencyBrands.find(
                  (item) => item.id === editingBrandId
                )}
                delete={() => deleteBrandHandler()}
              />
            )}
            {agencyBrands.map(
              (item) =>
                item.id !== editingBrandId && (
                  <ManagingBrand
                    key={item.id}
                    id={item.id}
                    brandName={item.name}
                    description={item.description}
                    numOfSubmissions={item.numOfSubmissions}
                    btn="Uredi"
                    onClick={() => editingBrandHandler(item.id)}
                  />
                )
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default AgencyProfilePage;
