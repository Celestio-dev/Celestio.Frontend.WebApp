import React from "react";
import Brief from "../../components/Brief";
import Paragraph from "../../baseComponents/Paragraph";
import DashboardProfileDetails from "../../components/DashboardProfileDetails";
import AppHeading from "../../baseComponents/AppHeading";
import Button from "../../baseComponents/Button";
import { useSelector } from "react-redux";
import EditAddBrief from "../../components/EditAddBrief";
import { useState } from "react";

function BrandProfilePage() {
  const selectedBrand = useSelector((state) => state.agency.selectedBrand);
  const briefs = useSelector((state) => state.agency.selectedBrand.briefs);

  const [addingNewBrief, setAddingNewBrief] = useState(false);
  const [editingBrief, setEditingBrief] = useState(false);
  const [editingBriefId, setEditingBriefId] = useState("");

  const editingBriefHandler = (id) => {
    setEditingBrief((state) => !state);
    setEditingBriefId(id);
  };

  const deleteBriefHandler = () => {
    setEditingBrief(false);
    setEditingBriefId("");
  };

  return (
    <div className="flex justify-between w-full gap-12">
      <DashboardProfileDetails data={selectedBrand} />
      <div className="flex flex-col gap-5 w-[80%]">
        {briefs.length === 0 ? (
          <>
            <AppHeading>Još nema dodanih UGC zahtjeva!</AppHeading>
            <Paragraph app>
              Objavite svoj UGC zahtjev u samo par klikova
            </Paragraph>
            <EditAddBrief
              empty={true}
              onClick={() => setAddingNewBrief((state) => !state)}
              brandId={selectedBrand.id}
            />
          </>
        ) : (
          <>
            <AppHeading>UGC Zahtjevi</AppHeading>
            <div className="flex justify-start">
              <Button
                type="primary"
                onClick={() => setAddingNewBrief((state) => !state)}
                label="Novi UGC zahtjev"
              />
            </div>
            {addingNewBrief && (
              <EditAddBrief
                visible={addingNewBrief}
                onClick={() => setAddingNewBrief((state) => !state)}
                brandId={selectedBrand.id}
              />
            )}
            {editingBrief && (
              <EditAddBrief
                visible={addingNewBrief}
                onClick={() => {
                  setEditingBrief((state) => !state);
                  setEditingBriefId("");
                }}
                briefData={briefs.find((item) => item.id === editingBriefId)}
                brandId={selectedBrand.id}
                delete={() => deleteBriefHandler()}
              />
            )}
            {briefs.map(
              (item) =>
                item.id !== editingBriefId && (
                  <Brief
                    key={item.id}
                    name={item.name}
                    budget={item.budget}
                    description={item.description}
                    dueDate={item.dueDate}
                    numOfApplications={item.numOfApplications}
                    btn="Uredi"
                    onClick={() => editingBriefHandler(item.id)}
                  />
                )
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BrandProfilePage;
