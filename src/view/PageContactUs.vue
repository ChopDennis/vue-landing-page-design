<template>
  <main>
    <b-container
      id="ima-contact-us"
      fluid=""
      class="p-0 text-white"
    >
      <div id="ima-contact-us-banner" />
      <div
        class="p-lg-5 p-3"
        style="background-color: rgba(0,0,0,0.7);"
      >
        <b-container id="ima-contact-us-method">
          <b-row>
            <b-col lg="6">
              <b-row>
                <b-col lg="12">
                  <p>
                    <b-img
                      class="ima-contact-us-icon mx-3 mb-3 mb-lg-0"
                      src="../assets/img/ima-contact-us-phone.png"
                    /><br class="d-lg-none">
                    撥打專人服務電話
                  </p>
                  <a
                    :href="'tel:' + contact_info.phone"
                    class="text-white"
                  ><p>{{ contact_info
                    .phone }}</p></a>
                </b-col>
                <b-col
                  lg="12"
                  class="mt-5"
                >
                  <p>
                    <b-img
                      class="ima-contact-us-icon mx-3 mb-3 mb-lg-0"
                      src="../assets/img/ima-contact-us-line.png"
                    /><br class="d-lg-none">
                    加入今時科技官方帳號
                  </p>
                  <a href="https://lin.ee/wCCxOe2"><b-img
                    src="https://qr-official.line.me/sid/M/ict8881e.png"
                  /></a>
                </b-col>
              </b-row>
            </b-col>
            <b-col
              lg="6"
              class="mt-5 mt-lg-0"
            >
              <ContactUsForm id="ima-contact-us-form" />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-container>
  </main>
</template>

<script>
    import ContactUsForm from "../components/contact-us/ContactUsForm";

    export default {
        name: "PageContactUs",
        components: {
            ContactUsForm
        },
        data() {
            return {
                contact_info: {
                    phone: "+886-2-66168178"
                }
            }
        }
    }
</script>

<style scoped>
    .ima-contact-us-icon {
        width: 50px;
        min-height: auto;
    }

    #ima-contact-us {
        background-image: url("../assets/img/ima-contact-us-background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        overflow-y: scroll
    }
    #ima-contact-us-banner{
        /*height: 1080px;*/
    }

    #ima-contact-us-method{
        margin-top: 15%;
    }

    @media screen and (max-width: 991px) {
        #ima-contact-us {
            height: 100vh;
        }

    }

    @media screen and (min-width: 992px) {
        #ima-contact-us {
            height: 1080px;
          /*height: 100vh;*/
        }
        #ima-contact-us-method{
            height: 100vh;
        }
    }


</style>