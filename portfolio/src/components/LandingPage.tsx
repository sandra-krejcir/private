import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

/* document.body.style.backgroundImage = `url(/vite.svg)`; */
export default function LandingPage() {
  const navigate = useNavigate();
  const options = [
    "What skills and goals does Sandra have?",
    "Which projects did Sandra work on?",
    "How can I contact Sandra?",
    "Download Sandra's CV",
  ];
  const [delay, setDelay] = useState(false);
  const [value, setValue] = useState<string | null>();
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [msgVisible, setMsgVisible] = useState<boolean>(false);

  setTimeout(() => {
    setDelay(true);
  }, 10000);

  const redirectPage = () => {
    if (value === "What skills and goals does Sandra have?") navigate("/about");
    if (value === "Which projects did Sandra work on?") navigate("/about");
    if (value === "How can I contact Sandra?") navigate("/about");
    if (value === "Download Sandra's CV") console.log("downloaded");
    setMsgVisible(true);
  };

  return (
    <div>
      <div>
        <p style={{ display: "flex", gap: 5 }}>
          Bok, I'm
          {!delay && <span>Sandra Krejcir</span>}
          <Typewriter
            options={{
              strings: ["dedicated", "open-minded"],
              autoStart: delay,
              loop: true,
              cursor: delay ? "|" : "",
            }}
          />
        </p>
        <p style={{ width: 600 }}>
          A Frontend focused Web Developer educating herself in Backend Tech
          Stack,
          <br />
          who loves to be creatively and skillfully challenged when building
          quality Web applications.{" "}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
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
        <button
          type="button"
          disabled={value === null || inputValue?.length === 0}
          title=""
          style={{
            backgroundImage:
              value === `Download Sandra's CV` ||
              inputValue === `Download Sandra's CV`
                ? "url(/vite.svg"
                : "",
            width: 50,
            height: 50,
          }}
          onClick={() => redirectPage()}
        ></button>
      </div>
    </div>
  );
}
