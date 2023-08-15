import {Link} from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { SignInAPI } from "../../apis/AuthApis"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createUser } from "../../global/GlobalState"

const SignIn = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const model = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
        
    })

    const { handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(model)
    })

    const onSubmit = handleSubmit(async (data) => {
        const {email, password} = data

        SignInAPI({email, password}).then((res)=>{
            dispatch(createUser(res))
            navigate("/")
        })
    })

    return(
        <div className="w-full  flex justify-center items-center h-[100vh]">
            <form className="flex flex-col items-center" onSubmit={onSubmit}>

                {/* Email SetUp Starts */}
            <div className="flex flex-col items-start mb-2">
                <label className="text-[12px] font-semibold">Email</label>
                <input placeholder="Enter your Email" className="w-[300px] border p-2 text-[14px] rounded bg-[white]" {...register("email")}/>
                {
                errors.email?.message &&  <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700">Error</label>
              }
            </div>
            {/* Email SetUp ends */}

                {/* Password SetUp Starts */}
            <div className="flex flex-col items-start">
                <label className="text-[12px] font-semibold">Password</label>
                <input placeholder="Enter your Password" className="w-[300px] border p-2 text-[14px] rounded bg-[white]" {...register("password")}/>
                {
                errors.password?.message &&  <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700">Error</label>
              }
            </div>
            {/* Password SetUp ends */}

                {/* Button SetUp Starts */}
            <button className="hover:cursor-pointer duration-300 transition-all py-3 px-4 my-2 bg-purple-700 text-purple-200 rounded hover:scale-[1.02] flex justify-center border border-purple-950" type="submit">Sign In</button>
            {/* Button SetUp ends */}

            <div className="my-4"/>
            <hr />
            <div className="mt-4"/>
            <div className="flex flex-col items-center w-[300px] text-[12px] mt-[-20px]">
            <div>Don't have an Account</div>
            <Link to="/register">
            <span className="font-bold text-purple-500 hover:cursor-pointer decoration-none">Create one here</span>
            </Link>
            </div>
            </form>
        </div>
    )
}

export default SignIn