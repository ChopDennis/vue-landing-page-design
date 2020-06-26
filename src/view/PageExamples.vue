<template>
  <div>
    <ExamplesBanner />
    <ExamplesDescription />
    <ExamplesChart />
  </div>
</template>
<script>
    import ExamplesBanner from "../components/examples/ExamplesBanner"
    import ExamplesChart from "../components/examples/ExamplesChart"
    import ExamplesDescription from "../components/examples/ExamplesDescription"
    export default {
        name: "PageExamples",
        components: {
            ExamplesDescription,
            ExamplesChart,
            ExamplesBanner,
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>