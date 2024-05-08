import Vector from '../assets/Vector.png'
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="mx-7 flex-1 w-32 rounded">
                    <img src={Vector} />
                </div>
                <div className="flex-none mr-7">
                    <button onClick={()=> {
                        navigate("/");
                    }} className="btn btn-circle btn-outline"><AiOutlineClose />
                    </button>
                </div>
            </div>
        </>
    )
}