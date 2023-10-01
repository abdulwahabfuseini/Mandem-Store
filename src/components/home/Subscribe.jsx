import MarkEmailReadOutlined from "@mui/icons-material/MarkEmailReadOutlined";
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import { Button } from "antd";
import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Box width="90%" margin="80px auto" textAlign="center" overflow="hidden">
      <IconButton>
        <MarkEmailReadOutlined fontSize="large" />
      </IconButton>
      <Typography variant="h4">Subscribe To Our Newsletter</Typography>
      <Typography>
        and recieve a GH₵: 200 coupon for your first order when checkout
      </Typography>
      <Box data-aos="fade-up"
       className="flex items-center sm:justify-center w-[100%] my-4 bg-white sm:px-2 sm:w-[75%] sm:mx-auto rounded-lg"
      >
        <InputBase
          sx={{ m: 1, flex: 1}}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 34,  m: 1.5 }} orientation="vertical" />
        <Button className="h-10 mr-1 text-white bg-Red sm:text-lg" >Subscribe</Button>
      </Box>
    </Box>
  );
};

export default Subscribe;
