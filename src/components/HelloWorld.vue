<template>
  <div class="home">
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Company</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.city }}</td>
                <td>{{ user.companyName }}</td>
                <td>{{ user.createdAt }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      //users: [],
    }
  },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        this.$store.dispatch('getUsers');
      }
    },
    computed: {
      users() {
        return this.$store.state.users;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
