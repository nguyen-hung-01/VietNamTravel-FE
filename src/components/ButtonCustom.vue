<template>
    <button :type="type" :style="buttonStyle">{{ content }}</button>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue'
  
  const props = defineProps({
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    style: {
      type: Object,
      default: () => ({
        bgColor: '#0000FF',
        color: '#FFFFFF'   
      })
    }
  })
  
  const buttonStyle = computed(() => ({
    backgroundColor: props.style.bgColor,
    color: props.style.color
  }))
  </script>
  
  <style scoped>
  button {
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    font-size: 17px;
    border-radius: 5px;
    font-weight: 600;
    transition: .2s ease-in-out;
    opacity: 1;
  }
  button:hover {
    opacity: 0.8;
  }
  </style>
  