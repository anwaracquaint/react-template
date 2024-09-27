import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/slices/user";

interface InputType {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    console.log("Data >>", data);
    // toast.success("Login Success!");
    const userData = {
      ...data,
      token: "edsdkbdsabdslkdsadjbdsadzxdsdsadsdsdsadhfsdsad",
    };

    dispatch(userLogin(userData));

    // localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
  };

  console.log("errors", errors);

  return (
    <>
      <div className="main h-screen w-screen flex justify-center items-center">
        <div className="w-[500px] h-[450px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5">
          <h1 className="text-center mt-4 text-2xl font-bold">Login</h1>
          <div className="m-10">
            <form onSubmit={handleSubmit(onSubmit)}>
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
              Don't have an account ?{" "}
              <Link className="underline" to={"/register"}>
                Register
              </Link>
            </p>
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
