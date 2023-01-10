import { useState } from "react";

export default function Modal(props) {
  const [isShowing, setIsShowing] = useState(false);

  function open() {
    setIsShowing(true);
  }

  function close() {
    setIsShowing(false);
  }

  return <>
    <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-screen" id="my-modal">
      Test
    </div>
  </>
}