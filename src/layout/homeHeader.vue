<template>
  <header ref="headerRef">
    <div class="container h-full flex justify-center items-center">
      <nav class="flex w-full justify-between items-center">
        <ul class="flex items-center gap-16">
          <li><RouterLink to="/">Trang chủ</RouterLink></li>
          <li><RouterLink to="/about">Giới thiệu</RouterLink></li>
          <li><RouterLink to="/news">Tin tức</RouterLink></li>
        </ul>
        <div class="logo flex justify-center items-center">
          <img
            class="w-[150px]"
            src="/src/assets/images/LOGO_VN_X.png"
            alt="LOGO"
          />
        </div>
        <ul class="flex items-center gap-16">
          <li><RouterLink to="/destination">Điểm đến</RouterLink></li>
          <li><RouterLink to="/service">Dịch vụ</RouterLink></li>
          <li><RouterLink to="/contact">Liên hệ</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const headerRef = ref(null);

const handleScroll = () => {
  if (window.scrollY > 50) {
    headerRef.value?.classList.add("sticky");
  } else {
    headerRef.value?.classList.remove("sticky");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1111111111;
  background-color: #00000063;
  height: 120px;
  transition: 0.4s ease-in-out;
}
header.sticky {
  background-color: #000000;
  height: 80px;
}
nav a {
  @apply font-medium text-base;
  color: #fff;
  position: relative;
}
nav a:hover {
  text-shadow: 0 0 3px #fff;
}
nav a:hover::before {
  width: 100%;
}
nav a::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  height: 2px;
  width: 0;
  transition: 0.3s ease-in-out;
  background-color: #fff;
}
</style>
