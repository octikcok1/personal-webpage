<template>
  <div class="ftttt" v-if="showElement">
    <p>© 2023 - {{ Year }} octikcok保留所有權利。</p>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';
export default {
  data() {
    return {
      showElement: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 计算页面底部的位置
      const pageBottom = window.innerHeight + window.scrollY;
      
      // 你可以根据需要调整阈值，这里是100像素
      const threshold = 100;
      
      // 如果页面底部位置减去阈值小于等于文档的总高度，显示元素
      if (pageBottom >= document.body.offsetHeight - threshold) {
        this.showElement = true;
      } else {
        this.showElement = false;
      }
    },
  },
};
</script>

<style>
.ftttt {
  background-color: #121212;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.ftttt.show {
  opacity: 1;
}
</style>