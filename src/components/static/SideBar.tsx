import { useState } from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import pix from "../../assets/noProfilePic220.png"

const SideBar = () => {
    const [state, setState] = useState<boolean>(true)
  return (
    <div className={`w-[${state ? "250px" : "70px"}] h-full fixed border-r-[1px] mt-[70px]`}>
      <div className="w-[30px] h-[30px] rounded-md flex justify-center items-center mt-3 bg-white border border-silver ">
      <AiOutlineArrowRight className="justify-end mr-[5px] text-[20px] "/>
      </div>
        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-100 hover: cursor-pointer duration-300 transition-all py-2">
            <img src={pix} className="w-[32px] h-[32px] mb-[1px] rounded-md object-cover border border-slate-500"/>
            <div className="text-[silver]">my feed</div>
        </div>

        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-100 hover: cursor-pointer duration-300 transition-all py-2">
            <img />
            <div>my feed</div>
        </div>
    </div>
  )
}

export default SideBar