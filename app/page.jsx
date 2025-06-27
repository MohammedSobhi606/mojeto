"use client";

import ChatInput from "@/components/ChatInput";
import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [chatscontainer, setchatscontainer] = useState([]);

  return (
    <div className="flex p-4 gap-6 h-screen items-center justify-center">
      <Sidebar chatscontainer={chatscontainer} />{" "}
      <ChatWindow
        setchatscontainer={setchatscontainer}
        chatscontainer={chatscontainer}
      />
    </div>
  );
}
