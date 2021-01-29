import axios from "axios";

const getFiles = async(obj) => {
  console.log(obj)
  const requestUrl = "http://localhost:7000/data";
  return await axios.post(requestUrl, obj);
};

export default getFiles