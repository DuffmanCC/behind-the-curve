<template>
  <div class="p-5 border rounded mb-5 cursor-pointer" :class="{ 'bg-grey-lighter': isSelected }" @click="selectExmaple()">
    <div class="flex justify-between mb-3">
      <span>Distance: {{ distance }} km</span>
      <div>
        <i class="fas fa-map-marked-alt ml-2 text-xl mr-2"></i>
        <a href="#" class="text-blue">
          <i class="fas fa-camera-retro text-xl"></i>
        </a>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <div>
        <div>{{ from.description }}</div>
        <div>{{ from.place }}</div>       
      </div>

      <div>
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="text-right">
        <div>{{ to.description }}</div> 
        <div>{{ to.place }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Exmaple',

    props: ['distance', 'from', 'to'],

    data() {
      return {
        isSelected: false
      }
    },

    methods: {
      selectExmaple() {
        this.isSelected = !this.isSelected
      }
    }
  }
</script>