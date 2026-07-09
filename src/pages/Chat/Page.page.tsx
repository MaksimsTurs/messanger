import type { ReactNode } from "react";

import SideMenu from "@component/Side-Menu/Side-Menu.component";
import InputMessage from "@ui/Input-Message/Input-Message.component";

import scss from "./Page.module.scss";

export default function Page(): ReactNode {
  return(
    <div style={{ display: "flex", gap: "0.5rem"  }}>
      <SideMenu/>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <ul className={scss.message_list}>
          <li className={scss.message_item}>
            <img src="/Wallpaper.jpg"/>
            <div className={scss.message_data}>
              <div className={scss.message_header}>
                <p>Max Musterman</p>
                <p>12:32</p>
              </div>
              <p className={scss.message_body}>Aut nostrum ea libero ea reprehenderit. Veniam distinctio sed aut molestias est voluptatibus. Cum illo qui similique et dolores. Odio nobis itaque dolor sunt a voluptas excepturi reiciendis. Laudantium earum quod sit est ipsum. Assumenda minus facilis cupiditate omnis. Ut adipisci perferendis qui expedita. Iste possimus ad velit. Voluptatem explicabo voluptatem omnis facilis perferendis. Maxime voluptatem et et voluptatum perspiciatis eius quod. Est adipisci excepturi praesentium. Quae excepturi sunt earum recusandae ducimus in. Velit dolores laborum placeat dolorum incidunt et nemo enim. Sit sit iste ut. Quaerat dolores iste dolor voluptatem nesciunt qui illo quia. A dolores dignissimos sequi est dolorem fuga nisi. Debitis aspernatur architecto dolorem. Reprehenderit quia non aspernatur et et. Explicabo consectetur laborum omnis libero quia. Ad consequatur aliquam in et.</p>
            </div>
          </li>
          <li className={scss.message_item}>
            <div className={scss.message_data}>
              <div className={scss.message_header}>
                <p>Max Musterman</p>
                <p>12:32</p>
              </div>
              <p className={scss.message_body}>Aut nostrum ea libero ea reprehenderit. Veniam distinctio sed aut molestias est voluptatibus. Cum illo qui similique et dolores. Odio nobis itaque dolor sunt a voluptas excepturi reiciendis. Laudantium earum quod sit est ipsum. Assumenda minus facilis cupiditate omnis. Ut adipisci perferendis qui expedita. Iste possimus ad velit. Voluptatem explicabo voluptatem omnis facilis perferendis. Maxime voluptatem et et voluptatum perspiciatis eius quod. Est adipisci excepturi praesentium. Quae excepturi sunt earum recusandae ducimus in. Velit dolores laborum placeat dolorum incidunt et nemo enim. Sit sit iste ut. Quaerat dolores iste dolor voluptatem nesciunt qui illo quia. A dolores dignissimos sequi est dolorem fuga nisi. Debitis aspernatur architecto dolorem. Reprehenderit quia non aspernatur et et. Explicabo consectetur laborum omnis libero quia. Ad consequatur aliquam in et.</p>
            </div>
            <img src="/Wallpaper.jpg"/>
          </li>
        </ul>
        <InputMessage/>
      </div>
    </div>
  );
};
