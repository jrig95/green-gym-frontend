import { Fragment } from "react";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import AddWorkoutForm from "../../components/Forms/AddWorkoutForm";
import AdminFormTemplate from "./AdminFormTemplate";

const AddWorkoutPage = () => {
  return (
    <Fragment>
      <AdminBanner />
      <AdminFormTemplate>
        <AddWorkoutForm />
      </AdminFormTemplate>
    </Fragment>
  )
};

export default AddWorkoutPage;