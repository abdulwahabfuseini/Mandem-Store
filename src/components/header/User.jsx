import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Col, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { message } from "antd";
import { GiShoppingCart } from "react-icons/gi";
import { RiUserSettingsLine } from "react-icons/ri";
import { PiSealQuestionBold } from "react-icons/pi";

const User = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  async function handleLogout() {
    setLoading(true);
    try {
      await signOut(auth);
      navigate("/", { replace: true });
      message.success("Successfully Logged out");
    } catch (error) {
      toast.error("Ooops!!! failed to Logout", {
        position: "top-right",
        theme: "colored",
      });
    }
    setLoading(false);
  }

  return (
    <>
      <div>
        {currentUser ? (
          <div className="flex items-center sm:gap-1">
            <h1 className="hidden capitalize sm:block">
              Hi, {currentUser.displayName}
            </h1>
            <IconButton>
              <Avatar sx={{ width: 36, height: 36 }}>
                <img
                  src={currentUser?.photoURL}
                  alt="avatar"
                  className="object-contain"
                  onClick={() => setOpenProfile(!openProfile)}
                />
              </Avatar>
            </IconButton>
          </div>
        ) : (
          <Link to="/signIn">
            <button className="text-lg cursor-pointer">Login</button>
          </Link>
        )}
      </div>
      <div>
        {openProfile && (
          <Row className="fixed z-50 w-56 py-5 space-y-5 transition-all duration-500 delay-300 bg-white shadow-md sm:right-4 top-20 sm:w-60 right-1">
            <Col className="grid place-items-center">
              <IconButton>
                <Avatar sx={{ width: 65, height: 65 }}>
                  <img
                    src={currentUser?.photoURL}
                    alt="avatar"
                    className="object-contain w-20 h-20"
                  />
                </Avatar>
              </IconButton>
              <p className="capitalize ">{currentUser?.displayName}</p>
              <h4 className="sm:text-lg">{currentUser?.email}</h4>
            </Col>
            <Col className="px-4 space-y-2">
              <span className="flex items-center gap-3">
                <RiUserSettingsLine className="w-6 h-6 sm:h-8 sm:w-8 text-slate-600" />
                <button
                  className="sm:text-lg"
                >
                  Update Profile
                </button>
              </span>
              <span className="flex items-center gap-3">
                <GiShoppingCart className="w-6 h-6 sm:h-8 sm:w-8 text-slate-600" />
                <Link to="/cart">
                  <button  className="sm:text-lg">
                    Shopping Cart
                  </button>
                </Link>
              </span>
              <span className="flex items-center gap-3">
                <PiSealQuestionBold className="w-6 h-6 sm:h-8 sm:w-8 text-slate-600" />
                <button
                  className="sm:text-lg"
                >
                  Help & Support
                </button>
              </span>
              <span className="flex items-center gap-3">
                <TbLogout className="w-6 h-6 sm:h-8 sm:w-8 text-slate-600" />
                <button
                  disabled={loading}
                  onClick={handleLogout}
                  className="sm:text-lg"
                >
                  Logout
                </button>
              </span>
            </Col>
          </Row>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default User;
