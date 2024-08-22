import { Outlet } from "react-router-dom";

const AdminLaout = () => {
  return (
    <div>
      <h1>This is AdminLaout Component</h1>
      <Outlet />
    </div>
  );
};

export default AdminLaout;