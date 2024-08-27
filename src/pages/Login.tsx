import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import { useLoginMutation } from "../redux/features/Auth/authApi";
import { setUser } from "../redux/features/Auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../Types";
import GlobalFormProvider from "../components/form/GlobalFormProvider";
import FormInput from "../components/form/FormInput";

const Login = () => {
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const toastId = toast.loading("Login Almost Done.");
    try {
      const userInfo = await login(data).unwrap();
      const token = userInfo.data.accessToken;
      const user = verifyToken(token) as TUser;

      dispatch(
        setUser({
          user,
          token,
        })
      );

      toast.success("Login Successfully.", { id: toastId, duration: 2000 });

      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col>
        <GlobalFormProvider onSubmit={onSubmit}>
          <FormInput
            type="text"
            name="id"
            label="Id: "
            placeholder=" Input your id"
          />
          <FormInput
            type="text"
            name="password"
            label="Password: "
            placeholder=" Enter your password"
          />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </GlobalFormProvider>
      </Col>
    </Row>
  );
};

export default Login;
