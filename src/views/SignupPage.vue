<template>
  <div class="signup_container">
    <h1>Signup</h1>

    <form @submit.prevent="submitForm" class="signup_form">
      <label>
        Email:
        <input 
          type="email"
          v-model="email"
          placeholder="Enter your email"
        />
      </label>
      <label>
        Password:
        <input 
          type="password" 
          v-model="password" 
          placeholder="Enter your password"
        />
      </label>
      <div v-if="errors.length > 0" class="error_box">
        <strong>The form is not valid:</strong>
        <ul>
          <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
        </ul>
      </div>
      <div v-if="success" class="success_box">
        Successfully submitted!
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      success: false,
    };
  },

  computed: {
    isValid() {
      return this.errors.length === 0 
             && this.email !== "" 
             && this.password !== "";
    }
  },

  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!this.email) {
        this.errors.push("Email is required");
      } else if (!emailRegex.test(this.email)) {
        this.errors.push("Email format is invalid");
      }
    },

    validatePassword() {
      const pwd = this.password;

      if (!pwd) {
        this.errors.push("Password is required");
        return;
      }

      if (pwd.length < 8 || pwd.length > 14)
        this.errors.push("Password length must be 8–14 characters");

      if (!/[A-Z]/.test(pwd))
        this.errors.push("Password must include at least one uppercase letter");

      if ((pwd.match(/[a-z]/g) || []).length < 2)
        this.errors.push("Password must include at least two lowercase letters");

      if (!/[0-9]/.test(pwd))
        this.errors.push("Password must include at least one numeric value");

      if (!/^[A-Z]/.test(pwd))
        this.errors.push("Password must start with an uppercase letter");

      if (!pwd.includes("_"))
        this.errors.push('Password must include the character "_"');
    },

    submitForm() {
      this.errors = [];
      this.success = false;

      this.validateEmail();
      this.validatePassword();

      if (this.isValid) {
        this.success = true;
        alert("Form submitted successfully!");
      }
    }
  }
};
</script>
<style src="@/assets/signup.css"></style>
