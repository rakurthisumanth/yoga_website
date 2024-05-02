import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const MessageAnimation = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">

      <button
        onClick={() => setShowMessage(!showMessage)}
        className="ml-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
            Implementing ......
      </button>
    </div>
  );
};

export default MessageAnimation;
