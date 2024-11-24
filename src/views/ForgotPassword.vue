<template>
  <MainBannerLayout namePage="Tài khoản" />
  <div class="reset myform py-20 flex gap-10 justify-center">
    <form class="w-2/5">
      <h2 class="text-3xl">Đặt lại mật khẩu</h2>
      <div>
        <label for="email">Nhập Email của bạn</label>
        <input type="email" id="email" autofocus />
      </div>
      <button><span>Lấy lại mật khẩu</span></button>
    </form>
  </div>
</template>
<script setup>
import { MainBannerLayout } from "@/layout/index";
import "@/assets/form.css";
</script>
<style scoped></style>
