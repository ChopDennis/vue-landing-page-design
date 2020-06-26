<template>
  <div>
    <b-container id="three-step">
      <div class="my-5">
        <h4>
          <b-img
            width="50"
            class="d-inline align-text-bottom"
            src="../../assets/img/ima-header-icon-idea.png"
          />
          節能省電三步驟！
        </h4>
      </div>

      <b-row>
        <b-col
          lg="4"
          class="px-5 mb-5"
        >
          <b-img
            width="100"
            src="../../assets/img/ima-three-step-icon-invoice.png"
          />
          <p class="mt-1">
            用電客戶提供電費單
          </p>
          <span>客戶提供台電電費單，今時依據需求訂製節費規劃、用電分析，無需額外費用。</span>
        </b-col>
        <b-col
          lg="4"
          class="px-5 mb-5"
        >
          <b-img
            width="100"
            src="../../assets/img/ima-three-step-icon-dashboard.png"
          />
          <p class="mt-1">
            今時免費安裝、專業售後
          </p>
          <span>今時科技負責籌資更換省電設備、裝設節能控制器，依據台電規則和時節更新用電規劃。</span>
        </b-col>
        <b-col
          lg="4"
          class="px-5 mb-5"
        >
          <b-img
            width="100"
            src="../../assets/img/ima-three-step-icon-increase.png"
          />
          <p class="mt-1">
            省電服務成效有保障
          </p>
          <span>合約期間保障省電成效，平均約可減少 20％ 總電費的支出，客戶依據每月結算績效支付相應的費用。</span>
        </b-col>
      </b-row>
      <hr class="border-secondary mb-5">
      <p>今時以量計價的智慧管理服務（Product Solution Service）</p>
      <div class="px-3">
        <span>今時科技旨在建立與用電戶共立共榮的生態圈，並致力於能耗數據化、持續改善用電體驗以及供需模式，持續提供安心、有保障的即時省電決策。</span>
      </div>
      <hr class="border-secondary my-5">
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "HomeThreeStep"
    }
</script>

<style scoped>
  #three-step span {
    color: #696969;
  }
</style>