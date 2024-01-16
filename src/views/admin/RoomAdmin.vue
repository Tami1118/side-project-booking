<template>
  <div class="container mx-auto">
    我是房間管理頁
    {{data}}

    <button class="p-3 bg-primary text-white" @click="login">登入</button>
    <button class="p-3 bg-primary text-white" @click="checkAdmin">驗證</button>
    <button class="p-3 bg-primary text-white" @click="addRoom">新增房型</button>

  </div>
</template>
<script>
// {
//   "name": "家庭四人房",
//   "description": "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
//   "imageUrl": "https://fakeimg.pl/300/",
//   "imageUrlList": [
//     "https://fakeimg.pl/300/",
//     "https://fakeimg.pl/300/",
//     "https://fakeimg.pl/300/"
//   ],
//   "areaInfo": "24坪",
//   "bedInfo": "兩張大床",
//   "maxPeople": 4,
//   "price": 10000,
//   "facilityInfo": [
//     {
//       "title": "平面電視",
//       "isProvide": true
//     }
//   ],
//   "amenityInfo": [
//     {
//       "title": "衛生紙",
//       "isProvide": true
//     }
//   ]
// }

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {},
  methods: {
    login() {
      const url = `${VITE_URL}/api/v1/user/login`;
      this.$http
        .post(url, {
          email: "chenziyi93326@gmail.com",
          password: "a12345678",
        })
        .then((res) => {
          console.log(res);
          const { token } = res.data;
          document.cookie = `typescript=${token}`;
          this.$http.defaults.headers.common["Authorization"] = token;
          // console.log(document.cookie)
          // this.checkAdmin()
        });
    },
    checkAdmin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)typescript\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common["Authorization"] = token;

      const url = `${VITE_URL}/api/v1/user/check`;
      this.$http.get(url).then((res) => {
        console.log("驗證成功", res);
        this.getRooms();
      });
    },
    getRooms() {
      const url = `${VITE_URL}/api/v1/admin/rooms/`;
      console.log(url);
      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          this.data = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addRoom() {
      const url = `${VITE_URL}/api/v1/admin/rooms/`;
      console.log(url);

      this.$http
        .post(url, {
          name: "家庭四人房",
          description:
            "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
          imageUrl: "https://fakeimg.pl/300/",
          imageUrlList: [
            "https://fakeimg.pl/300/",
            "https://fakeimg.pl/300/",
            "https://fakeimg.pl/300/",
          ],
          areaInfo: "24坪",
          bedInfo: "兩張大床",
          maxPeople: 4,
          price: 10000,
          facilityInfo: [
            {
              title: "平面電視",
              isProvide: true,
            },
          ],
          amenityInfo: [
            {
              title: "衛生紙",
              isProvide: true,
            },
          ],
        })
        .then((res) => {
          console.log(res);
          this.getRooms();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>