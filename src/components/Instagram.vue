<template>
  <a :href="url" target="_blank">
    <div class="spinner mb-16" v-show="isSpinner"></div>
    <img :src="imageSrc" :alt="imageTitle">
  </a>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Instagram',

    props: ['url'],

    data() {
      return {
        imageSrc: '',
        imageTitle: '',
        isSpinner: true
      }
    },

    mounted() {
      axios.get('https://api.instagram.com/oembed?url=' + this.url)
        .then(response => {
          this.isSpinner = false;
          this.imageSrc = response.data.thumbnail_url;
          this.imageTitle = response.data.title;
        });
    }
  }
</script>