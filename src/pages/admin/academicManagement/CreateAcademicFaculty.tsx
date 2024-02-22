import { Button, Col, Divider, Flex } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import { FieldValues } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  // academic-faculties/create-academic-faculty

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    try {
      const res = await addAcademicFaculty(data);
      if (res?.data?.success) {
        toast.success("Academic Faculty successfully Created");
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
            <Divider>Create Academic Faculty</Divider>
            <PHInput name="name" type="text" label="Name" />
            <Button htmlType="submit">Submit</Button>
          </PHform>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicFaculty;
