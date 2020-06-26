<template>
  <div>
    <b-container
      id="home-service-in-taiwan"
      fluid=""
      class="m-auto px-3 py-5 text-white"
    >
      <div class="mobile-dark-bg">
        <b-row
          class="m-auto"
        >
          <b-col lg="7">
            <div
              class="mb-4"
            >
              <div class="d-sm-none">
                <h4 class="text-left">
                  今時科技服務分佈全台
                </h4><h4 class="text-right">
                  專業有口皆碑！
                </h4>
              </div>
              <h2 class="d-none d-sm-block">
                今時服務分佈全台，專業有口皆碑！
              </h2>
            </div>

            <div
              id="home-service-description"
              class="rounded-lg p-3 m-auto text-center"
            >
              <span>今時科技服務超過七百家信譽良好的用電客戶，包括知名便利商店、咖啡廳、商辦大樓等許多不同類型的場合
                ，在台灣市場佔有率持續領先業界，同時是目前台灣電號管理長約第二多的公司。<br><br>四年來今時科技不斷以最高效率幫助客戶節能省電
                ，管理年總用電度數累積超過五千萬度，截至今日為全台灣省下將近一億八千萬新台幣的電費。</span>
            </div>
          </b-col>
          <b-col
            id="home-service-customer"
            lg="5"
            class="home-service-spotlight mt-5"
          >
            <h2
              class="d-none d-lg-block"
            >
              服務南北將近 <span
                class="home-service-counting-number"
              >700</span>
              間的用電客戶
            </h2>
            <h2
              class="d-lg-none"
            >
              南北將近 700 間的服務客戶
            </h2>
          </b-col>
          <b-col
            id="home-service-experience"
            lg="7"
            class="home-service-spotlight"
          >
            <h2 class="d-none d-lg-block">
              省下超過 <span class="home-service-counting-number">65,800,000</span>
              新台幣的電費
            </h2>
            <h2 class="d-lg-none">
              節省超過 65,800,000 新台幣的電費
            </h2>
          </b-col>
          <b-col
            id="home-service-electricity-fee"
            lg="5"
            class="home-service-spotlight"
          >
            <h2 class="d-none d-lg-block" style="margin-left: -250px;">
              管理年總用電度數 <span
                class="home-service-counting-number"
              >57,270,000</span> 度
            </h2>
            <h2  class="d-lg-none">
              管理年總用電度數 57,270,000 度
            </h2>
          </b-col>
        </b-row>
        <b-button to="examples" class="bg-transparent d-lg-none" >
          <h4>點擊了解更多<b-icon-arrow-left></b-icon-arrow-left></h4>
        </b-button>
        <div style="margin-top: 150px;">
          <b-button to="examples" class="bg-transparent d-none d-lg-block m-auto w-50">
            <h2>點擊了解更多今時科技的實際案例<b-icon-arrow-left></b-icon-arrow-left></h2>
          </b-button>
        </div>
      </div>

    </b-container>
  </div>
</template>

<script>
    export default {
        name: "HomeService"
    }
</script>

<style scoped>

    #home-service-in-taiwan {
        background-image: url("../../assets/img/ima-service-in-taiwan.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 1080px;
    }

    #home-service-description {
        background-color: rgba(255, 255, 255, 0.7);
        max-width: 600px
    }

    @media screen and (max-width: 991px) {
        .home-service-spotlight {
            height: 150px;
        }
        .mobile-dark-bg {
            background-color: rgba(0, 0, 0, 0.5);
            margin-left: -1rem;
            margin-right: -1rem;
            height: 1080px;
            margin-top: -3rem;
            padding-top: 3rem
        }
    }

    @media screen and (min-width: 992px) {
        #home-service-customer {
            height: 600px;
        }

        #home-service-customer h2 {
            line-height: 600px;
        }

        #home-service-experience {
            margin-top: -200px;
        }

        #home-service-in-taiwan{
          background-attachment: fixed;
        }

    }

    .home-service-counting-number {
        font-weight: lighter;
        font-family: 'Tulpen One', cursive;
        letter-spacing: 3px;
        font-size: 72px;
    }


</style>