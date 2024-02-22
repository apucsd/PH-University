import { Button, Col, Divider, Flex } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import { FieldValues } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddAcademicDepartmentMutation,
  useGetAllFacultyQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";

const CreateAcademicDepartment = () => {
  const { data, isFetching } = useGetAllFacultyQuery(undefined);
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  console.log(data);
  const academicFacultyOptions = data?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    try {
      const res = await addAcademicDepartment(data);
      if (res?.data?.success) {
        toast.success("Academic Department successfully Created");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHform onSubmit={onSubmit}>
            <Divider>Create Academic Department</Divider>
            <PHInput name="name" type="text" label="Name" />
            <PHSelect
              disabled={isFetching}
              options={academicFacultyOptions}
              name="academicFaculty"
              label="Academic Faculty"
            />
            <Button htmlType="submit">Submit</Button>
          </PHform>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicDepartment;
