import { Button, Table } from "antd";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicFaculty = () => {
  const { data, isFetching } = useGetAllFacultyQuery(undefined);

  const tableData = data?.data?.map(({ _id, name, createdAt }) => ({
    key: _id,
    name,
    createdAt,
  }));
  const columns = [
    {
      title: "Name",

      dataIndex: "name",
    },
    {
      title: "Created",
      dataIndex: "createdAt",
    },
  ];
  return (
    <div>
      <Table loading={isFetching} columns={columns} dataSource={tableData} />
    </div>
  );
};

export default AcademicFaculty;
