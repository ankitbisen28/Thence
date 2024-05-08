import rightIcon from "../assets/rightIcon.png";
import { Navbar } from "../component/Navbar";
export const Congo = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex flex-col h-screen justify-center items-center ">
          <img src={rightIcon} className="w-12 m-2" alt="right" />
          <h2
            style={{ fontFamily: `'Covered By Your Grace', cursive` }}
            className="font-normal text-3xl text-green"
          >
            Success Submitted
          </h2>
          <h1 className="text-5xl font-semibold">Congratulations</h1>
          <p className="text-center p-3 text-gray text-3xl">
            Your request has been successfully submitted to us. We <br /> will
            validate your information and reach out to your <br /> shortly with
            updates
          </p>
          <p className="m-7 p-7 text-xl">
            Redirecting you to Homepage in <b> 5 Seconds</b>
          </p>
        </div>
      </div>
    </>
  );
};
