import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { Container } from "reactstrap";
import { Button, Card, Checkbox, Col, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import AccountHead from "../../components/AccountHead";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user
      message.success("Successfully Logged in")
      navigate("/cart", { replace: true });
    } catch (error) {
      toast.error("Ooops!!! failed to Login", {
        position: "top-right",
        theme: "colored",
      })
    }
    setLoading(false)
  };

  return (
    <Layout>
      <AccountHead />
      <Container className="grid py-24 sm:place-items-center sm:py-14">
        <Card className="sm:w-[400px] ">
          <Form
            onFinish={handleLogin}
            form={form}
            name="normal_form"
            initialValues={{ remember: true }}
            layout="vertical"
            className="leading-3"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please Enter email",
                },
                { type: "email" },
              ]}
              hasFeedback
            >
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="h-12 cursor-pointer"
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please Enter password",
                },
                { type: "password" },
              ]}
              hasFeedback
            >
              <Input.Password
                type="password"
                placeholder="Enter Password"
                className="h-12 cursor-pointer"
              />
            </Form.Item>
            <Col className="flex items-center justify-between mb-8">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/rest-password">
                <span className="relative m-r-0"> Forgot Password</span>
              </Link>
            </Col>
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              className="w-full h-12 text-lg bg-blue-400 ccursor-pointer"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <ClipLoader color="#36d7b7"
                    loading={loading}
                    size={20}
                    margin={2}
                    
                    />
                  <h6>Loading...</h6>
                </div>
              ) : (
                "Sign in"
              )}
            </Button>
            <Link to="/create-an-account">
              <h1 className="py-6 text-lg text-center cursor-pointer hover:underline">
                Don't have an account yet? <span>Sign up</span>
              </h1>
            </Link>
          </Form>
        </Card>
      </Container>
      <ToastContainer />
    </Layout>
  );
};

export default SignIn;
