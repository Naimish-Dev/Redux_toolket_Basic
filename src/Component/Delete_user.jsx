import React from 'react'
import Button from "@mui/material/Button";
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../Stors/Slices/User_Slice';
const Delete_user = () => {
  const dispatch = useDispatch();
  const deleteallusers =()=>{
dispatch(deleteUser());
  }
  return (
    <Button sx={{margin:"auto", display:"grid", width:"100px"}} 
             variant="outlined" color="error"
              onClick={deleteallusers}>
      Delete
    </Button>
  );
}

export default memo(Delete_user);