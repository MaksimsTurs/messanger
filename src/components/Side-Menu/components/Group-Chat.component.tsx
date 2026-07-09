import type { ReactNode } from "react";

import scss from "../Side-Menu.module.scss";

import { EllipsisVerticalIcon } from "lucide-react";

export default function GroupChat(): ReactNode {
  return(
    <li>
      <div className={scss.side_menu_chat_data}>
        <p>Chat3</p>
        <p className={scss.side_menu_messages_count}>9</p>
      </div> 
      <button className={scss.side_menu_chat_config}>
        <EllipsisVerticalIcon size={20}/>
      </button>
    </li>
  );
};
