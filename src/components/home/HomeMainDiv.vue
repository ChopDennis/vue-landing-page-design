<template>
  <main>
    <HomeGuarantee />
    <HomeService />
    <HomeThreeStep />
    <HomeEconomics />
    <HomeVisualization />
  </main>
</template>
<script>
    import HomeService from "./HomeService"
    import HomeThreeStep from "./HomeThreeStep";
    import HomeEconomics from "./HomeEconomics";
    import HomeGuarantee from "./HomeGuarantee";
    import HomeVisualization from "./HomeVisualization";
    export default {
        name: "HomeMainDiv",
        components: {
            HomeService,
            HomeThreeStep,
            HomeEconomics,
            HomeGuarantee,
            HomeVisualization
        }
    }
</script>
<style scoped>
</style>