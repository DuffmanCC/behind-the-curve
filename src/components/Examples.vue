<template>
  <section class="border p-5 mb-5 rounded font-thin max-w-sm w-full">
    <h2 class="mb-5">Examples</h2>

    <Example
      :distance="212"
      :from="{description: 'Pico de la Musara', place: 'Tarragona - Spain'}"
      :to="{description: 'Sierra de Tramuntana', place: 'Mallorca - Spain'}"
    />

    <Example
      :distance="212"
      :from="{description: 'Pico de la Musara', place: 'Tarragona - Spain'}"
      :to="{description: 'Sierra de Tramuntana', place: 'Mallorca - Spain'}"
    />

    <Example
      :distance="212"
      :from="{description: 'Pico de la Musara', place: 'Tarragona - Spain'}"
      :to="{description: 'Sierra de Tramuntana', place: 'Mallorca - Spain'}"
    />
  </section>
</template>

<script>
  import Example from './Example';

  export default {
    name: 'Examples',

    data() {
      return {

      }
    },

    components: {
      Example
    },

    methods: {

    }
  }
</script>