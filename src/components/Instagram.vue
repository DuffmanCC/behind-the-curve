<template>
  <a :href="imageSrc" target="_blank">
    <img :src="imageSrc" :alt="imageTitle">
  </a>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Instragram',

    props: ['url'],

    data() {
      return {
        imageSrc: '',
        imageTitle: ''
      }
    },

    mounted() {
      axios.get('https://api.instagram.com/oembed?url=' + this.url)
        .then(response => {
          this.imageSrc = response.data.thumbnail_url;
          this.imageTitle = response.data.title;
        });
    }
  }
</script>