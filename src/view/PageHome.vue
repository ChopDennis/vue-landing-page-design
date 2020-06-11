<template>
  <div>
    <HomeBanner />
    <HomeMainDiv />
  </div>
</template>

<script>
    import HomeMainDiv from "../components/home/HomeMainDiv";
    import HomeBanner from "../components/home/HomeBanner";

    export default {
        components: {
            HomeBanner,
            HomeMainDiv
        },
        data: () => {
            return {}
        }
    }
</script>