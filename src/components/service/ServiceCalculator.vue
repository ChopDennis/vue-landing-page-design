<template>
  <div class="my-5">
    <div
      id="ima-calculator-output"
      class="m-auto p-3"
    >
      <p
        class="text-right"
      >
        {{ getCalculatorContent }}
      </p>
      <p
        id="ima-calculator-explanation"
        class="text-right"
      >
        總電費 ÷ 總用電度數 <br class="d-block d-sm-none"> ＝ 每用電度數單價
      </p>
    </div>
    <b-row
      id="ima-calculator-button"
      class="m-auto"
    >
      <b-col
        id="ima-calculator-number"
        cols="9"
        class=" text-white ima-calculator-number"
      >
        <b-row>
          <b-col
            cols="4"
            class="number-spacer-bottom pointer"
            @click="getCalculatorNumber(7)"
          >
            <p>7</p>
          </b-col>
          <b-col
            cols="4"
            class="number-spacer-left number-spacer-bottom pointer"
            @click="getCalculatorNumber(8)"
          >
            <p>8</p>
          </b-col>
          <b-col
            cols="4"
            class="number-spacer-left number-spacer-bottom pointer"
            @click="getCalculatorNumber(9)"
          >
            <p>9</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            cols="4"
            class="number-spacer-bottom pointer"
            @click="getCalculatorNumber(4)"
          >
            <p>4</p>
          </b-col>
          <b-col
            cols="4"
            class="number-spacer-left number-spacer-bottom pointer"
            @click="getCalculatorNumber(5)"
          >
            <p>5</p>
          </b-col>
          <b-col
            cols="4"
            class="number-spacer-left number-spacer-bottom pointer"
            @click="getCalculatorNumber(6)"
          >
            <p>6</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            cols="4"
            class="number-spacer-bottom pointer"
            @click="getCalculatorNumber(1)"
          >
            <p>1</p>
          </b-col>
          <b-col
            cols="4"
            class="number-spacer-left number-spacer-bottom pointer"
            @click="getCalculatorNumber(2)"
          >
            <p>2</p>
          </b-col>
          <b-col
            cols="4"
            class="number-spacer-left number-spacer-bottom pointer"
            @click="getCalculatorNumber(3)"
          >
            <p>3</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            cols="12"
            class="number-spacer-left pointer"
            @click="getCalculatorNumber(0)"
          >
            <p>0</p>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="ima-calculator-number"
        cols="3"
      >
        <b-row>
          <b-col
            class="number-spacer-left number-spacer-bottom pointer"
            style="padding-bottom:1px;line-height: 9rem"
            @click="getCalculatorNumber('/')"
          >
            <p>÷</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            class="number-spacer-bottom number-spacer-left pointer"
            style="line-height: 5rem"
            @click="returnCalculatorNumber()"
          >
            <b-icon-backspace-fill />
          </b-col>
        </b-row>
        <b-row>
          <b-col
            class="number-spacer-left pointer"
            @click="getCalculatorNumber('＝')"
          >
            <p>＝</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: "ServiceCalculator",
        data() {
            return {
                calculator: {
                    status: 1
                }
            }
        }, computed: {
            getCalculatorContent() {
                return this.$store.getters.CalculatorContent
            }
        },
        methods: {
            getCalculatorNumber(input) {
                if (this.calculator.status === 0) {
                    this.$store.commit('resetCalculator')
                    this.calculator.status = 1
                }
                this.setCalculatorContent(input)
                if (input === '＝') {
                    this.$store.commit('setCalculatorOutput', input)
                    this.calculator.status = 0
                } else {
                    this.setCalculatorFormula(input)
                }

            },
            setCalculatorFormula(number) {
                this.$store.commit('setCalculatorFormula', number)
            },
            setCalculatorContent(text) {
                if (text === '/') {
                    text = '÷'
                }
                this.$store.commit('setCalculatorContent', text)
            },
            returnCalculatorNumber() {
                let formula = this.$store.getters.CalculatorFormula
                let content = this.$store.getters.CalculatorContent
                this.$store.commit('resetCalculator')
                this.setCalculatorFormula(formula.slice(0, -1))
                this.setCalculatorContent(content.slice(0, -1))
            }
        }

    }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }

    #ima-calculator-output {
        background-color: rgba(255, 255, 255, 0.1);
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem
    }

    #ima-calculator-output p {
        font-family: "Noto Sans";
        font-size: 3rem;
        font-weight: 100;
        letter-spacing: 0
    }

    #ima-calculator-explanation {
        font-size: 1rem !important;
        font-weight: 400 !important;
        color: rgba(255, 255, 255, 0.7);
    }

    .ima-calculator-number p {
        font-size: 2rem;
    }

    .number-spacer-left {
        border-left: 1px solid rgba(155, 155, 155, 0.3);
        line-height: 4rem;
    }

    .number-spacer-bottom {
        border-bottom: 1px solid rgba(155, 155, 155, 0.3);
        line-height: 4rem;

    }

    .ima-calculator-number p {
        color: rgba(255, 255, 255, 0.7);
    }

    #ima-calculator-button {
        background-image: linear-gradient(to bottom right, rgb(2, 50, 70), rgb(7, 70, 70));
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;

    }

    @media screen and (max-width: 991px) {
        #ima-calculator-output, #ima-calculator-button {
            width: 100%;
        }

        .ima-calculator-number p {
            font-size: 1.5rem;
        }
    }
</style>