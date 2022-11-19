import { Fragment } from "react";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import AddProgramForm from "../../components/Forms/AddProgramForm";
import AdminFormTemplate from "./AdminFormTemplate";

const AddProgramPage = () => {
  return (
    <Fragment>
      <AdminBanner />
      <AdminFormTemplate>
        <AddProgramForm />
      </AdminFormTemplate>
    </Fragment>
  );
};

export default AddProgramPage;
