import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: "", password: "", rePassword: "" };

export default function Register() {
  const [setError] = useState("");
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if (values.password !== values.rePassword) {
      return setError("Password mismatch!");
    }

    try {
      await register(values.email, values.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  return (
    <>
      <section className="bg-gradient-to-b from-amber-100 via-green-50 to-lime-100">
        <div className="container h-full p-4">
          <div className="flex h-full flex-wrap items-center justify-center text-cyan-950">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* Right column container with background and description */}
                  <div
                    className="flex items-center lg:w-6/12 lg:rounded-l-lg lg:rounded-r-none"
                    style={{
                      background:
                        "linear-gradient(to right, #fef3c7, #ecfccb, #d1fae5, #cffafe)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl text-cyan-950 font-bold">
                        Welcome Aboard!
                      </h4>
                      <p className="text-sm text-cyan-950">
                        Ready to start your journey with us? Register now to
                        create a new account and unlock all the features we
                        offer. We&apos;re excited to have you join our community!
                      </p>
                    </div>
                  </div>

                  {/* Left column container */}
                  <div className="px-4 md:px-0 lg:w-6/12 lg:rounded-r-lg">
                    <div className="md:mx-12 md:p-4">
                      {/* Logo */}
                      <div className="flex justify-center items-center flex-col pt-2">
                        <img
                          className="w-auto h-20"
                          src="/images/logo-icon.png"
                          alt="logo"
                        />
                        <h4 className="mb-8 mt-2 pt-4 text-xl font-bold">
                          Create a new account
                        </h4>
                      </div>
                      <form onSubmit={submitHandler}>
                        {/* Email input */}
                        <div className="relative mb-4">
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
                        <div className="relative mb-4">
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

                        {/* Repeat Password input */}
                        <div className="relative mb-4">
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                            id="exampleFormControlInput22"
                            placeholder="Repeat your password"
                            value={values.rePassword}
                            name="rePassword"
                            onChange={changeHandler}
                          />
                        </div>

                        {/* Submit button */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-2 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-cyan-700 focus:bg-cyan-800 focus:outline-none active:bg-cyan-900"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #083344, #164e63, #155e75, #0e7490)",
                            }}
                          >
                            Register
                          </button>
                        </div>

                        {/* Login button */}
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <Link
                            to="/login"
                            type="button"
                            className="inline-block rounded border-2 border-cyan-700 px-6 pb-[6px] pt-2 text-xs font-semibold uppercase leading-normal text-cyan-950 transition duration-150 ease-in-out hover:border-cyan-900 hover:bg-cyan-900 hover:text-white focus:border-cyan-800 focus:bg-cyan-700 focus:text-white active:border-cyan-900 active:bg-cyan-800"
                          >
                            Login
                          </Link>
                        </div>
                      </form>
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
