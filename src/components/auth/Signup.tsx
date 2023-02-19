import useAuth from "@/hooks/useAuth";
import { IUser } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import StyledInput from "../general/StyledInput";
import Divider from "../general/Divider";
import Link from "next/link";

interface Props {
  setMode: (mode: string) => void;
}

const Signup = ({ setMode }: Props) => {
  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    password: "",
    _id: "",
    role: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const { register } = useAuth();

  const uploadImage = async () => {
    if (!files) return;

    try {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "bit-site-uploads");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dhtjiomvi/image/upload",
        formData
      );

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await uploadImage;
    await register(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUser((prev) => {
      prev[key] = value;
      return { ...prev };
    });
  };

  return (
    <>
      <div className="flex mt-2">
        <p>
          Already have an account?
          <Link
            href="/"
            className="text-third "
            onClick={() => setMode("login")}
          >
            login here
          </Link>
        </p>
      </div>
      <Divider />
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col w-full gap-2"
      >
        <StyledInput
          label="Username:"
          value={user.username}
          onChange={handleChange}
          name="username"
          placeholder="username"
          type="text"
        />
        <StyledInput
          label="Email:"
          value={user.email}
          onChange={handleChange}
          name="email"
          placeholder="email"
          type="email"
        />
        <StyledInput
          label="Password: "
          value={user.password}
          onChange={handleChange}
          name="password"
          placeholder="password"
          type="password"
        />
        <div className="flex flex-col">
          <div className="relative w-full h-28 outline outline-1 outline-gray-500 rounded-lg">
            <Image
              src="/defualt-preview.jpg"
              alt="preview"
              fill
              sizes="100%"
              className="rounded-lg"
            />
          </div>
          <label
            htmlFor="profile-input"
            className="cursor-pointer flex justify-center items-center"
          >
            Upload Image
            <FileUploadIcon fontSize="large" />
          </label>
          <input
            className="hidden"
            id="profile-input"
            type="file"
            onChange={(e) => {
              setFiles(e.target?.files);
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-third hover:bg-fourth transition-all px-4 py-2 text-white font-bold text-xl"
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default Signup;
