<template>
  <div class="post">
    <img :src="post.profileImage" class="pfp" />
    <p class="date">{{ post.date }}</p>

    <p class="content">
      <strong>{{ post.author }}:</strong> {{ post.content }}
    </p>

    <img v-if="post.image" :src="post.image" class="post-image" />

    <span @click="likePost(post.id)" class="like-btn">
      👍({{ post.likes }})
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['post'],
  methods: {
    ...mapMutations(['likePost'])
  }
};
</script>

<style scoped>
.post {
  background-color: #F2EDED;
  border-radius: 10px;
  padding: 20px;
  color: black;
  margin-bottom: 25px;
  border-radius: 10px;
  width: 17%;
    margin-left: auto;
    margin-right: auto;

    
}
.pfp {
  max-width: 40px;
  max-height: 40px;
  vertical-align: top;
  float: left;
  border-radius: 10px;
  padding-left: 2px;
  padding-top: 2px;
}
.post-image {
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
}
.like-btn {
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  margin-top: 10px;
  display: inline-block;
}

.date {
    text-align: right;
}

</style>
