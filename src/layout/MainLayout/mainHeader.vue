<template>
  <div class="menu-top h-[40px] flex items-center justify-center text-sm">
    <div class="container flex justify-between items-center">
      <div class="left flex items-center gap-4">
        <span
          ><i class="fa-solid fa-location-dot mr-2 text-xs opacity-80"></i>Đà
          Nẵng, Việt Nam</span
        >
        <span>|</span>
        <span
          ><i class="fa-solid fa-clock mr-2 text-xs opacity-80"></i>Thứ 2 đến
          thứ 6: 8 giờ sáng - 5 giờ chiều</span
        >
      </div>
      <div class="right flex items-center gap-3">
        <div>FAQ</div>
        <span>|</span>
        <div>Support</div>
        <span>|</span>
        <div class="myaccount flex items-center">
          <RouterLink to="/my-account">Đăng nhập/Đăng ký</RouterLink>
          <i class="fa-solid fa-user text-xs opacity-80 ml-1"></i>
        </div>
      </div>
    </div>
  </div>
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
          <li :class="{ active: route.path === '/' }">
            <RouterLink to="/">Trang chủ</RouterLink>
          </li>
          <li :class="{ active: route.path === '/about' }">
            <RouterLink to="/about">Giới thiệu</RouterLink>
          </li>
          <li :class="{ active: route.path === '/news' }">
            <RouterLink to="/news">Tin tức</RouterLink>
          </li>
          <li :class="{ active: route.path === '/destination' }">
            <RouterLink to="/destination">Điểm đến</RouterLink>
          </li>
          <li :class="{ active: route.path === '/service' }">
            <RouterLink to="/service">Dịch vụ</RouterLink>
          </li>
          <li :class="{ active: route.path === '/contact' }">
            <RouterLink to="/contact">Liên hệ</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const headerRef = ref(null);
const route = useRoute();

const handleScroll = () => {
  if (window.scrollY > 180) {
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
nav .active a {
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
nav .active a::before {
  width: 100%;
}
.logo-img {
  position: relative;
  z-index: 1;
}
.myaccount:hover {
  transition: 0.3s ease-in-out;
}
.myaccount:hover {
  color: #1ca8cb;
}
.menu-top {
  border-bottom: 1px solid rgba(160, 160, 160, 0.423);
}
</style>
