import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterSchema } from "../validation";
import { Navbar } from "../component/Navbar";
export const Register = () => {
  const initialValues = {
    name: "",
    email: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values, action) => {
        try {
          localStorage.setItem("name", values.name);
          localStorage.setItem("email", values.email);
          action.resetForm();
          navigate('/congo')
          setTimeout(() => {
            navigate('/');
          }, 5000);
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    });

    const isInputEmpty = () => {
      return values.name.trim() === "" || values.email.trim() === "";
    };
  const navigate = useNavigate();
  return (
    <>
     <Navbar />
      <div className="container">
        <div className="flex flex-col text-center items-center lg:mt-7">
          <div>
            <h2 style={{fontFamily: `'Covered By Your Grace', cursive`}} className="font-normal text-3xl mt-3 text-green">Registration Form</h2>
            <h1 className="text-6xl	font-semibold p-2">
              Start your success <br /> Journey here!
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="m-5 flex flex-col items-center">
            <div className="p-2">
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered bg-gray2 font-normal  h-16 w-80 text-xl max-w-xs rounded-full"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {touched.name && errors.name ? (
              <p className="text-xs text-error p-1">{errors.name}</p>
            ) : null}
            </div>
            <div className="p-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered bg-gray2 font-normal h-16 w-80 text-xl max-w-xs rounded-full"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
               {touched.email && errors.email ? (
              <p className="text-xs text-error p-1">{errors.email}</p>
            ) : null}
            </div>
            <div className="p-4">
              <button
              disabled={isInputEmpty()}
                type="submit"
                className="text-white hover:bg-black bg-gray3 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-normal rounded-full text-sm px-5 py-5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-16 w-80"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
