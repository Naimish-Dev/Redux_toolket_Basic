import { createSlice } from "@reduxjs/toolkit";
import { createAction_DeleteAllUsers} from "../CreateAction/ActionCreator";

// when we create slice that automatically creat action type 
const usersSlice = createSlice({
  // provide slice name
  name: "user",
  // initialstate
  initialState: [],
  // reducer means which kind of changes in state it deside by microreducer it availabe inside of "resucers"
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log(action.payload);
      // if we pass user as a payload so the we need to user index
      // const userid=state.indexOf(action.payload)
      state.splice(action.payload, 1);
      console.log(state);
    },

    deleteUser(state, action) {
      // here we actual assign emapty array to state it is not proper way to crear data of an array
      // return state=[]
      // here bydefault return empty arry to state
      return [];
    },
  },
  // this extraReducer use in other Slice We have lake of code so we write here
  // how to export extraReducer
  // export const {deleteUser}=otherSlice.actions
  // deleteUser is not available it now work
  extraReducers(builder) {
    builder.addCase(usersSlice.actions.deleteUser, () => {
      return [];
    });
  },


//CreateAction Methode 
// we does not need to export from here this action 
  extraReducers(builder) {
    builder.addCase(createAction_DeleteAllUsers, () => {
      return [];
    });
  },
});
// console.log("usersSlice.actions")
export const { addUser, removeUser, deleteUser } = usersSlice.actions;
export default  usersSlice.reducer;