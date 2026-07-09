import type { RefObject, SyntheticEvent, ReactNode } from "react";

import { useRef, useState } from "react";

import scss from "./Input-Message.module.scss";

import { SendHorizontalIcon, SmileIcon } from "lucide-react";

const emojis: Record<string, string[]> = {
  Default: [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "🥹", "☺️",
    "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩",
    "🥳", "🙂‍↕️", "😏", "😒", "🙂‍↔️", "😞", "😔", "😟", "😕", "🙁", "☹️",
    "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😮‍💨", "😤", "😠", "😡",
    "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🫣",
    "🫡", "🤔", "🫢", "🤭", "🤫", "🤥", "😶", "😶‍🌫️", "😐", "😑", "😬",
    "🫨", "🫠", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🫩",
    "🤤", "😪", "😵", "😵‍💫", "🫥", "🤐", "🥴", "🤢", "🤮", "🤧", "😷",
    "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "☠️",
    "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"
  ]
};

function shouldAdjustRowsCount(currOffset: number, currScrollHeight: number): boolean {
  return(currScrollHeight - currOffset) > 20;
};

function adjustRowsCount(rowsCountRef: RefObject<number>, currOffsetRef: RefObject<number>, currScrollHeight: number): void {
  if(shouldAdjustRowsCount(currOffsetRef.current, currScrollHeight)) {
    rowsCountRef.current++;
    currOffsetRef.current += 20;
  }
};

export default function InputMessage(): ReactNode {
  const [text, setText] = useState("");
  const textAreaRef: RefObject<HTMLTextAreaElement | null> = useRef<HTMLTextAreaElement | null>(null);
  const currOffsetRef: RefObject<number> = useRef<number>(16);
  const rowsCountRef: RefObject<number> = useRef<number>(1);

  const onInput = (event: SyntheticEvent<HTMLTextAreaElement>): void => {
    const newText: string = event.currentTarget.value;

    adjustRowsCount(rowsCountRef, currOffsetRef, textAreaRef.current!.scrollHeight);
    setText(newText);
  };

  // TODO Fix: When adding emoji multiple time, the cursor position is setted to 0.
  const addEmoji = (emoji: string): void => {
    adjustRowsCount(rowsCountRef, currOffsetRef, textAreaRef.current!.scrollHeight);
    setText((prev: string) => {
      const leftPart: string = prev.slice(0, textAreaRef.current!.selectionEnd);
      const rightPart: string = prev.slice(textAreaRef.current!.selectionEnd, prev.length);

      return leftPart + emoji + rightPart;
    });
  };

  return(
    <div className={scss.input_message_container}>
      <div className={scss.input_message_body}>
        <div className={scss.input_message_actions}>
          <button>
            <SmileIcon/>
          </button>
          <button>
            <SendHorizontalIcon/>
          </button>
        </div>
        <textarea
          ref={textAreaRef}
          className={scss.input_message}
          onInput={onInput}
          value={text} 
          rows={rowsCountRef.current} 
          placeholder="Put you message here..."/>
      </div>
      {Object
        .entries(emojis)
        .map((data: [string, string[]]) => (
          <div key={data[0]} className={scss.input_message_emojis_list}>
            <p className={scss.input_message_emoji_name}>{data[0]}</p>
            <ul className={scss.input_message_emoji_list}>
              {data[1].map((emoji: string) => (
                <li key={emoji}>
                  <button onClick={() => addEmoji(emoji)}>{emoji}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
