<template>
  <div class="image-container">
    <img class="logo" src="../assets/nako.jpg" alt="個人頭貼" />
    <h4 class="title-text">octikcok的網頁小窩</h4>
    <button class="menu" @click="showMenu"><i class="fa-solid fa-bars fa-lg" style="color: #ffffff;"></i></button>
    <div v-if="isMenuVisible" class="list">
      <a href="/">首頁</a>
      <a href="/about">關於我</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false
    };
  },
  methods: {
    showMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  }
};
</script>