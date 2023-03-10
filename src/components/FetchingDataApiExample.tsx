// Import useState hook from React
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Define the type for the data we will fetch
interface CatFact {
  fact: string;
}

function FetctchData(apiLink: any) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState("Press the button to fetch data");
  console.log(apiLink);
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response: Response = await fetch(apiLink.apiLink);
      const data: CatFact = await response.json();
      setCount(data.fact);
    } catch (error) {
      setCount("Error fetching data");
    }
  };

  return (
    <>
      <h1>Fetched Data: {count} </h1>
      <Stack direction="row" spacing={2}>
        <Button onClick={fetchData} variant="outlined">
          Fetch
        </Button>
      </Stack>
    </>
  );
}

export default FetctchData;
