import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHform from "../components/form/PHform";
import PHInput from "../components/form/PHInput";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const id = toast.loading("Loading, Please wait...");
    try {
      const loginInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(loginInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(
        setUser({
          user: user,
          token: res.data.accessToken,
        })
      );
      navigate(`/${user.role}/dashboard`);
      toast.success("Login successful", { id: id, duration: 2000 });
    } catch (error) {
      toast.error("Something went wrong", { id: id, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHform onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type={"text"} name={"userId"} label={"ID :"} />
        <PHInput type={"text"} name={"password"} label={"Password :"} />
        <Button htmlType="submit">Submit</Button>
      </PHform>
    </Row>
  );
};

export default Login;
