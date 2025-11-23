<template>
  <header class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: lightgray;
  padding: 15px;
}
nav a {
  color: black;
  margin-right: 15px;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>