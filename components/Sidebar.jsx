import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

function Sidebar({ chatscontainer }) {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border self-start max-sm:hidden">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium text-gray-600 text-center">
          History
        </h4>
        {chatscontainer.map((tag, inx) => (
          <React.Fragment key={inx}>
            <div className="text-sm">{tag.message}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

export default Sidebar;
