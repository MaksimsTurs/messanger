import type { ReactNode } from "react";
import type { InputTextProps } from "./Input-Text.type";

import scss from "./Input-Text.module.scss";

export default function InputText(props: InputTextProps): ReactNode {
  return <input className={scss.input_text} type="text" {...props }/>
};
