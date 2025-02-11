

<template>
  <!--<< Contact >>-->
  <section class="contact__section">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
          <div class="contact__box">
            <div class="replay__box cmn__bg">
              <h3>
                Leave a Reply
              </h3>
              <form @submit.prevent class="row g-4">
                <div class="col-lg-12">
                  <input type="text" name="name" placeholder="Name">
                </div>
                <div class="col-lg-12">
                  <input type="email" name="email" placeholder="Eamil">
                </div>
                <div class="col-lg-12">
                  <textarea name="message" rows="5" placeholder="Message"></textarea>
                </div>
                <div class="col-lg-12">
                  <button type="submit" value="Send message" name="submit"
                    class=" border-0 d-flex fw-500 cmn--btn align-items-center gap-2">
                    <span class="get__text">
                      Send Message
                    </span>
                    <span>
                      <i class="bi bi-arrow-right fz-20"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1500">
          <div class="contact__rightside cmn__bg">
            <h4 class="mb-30">
              Feel free to contact me anytime
            </h4>
            <div class="contact__item mb-20">
              <span class="he1">
                Email
              </span>
              <a href="mailto:info@gmail.com">
                davidmatias333@gmail.com
              </a>
            </div>
            <div class="contact__item mb-20">
              <span class="he1">
                Phone
              </span>
              <a href="tel:+(2) 871 382 023">
                +(2) 871 382 023
              </a>
            </div>
            <div class="contact__item">
              <span class="he1">
                Address
              </span>
              <span class="address">
                Victoria Street London
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<< Contact >>-->
</template>

 