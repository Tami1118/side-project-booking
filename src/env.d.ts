/// <reference types="vite/client" />

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

declare module 'aos';

// import { ComponentCustomProperties } from "vue";
// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $format: any;
//   }
// }
// export default ComponentCustomProperties;