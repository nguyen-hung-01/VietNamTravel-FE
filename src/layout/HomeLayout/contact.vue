<template>
  <section class="h-[600px] relative mb-[200px]">
    <img
      src="/src/assets/images/beach.jpg"
      class="absolute w-full h-full object-cover object-center"
    />
    <div class="overlay absolute top-0 left-0 right-0 bottom-0"></div>
    <div
      class="container flex items-center gap-20 absolute top-0 left-0 right-0 bottom-0 z-10"
    >
      <div class="w-1/2">
        <form>
          <div class="main-form px-8 flex flex-col gap-6 py-10 mb-8">
            <div>
              <input type="text" placeholder="Họ và tên" />
              <i class="fa-regular fa-user"></i>
            </div>
            <div>
              <input type="email" placeholder="Email " />
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div>
              <input type="text" placeholder="Số điện thoại" />
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="note">
              <input type="text" placeholder="Ghi chú" />
              <i class="fa-regular fa-comments"></i>
            </div>
          </div>
          <div class="btn px-8 flex items-center justify-between py-6">
            <button>
              <span
                >Gửi tin nhắn <i class="fa-regular fa-paper-plane"></i
              ></span>
            </button>
            <p class="text-white font-semibold">
              +0123456789 <i class="fa-solid fa-phone-volume ml-3"></i>
            </p>
          </div>
        </form>
      </div>
      <div class="w-1/2 r-title">
        <div class="titlle">
          <p class="sub-title">Liên hệ</p>
          <h2 class="main-title">
            Xin chào! Tôi có thể giúp gì cho bạn hôm nay?
          </h2>
        </div>
        <p class="text-white mt-9">
          Chúng tôi rất mong nhận được phản hồi từ bạn. Đội ngũ thân thiện của
          chúng tôi luôn ở đây để trò chuyện
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
form {
  background-color: #fff;
  border-radius: 25px;
  width: 600px;
  overflow: hidden;
  transform: translateY(150px);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.37);
}
.sub-title,
.main-title {
  color: white;
}

.overlay {
  z-index: 7;
  background-color: rgba(0, 30, 43, 0.374);
}
form .btn {
  background-color: #1ca8cb;
}
.main-form > div {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid rgb(196, 196, 196);
  @apply flex justify-between items-center;
}

input {
  width: 100%;
  padding: 0 15px;
  outline: none;
}
.main-form i {
  color: rgb(133, 133, 133);
  margin-right: 20px;
}
.btn button {
  @apply flex justify-center items-center h-[65px] w-[220px];
  border-radius: 30px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.btn button span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  z-index: 2;
  transform: translate(-50%, -50%);
  color: #113d48;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.4s ease-in-out;
}
.btn button span i {
  font-size: 17px;
}
.btn button:hover span {
  color: #fff;
}
.btn button::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #113d48;
  transform: translateX(-100%);
  transition: 0.5s ease-in-out;
}
.btn button:hover::before {
  transform: translateX(0);
  border-radius: 30px;
}
</style>
