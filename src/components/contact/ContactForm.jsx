import { Button, Form, Input } from "antd";
import emailjs from "@emailjs/browser";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    email: "",
    PhoneNumber: 0,
    Message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (values) => {
    setLoading(true);
    emailjs
      .send(
        "service_hc4os5t",
        "template_mnp1bqq",
        {
          email: form.email,
          PhoneNumber: form.PhoneNumber,
          Message: form.Message,
        },
        "9vSC2INYrwofrkKDo"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thanks for contacting ManDem Accessories, we will get black to you as soon as possible. Stay Bless!!!"
          );
          setForm();
        },
        (error) => {
          setLoading(false);
          alert("oops!!! Something went wrong");
        }
      );
  };

  return (
    <Form onFinish={handleSubmit} className="py-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-x-2">
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please Enter Email" },
            { type: "email" },
          ]}
          hasFeedback
        >
          <Input
            type="email"
            name="email"
            placeholder="Eg: myname@gmail.com"
            className="rounded-3xl h-12 px-5 border-2 border-slate-600 text-lg"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          name="PhoneNumber"
          rules={[
            { required: true, message: "Please Enter Phone Number" },
            { min: 10 },
          ]}
          hasFeedback
        >
          <Input
            type="tel"
            name="PhoneNumber"
            placeholder="(000) 000 000 0000"
            className="rounded-3xl h-12 px-5 border-2 border-slate-600 text-lg"
            onChange={handleChange}
          />
        </Form.Item>
      </div>
      <Form.Item
        name="Message"
        rules={[{ required: true, message: "Please Enter Message" }]}
      >
        <TextArea
          type="text"
          name="Message"
          placeholder="Enter Message"
          className="p-5 border-2 border-slate-600 text-lg"
          onChange={handleChange}
        />
      </Form.Item>
      <Button
        htmlType="submit"
        className="bg-Red text-white rounded-3xl hover:bg-white w-28 h-10 text-lg hover:shadow-md mt-2"
      >
        {loading ? <h1>Sending...</h1> : "Submit"}
      </Button>
    </Form>
  );
};

export default ContactForm;
