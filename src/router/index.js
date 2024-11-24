import { createRouter, createWebHistory } from "vue-router";
import {
  HomePage,
  AboutPage,
  ContactPage,
  NewsPage,
  ServicePage,
  DestinationPage,
  MyAccountPage,
  ForgotPasswordPage,
  NotFoundPage,
} from "@/views/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/news",
      name: "news",
      component: NewsPage,
    },
    {
      path: "/service",
      name: "service",
      component: ServicePage,
    },
    {
      path: "/destination",
      name: "destination",
      component: DestinationPage,
    },
    {
      path: "/my-account",
      name: "my-account",
      component: MyAccountPage,
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPasswordPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundPage,
    },
  ],
});

export default router;
