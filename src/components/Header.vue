<template>
  <header class="p-5 relative">
    <span class="fa-stack absolute pin-r" @click="showInfo()">
      <i class="far fa-circle fa-stack-2x"></i>
      <i class="fas fa-info fa-stack-1x"></i>
    </span>

    <div class="flex justify-center mb-10">
      <i class="fas fa-globe-africa" style="font-size: 150px"></i>
    </div>
    
    <h1 class="mb-10 text-3xl text-center">Earth Curvature Calculator</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',

  methods: {
    showInfo () {
      this.$modal.show('info');
    },
  }
}
</script>
