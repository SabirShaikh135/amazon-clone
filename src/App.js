import React,{useEffect} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Returns from "./component/Returns";
const App=()=>{
    const [{user},dispatch] =useStateValue();
    useEffect(() => {
       const unsubcribe= auth.onAuthStateChanged((authUser)=>{
       if(authUser){

        dispatch({
            type: 'Set_User',
            user:authUser,
        })

       }else{

        dispatch({
            type: 'Set_User',
            user:null,
        });
            
    }
        
});
  return ()=>{
        unsubcribe();
    }
    }, []);
    return(
      <Router>
      <div className="App">
          <Routes>
              <Route exact path="/Checkout" element={<><Header/><Checkout/></>}>
              </Route>

              <Route exact path="/Returns" element={<><Header/><Returns/></>}>
              </Route>

              <Route path="/login" element={<><Login/></>}>
              </Route>

              <Route path="/" element={<><Header/><Home/> </>}>
              </Route>

          </Routes>
         </div>
      </Router>
    )
}

export default App;