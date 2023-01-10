import { useRef, useState } from "react";
import useAutosizeTextArea from "./useAutosizeTextArea.js";
export function Textarea() {

  const [value, setValue] = useState("");
  const textAreaRef = useRef(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <div>
      <textarea
        className="w-full placeholder:font-bold outline-none text-slate-500 resize-none overflow-hidden"
        id="review-text"
        onChange={handleChange}
        placeholder="What's new Théo ?"
        ref={textAreaRef}
        rows={1}
        value={value}
        style={{ overflow: "hidden" }}
      />
    </div>
  )
}