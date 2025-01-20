import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { url } from "../App.jsx";
import { toast } from "react-toastify";

const AddSongs = () => {

  const [image,setImage] = useState(false);
  const [song,setSong] = useState(false);
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");
  const [album,setAlbum] = useState("none");
  const [loading,setLoading] = useState(false);
  const [albumData,setAlbumData] = useState([]);

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try{
      const formData = new FormData();
      formData.append('name',name);
      formData.append('desc',desc);
      formData.append('image',image);
      formData.append('audio',song);
      formData.append('album',album);

      const response = await axios.post(`${url}/api/song/add`,formData);

      if(response.data.success){
        toast.success("song added");
        setName("");
        setDesc("");
        setImage(false);
        setSong(false);
        setAlbum('none');
      }
      else{
        toast.error("something went wrong");
      }
    }
    catch(error){
      toast.error("error occured");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-start gap-8 text-gray-600">
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Song</p>
          <input onChange={(e)=>setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img
              src={song ? assets.upload_added : assets.upload_song}
              className="w-24 cursor-pointer"
              alt=""
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input onChange={(e)=>e.target.files[0]} type="file" id="song" accept="image/*" hidden />
          <label htmlFor="song">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-24 cursor-pointer"
              alt=""
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Song Name</p>
        <input
          onChange={(e)=>setName(e.target.value)}
          value={name}
          type="text"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
          placeholder="Type Here"
          required
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input
          onChange={(e)=>setDesc(e.target.value)}
          value={desc}
          type="text"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
          placeholder="Type Here"
          required
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album</p>
        <select onChange={(e)=>setAlbum(e.target.value)} defaultValue={album} className="bg-transparent outline-green-500 border-2 border-gray-400 p-2.5 w-[150px]">
           <option value="none">None</option>
        </select>
      </div>

      <button type="submit" className="text-base bg-black text-white py-2.5 px-14 cursor-pointer">ADD</button>
    </form>
  );
};

export default AddSongs;
