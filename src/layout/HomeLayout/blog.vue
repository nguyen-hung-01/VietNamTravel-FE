<template>
  <section class="blog py-10">
    <div class="container">
      <div class="flex justify-between items-end mb-8">
        <div class="title">
          <p class="sub-title">Tin tức</p>
          <h2 class="main-title">Tin tức mới nhất về các chuyến đi</h2>
        </div>
        <a href="#" class="see-more"><span>Đọc thêm</span></a>
      </div>
      <div class="main-blog flex gap-6">
        <div class="w-2/3 flex flex-col gap-6">
          <div class="item flex items-center gap-6">
            <div class="img">
              <img src="/src/assets/images/blog1.jpg" alt="blog" />
            </div>
            <div class="info w-[450px]">
              <div
                class="date flex gap-5 items-center text-sm font-bold opacity-60"
              >
                <span>24 tháng 11, 2024</span>
                <span>|</span>
                <span>1 tuần trước</span>
              </div>
              <h3>
                Khám Phá Hội An: Thiên Đường Nghỉ Dưỡng Mới Kết Hợp Văn Hóa và
                Sinh Thái
              </h3>
              <a href="#" class="read-more"><span>Đọc thêm</span></a>
            </div>
          </div>
          <div class="item flex items-center gap-6">
            <div class="img">
              <img src="/src/assets/images/blog2.jpg" alt="blog" />
            </div>
            <div class="info w-[450px]">
              <div
                class="date flex gap-5 items-center text-sm font-bold opacity-60"
              >
                <span>24 tháng 11, 2024</span>
                <span>|</span>
                <span>1 tuần trước</span>
              </div>
              <h3>Kỳ Quan Mới: Khu Nghỉ Dưỡng Sinh Thái Tại Vịnh Hạ Long</h3>
              <a href="#" class="read-more"><span>Đọc thêm</span></a>
            </div>
          </div>
        </div>
        <div class="w-1/3">
          <div class="item flex flex-col h-full">
            <div class="img">
              <img
                src="/src/assets/images/blog3.jpg"
                alt="blog"
                class="h-[240px]"
              />
            </div>
            <div class="info px-5 mt-7">
              <div
                class="date flex gap-5 items-center text-sm font-bold opacity-60"
              >
                <span>24 tháng 11, 2024</span>
                <span>|</span>
                <span>1 tuần trước</span>
              </div>
              <h3>Hà Nội Ra Mắt Khu Nghỉ Dưỡng Sinh Thái Giữa Lòng Thủ Đô</h3>
              <a href="#" class="read-more"><span>Đọc thêm</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.blog .img {
  width: 400px;
  height: 240px;
  border-radius: 20px;
  /* flex: 1; */
  overflow: hidden;
}
.img img {
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  object-position: center;
  transition: 0.4s ease-in-out;
}
.item {
  background-color: #e9f6f9;
  overflow: hidden;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
}
.item:hover {
  transform: translateY(-5px);
  box-shadow: -3px 3px 10px #29c4ea4d;
}
.item:hover img {
  transform: scale(1.1);
}
.blog h3 {
  @apply text-xl font-bold my-2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  transition: 0.3s ease-in-out;
}
.blog h3:hover {
  color: #1ca8cb;
  text-decoration: underline;
  cursor: pointer;
}
.read-more {
  display: inline-block;
  width: 180px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #1ca8cb;
  color: #1ca8cb;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}
.see-more {
  display: inline-block;
  width: 220px;
  height: 55px;
  border-radius: 30px;
  border: 1px solid black;
  color: black;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}
.read-more span,
.see-more span {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  transition: 0.4s ease-in-out;
}
.read-more::before,
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
.read-more:hover,
.see-more:hover {
  color: #e9f6f9;
  border: 1px solid #1ca8cb;
}
.read-more:hover::before,
.see-more:hover::before {
  transform: translateX(0);
  border-radius: 30px;
}
</style>
