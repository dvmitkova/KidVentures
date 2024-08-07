import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useLoading } from "../../hooks/useLoading";
import BeatLoader from "react-spinners/BeatLoader";

const initialValues = { email: "", password: "" };

export default function Login() {
  const { isLoading, setIsLoading } = useLoading();
  const login = useLogin();
  const navigate = useNavigate();
  const loginHandler = async ({ email, password }) => {
    setIsLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <>
            {isLoading && ( 
        <div className="fixed inset-0 flex items-center justify-center bg-white opacity-75 z-50">
          <BeatLoader color="#164e63" />
        </div>
      )}
      <section className="bg-gradient-to-b from-amber-100 via-green-50 to-lime-100">
        <div className="container h-full p-4">
          <div className="flex h-full flex-wrap items-center justify-center text-cyan-950">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* Left column container*/}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-12 md:p-4">
                      {/*Logo*/}
                      <div className="flex justify-center items-center flex-col pt-2">
                        <img
                          className="w-auto h-20"
                          src="/images/logo-icon.png"
                          alt="logo"
                        />
                        <h4 className="mb-8 mt-2 pt-4 text-xl font-bold">
                          Please login to your account
                        </h4>
                      </div>
                      <form onSubmit={submitHandler}>
                        {/* Username input */}
                        <div
                          className="relative mb-4"
                          data-twe-input-wrapper-init=""
                        >
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}
                          />
                        </div>

                        {/* Password input */}
                        <div
                          className="relative mb-4"
                          data-twe-input-wrapper-init=""
                        >
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                            id="exampleFormControlInput11"
                            placeholder="Password"
                            value={values.password}
                            name="password"
                            onChange={changeHandler}
                          />
                        </div>
                        {/*Submit button*/}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="w-full p-2 bg-stone-200 text-cyan-950 rounded hover:bg-cyan-100 hover:shadow"
                            type="submit"
                          >
                            Log in
                          </button>
                        </div>

                        {/*Register button*/}
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 me-2">Don&apos;t have an account?</p>
                          <Link
                            to="/register"
                            type="button"
                            className="inline-block rounded border-2 border-cyan-700 px-6 pb-[6px] pt-2 text-xs font-semibold uppercase leading-normal text-cyan-950 transition duration-150 ease-in-out hover:border-cyan-900 hover:bg-cyan-900 hover:text-white focus:border-cyan-800 focus:bg-cyan-700 focus:text-white focus:outline-none active:border-cyan-900 active:bg-cyan-800"
                          >
                            Register
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right column container with background and description*/}
                  <div
                    className="flex items-start rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #fef3c7, #ecfccb, #d1fae5, #cffafe)",
                    }}
                  >
                    <div className="px-4 mt-20 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl text-cyan-950 font-bold">
                        Welcome Back!
                      </h4>
                      <p className="text-sm text-cyan-950">
                        We are glad to see you again. Log in to access your
                        account and continue where you left off. If you need any
                        help, feel free to contact our support team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
