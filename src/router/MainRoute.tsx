import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register"
import HomeScreen from "../pages/screen/HomeScreen"
import SignIn from "../pages/auth/SignIn"
import Error from "../error/error"
// import PrivateRoute from "./PrivateRoute"
import LayOut from "../components/common/LayOut"

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: 
        //  <PrivateRoute>
            <LayOut/>,
         /* </PrivateRoute>,  */
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    },    
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/sign-in",
        element: <SignIn/>
    },
    {
        path: "*",
        element: <Error/>
    },
])

