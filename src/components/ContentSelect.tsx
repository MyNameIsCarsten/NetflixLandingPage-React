import { useState } from "react";
import SelectElement from "./SelectElement";

interface ContentSelectProps {
  selectedCountry: string;
}

const ContentSelect: React.FC<ContentSelectProps> = ({ selectedCountry }) => {
  const [content, setContent] = useState("localMovies");

  let contentOptions;

  if(selectedCountry === "local"){
    contentOptions = [
      { label: "Filme", value: "localMovies" },
      { label: "Serien", value: "localTV" },
    ]
  } else {
    contentOptions = [
      { label: "Filme", value: "globalMovies" },
      { label: "Serien", value: "globalTV" },
    ]
  }


  return (
    <SelectElement
      options={contentOptions}
      value={content}
      onChange={setContent}
    />
  );
};

export default ContentSelect;
