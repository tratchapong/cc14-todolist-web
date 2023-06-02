/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import anyuser from "../assets/anyuser.svg";
import { updateProfile } from "../api/todoApi";
import Spinner from "../components/Spinner";

export default function EditProfile() {
  const navigate = useNavigate();
  const { user, setReload } = useAuth();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [aboutMe, setAboutMe] = useState(user?.aboutMe || "");

  const hdlSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    // console.log(file);
    const formData = new FormData();
    if (file) formData.append("image", file);
    formData.append("aboutMe", aboutMe);
    let token = localStorage.getItem("token");
    updateProfile(formData, token).then((rs) => {
      setFile(null);
      setReload((prv) => !prv);
      setLoading(false)
      navigate("/");
      // window.location.reload('/')
    });
  };
  // const img_url = user?.image ? `http://localhost:8080/pic/${user?.image}?${new Date().getTime()}` : anyuser;
  const img_url = user?.image ? user.image : anyuser;

  return (
    <>
      {loading && <Spinner />}
      <div className="w-full max-w-[800px] mx-auto my-6 p-5 border">
        <form onSubmit={hdlSubmit}>
          {/* <h2 className="w-2/3 mx-auto mb-5 text-xl">Edit Profile</h2> */}
          <div className="mx-auto flex justify-center items-center gap-8">
            <img
              src={file ? URL.createObjectURL(file) : img_url}
              alt="profile"
              className="block p-4 border w-40"
            />
            <div className="flex flex-col gap-5 justify-between">
              <p className="text-xl text-blue-400">Change profile picture</p>
              <input
                type="file"
                className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
          </div>
          <div className="mx-auto mt-10 flex gap-3">
            <p className="text-xl">About me</p>
            <textarea
              className="textarea textarea-secondary block flex-1 h-40"
              placeholder="tell about you"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary mt-5 mx-auto block w-40" type="submit">
              Update
            </button>
          </div>
        </form>
        <Link to="/" className="block text-right mt-10 text-blue-700">
          Cancel
        </Link>
      </div>
    </>
  );
}
