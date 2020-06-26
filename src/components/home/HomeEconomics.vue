<template>
  <div>
    <b-row
      id="power-saving-economics"
      class="m-auto text-white"
    >
      <b-col
        lg="6"
        class="p-0"
      >
        <b-img
          fluid
          src="../../assets/img/ima-power-saving-economics.jpg"
        />
      </b-col>
      <b-col
        lg="6"
        class="py-5"
        style="background-color: rgba(109, 205, 217,1)"
      >
        <div class="mb-5">
          <div class="d-sm-none">
            <h4 class="text-left">
              省電經濟學，不花冤枉錢
            </h4>
            <h4 class="text-right">
              三十秒搞懂電費指標！
            </h4>
          </div>
          <h2 class="d-none d-sm-block">
            省電經濟學不花冤枉錢，三十秒搞懂電費指標！
          </h2>
        </div>
        <div
          class="px-4 m-auto"
          style="max-width: 600px"
        >
          <span>日常家中有許多長時間運轉的電器產品，電燈、冰箱、冷氣...等等，每天累積起來是一筆不小的金額。更不用說工廠與商辦大樓，通常設有中央空調、風扇水塔系統以及大量的照明設備，全年無休、全速運轉，浪費掉需多能源的同時，也白繳多餘的電費。
          </span>
          <br><br>
          <span class="mt-3">今時科技幫助客戶分析自己的用電模式，透過簡單易懂的算式就能知道有沒有符合
            2020 年的省電標準，點擊下方連結一起來了解今時省電經濟學。</span><br>
        </div>
        <b-btn
          to="service"
          class="border-0 py-3 mt-3"
          style="background-color: rgba(194,227,125,0.7);border-radius: 0.5rem;max-width: 600px"
        >
          <p class="m-0">
            <b-img
              width="40"
              class="d-inline align-text-bottom"
              src="../../assets/img/ima-header-icon-idea.png"
            />
            電費單拿出來，該怎麼省錢算給你看！
          </p>
        </b-btn>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: "HomeEconomics"
    }
</script>

<style scoped>
  #power-saving-economics {
    background-color: rgb(109, 205, 217);;
  }
</style>