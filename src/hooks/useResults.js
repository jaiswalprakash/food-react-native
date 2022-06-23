import { useEffect, useState } from "react";
import RESTURNENT_LIST from "../consts/resturent";
import resturentApi from "../api/resturent-api";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const serachApi = async (searchTerm) => {
    try {
      // let response = await resturentApi.get("/search", {
      //   params: {
      //     limit: 50,
      //     term:searchTerm,
      //     location: "san jose",
      //   },
      // });
      //setResults(response.data.business);
      setResults(RESTURNENT_LIST);
      // throw new Error();
    } catch (error) {
      setErrorMessage("something went Wrong");
    }
  };
  // run code one time when render the components
  useEffect(() => {
    serachApi("pasta");
  }, []); // run the arraow function every time component is rendered
  //[value] run the arrow function only when the component is first render,and when the "value" changes

  return [serachApi, results, errorMessage];
};
