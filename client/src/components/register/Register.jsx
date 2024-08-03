import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { countries } from "../../utils/countries";

const initialValues = { 
  email: "", 
  password: "", 
  rePassword: "", 
  firstName: "", 
  lastName: "", 
  country: "",
  about: "", // Added About Me field
  profilePicture: "" // Added profile picture field
};

export default function Register() {
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // New state for image preview
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if (values.password !== values.rePassword) {
      return setError("Password mismatch!");
    }

    try {
      // Here you would typically send the `values` to the server
      await register(values);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      changeHandler({ target: { name: 'profilePicture', value: fileUrl } });
      setImagePreview(fileUrl); // Set the preview URL
    }
  };

  return (
    <section className="bg-gradient-to-b from-amber-100 via-green-50 to-lime-100">
      <div className="container h-full p-4">
        <div className="flex h-full flex-wrap items-center justify-center text-cyan-950">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
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
                <div className="px-4 md:px-0 lg:w-6/12 lg:rounded-r-lg">
                  <div className="md:mx-12 md:p-4">
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
                      {/* Other form fields */}
                      <div className="relative mb-4">
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                          id="email"
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="relative mb-4">
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                          id="password"
                          placeholder="Password"
                          value={values.password}
                          name="password"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="relative mb-4">
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                          id="rePassword"
                          placeholder="Repeat your password"
                          value={values.rePassword}
                          name="rePassword"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="relative mb-4">
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                          id="firstName"
                          placeholder="First Name"
                          name="firstName"
                          value={values.firstName}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="relative mb-4">
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                          id="lastName"
                          placeholder="Last Name"
                          name="lastName"
                          value={values.lastName}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="relative mb-4">
                        <select
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                          id="country"
                          name="country"
                          value={values.country}
                          onChange={changeHandler}
                        >
                          <option value="">Select your country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative mb-4">
                        <textarea
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                          id="about"
                          placeholder="About Me"
                          name="about"
                          value={values.about}
                          onChange={changeHandler}
                          rows="3"
                        />
                      </div>
                      <div className="relative mb-4">
                        <input
                          type="file"
                          id="profilePicture"
                          name="profilePicture"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                        />
                        <label htmlFor="profilePicture" className="absolute top-2 right-2 text-cyan-950">
                          Upload Profile Picture
                        </label>
                      </div>
                      {imagePreview && (
                        <div className="mb-4 flex justify-center">
                          <img
                            src={imagePreview}
                            alt="Profile Preview"
                            className="w-24 h-24 rounded-full border-4 border-gray-300"
                          />
                        </div>
                      )}
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
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <Link
                          to="/login"
                          type="button"
                          className="inline-block rounded border-2 border-cyan-700 px-6 pb-[6px] pt-2 text-xs font-semibold uppercase leading-normal text-cyan-950 transition duration-150 ease-in-out hover:border-cyan-900 hover:bg-cyan-900 hover:text-white focus:border-cyan-800 focus:bg-cyan-800 focus:text-white active:border-cyan-900 active:bg-cyan-900"
                        >
                          Login
                        </Link>
                      </div>
                    </form>
                    {error && (
                      <div className="text-red-500 text-center mt-4">{error}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
