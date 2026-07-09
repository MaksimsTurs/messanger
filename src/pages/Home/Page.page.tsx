import type { ReactNode } from "react";

import SideMenu from "@component/Side-Menu/Side-Menu.component";
import ChatAndGroupList from "./components/Chat-And-Group-List.component";

export default function Page(): ReactNode {
  return(
    <div style={{ display: "flex", gap: "0.5rem"  }}>
      <SideMenu/>
      <ChatAndGroupList/>
    </div>
  )
};
