import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Close, Message } from "@mui/icons-material";
import { FaRegCommentAlt, FaSearch, FaTimes } from "react-icons/fa";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Chat = () => {
  const [contact, setContact] = useState(false);
  const [icon, setIcon] = useState(false);
  const [toggleTab, setToggleTab] = useState(1);
  const [form] = Form.useForm();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setContact(true) : setContact(false);
    });
  });

  const toggleButton = (index) => {
    setToggleTab(index);
  };

  return (
    <div>
      {contact && (
        <button
          onClick={() => setIcon(!icon)}
          className="fixed z-50 p-4 text-white bg-blue-800 rounded-full bottom-20 sm:bottom-5 right-4"
        >
          {icon ? <Close onClick={() => setIcon(false)} /> : <Message />}
        </button>
      )}
      {icon && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black sm:z-40 bg-opacity-70">
          <div
            onClick={() => setIcon(false)}
            className="fixed right-0 flex items-center gap-1 px-2 m-2 text-white bott-0 rounded-2xl bg-slate-800 sm:hidden"
          >
            close
            <FaTimes />
          </div>
          <div className="bg-slate-100 shadow-md h-[600px]  sm:h-[650px] z-50 w-full sm:w-96  sm:bottom-20 bottom-0  sm:right-4 right-0 fixed rounded-tl-xl rounded-tr-xl sm:rounded-none">
            <div className="relative grid w-full text-white place-items-centerX gap-y-3">
              <div className="relative grid w-full py-2 pb-8 bg-blue-500 place-items-center gap-y-4 rounded-tl-xl rounded-tr-xl sm:rounded-none">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleButton(1)}
                    className={toggleTab === 1 ? "activeTab" : "tab"}
                  >
                    <FaRegCommentAlt />
                    <h5>Ask</h5>
                  </button>
                  <button
                    onClick={() => toggleButton(2)}
                    className={toggleTab === 2 ? "activeTab" : "tab"}
                  >
                    <FaSearch />
                    <h5>FAQ</h5>
                  </button>
                </div>
                <div
                  className={`${
                    toggleTab === 1 ? "block" : "hidden"
                  } space-y-4`}
                >
                  <AvatarGroup max={6}>
                    <Avatar alt="Remy" src="/images/user/1.JPG" />
                    <Avatar alt="Remy" src="/images/user/2.JPG" />
                    <Avatar alt="Remy" src="/images/user/3.JPG" />
                    <Avatar alt="Remy" src="/images/user/4.JPG" />
                    <Avatar alt="Remy" src="/images/user/5.jpg" />
                    <Avatar alt="Remy" src="/images/user/2.JPG" />
                    <Avatar alt="Remy" src="/images/user/3.JPG" />
                    <Avatar alt="Remy" src="/images/user/1.JPG" />
                    <Avatar alt="Remy" src="/images/user/5.jpg" />
                  </AvatarGroup>
                  <div className="text-center">
                    <h3>How can we help?</h3>
                    <h6 className="text-gray-300">
                      We usually respond in a few hours
                    </h6>
                  </div>
                </div>
                <div className={`${toggleTab === 2 ? "block" : "hidden"}`}>
                  <h4 className="text-lg">Instant Answers</h4>
                </div>
              </div>
              <div className={toggleTab === 1 ? "block" : "hidden"}>
                <div className="px-4 py-2 sm:px-6">
                  <Form layout="vertical" form={form}>
                    <Form.Item
                      style={{ marginBottom: 5 }}
                      label="Name"
                      name="name"
                      rules={[{ required: true, message: "Name is required" }]}
                    >
                      <Input type="text" name="name" className="h-10" />
                    </Form.Item>
                    <Form.Item
                      style={{ marginBottom: 5 }}
                      label="Subject"
                      name="Subject"
                      rules={[
                        { required: true, message: "Subject is required" },
                      ]}
                    >
                      <Input type="text" name="Subject" className="h-10" />
                    </Form.Item>
                    <Form.Item
                      style={{ marginBottom: 5 }}
                      label="Email Address"
                      name="email"
                      rules={[
                        { required: true, message: "Email is required" },
                        { type: "email" },
                      ]}
                    >
                      <Input type="email" name="email" className="h-10" />
                    </Form.Item>
                    <Form.Item
                      label="How can we help?"
                      name="message"
                      rules={[
                        { required: true, message: "Message is required" },
                      ]}
                    >
                      <TextArea type="message" name="message" />
                    </Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full h-10 text-lg bg-blue-500"
                    >
                      Send a message
                    </Button>
                  </Form>
                </div>
              </div>
              <div
                className={`${
                  toggleTab === 2 ? "block" : "hidden"
                }  top-24 left-2 right-2 lg:right-0  absolute text-black space-y-1.5  overflow-y-auto h-[550px] scrollbar`}
              >
                <div className="p-4 bg-white border border-gray-300 rounded shadow-sm">
                  <h2>Help Question</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet delectus quaerat libero eos, nesciunt
                    tempore deleniti non cupiditate ducimus pariatur voluptatum
                    soluta porro voluptatibus modi minus magni itaque?
                  </p>
                </div>
                <div className="p-4 bg-white border border-gray-300 rounded shadow-sm">
                  <h2>Help Question</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet delectus quaerat libero eos, nesciunt
                    tempore deleniti non cupiditate ducimus pariatur voluptatum
                    soluta porro voluptatibus modi minus magni itaque?
                  </p>
                </div>
                <div className="p-4 bg-white border border-gray-300 rounded shadow-sm">
                  <h2>Help Question</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet delectus quaerat libero eos, nesciunt
                    tempore deleniti non cupiditate ducimus pariatur voluptatum
                    soluta porro voluptatibus modi minus magni itaque?
                  </p>
                </div>
                <div className="p-4 bg-white border border-gray-300 rounded shadow-sm">
                  <h2>Help Question</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet delectus quaerat libero eos, nesciunt
                    tempore deleniti non cupiditate ducimus pariatur voluptatum
                    soluta porro voluptatibus modi minus magni itaque?
                  </p>
                </div>
                <div className="p-4 bg-white border border-gray-300 rounded shadow-sm">
                  <h2>Help Question</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet delectus quaerat libero eos, nesciunt
                    tempore deleniti non cupiditate ducimus pariatur voluptatum
                    soluta porro voluptatibus modi minus magni itaque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
