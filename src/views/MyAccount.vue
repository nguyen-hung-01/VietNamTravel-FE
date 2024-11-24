<template>
  <MainBannerLayout namePage="Tài khoản" />
  <div class="main-form py-20">
    <div class="container">
      <nav class="flex">
        <li
          @click="currentForm = 'login'"
          :class="currentForm === 'login' ? 'active' : ''"
        >
          Đăng nhập
        </li>
        <li
          @click="currentForm = 'register'"
          :class="currentForm === 'register' ? 'active' : ''"
        >
          Đăng ký
        </li>
      </nav>
      <div class="content">
        <component :is="currentForm === 'login' ? LoginForm : RegisterForm" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MainBannerLayout } from "@/layout/index";
import { LoginForm, RegisterForm } from "@/components/form/index";

const currentForm = ref("login");
</script>
<style scoped>
nav {
  border-bottom: 1px solid rgb(203, 203, 203);
}
nav li {
  @apply w-[200px] h-[60px] font-bold text-base flex items-center justify-center cursor-pointer;
  transition: 0.3s ease-in-out;
  border: 1px solid rgba(201, 201, 201, 0.442);
}
nav li.active {
  background-color: var(--primary-color);
  color: #fff;
}
</style>
