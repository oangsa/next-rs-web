import SideBar from "./sideBar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <main className="layout__main-content">{children}</main>;
    </div>
  );
};

export default BaseLayout;