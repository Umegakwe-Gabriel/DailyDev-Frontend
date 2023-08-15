import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute: React.FC<PropsWithChildren> = ({children}) =>{
const userID = useSelector((state: any) => state.dailyState)

return(
<div>
    {
        userID ? <div>{children}</div> : <Navigate to="/sign-in"/>
    }
</div>
)
}

export default PrivateRoute