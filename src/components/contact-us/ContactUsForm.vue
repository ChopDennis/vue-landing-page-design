<template>
  <div>
    <p>
      <b-img
        class="ima-contact-us-icon mx-3 mb-3 mb-lg-0"
        src="../../assets/img/ima-contact-us-email.png"
      /><br class="d-lg-none">留下您的評價，幫助今時科技提供更好的服務
    </p>
    <b-card
      class="text-dark"
      style="background-color: rgba(255,255,255,0.7)"
    >
      <b-form-group
        label-cols-sm="12"
        :label="'您對今時服務的滿意度：' + contact_form.rating"
        label-align-sm="center"
        label-for="ima-contact-email-content"
      >
        <b-form-rating
          v-model="contact_form.rating"
          variant="info"
        />
      </b-form-group>

      <b-form-group
        class="mt-3"
        label-cols-sm="12"
        label="寫下您對今時科技想說的話："
        label-align-sm="center"
        label-for="ima-contact-email-content"
      >
        <b-form-textarea
          id="ima-contact-email-content"
          v-model="contact_form.textarea"
          rows="6"
          max-rows="8"
          placeholder="我們承諾在 24 小時內回覆您。"
        />
      </b-form-group>
      <b-button>
        <b-link
          class="text-white"
          :href="'mailto:ima@ima-ems.com'+'?subject=我對今時科技的服務，留下 '+contact_form.rating+' 顆星的評價'+'&body='+contact_form.textarea"
        >
          透過
          E-mail
          發送訊息
        </b-link>
      </b-button>
    </b-card>
  </div>
</template>

<script>
    export default {
        name: "ContactUsForm",
        data() {
            return {
                contact_form:{
                    rating: 0,
                    textarea:""
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
</style>