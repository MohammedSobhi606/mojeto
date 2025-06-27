import { SparkleIcon, SparklesIcon, StarIcon } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import ChatMessage from "./ChatMessage";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

function ChatWindow({ setchatscontainer, chatscontainer }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, []);

  const [replyNum, setreplyNum] = useState(0);
  const [thinking, setThinking] = useState(false);

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
    <ScrollArea className="flex-1 h-150 w-full shadow-md md:rounded-s-[inherit] min-[1024px]:rounded-e-3xl bg-background p-4">
      <div className="h-full flex flex-col px-4 md:px-6 lg:px-8">
        <div className="relative grow">
          <div className="max-w-3xl mx-auto mt-6 space-y-6">
            <div className="text-center my-8">
              <div className="inline-flex items-center bg-white rounded-full border border-black/[0.08] shadow-xs text-xs font-medium py-1 px-3 text-foreground/80">
                <StarIcon
                  className="me-1.5 text-muted-foreground/70 -ms-1"
                  size={14}
                  aria-hidden="true"
                />
                Today
              </div>
            </div>

            {chatscontainer.map((item, inx) => (
              <div key={inx} className="flex flex-col gap-5">
                <ChatMessage isUser>
                  <p>{item.message}</p>
                </ChatMessage>
                <ChatMessage>
                  <p>{item.reply}</p>
                  <span className="bg-accent rounded-full px-2 text-center text-xs w-fit">
                    {item.date}
                  </span>
                </ChatMessage>
              </div>
            ))}
            <div ref={messagesEndRef} aria-hidden="true" />
          </div>
          <div className="sticky bottom-0 pt-4 md:pt-8 z-50">
            <div className="max-w-3xl mx-auto bg-background rounded-[20px] pb-4 md:pb-8">
              <div className="relative rounded-[20px] border border-transparent bg-muted transition-colors focus-within:bg-muted/50 focus-within:border-input has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
                <textarea
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  value={message}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      // Cancel the default action, if needed
                      e.preventDefault();
                      // Trigger the button element with a click
                      document.getElementById("myBtn").click();
                    }
                  }}
                  className="flex sm:min-h-[84px] w-full bg-transparent px-4 py-3 text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none [resize:none]"
                  placeholder="Ask me anything..."
                  aria-label="Enter your prompt"
                />
                {/* Textarea buttons */}
                <div className="flex items-center justify-between gap-2 p-3">
                  {/* Left buttons */}

                  {/* Right buttons */}
                  <div className="flex items-center gap-2">
                    <Button
                      id="myBtn"
                      variant="outline"
                      onClick={(e) => addNewMessage(e)}
                      className="rounded-full h-8"
                    >
                      Ask Bart <SparklesIcon className="text-amber-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ChatWindow;
