<template>
  <div class="login myform flex gap-10">
    <form class="w-1/2">
      <h2>Đăng nhập tài khoản</h2>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" autofocus />
      </div>
      <div>
        <label for="password">Mật khẩu</label>
        <input type="text" id="password" />
      </div>
      <button><span>Đăng nhập</span></button>
      <RouterLink to="/forgot-password" class="forgot"
        >Quên mật khẩu?</RouterLink
      >
    </form>
    <div class="img w-1/2 pt-6">
      <img
        src="/src/assets/images/login.jpg"
        alt="login"
        class="w-full h-full object-cover object-center rounded-xl"
      />
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import "@/assets/form.css";
</script>
<style scoped></style>
