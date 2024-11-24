<template>
  <header ref="headerRef">
    <div class="container h-full flex justify-center items-center">
      <nav class="flex w-full justify-between items-center">
        <div class="logo flex justify-center items-center">
          <img
            class="w-[170px] logo-img"
            src="/src/assets/images/LOGO_VN_T.png"
            alt="LOGO"
          />
        </div>
        <ul class="flex items-center gap-14">
          <li><RouterLink to="/">Trang chủ</RouterLink></li>
          <li><RouterLink to="/about">Giới thiệu</RouterLink></li>
          <li><RouterLink to="/news">Tin tức</RouterLink></li>
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
  if (window.scrollY > 150) {
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
  background-color: #fff;
  height: 120px;
  transition: 0.4s ease-in-out;
  position: relative;
  z-index: 999999999999;
  border-bottom: 1px solid rgba(128, 128, 128, 0.341);
}
header::before {
  position: absolute;
  content: "";
  height: 100%;
  left: 0;
  top: 0;
  background-color: #1ca8cb;
  width: 32%;
  border-radius: 0% 150px 0% 0%;
  z-index: 0;
}
header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  box-shadow: 0 3px 10px rgba(0, 61, 146, 0.345);
}
header.sticky img {
  width: 150px;
}
nav a {
  @apply font-medium text-base;
  color: #0c0c0c;
  position: relative;
  transition: 0.3s ease-in-out;
  font-weight: 700;
}
nav a:hover {
  color: #1ca8cb;
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
  background-color: #1ca8cb;
}
.logo-img {
  position: relative;
  z-index: 1;
}
</style>
