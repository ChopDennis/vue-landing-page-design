import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
        state: {
            calculator: {
                formula: '',
                content: '',
                output: ''
            }
        }, getters: {
            CalculatorFormula(state) {
                return state.calculator.formula
            },
            CalculatorContent(state) {
                return state.calculator.content
            },
            CalculatorOutput(state) {
                return state.calculator.output
            },
            DangerAlert(state, getters) {
                let showAlert = false
                if (getters.CalculatorOutput >= 4) {
                    showAlert = true
                }
                return showAlert
            },
            InfoAlert(state, getters) {
                let showAlert = false
                if (getters.CalculatorOutput < 4 && getters.CalculatorOutput >= 3) {
                    showAlert = true
                }
                return showAlert
            },
            SuccessAlert(state, getters) {
                let showAlert = false
                if (getters.CalculatorOutput < 3 && getters.CalculatorOutput > 0) {
                    showAlert = true
                }
                return showAlert
            },


        }, mutations: {
            setCalculatorFormula(state, number) {
                state.calculator.formula += number
            },
            setCalculatorContent(state, text) {
                state.calculator.content += text
            },
            setCalculatorOutput(state) {
                let number = state.calculator.formula.split('/')
                state.calculator.output = (parseInt(number[0]) / parseInt(number[1])).toFixed(2)
                state.calculator.content += state.calculator.output
            },
            resetCalculator(state) {
                state.calculator.formula = ''
                state.calculator.content = ''
            },


        }
    }
)