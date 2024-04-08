import { configureStore } from "@reduxjs/toolkit";

import bagitems from "./Slice";

const store=configureStore({
  reducer:{
    items:bagitems.reducer
  }
})
export default  store