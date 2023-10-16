import MarkEmailReadOutlined from "@mui/icons-material/MarkEmailReadOutlined";
import { Box, Divider, Typography, IconButton, InputBase } from "@mui/material";
import { Button, Form,  message } from "antd";
import { useState } from "react";



const Subscribe = () => {
   const [form] = Form.useForm()
   const [email, setEmail] = useState("")

  const handleSubmit = (values) => {
    message.success("Thanks  for Subscribing. You have won a GH₵: 200 coupon for your first order")
    form.resetFields();
    setEmail("")
  }

  return (
    <Box width="90%" margin="80px auto" textAlign="center" overflow="hidden">
      <IconButton>
        <MarkEmailReadOutlined fontSize="large" />
      </IconButton>
      <Typography variant="h4">Subscribe To Our Newsletter</Typography>
      <Typography>
        and recieve a GH₵: 200 coupon for your first order when checkout
      </Typography>
      <Form data-aos="fade-up" onFinish={handleSubmit} form={form}
       className="flex items-center sm:justify-center w-[100%] my-4 bg-white sm:px-2 sm:w-[75%] sm:mx-auto rounded-lg"
      >
        <InputBase
          sx={{ m: 1, flex: 1}}
          placeholder="Enter Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Divider sx={{ height: 34,  m: 1.5 }} orientation="vertical" />
        <Button  htmlType="submit" className="h-10 mr-1 text-white bg-Red sm:text-lg" >Subscribe</Button>
      </Form>
    </Box>
  );
};

export default Subscribe;
