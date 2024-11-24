<template>
  <MainBannerLayout namePage="Liên hệ" />
  <section class="main-contact my-20">
    <div class="container">
      <div class="title text-center mb-10">
        <p class="sub-title">Liên hệ</p>
        <h1 class="main-title">Thông tin liên hệ của chúng tôi</h1>
      </div>
      <div class="info flex justify-center gap-10">
        <div class="item">
          <div class="icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="content">
            <div class="name">Địa chỉ</div>
            <div>
              <p>Đà Nẵng, Việt Nam</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="content">
            <div class="name">Số điện thoại</div>
            <div>
              <p>+01 234 567 890</p>
              <p>+09 876 543 210</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div class="content">
            <div class="name">Email</div>
            <div>
              <p>ng.hung01.it@gmail.com</p>
              <p>nhom5fpol@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relative h-[900px]">
    <div
      class="overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full"
    ></div>
    <img
      src="/src/assets/images/contact.jpg"
      class="w-full h-full object-cover object-center"
    />
    <div class="container absolute top-0 left-0 right-0 bottom-0">
      <form>
        <h2 class="font-extrabold text-3xl mb-8">Đặt chuyến tham quan</h2>
        <div class="main-form flex flex-col gap-7">
          <div>
            <input type="text" placeholder="Họ và tên" />
            <i class="fa-solid fa-user"></i>
          </div>
          <div>
            <input type="email" placeholder="Email của bạn" />
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div>
            <input type="text" placeholder="Số điện thoại" />
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="note">
            <textarea class="w-full" rows="10" placeholder="Ghi chú"></textarea>
            <i class="fa-solid fa-comments"></i>
          </div>
        </div>
        <button>
          <span
            >Gửi thông tin <i class="fa-regular fa-paper-plane ml-2"></i
          ></span>
        </button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { MainBannerLayout } from "@/layout/index";
</script>
<style scoped>
.main-contact .icon {
  @apply w-[70px] h-[70px] flex justify-center items-center;
  background-color: #113d48;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
}
.main-contact .item {
  @apply py-5 px-5 flex items-center gap-5 w-[350px];
  border: 1px solid #113d48;
  border-radius: 10px;
}
.main-contact .name {
  @apply font-bold text-2xl;
  color: #113d48;
}
.main-contact p {
  @apply font-bold text-base opacity-60;
}
.overlay {
  background-color: #03273064;
}
form {
  background-color: #fff;
  @apply py-10 px-10 absolute top-[50%] left-0 w-[700px];
  transform: translateY(-50%);
  border-radius: 25px;
}
.main-form > div {
  border: 1px solid #113d486b;
  border-radius: 10px;
  @apply h-[65px] w-full flex justify-between items-center;
}
.main-form > div.note {
  @apply h-[200px] items-start py-5 px-5;
}
.main-form > div.note i {
  margin-right: 0;
}
.main-form textarea {
  @apply h-full w-full;
  outline: none;
}
.main-form i {
  margin-right: 20px;
  opacity: 0.6;
}
.main-form input {
  padding: 0 20px;
  @apply h-full w-full;
  outline: none;
}
button {
  @apply h-[65px] w-[200px] font-semibold relative overflow-hidden mt-10;
  background-color: #113d48;
  border-radius: 30px;
  color: white;
}
button span {
  @apply absolute top-[50%] left-[50%] w-full;
  transform: translate(-50%, -50%);
  z-index: 2;
}
button:hover::before {
  transform: translateX(0);
  border-radius: 30px;
}
button::before {
  @apply w-full h-full absolute top-0 left-0;
  content: "";
  transform: translateX(-100%);
  transition: 0.5s ease-in-out;
  background-color: var(--primary-color);
  z-index: 1;
}
</style>
