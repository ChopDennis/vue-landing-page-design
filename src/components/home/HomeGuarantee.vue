<template>
    <div>
        <b-container
                id="ima-guarantee"
                class="my-5 p-5 p-lg-3"
        >
            <b-row>
                <b-col lg="4" class="pl-100px my-3 my-lg-0">
                    <h2 class="text-left">選擇今時科技</h2>
                    <h2 class="text-right">三大保證</h2>
                    <div class="bottom-0 mt-5 mb-3 my-lg-0">
                        <p>20％ 績效保證</p><span>根據台電電費單客製化您的節電規劃以及用電分析。今時科技每月提供績效表，保證省電成效。</span>
                    </div>
                </b-col>
                <b-col lg="4" class="p-0 d-none d-lg-block">
                    <div style="top: 65px" class="position-absolute">
                        <b-img fluid src="../../assets/img/ima-three-guarantee.jpg"></b-img>
                    </div>
                </b-col>
                <b-col lg="4" class="pr-100px my-3 my-lg-0">
                    <p>24 小時即時分析</p><span>大數據系統分析設備運轉狀況，依據時節、環境調整用電規劃，精準達成您的省電目標</span>
                    <div class="bottom-0 pr-100px my-5 my-lg-0">
                        <p>0 元建置成本</p><span>合約期間設備保固免費，初期無資本支出，期末設備轉移。每月現金淨流入，減輕您的投資負擔。</span>

                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "HomeGuarantee"
    }
</script>

<style scoped>
    @media screen and (min-width: 992px) {
        #ima-guarantee .row {
            height: 500px
        }

        .pl-100px {
            padding-left: 100px
        }

        .pr-100px {
            padding-right: 100px
        }

        .bottom-0{
            bottom: 0;
            position: absolute;
        }
    }

</style>