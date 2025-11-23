<template>
  <div class="signup">
    <h1>Sign up</h1>

    <form @submit.prevent="handleSubmit">
    

      <label class = "formText">Email:</label>
      <input v-model="email" type="email" required />

      <label class = "formText">Password:</label>
      <input v-model="password" type="password" required />

      <p v-if="errors.length" class="error">
        The password is not valid:
        <ul>
          <li v-for="(err, index) in errors" :key="index">{{ err }}</li>
        </ul>
      </p>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  
};
</script>

<style scoped>
.signup {
  max-width: 15%;
  margin: auto;
  background-color: #F2EDED;
  color: black;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  padding: 10px;
}

.formText {
  margin-left: 8%;
}
form {
  display: flex;
  flex-direction: column;
  
}
input {
  margin-bottom: 10px;
  padding: 8px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.error {
  background: #552222;
  color: #ffbbbb;
  padding: 10px;
  border-radius: 8px;
}
</style>