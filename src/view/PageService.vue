<template>
  <div
    id="ima-page-service"
    class="text-white"
  >
    <b-container>
      <b-row class="m-0">
        <b-col
          lg="7"
          style="height: 200px"
        >
          <ServiceDescription />
        </b-col>
        <b-col lg="5">
          <ServiceCalculator />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import ServiceCalculator from "../components/service/ServiceCalculator"
    import ServiceDescription from "../components/service/ServiceDescription"

    export default {
        name: "PageService",
        components: {
            ServiceDescription,
            ServiceCalculator
        },
        data() {
            return {}
        }
    }
</script>
<style>
    #ima-page-service {
        background-image: linear-gradient(to bottom, rgb(50, 150, 150), rgb(20, 70, 100));
    }

    #ima-page-service {
        padding-top: 7%;
        padding-bottom: 7%;
    }

    @media screen and (min-width: 992px){
        #ima-page-service{
            height: 100vh;
        }
    }
    @media screen and (max-width: 991px) {
        #ima-page-service {
            padding-top: 25%;
            padding-bottom: 20%;
        }
    }
</style>


