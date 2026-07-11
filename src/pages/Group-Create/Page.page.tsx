import type { ReactNode } from "react";

import InputText from "@ui/Input-Text/Input-Text.component";
import InputAvatar from "@ui/Input-Avatar/Input-Avatar.component";

import scss from "./Page.module.scss";

export default function Page(): ReactNode {
  return(
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <form className={scss.page_form}>
        <InputAvatar name="avatar"/>
        <InputText name="name" placeholder="Put group name here"/>
        <InputText name="description" placeholder="Put group description here"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
