import { ReactNode } from "react";

import scss from "./Side-Menu.module.scss";

import { Link, useNavigate } from "@hook/use-react-router/use-react-router.hook";

import { UserRoundIcon, UsersRoundIcon } from "lucide-react";

import GroupChat from "./components/Group-Chat.component";

export default function SideMenu(): ReactNode {
  const navigate = useNavigate();

  const goTo = (path: string): void => {
    navigate(path);
  };

  return(
    <aside className={scss.side_menu_container}>
      <Link href="/user/1" className={scss.side_menu_profile}>
        <img className={scss.side_menu_profile_avatar} src="/Wallpaper.jpg"/>
        <p>Max Musterman</p>
      </Link>
      <div className={scss.side_menu_actions_container}>
        <button>
          <UserRoundIcon/>
        </button>
        <button onClick={() => goTo("/group/create")}>
          <UsersRoundIcon/>
        </button>
      </div>
      <div className={scss.side_menu_group_data_container}>
        <section className={scss.side_menu_header}>
          <Link href="/group/1">Group chats</Link>
        </section>
        <ul className={scss.side_menu_chat_list}>
          <GroupChat/>
          <GroupChat/>
          <GroupChat/>
          <GroupChat/>
          <GroupChat/>
          <GroupChat/>
        </ul>
      </div>
    </aside>
  );
};
