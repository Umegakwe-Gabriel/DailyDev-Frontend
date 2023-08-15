import { useState } from "react"
import pix from "../../assets/noProfilePic220.png"
import {Link} from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { registerAPI } from "../../apis/AuthApis"
import { useNavigate } from "react-router-dom"

const Register = () =>{

    const navigate = useNavigate()

    const [ image, setImage] = useState<string>("")
    const [ avatar, setAvatar ] = useState<string>(pix)

    const onHandleImage = (e: any) =>{
        const localImage = e.target.files[0]
        const saveImage = URL.createObjectURL(localImage)
        setImage(localImage)
        setAvatar(saveImage)
    }
    console.log(onHandleImage)

    const model = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password")]),
        
    })

    const { handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(model)
    })

    const onSubmit = handleSubmit(async (data) => {
        const {name, email, password} = data
        
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("avatar", image)
        
        registerAPI(formData).then(()=>{
            navigate("/sign-in")
        })
    })

    return(
        <div className="w-full  flex justify-center items-center h-[100vh]">
            <form onSubmit={onSubmit} className="flex flex-col items-center" >
{/* Image SetUp Starts */}
            <div className="flex flex-col items-center">
                <img src={avatar} className="w-[100px] h-[100px] rounded-[50%] object-cover border-4 border-[#410441]" />
                <label className="hover:cursor-pointer duration-300 transition-all py-2 px-8 my-2 bg-purple-500 text-purple-200 rounded-md hover:scale-[1.02]" htmlFor="image">Upload Image</label>
                <input placeholder="image" 
                className="hidden" 
                id="image" 
                type="file" 
                accept="image/png, image/jpeg, image/jpg" onChange={onHandleImage}/>
            </div>
            {/* Image SetUp ends */}

                {/* UserName SetUp Starts */}
            <div className="flex flex-col items-start">
                <label className="text-[12px] font-semibold">Name</label>
                <input placeholder="Enter your Name" className="w-[300px] border p-2 text-[14px] rounded bg-[white]" {...register("name")}/>
              {
                errors.name?.message &&  <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700">Error</label>
              }
            </div>
            {/* UserName SetUp ends */}
b 
                {/* Email SetUp Starts */}
            <div className="flex flex-col items-start">
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

                {/* Confirm SetUp Starts */}
            <div className="flex flex-col items-start">
                <label className="text-[12px] font-semibold">Confirm</label>
                <input placeholder="Enter your Confirm" className="w-[300px] border p-2 text-[14px] rounded bg-[white]" {...register("confirm")}/>
                {
                errors.confirm?.message &&  <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700">Error</label>
              }
            </div>
            {/* Confirm SetUp ends */}

                {/* Button SetUp Starts */}
            <button className="hover:cursor-pointer duration-300 transition-all py-3 px-4 my-2 bg-purple-700 text-purple-200 rounded hover:scale-[1.02] flex justify-center border border-purple-950" type="submit" >Register</button>
            {/* Button SetUp ends */}

            <div className="my-4"/>
            <hr />
            <div className="mt-4"/>
            <div className="flex flex-col items-center w-[300px] text-[12px]">
            <div>Already have an Account</div>
            <Link to="/sign-in">
            <span className="font-bold text-purple-500 hover:cursor-pointer decoration-none">Please Sign in here</span>
            </Link>
            </div>
            </form>
        </div>
    )
}

export default Register