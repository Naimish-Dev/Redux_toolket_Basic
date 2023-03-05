import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Delete_user from "./Delete_user";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Stors/Slices/User_Slice";
import Data from "./Data";
const UserData = () => {
  const dispatch = useDispatch()
  const [User,setUser]=useState("")

  const setuser=()=>{
    if (User === ""){
alert("Please enter user name or details")
    } else{
      dispatch(addUser(User));
      setUser("")
    }
  }
  return (
    <>
      <Grid container my={2}>
        <Grid xs={10} px={2}>
          <div className="adduser">
            <h4>List of users </h4>
            <input
              type="text"
              placeholder="Enter user name"
              value={User}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
        </Grid>
        <Grid
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="btnbg">
            <Button variant="outlined" color="success" onClick={setuser}>
              Add User
            </Button>
          </div>
        </Grid>
      </Grid>
      <Data />
      <hr></hr>
      <Delete_user />
    </>
  );
};

export default UserData;
