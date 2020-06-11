<template>
  <div>
    <b-carousel
      class="d-none d-lg-block d-xl-block"
    >
      <b-carousel-slide

        caption-html="節能省電<br>&emsp;&ensp;就從今時開始"
        img-src="../../assets/img/ima-carousel-banner.jpg"
        text-html="&emsp;今時服務，電費節省 20% 的秘訣大公開！"
      />
    </b-carousel>
    <b-carousel
      class="d-lg-none d-xl-none"
    >
      <b-carousel-slide
        caption-html="節能省電<br>&emsp;&ensp;就從今時開始"
        img-src="../../assets/img/ima-carousel-banner-mobile.jpg"
        text-html="<p>今時服務，電費節省 20% 的秘訣大公開！</p>"
      />
    </b-carousel>
  </div>
</template>
<style>
    .carousel-caption {
        top: 0;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        text-align: left !important;

    }

    @media screen and (min-width: 992px) {
        .carousel-caption h3 {
            font-size: 4rem;
            letter-spacing: 0.4rem;
        }
        .carousel-caption p {
            font-size: 2rem;
            letter-spacing: 0.2rem;
        }

        .carousel-caption {
            padding-top: 20% !important;
            padding-left: 3rem;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }

    @media screen and (max-width: 991px) {

        .carousel-caption h3 {
            font-size: 2rem;
            letter-spacing: 0.2rem;
        }

        .carousel-caption p {
            font-size: 1rem;
        }

        .carousel-caption {
            padding-top: 90% !important;
            padding-left: 1.5rem;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
</style>
<script>
    export default {
        data: () => {
            return {}
        }
    }
</script>