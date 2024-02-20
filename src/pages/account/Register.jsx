import { Button, Card, Checkbox, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Container } from "reactstrap";
import Layout from "../../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import AccountHead from "../../components/AccountHead";
import { auth, storage } from "../../utils/firebase";
import { db } from "../../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleResgister = async (values) => {
    setLoading(true);
    try {
      const { username, email, password } = values;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, data);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: "user.id",
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      navigate("/cart", { replace: true });
      message.success("Successfully Logged in")
    } catch (error) {
      toast.error("Ooops!!! failed to create an account", {
        position: "top-right",
        theme: "colored",
      })
    }
    setLoading(false);
  };

  return (
    <Layout>
      <AccountHead />
      <Container className="grid py-24 sm:place-items-center sm:py-14">
        <Card className="sm:w-[400px]">
          <Form
            onFinish={handleResgister}
            form={form}
            name="normal_form"
            initialValues={{ remember: true }}
            layout="vertical"
            className="leading-3"
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Please Enter Username",
                },
              ]}
              hasFeedback
            >
              <Input
                type="text"
                placeholder="Enter Username"
                className="h-12 cursor-pointer"
                onChange={(e) => setData(e.target.value)}
              />
            </Form.Item>
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
                {min: 7},
              ]}
              hasFeedback
            >
              <Input.Password
                type="password"
                placeholder="Enter Password"
                className="h-12 cursor-pointer"
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="ConfirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please Confirm password",
                },
                {min: 7},
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Password don't match");
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                type="password"
                placeholder="Confirm Password"
                className="h-12 cursor-pointer"
              />
            </Form.Item>
            <Form.Item>
            <input
              type="file"
              onChange={(e) => setData(e.target.files[0])}
              required
            />
          </Form.Item>
            <Form.Item
              name="agreement"
              wrapperCol={{ span: 24 }}
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "To proceed, You need to agree to our terms and conditions"
                        ),
                },
              ]}
            >
              <Checkbox>
                Agree to our{" "}
                <a className="no-underline " href="/">
                  Terms and Conditions
                </a>
              </Checkbox>
            </Form.Item>
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              className="w-full h-12 text-lg bg-blue-400 ccursor-pointer"
            >
              {
                loading ? "isSubmitting..." : "Sign Up"
              }
            </Button>
            <Link to="/signin">
              <h1 className="py-6 text-lg text-center cursor-pointer text-md hover:underline">
                Already have an account? <span>Sign In</span>
              </h1>
            </Link>
          </Form>
        </Card>
      </Container>
      <ToastContainer />
    </Layout>
  );
};

export default Register;
