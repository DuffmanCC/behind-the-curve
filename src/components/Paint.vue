<template>
  <div class="border rounded" ref="paint" v-resize="">
    <vStage ref="stage" :config="konva.configKonva" class="flex justify-center">
      <v-layer ref="layer">
        <!-- <v-circle :config="konva.earth" ref="earth"></v-circle> -->
        <v-line :config="konva.line1" ref="line1"></v-line>
        <v-line :config="konva.line2" ref="line2"></v-line>
        <v-line :config="konva.line3" ref="line3"></v-line>()
      </v-layer>
    </vStage>
  </div>
</template>

<script>
  import resize from 'vue-resize-directive';

  export default {
    name: 'Paint',

    directives: {
      resize
    },

    data() {
      return {
        konva: {
          configKonva: {
            width: 500,
            height: 500
          },
          // earth: {
          //   x: 750,
          //   y: 7000,
          //   radius: 6371, // 1px for km
          //   fill: 'grey',
          //   stroke: 'black',
          //   strokeWidth: 1
          // },
          line1: {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'red',
            strokeWidth: 2,
          },
          line2: {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'green',
            strokeWidth: 2,
          },
          line3: {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'blue',
            strokeWidth: 10,
          }
        },
      }
    },

    mounted() {
      const line1 = this.$refs.line1.getNode();
      const line2 = this.$refs.line2.getNode();
      const line3 = this.$refs.line3.getNode();
      // const line2 = this.$refs.line2.getNode();
      line2.move({
        x : 0,
        y : 55
      });
      line3.move({
        x : 0,
        y : 105
      });
      console.log(line1.offset())
      console.log(line2.offset())
      console.log(line3.offset())
    },

    methods: {
      // positioning() {
      //   let element = this.$refs.paint;
      //   let rect = element.getBoundingClientRect();
      //   this.konva.configKonva.width = rect.width;
      //   this.paintElementWidth = rect.width;
      //   this.konva.earth.x = rect.width / 2;
      //   this.konva.line.points[0] = rect.width / 2;
      //   this.konva.line.points[2] = rect.width / 2;
      // },

      /**
       * from degress to radians
       * @param  x degrees
       * @return radians
       */
      rad(x) {
        return x * Math.PI / 180;
      },
    }
  };
</script>