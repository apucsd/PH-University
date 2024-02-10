import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });
  const onSubmit = async (data) => {
    const loginInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(loginInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(
      setUser({
        user: user,
        token: res.data.accessToken,
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">ID</label>
        <input type="text" placeholder="id" {...register("userId")} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="password" {...register("password")} />
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
