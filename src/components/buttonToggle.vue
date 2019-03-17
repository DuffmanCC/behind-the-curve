<template>
  <div>
    <button class="font-thin bg-blue-dark active:bg-blue-darker text-white p-2 items-center rounded cursor-pointer focus:outline-none" @click="toggle()">
      <span v-if="isToggle">{{ before }}</span>
      <span v-if="!isToggle">{{ after }}</span>
      <i :class="icon" class="pl-3"></i>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['before', 'after', 'icon'],

    data() {
      return {
        isToggle: true,
      }
    },

    methods: {
      toggle() {
        this.isToggle = !this.isToggle;
      }
    }
  } 
</script>