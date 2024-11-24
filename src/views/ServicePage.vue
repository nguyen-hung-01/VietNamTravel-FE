<template>
  <MainBannerLayout namePage="Dịch vụ" />
  <section class="main-service py-20">
    <div class="container">
      <div class="grid grid-cols-4 gap-5">
        <div v-for="(service, index) in services" :key="index" class="item">
          <div class="img">
            <img :src="service.img" :alt="service.name" />
          </div>
          <div class="content">
            <div class="name">{{ service.name }}</div>
            <p>{{ service.listCount }} Danh sách</p>
            <a class="see-more">
              <span>Đặt ngay</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="plan py-20">
    <div class="container">
      <div class="title text-center">
        <p class="sub-title">Gói dịch vụ</p>
        <h2 class="main-title">
          Lên kế hoạch cho chuyến tham quan<br />
          của bạn
        </h2>
      </div>
      <div class="list-plan flex gap-5 mt-10">
        <div class="item">
          <h4>Gói cơ bản</h4>
          <div class="content">
            <div class="price">299.999đ</div>
            <p>Các dịch vụ cần thiết cho người tìm kiếm cơ bản và độc thân.</p>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>Tối đa 2 thành viên
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí dịch vụ phòng
              </li>
              <li><i class="fa-regular fa-circle-check"></i>Tài xế riêng</li>
              <li><i class="fa-regular fa-circle-check"></i>Quản lý tour</li>
              <li><i class="fa-regular fa-circle-check"></i>Sự hợp tác</li>
              <li><i class="fa-regular fa-circle-check"></i>Phí vào cửa</li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí hướng dẫn tại điểm
                đến
              </li>
            </ul>
            <div class="btn">
              <button><span>Tìm hiểu thêm</span></button>
            </div>
          </div>
        </div>
        <div class="item">
          <h4>Gói phổ thông</h4>
          <div class="content">
            <div class="price">499.000đ</div>
            <p>Các dịch vụ cần thiết cho người tìm kiếm cơ bản và độc thân.</p>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>Tối đa 2 thành viên
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí dịch vụ phòng
              </li>
              <li><i class="fa-regular fa-circle-check"></i>Tài xế riêng</li>
              <li><i class="fa-regular fa-circle-check"></i>Quản lý tour</li>
              <li><i class="fa-regular fa-circle-check"></i>Sự hợp tác</li>
              <li><i class="fa-regular fa-circle-check"></i>Phí vào cửa</li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí hướng dẫn tại điểm
                đến
              </li>
            </ul>
            <div class="btn">
              <button><span>Tìm hiểu thêm</span></button>
            </div>
          </div>
        </div>
        <div class="item">
          <h4>Gói cao cấp</h4>
          <div class="content">
            <div class="price">799.000đ</div>
            <p>Các dịch vụ cần thiết cho người tìm kiếm cơ bản và độc thân.</p>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>Tối đa 2 thành viên
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí dịch vụ phòng
              </li>
              <li><i class="fa-regular fa-circle-check"></i>Tài xế riêng</li>
              <li><i class="fa-regular fa-circle-check"></i>Quản lý tour</li>
              <li><i class="fa-regular fa-circle-check"></i>Sự hợp tác</li>
              <li><i class="fa-regular fa-circle-check"></i>Phí vào cửa</li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí hướng dẫn tại điểm
                đến
              </li>
            </ul>
            <div class="btn">
              <button><span>Tìm hiểu thêm</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MainBannerLayout } from "@/layout/index";

const services = [
  { img: "/src/assets/images/sevice1.jpg", name: "Chụp ảnh", listCount: 20 },
  { img: "/src/assets/images/service2.jpg", name: "Quay phim", listCount: 15 },
  { img: "/src/assets/images/service3.jpg", name: "Trang điểm", listCount: 10 },
  { img: "/src/assets/images/service4.jpg", name: "Thiết kế", listCount: 25 },
  {
    img: "/src/assets/images/service5.jpg",
    name: "Tổ chức sự kiện",
    listCount: 30,
  },
  { img: "/src/assets/images/service6.jpg", name: "In ấn", listCount: 18 },
  { img: "/src/assets/images/service7.jpg", name: "Dựng video", listCount: 22 },
  { img: "/src/assets/images/service8.jpg", name: "Sửa ảnh", listCount: 12 },
];
</script>

<style scoped>
.see-more {
  display: inline-block;
  width: 220px;
  height: 55px;
  border-radius: 30px;
  border: 1px solid #1ca8cb;
  color: #1ca8cb;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  cursor: pointer;
}

.see-more span {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  transition: 0.4s ease-in-out;
}

.see-more::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s ease-in-out;
  transform: translateX(-100%);
  background-color: #1ca8cb;
}

.see-more:hover {
  color: #e9f6f9;
  border: 1px solid #1ca8cb;
}

.see-more:hover::before {
  transform: translateX(0);
  border-radius: 30px;
}

.main-service .item {
  border-radius: 20px;
  @apply overflow-hidden text-center pb-5;
  background-color: #e9f6f9;
  transition: 0.4s ease-in-out;
}
.main-service .item:hover {
  transform: translateY(-10px);
  box-shadow: 2px 2px 10px #113d4866;
}
.main-service .item:hover img {
  transform: scale(1.1);
}
.main-service img {
  @apply w-full h-full object-cover object-center;
  transition: transform 0.5s ease-in-out;
  transition: 0.4s ease-in-out;
}

.main-service .img {
  @apply w-full h-[250px] mb-5 overflow-hidden;
}

.main-service .name {
  @apply text-2xl font-bold cursor-pointer;
  transition: 0.4s ease-in-out;
}
.main-service .item:hover .name {
  color: #158fae;
}
button {
  @apply h-[65px] w-[200px] font-semibold relative overflow-hidden mt-10;
  background-color: #113d48;
  border-radius: 30px;
  color: white;
  border: 1px solid #fff;
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
.plan .item {
  background-color: #e9f6f9;
  border-radius: 20px;
  @apply py-8 px-10;
  color: #113d48;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.plan h4 {
  @apply text-2xl font-bold pb-8 mb-5;
  border-bottom: 1px solid #fff;
}
.plan .price {
  @apply text-4xl font-bold;
}
.plan i {
  color: #1ca8cb;
  margin-right: 10px;
}
.plan li {
  @apply mb-3;
}
.plan p {
  margin: 20px 0;
}
.plan .btn {
  @apply flex justify-center;
}
.plan .item:nth-child(2) {
  background-color: #113d48;
  color: #fff;
}
.plan .item:hover {
  background-color: #113d48;
  color: #fff;
}
</style>
