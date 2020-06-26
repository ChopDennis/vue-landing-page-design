<template>
  <div
    id="ima-examples-chart"
    class="text-white"
  >
    <div class="bg-black py-3">
      <h3>幫寧夏夜市省電，今時做到了！</h3>
      <b-container>
        <apex-chart
          style="margin-left: 30%;"
          class="m-auto"
          :options="chartOptions"
          :series="series"
        />
      </b-container>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ExamplesChart",
        data(){
            return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-example',
                        toolbar:{
                            show:false
                        },
                        foreColor: 'white'
                    },
                    xaxis: {
                        categories: ["2019/06", "2019/07", "2019/08", "2019/09", "2019/10","2019/11", "2019/12", "2020/01", "2020/02", "2020/03", "2020/04", "2020/05"]
                    }
                },
                series: [{
                    name: '實際電費',
                    type: 'bar',
                    data: [2196, 2818, 3494, 3954, 2451, 2340, 2127, 1715, 3590, 1995, 1420]
                }, {
                    name: '基線電費',
                    type: 'line',
                    data: [6518, 8060, 7591, 7685, 6215, 6518, 6518, 5912, 6215, 6518, 6518]
                }]
            }
        }
    }
</script>

<style scoped>
    #ima-examples-chart{
        background-image: url("../../assets/img/ima-examples-ningxia-night-market.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }

    .bg-black{
        background-color: rgba(0,0,0,0.7)
    }
</style>