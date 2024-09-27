import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

interface InputType {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    console.log("Data >>", data);
    navigate("/login");
  };

  console.log("errors", errors);

  return (
    <>
      <div className="main h-screen w-screen flex justify-center items-center">
        <div className="w-[500px] h-[550px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5">
          <h1 className="text-center mt-4 text-2xl font-bold">Register</h1>
          <div className="m-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  id="name"
                  className="border focus:border outline-none w-full p-2 rounded-md caret-slate-300"
                  {...register("name", { required: "This is required" })}
                />
                <span className="text-red-600">
                  {errors.name && errors.name.message}
                </span>
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="border focus:border outline-none w-full p-2 rounded-md caret-slate-300"
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <span className="text-red-600">
                  {errors.email && errors.email.message}
                </span>
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="border focus:border outline-none w-full p-2 rounded-md caret-slate-300"
                  {...register("password", { required: "This is required" })}
                />
                <span className="text-red-600">
                  {errors.password && errors.password.message}
                </span>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-black text-white w-full p-2 rounded-md">
                  Submit
                </button>
              </div>
            </form>
            <p className="mt-4 text-center">
              Already have an account ?{" "}
              <Link className="underline" to={"/login"}>
                Login
              </Link>
            </p>
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
