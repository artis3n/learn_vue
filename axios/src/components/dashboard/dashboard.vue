<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              email: '',
          }
      },
      created() {
          this.$http.get('users.json')
          .then((response) => {
              const users = [];
              for (let key in response.data) {
                  const user = response.data[key];
                  user.id = key;
                  users.push(user);
              }
              console.log(users);
              this.email = users[0].email;
          })
          .catch(error => console.log(error));
      },
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
