import { Link, useNavigate } from "react-router-dom";
import { useRegister, useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { countries } from "../../utils/countries";
import { validate } from "../../utils/validate";
import { useLoading } from "../../hooks/useLoading";
import BeatLoader from "react-spinners/BeatLoader";

const initialValues = {
  email: "",
  password: "",
  rePassword: "",
  firstName: "",
  lastName: "",
  country: "",
  about: "", 
  profilePicture: "", 
};

export default function Register() {
  const { isLoading, setIsLoading } = useLoading();
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null); 
  const register = useRegister();
  const login = useLogin();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    setIsLoading(true);
    if (values.password !== values.rePassword) {
      setIsLoading(false);
      return setError("Password mismatch!");
    }

    try {
      let profilePictureUrl = values.profilePicture;

      if (profilePictureUrl instanceof File) {
        const formData = new FormData();
        formData.append("file", profilePictureUrl);

        const uploadResponse = await fetch("http://localhost:3030/upload", {
          method: "POST",
          body: formData,
        });
        const uploadData = await uploadResponse.json();
        profilePictureUrl = uploadData.url;
      }
      await register({ ...values, profilePicture: profilePictureUrl });

      await login(values.email, values.password);

      navigate("/"); 
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const { values, errors, changeHandler, submitHandler, touched } = useForm(
    initialValues,
    registerHandler,
    validate
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      changeHandler({ target: { name: "profilePicture", value: file } }); 
      setImagePreview(fileUrl); 
    }
  };

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
                  <div
                    className="flex items-start lg:w-6/12 lg:rounded-l-lg lg:rounded-r-none"
                    style={{
                      background:
                        "linear-gradient(to right, #fef3c7, #ecfccb, #d1fae5, #cffafe)",
                    }}
                  >
                    <div className="px-4 py-6 mt-20 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl text-cyan-950 font-bold">
                        Welcome Aboard!
                      </h4>
                      <p className="text-sm text-cyan-950">
                        Ready to start your journey with us? Register now to
                        create a new account and unlock all the features we
                        offer. We&apos;re excited to have you join our
                        community!
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
                          {touched.email && errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="relative mb-4">
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                            id="password"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                          />
                          {touched.password && errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.password}
                            </p>
                          )}
                        </div>
                        <div className="relative mb-4">
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:text-cyan-950 text-cyan-950 placeholder-cyan-950 shadow-sm focus:shadow-md"
                            id="rePassword"
                            placeholder="Repeat your password"
                            name="rePassword"
                            value={values.rePassword}
                            onChange={changeHandler}
                          />
                          {touched.rePassword && errors.rePassword && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.rePassword}
                            </p>
                          )}
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
                          {touched.firstName && errors.firstName && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.firstName}
                            </p>
                          )}
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
                          {touched.lastName && errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.lastName}
                            </p>
                          )}
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
                          {touched.country && errors.country && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.country}
                            </p>
                          )}
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
                          <label htmlFor="profilePicture">
                            Profile Picture
                          </label>
                          {imagePreview && (
                            <div className="mt-2">
                              <img
                                src={imagePreview}
                                alt="Profile Preview"
                                className="h-24 w-24 rounded-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                        <div className="relative mb-4">
                          {error && (
                            <p className="text-red-500 text-xs">{error}</p>
                          )}
                        </div>
                        <div className="flex justify-center pt-1 mb-12 pb-1">
                          <button
                            className="w-full p-2 bg-stone-200 text-cyan-950 rounded hover:bg-cyan-100 hover:shadow"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                        <div className="flex items-center justify-center pb-6">
                          <p className="mb-0 mr-2 text-cyan-950">
                            Already have an account?
                          </p>
                          <Link
                            to="/login"
                            type="button"
                            className="inline-block rounded border-2 border-cyan-700 px-6 pb-[6px] pt-2 text-xs font-semibold uppercase leading-normal text-cyan-950 transition duration-150 ease-in-out hover:border-cyan-900 hover:bg-cyan-900 hover:text-white focus:border-cyan-800 focus:bg-cyan-700 focus:text-white focus:outline-none active:border-cyan-900 active:bg-cyan-800"
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
