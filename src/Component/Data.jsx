import React from 'react'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../Stors/Slices/User_Slice';

const Data = () => {
    const dispatch = useDispatch()
  // to use store data we want to import useSelector it takes call back functiona as aargument and pass store as a argument inside of  callback function 
  const data = useSelector((store) => {
    //store is main sotre which have store data of all slices
    return store.users;
  });

  const removeuser =(id)=>{
    dispatch(removeUser(id));
  }
  return (
    <>
      {data.map((userdata, id) => {
        return (
          <Grid
            container
            sx={{
              backgroundColor: "white",
              padding: "5px",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid xs={10}>{userdata}</Grid>
            <Grid
              xs={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="btnbg">
                <Button color="primary" variant="outlined" size="small" onClick={()=>removeuser(id)}>
                  Remove
                </Button>
              </div>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}

export default memo(Data);