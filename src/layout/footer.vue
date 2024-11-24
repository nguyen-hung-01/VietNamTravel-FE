<template>
    <footer class="pt-10">
        <div class="container">
            <div class="top-ft flex justify-between items-center pb-10">
                <h2 class="text-[40px] font-medium text-white w-[450px] leading-tight">Được cập nhật bản tin mới nhất</h2>
                <div class="subscribe">
                    <input type="text" placeholder="Email của bạn" class="h-full">
                    <button ><span>Đăng ký ngay</span></button>
                </div>
            </div>
            <div class="main-ft flex justify-between">
                <div class="logo">
                    <img class="w-[170px]" src="/src/assets/images/LOGO_VN_T.png" alt="logo">
                    <p class="text-white opacity-75 w-[350px] py-4">TravelExplore - Người bạn đồng hành đáng tin cậy trên mọi hành trình. Cùng chúng tôi khám phá thế giới với những chuyến đi đáng nhớ, an toàn và trọn vẹn cảm xúc.</p>
                    <div class="location flex gap-4 items-center">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-viber"></i>
                    </div>
                </div>
                <div class="links">
                    <h3 class="ft-title">Liên kết nhanh</h3>
                    <ul>
                        <li><RouterLink to="#"><i class="fa-solid fa-angle-right"></i> Trang chủ</RouterLink></li>
                        <li><RouterLink to="#"><i class="fa-solid fa-angle-right"></i> Giới thiệu</RouterLink></li>
                        <li><RouterLink to="#"><i class="fa-solid fa-angle-right"></i> Dịch vụ</RouterLink></li>
                        <li><RouterLink to="#"><i class="fa-solid fa-angle-right"></i> Điều khoản và dịch vụ</RouterLink></li>
                        <li><RouterLink to="#"><i class="fa-solid fa-angle-right"></i> Đặt Tour ngay</RouterLink></li>
                    </ul>
                </div>
                <div class="contact">
                    <h3 class="ft-title">Liên hệ</h3>
                    <ul>
                        <li><a href="#">
                            <i class="fa-solid fa-phone"></i>
                            <div>
                                <p>+01 234 567 890</p>
                                <p>+09 876 543 210</p>
                            </div>
                        </a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-envelope"></i>
                            <div>
                                <p>mailinfo00@tourm.com</p>
                                <p>support24@tourm.com</p>
                            </div>
                        </a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <p>789 Inner Lane, Holy park,<br/> California, USA</p>                            
                            </div>
                        </a></li>
                    </ul>
                </div>
                <div class="post w-[320px]">
                    <h3 class="ft-title">Bài đăng trên Instagram</h3>
                    <div class="main-post grid grid-cols-3 gap-2">
                        <div><img src="/src/assets/images/ins1.jpg" alt=""></div>
                        <div><img src="/src/assets/images/ins2.jpg" alt=""></div>
                        <div><img src="/src/assets/images/ins3.jpg" alt=""></div>
                        <div><img src="/src/assets/images/ins4.jpg" alt=""></div>
                        <div><img src="/src/assets/images/ins5.jpg" alt=""></div>
                        <div><img src="/src/assets/images/ins6.jpg" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="bottom-ft py-4 flex justify-between items-center">
                <p class="text-white text-sm">Copyright 2024 Tourm. All Rights Reserved.</p>
                <div class="pay flex items-center gap-5">
                    <p class="text-white font-semibold">Chấp nhận</p>
                    <div class="flex items-center gap-4">
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-paypal"></i>
                        <i class="fa-brands fa-cc-apple-pay"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
footer {
    background-color: #113d48;
}
.ft-title {
    @apply font-semibold text-white text-2xl mb-5;
}
.subscribe {
    @apply h-[60px] flex items-center justify-between gap-8;
}
button {
    @apply h-full w-[200px] font-semibold ;
    background-color: var(--primary-color);
    border-radius: 30px;
    color: white;
    position: relative;
    overflow: hidden;
}
button span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition: .2s ease-in-out;
}
button:hover span {
    color: var(--primary-color);
}
button:hover::before {
    transform: translateX(0);
    border-radius: 30px;
}
button::before {
    @apply w-full h-full;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: .3s ease-in-out;
    background-color: white;
    z-index: 1;
}
input {
    @apply px-5 w-[350px];
    outline: none;
    border: 1px solid rgb(233, 233, 233);
    border-radius: 30px;
    background-color: transparent;
    color: white;
}
.location i{
    @apply h-[38px] w-[38px] flex justify-center items-center;
    border-radius: 50%;
    background-color: #41646d;
    color: #fff;
    font-size: 16px;
    transition: .3s ease-in-out;
    cursor: pointer;
}
.location i:hover {
    background-color:var(--primary-color);
}
.links i {
    font-size: 14px;
    margin-right: 8px;
}
.main-ft {
    @apply py-10;
    border-top: 1px solid #cfcfcf85;
    border-bottom: 1px solid #cfcfcf85;
}
.main-ft li {
    @apply mb-2;
}
.main-ft a {
    @apply text-white font-normal;
    opacity: 0.8;
    transition: .3s ease-in-out;
}
.main-ft a:hover {
    color: var(--primary-color);
    opacity: 1;
}
.contact li a {
    @apply flex items-center gap-4;
}
.contact li i {
    @apply h-[38px] w-[38px] flex justify-center items-center;
    border-radius: 50%;
    background-color: #41646d;
    color: #fff;
    font-size: 15px;
    transition: .3s ease-in-out;
    cursor: pointer;
}
.main-post > div{
    @apply w-full h-[100px];
    border-radius: 10px;
    overflow: hidden;
}
.main-post img {
    @apply h-full w-full object-cover;
}
.pay i {
    color: #Fff;
    font-size: 40px;
}
</style>