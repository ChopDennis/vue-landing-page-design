<template>
    <div>
        <h3>一起來計算您的用電指標！</h3>
        <div class="my-3">
            <span>
            跟著今時一起動動手指，輸入電費單上的<br><b>應繳總金額（元）</b>以及<b>本期總用電量（度）</b>
            </span>
        </div>
        <b-alert
                variant="danger"
                fade
                :show="getDangerAlert"
                class="my-3"
        >
            <h4>您的電費超過標準值！</h4>
            <span>不要再花冤枉錢，現在就聯絡今時科技！</span>
        </b-alert>
        <b-alert
                variant="info"
                fade
                :show="getInfoAlert"
                class="my-3"
        >
            <h4>您的電費還有改進空間！</h4>
            <span>您的電費不是最省的，聯絡今時科技幫助您省下更多電費。</span>
        </b-alert>
        <b-alert
                variant="success"
                fade
                :show="getSuccessAlert"
                class="my-3"
        >
            <h4>您的電費是最佳模範！</h4>
            <span>恭喜您，每度電單價達到用電標準。聯絡今時科技，我們共勉之。</span>
        </b-alert>
    </div>
</template>

<script>
    export default {
        name: "ServiceDescription",
        data() {
            return {
                output: 0
            }
        }, computed: {
            getCalculatorOutput() {
                return this.$store.getters.CalculatorOutput
            },
            getDangerAlert() {
                return this.$store.getters.DangerAlert
            },
            getInfoAlert() {
                return this.$store.getters.InfoAlert
            }, getSuccessAlert() {
                return this.$store.getters.SuccessAlert
            }
        },
    }
</script>

<style scoped>
</style>