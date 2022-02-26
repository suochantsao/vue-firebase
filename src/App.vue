<template>
  <div id="app">
    <div id="nav">
      <button @click="writeUserData">新增使用者資料</button>
      <button @click="getUserData">讀取使用者資料</button>
      <button @click="updateUserData">覆蓋原本使用者資料</button>
      <button @click="updateParticularData">修改使用者資料</button>
      <button @click="delUserData">刪除使用者資料</button>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from "./db";
import {
  getDatabase,
  set,
  ref,
  onValue,
  // push,
  // child,
  update,
  remove,
} from "firebase/database";

export default {
  data() {
    return {
      firebaseApp,
      userData: {
        user: {
          POKA: {
            email: "POKA@gmail.com",
          },
          Jiang: {
            email: "Jiang@gmail.com",
          },
          Guang: {
            email: "Guang@gmail.com",
          },
        },
      },
      initData: "",
    };
  },
  created() {},
  methods: {
    writeUserData() {
      const db = getDatabase();
      set(ref(db), this.userData);
      console.log("新增使用者資料成功");
    },
    getUserData() {
      const db = getDatabase();
      const getData = ref(db);
      console.log(db);
      onValue(getData, (snapshot) => {
        const firebasedata = snapshot.val();
        console.log(snapshot);
        console.log("讀取使用者資料成功", firebasedata);
      });
    },
    updateUserData() {
      const db = getDatabase();
      set(ref(db, "/user"), {
        Charlie: {
          email: "Charlie@gmail.com",
        },
      });
      console.log("修改使用者資料成功(取代整個子節點)");
    },
    updateParticularData() {
      const db = getDatabase();

      const userData = {
        email: "Casper@gmail.com",
      };
      // const newUserKey = push(child(ref(db), "user")).key;
      const updates = {};
      updates["/user/" + "Casper"] = userData;
      return update(ref(db), updates);
    },
    delUserData() {
      const db = getDatabase();
      const getData = ref(db);
      remove(getData);
      console.log("刪除使用者資料成功");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  display: flex;
  flex-direction: column;
  margin: 12% auto;
}
</style>
