<template>
  <table v-if="user">
    <tbody>
      <tr>
        <td>name</td>
        <td>{{ user.name }}</td>
      </tr>
      <tr>
        <td>username</td>
        <td>{{ user.username }}</td>
      </tr>
      <tr>
        <td>email</td>
        <td>{{ user.email }}</td>
      </tr>
      <tr>
        <td>phone</td>
        <td>{{ user.phone }}</td>
      </tr>
      <tr>
        <td>address</td>
        <td>
          {{ user.address.street }} {{ user.address.suite }}
          {{ user.address.city }} {{ user.address.zipcode }}
        </td>
      </tr>
      <tr>
        <td>website</td>
        <td>{{ user.website }}</td>
      </tr>
      <tr>
        <td>company</td>
        <td>{{ user.company.name }}</td>
      </tr>
    </tbody>
  </table>
  <button @click="goHome">Home page</button>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async getUser() {
      await axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
        )
        .then((res) => (this.user = res.data))
        .catch((e) => console.log(e));
    },
    goHome() {
      this.$router.push({ name: "homeview" });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style>
table {
  margin: 20px auto;
  border-collapse: collapse;
  width: 80%;
}

table td {
  padding: 8px;
  border: 1px solid #ccc;
}

button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
