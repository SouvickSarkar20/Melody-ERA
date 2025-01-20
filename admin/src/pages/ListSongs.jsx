import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";

const ListSongs = () => {
  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      console.log(response.data);
    } catch (error) {
      toast.error("error occured");
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <p>All songs added</p>
      <br />
      <div>
        <div className="grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>

        {data.map((item,index)=>{
          return(
            <div key={index} className="grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 ">
              img
               
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ListSongs;
