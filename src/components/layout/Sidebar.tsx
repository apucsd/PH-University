import { Menu, Layout } from "antd";
const { Sider } = Layout;
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const useRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const role = "faculty";
  let sidebarItems;
  switch (role) {
    case useRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, useRole.ADMIN);
      break;
    case useRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, useRole.FACULTY);
      break;
    case useRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, useRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>PH-University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;