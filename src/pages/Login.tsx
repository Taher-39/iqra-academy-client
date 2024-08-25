import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "antd";
import { useLoginMutation } from "../redux/features/Auth/authApi";
import { setUser } from "../redux/features/Auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

type TAuth = {
  id: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<TAuth>();

  const [ login ] = useLoginMutation();
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<TAuth> = async(data) => {
    const userInfo = await login(data).unwrap();
    const token = userInfo.data.accessToken;
    const user = verifyToken(token)
    
    dispatch(setUser({
      user,
      token
    }))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">
          <input type="text" {...register("id")} placeholder="Enter your ID" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input
            type="text"
            {...register("password")}
            placeholder="Enter your password"
          />
        </label>
      </div>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default Login;
