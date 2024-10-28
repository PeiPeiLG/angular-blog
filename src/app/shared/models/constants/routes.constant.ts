import { APP_TITLE } from "./base.constants";

export const STATIC_ROUTES = {
  INDEX: { url: '', title: `${APP_TITLE}` },
  ABOUT: { url: 'about', title: `${APP_TITLE} - 關於我` },
  POST: { url: 'post/:date/:id', title: `${APP_TITLE} - 文章內文` },
  TOPICS: { url: 'topics', title: `${APP_TITLE} - 類別/標籤` },
  LIST: { url: 'list', title: `${APP_TITLE} - 條列` },
}
