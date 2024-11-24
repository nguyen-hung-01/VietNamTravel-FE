<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import {
  FooterLayout,
  HomeHeaderLayout,
  MainHeaderLayout,
} from "@/layout/index.js";
import { HomePage, AboutPage, ContactPage } from "@/views/index.js";
import { ButtonCustom } from "@/components/index";

const route = useRoute();
</script>

<template>
  <component :is="route.path === '/' ? HomeHeaderLayout : MainHeaderLayout" />
  <RouterView />
  <FooterLayout />
</template>

<style scoped></style>
