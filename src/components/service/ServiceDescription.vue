<template>
  <div>
    <h3>一起來計算您的用電指標！</h3>
    <div class="my-3">
      <div
        id="bill-example-before"
        style="height: 460px;overflow-y: hidden"
        @mouseover="display.image.example_after = true"
        @mouseleave="display.image.example_after = false"
      >
        <div style="height: 1380px;">
          <transition name="fade">
            <div
              v-if="display.image.example_after"
              id="bill-example-after"
            />
          </transition>
          <transition name="fade">
            <div
              v-if="display.image.bill_total_amount"
              id="bill-total-amount"
            />
          </transition>
          <transition name="fade">
            <div
              v-if="display.image.bill_energy_consumption"
              id="bill-energy-consumption"
            />
          </transition>
        </div>
      </div>
      <div>
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
      <b-card class="bg-dark mt-3">
        <b-form-group
          label-cols-sm="12"
          label-size="lg"
          label="填入您的電費帳單資訊"
          label-align-sm="center"
        >
          <b-form-group
            class="mt-3"
            label-cols-sm="3"
            label="應繳總金額："
            label-align-sm="right"
            label-for="ima-bill-total-amount"
          >
            <b-form-input
              id="ima-bill-total-amount"
              v-model="input.bill_total_amount"
              @focusin="display.image.bill_total_amount=true"
              @focusout="display.image.bill_total_amount=false"
            />
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="本期總用電量："
            label-align-sm="right"
            label-for="ima-bill-total-amount"
          >
            <b-form-input
              id="ima-bill-total-amount"
              v-model="input.bill_energy_consumption"
              @focusin="display.image.bill_energy_consumption=true"
              @focusout="display.image.bill_energy_consumption=false"
            />
          </b-form-group>
          <b-button
            @click="setCalculator"
          >
            計算電費 Go!
          </b-button>
        </b-form-group>
      </b-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ServiceDescription",
        data() {
            return {
                display: {
                    image: {
                        bill_total_amount: false,
                        bill_energy_consumption: false,
                        example_after: false,
                    }
                },
                input: {
                    bill_total_amount: 0,
                    bill_energy_consumption: 0,
                },
                is_calculated: false
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
            },
            getSuccessAlert() {
                return this.$store.getters.SuccessAlert
            }
        },
        methods: {
            setCalculator() {

                const formula = this.input.bill_total_amount + '/' + this.input.bill_energy_consumption
                this.$store.commit('setCalculatorFormula', formula)
                this.$store.commit('setCalculatorContent', formula + '=')
                this.$store.commit('setCalculatorOutput')
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    #bill-example-before {
        background-image: url("../../assets/img/ima-service-bill-example-before.jpg");
    }

    #bill-energy-consumption {
        background-image: url("../../assets/img/ima-service-bill-energy-consumption.jpg");
    }

    #bill-total-amount {
        background-image: url("../../assets/img/ima-service-bill-example-total-amount.jpg");
    }

    #bill-example-after {
        background-image: url("../../assets/img/ima-service-bill-example-after.jpg");
    }

    #bill-example-after, #bill-total-amount, #bill-energy-consumption, #bill-example-before {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 460px;
    }


</style>