"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { SparklesIcon } from "lucide-react";

function ChatInput({
  setchatscontainer,
  chatscontainer,
  replyNum,
  setreplyNum,
  setThinking,
}) {
  const [message, setmessage] = useState("");

  const reply = ["hardcoded 1 hello user", "hardcoded 2 thanks user 😊"];

  const addNewMessage = (e) => {
    console.log(chatscontainer);
    if (message.trim().length < 1) {
      return alert("please write a message");
    }
    setmessage("");
    setThinking(true);
    setTimeout(() => {
      setreplyNum(replyNum + 1);
      setchatscontainer([
        ...chatscontainer,
        {
          message: message,
          reply: replyNum % 2 == 0 ? reply[0] : reply[1],
          date: new Date().toLocaleTimeString(),
        },
      ]);
      setThinking(false);
    }, 3000);
  };

  return (
    <div>
      <div className="max-w-sm mx-auto flex flex-col gap-4">
        <label
          htmlFor="message"
          className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          onChange={(e) => {
            setmessage(e.target.value);
          }}
          value={message}
          id="message"
          rows="4"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // Cancel the default action, if needed
              e.preventDefault();
              // Trigger the button element with a click
              document.getElementById("myBtn").click();
            }
          }}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        <Button
          id="myBtn"
          variant="outline"
          onClick={(e) => addNewMessage(e)}
          className={"self-start"}
        >
          send
          <SparklesIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}

export default ChatInput;
