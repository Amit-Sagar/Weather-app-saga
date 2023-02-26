import React from "react";
import Input from "./common/Input";
import { useDispatch } from "react-redux";
import { setLatLong } from "../redux/slices/latLongSlice";

const Hero = ({ cordinates, setCordinates }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCordinates({ ...cordinates, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLatLong(cordinates));
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-10">
      <h1 className=" text-5xl font-bold text-center"> Weather Application</h1>
      <form
        className="flex flex-col md:flex-row gap-7 md:gap-20 justify-center items-center mt-14 max-w-6xl mx-auto w-[90%]"
        onSubmit={handleSubmit}
      >
        <Input
          label="Latitude"
          name="lat"
          value={cordinates?.lat}
          onChange={handleChange}
        />
        <Input
          label="Longitude"
          name="long"
          value={cordinates?.long}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-400 border border-white rounded-lg px-10 py-3 text-white font-bold text-xl hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hero;
