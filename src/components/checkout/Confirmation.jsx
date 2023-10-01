import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Confirmation = () => {
  const navigate = useNavigate();
  const {currentUser} = useAuth()

  return (
    <div className="grid place-items-center py-10">
      <Box sx={{display: "grid", placeContent: "center", placeItems: "center"}}>
        <Alert severity="success" sx={{display: "grid", placeContent: "center", placeItems: "center", overflowX: "hidden"}}>
          <AlertTitle sx={{fontSize: 20, textAlign: "center", textTransform: "uppercase"}}>{currentUser?.displayName}</AlertTitle>
          <Typography sx={{fontSize: 20, textAlign: "center"}}> You have successfully made an order.</Typography> 
           <Typography>Your order will be delivered to your doorstep ASAP.</Typography>
           <img src="/images/SVG/DeliveryMotor1.png" alt="delivery" className="motor my-6"/>
        </Alert>
        <Button
          fullwidth
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: "blue",
            boxShadow: "none",
            borderRadius: "4px",
            marginTop: "18px"
          }}
          onClick={() => navigate("/", { replace: true })}
        >
          Back to home
        </Button>
      </Box>
    </div>
  );
};

export default Confirmation;
