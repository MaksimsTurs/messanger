import type { ReactNode, SyntheticEvent } from "react";
import type { InputAvatarProps } from "./Input-Avatar.type";

import { ImageIcon, XIcon } from "lucide-react";
import { useState } from "react";

import scss from "./Input-Avatar.module.scss";

const supportedFiles: string[] = ["image/*"];

export default function InputAvatar(props: InputAvatarProps): ReactNode {
  const [preview, setPreview] = useState<string | null>(null);

  const onInput = (event: SyntheticEvent<HTMLInputElement>): void => {
    const file: File = event.currentTarget.files!.item(0)!;
    setPreview((prev: string | null): string | null => {
      if(prev) {
        URL.revokeObjectURL(prev);
      }

      return URL.createObjectURL(file);
    });
  };

  return(
    <label className={scss.input_file_label}>
      {preview ? <img src={preview}/> : <ImageIcon/>}
      <input type="file" onInput={onInput} accept={supportedFiles.join(",")} {...props }/>
    </label>
  );
};
