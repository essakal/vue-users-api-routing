<template>
  <h1>all users</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <a :href="`/user/${user.id}`">{{ user.name }}</a>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => (this.users = res.data))
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #4caf50;
}

a:hover {
  text-decoration: underline;
}
</style>
