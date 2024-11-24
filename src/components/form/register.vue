<template>
  <div class="register myform">
    <form>
      <h2>Đăng ký tài khoản</h2>
      <div class="grid grid-cols-2 gap-10">
        <div>
          <label for="email">Họ và tên</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label for="email">Số điện thoại</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label for="password">Mật khẩu</label>
          <input type="text" id="password" />
        </div>
      </div>
      <button><span>Đăng ký</span></button>
      <RouterLink to="/forgot-password" class="forgot"
        >Quên mật khẩu?</RouterLink
      >
    </form>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import "@/assets/form.css";
</script>
<style scoped>
h1 {
  text-decoration: underline;
}
</style>
