import type { ReactNode } from "react";

import scss from "../scss/Chat-And-Group-Preview.module.scss";

import { Link } from "@hook/use-react-router/use-react-router.hook";

import { EllipsisVerticalIcon } from "lucide-react";

export default function ChatAndGroupPreview(): ReactNode {
  return(
    <li className={scss.group_or_chat_preview_item}>
      <div className={scss.group_or_chat_preview_body}>
        <img className={scss.group_or_chat_icon} src="Wallpaper.jpg"/>
        <div>
          <div className={scss.group_or_chat_header}>
            <Link href="/chat/1">Max Musterman 1</Link>
            <div className={scss.group_or_chat_last_message_time}>
              <p>12:42</p>
              <button>
                <EllipsisVerticalIcon size={14}/>
              </button>
            </div>
          </div>
          <p className={scss.group_or_chat_last_message}>Aut nostrum ea libero ea reprehenderit. Veniam distinctio sed aut molestias est voluptatibus. Cum illo qui similique et dolores. Odio nobis itaque dolor sunt a voluptas excepturi reiciendis. Laudantium earum quod sit est ipsum. Assumenda minus facilis cupiditate omnis. Ut adipisci perferendis qui expedita. Iste possimus ad velit. Voluptatem explicabo voluptatem omnis facilis perferendis. Maxime voluptatem et et voluptatum perspiciatis eius quod. Est adipisci excepturi praesentium. Quae excepturi sunt earum recusandae ducimus in. Velit dolores laborum placeat dolorum incidunt et nemo enim. Sit sit iste ut. Quaerat dolores iste dolor voluptatem nesciunt qui illo quia. A dolores dignissimos sequi est dolorem fuga nisi. Debitis aspernatur architecto dolorem. Reprehenderit quia non aspernatur et et. Explicabo consectetur laborum omnis libero quia. Ad consequatur aliquam in et.</p>
        </div>
      </div>
    </li>
  );
};
