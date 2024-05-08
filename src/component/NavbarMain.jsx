import Vector from "../assets/Vector.png";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export const NavbarMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div style={{border:"2px solid #EAEAEA", borderRadius:"2rem"}} className="navbar border-solid border-black m-3 rounded-3xl">
          <div className="mx-7 flex-1 w-32 rounded">
            <img src={Vector} />
          </div>
          <div className="flex-none mr-7">
            <button
              className="text-black font-normal bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-normal rounded-full text-lg px-5 py-5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-16 w-52"
            >
              Get projects
            </button>
            <button
            onClick={()=>{
              localStorage.removeItem("name")
              localStorage.removeItem("email")
              navigate('/register')
            }}
              className="text-white font-bold bg-black border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-normal rounded-full text-base px-5 py-5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-16 w-52"
            >
              Onboard Talent
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
