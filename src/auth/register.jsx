import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BACKEND_URL } from "@/utils";

function Register(props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    username: "",
    is_provider: false,
    is_user: false,
  });
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const checkBoxName = e.target.name;
    const value = e.target.checked;
    let is_user = formData.is_user;
    let is_provider = formData.is_provider;

    if (checkBoxName === "is_provider") {
      is_user = false;
      is_provider = true;
    } else if (checkBoxName === "is_user") {
      is_provider = false;
      is_user = true;
    }

    setFormData({
      ...formData,
      is_provider: is_provider,
      is_user: is_user,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/register`, formData);
      toast.success(res.data.message);
      if (res.data.message === "registered successfully") {
        props.gotoLoginView();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleUsernameInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.toLowerCase(),
    }));

    if (name === "username" && value.length >= 4) {
      // Make the API request to check the availability of the username
      fetch(`${BACKEND_URL}/check_username`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ goopim_username: value }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.exists) {
            // Username is taken
            setIsUsernameAvailable(false);
          } else {
            // Username is available
            setIsUsernameAvailable(true);
          }
        })
        .catch((error) => {
          console.error("Error checking username availability:", error);
        });
    }
  };

  return (
    <>
      <div className=" marker:flex justify-center items-center ">
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="w-full  p-6 bg-white rounded-md"
        >
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="mb-4">
              <label
                htmlFor="first_name"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username(s)
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                formData?.username?.length >= 4
                  ? isUsernameAvailable
                    ? "border-green-500"
                    : "border-red-500"
                  : ""
              }`}
              type="text"
              name="username"
              value={formData.username}
              onChange={handleUsernameInputChange}
              onBlur={handleUsernameInputChange}
              required
            />
            {formData?.username?.length >= 4 ? (
              isUsernameAvailable ? (
                <p className="text-green-500">Username is available</p>
              ) : (
                <p className="text-red-500">Username is taken</p>
              )
            ) : (
              ""
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="is_provider"
              className="block text-gray-700 font-bold mb-2"
            >
              Register as a freelancer?
            </label>

            <div className="flex gap-4 items-center justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
                <input
                  type="checkbox"
                  name="is_provider"
                  checked={formData.is_provider}
                  onChange={handleCheckboxChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">I am a freelancer</span>
              </label>

              <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
                <input
                  type="checkbox"
                  name="is_user"
                  checked={formData.is_user}
                  onChange={handleCheckboxChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">I want to hire a freelancer</span>
              </label>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <div>
              {" "}
              <button
                type="submit"
                className="bg-[#2448c6] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                props.gotoLoginView();
              }}
            >
              <span className="text-[#2448c6]">Already registed?</span>
              &nbsp;&nbsp;Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
