import type { ReactNode } from "react";

import scss from "./Page.module.scss";

import { LogOutIcon, TrashIcon } from "lucide-react";

export default function Page(): ReactNode {
  return(
    <div className={scss.user_profile_container}>
      <div style={{ justifyContent: "center" }} className={scss.user_profile_data}>
        <img src="/Wallpaper.jpg"/>
      </div>
      <div className={scss.user_profile_data}>
        <p>You name:</p>
        <p>Mustermann</p>
      </div>
      <div className={scss.user_profile_data}>
        <p>Entered at:</p>
        <p>Monday 20.12.2020</p>
      </div>
      <div className={scss.user_profile_actions}>
        <button>
          <LogOutIcon/>
        </button>
        <button>
          <TrashIcon/>
        </button>
      </div>
    </div>
  )
};
