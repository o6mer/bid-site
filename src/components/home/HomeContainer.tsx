import React, { useState, useEffect, FormEvent } from "react";
import Hero from "./Hero";
import axios from "axios";
import { IUser } from "@/types/types";
import useAuth from "@/hooks/useAuth";
import { useSelector } from "react-redux";
import { userSelector } from "@/slices/userSlice";

interface Props {}

const HomeContainer = ({}: Props) => {
  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    password: "",
    _id: "",
    role: "",
  });

  const [files, setFiles] = useState<FileList | null>(null);

  const stateUser = useSelector(userSelector);
  console.log(stateUser);

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
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          value={user.username}
          onChange={handleChange}
          name="username"
          placeholder="username"
          type="text"
        />
        <input
          value={user.email}
          onChange={handleChange}
          name="email"
          placeholder="email"
          type="email"
        />
        <input
          value={user.password}
          onChange={handleChange}
          name="password"
          placeholder="password"
          type="password"
        />
        <input
          type="file"
          onChange={(e) => {
            setFiles(e.target?.files);
          }}
        />
        <button onClick={uploadImage} type="button">
          upload
        </button>
        <button type="submit">register</button>
      </form>
      {/* <Image src={imageSrc || ""} alt="uploaded" width={100} height={100} /> */}
      <p>{stateUser.username}</p>
      {/* <p>{stateUser.email}</p>
      <p>{stateUser._id}</p> */}
      <Hero />
    </div>
  );
};

export default HomeContainer;
