import {AiOutlineBell, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import img from "../../assets/noProfilePic220.png"
import { useDispatch, useSelector } from "react-redux"
import { onToggle } from '../../global/GlobalState'

const Header = () => {
    // const [state, setState] = useState<boolean>(false)
    const toggle = useSelector((state: any) => state.toggle)
    const dispatch = useDispatch()

  return (
    <div className='w-full flex justify-center h-[70px] bg-white border-b-[1px] border-[silver] fixed'>

        <div className='w-[95%] flex justify-between items-center'>

            {
                toggle ? <div className='hidden meduim:flex w-[40px] h-[40px] rounded-md hover:bg-slate-200 justify-center items-center hover:cursor-pointer duration-300 transition-all' onClick={
                    ()=>{
                        dispatch(onToggle(false))
                    }
                }>
                    <AiOutlineClose className="text-[25px]"/>
                </div> : <div className='hidden meduim:flex w-[40px] h-[40px] rounded-md hover:bg-slate-200 justify-center items-center hover:cursor-pointer duration-300 transition-all' onClick={
                ()=>{
                    dispatch(onToggle(true))
                }
            }>
                <AiOutlineMenu className="text-[25px]"/>
            </div>
            }
            <div className='text-[30px] font-bold hover:cursor-pointer'>logo</div>
            <div className='flex items-center'>
                <div className='w-[50px] h-[30px] bg-slate-400 flex items-center justify-center rounded-md mr-4'>
                    <AiOutlineBell className="text-white text-[20px]"/>
                </div> 

                <div className='w-[70px] bg-[#c0bfbf] h-[35px] rounded flex justify-between items-center hover: cursor-pointer  meduim:hidden'>
                    <div className='ml-2 font-bold text-white '>10</div>
                    <img src={img} className='w-[37px] h-[37px] mb-[1px] rounded-md object-cover border border-slate-500'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header