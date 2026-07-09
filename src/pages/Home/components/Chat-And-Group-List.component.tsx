import type { ReactNode } from "react";

import scss from "../scss/Chat-And-Group-List.module.scss";

import ChatAndGroupPreview from "./Chat-And-Group-Preview.component";

export default function ChatAndGroupList(): ReactNode {
  return(
    <ul className={scss.group_and_chat_list}>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
      <ChatAndGroupPreview/>
    </ul>
  );
};
