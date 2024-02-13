import { createPinia } from 'pinia'
import router from '../router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as rules from "@vee-validate/rules";

// VeeValidate
// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import * as AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, (rules as Record<string, any>)[rule]);
});
// 09開頭
defineRule('mobile', (value: string) => {
  return /^09\d{8}$/.test(value) || '手機號碼格式不正確';
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');


// VCalendar
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, fab, far);

import format from '../mixins/format';

export function registerPlugins(app:any) {
  app
    .use(createPinia())
    .use(router)
    .use(VueAxios, axios)
    .component('VField', Field)
    .component('VForm', Form)
    .component('ErrorMessage', ErrorMessage)
    .use(VCalendar, {})
    .component("font-awesome-icon", FontAwesomeIcon)
    .config.globalProperties.$format = format;
}
