<template>
  <div class="main">

    <button @click="resetLikes" class="reset-btn">Reset all likes</button>

    <Post v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Post from '../components/Post.vue';

export default {
  components: { Post },
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    ...mapMutations(['resetLikes'])
  }
};
</script>

<style scoped>
.reset-btn {
  padding: 8px 12px;
  margin-bottom: 20px;
}
</style>