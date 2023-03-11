import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const options = ["The Shawshank Redemption", "The Godfather"];
  const [typewriter, setTypewriter] = useState<string>("Sandra Krejcir");
  const [value, setValue] = useState<string | null>();
  const [inputValue, setInputValue] = useState<string | undefined>();

  useEffect(() => {
    console.log(value, inputValue);
  });

  return (
    <div>
      <div>
        <p>
          Bok, I'm <span>{typewriter}</span>
        </p>
        <p></p>
      </div>
      <Autocomplete
        freeSolo
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event: any, newValue: string) => {
          setInputValue(newValue.length !== 0 ? newValue : undefined);
        }}
        id="manageable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search Sandra Krejcir" />
        )}
      />
    </div>
  );
}
