
<script setup>

const buttons = ['About Me', 'Experience', 'Education', 'Skills'];
const activeIndex = ref(0);  

const toggleActive = (index) => {
  activeIndex.value = index;  

  
};



</script>


<template>
  <!--<< about personal >>-->
  <section class="about__section pt-120 pb-120" id="about">
    <div class="container">
      <div class="personal__head text-center">
        <img src="~/assets/img/about/section-star.png" class="mb-30" alt="star" data-aos="fade-up" data-aos-duration="1000">
        <p class="descrp" data-aos="fade-up" data-aos-duration="1500">
          I'm David Matias, I'm a Brand & Webflow Designer, Currently residing
          in the lush Victoria Street London, Matias operates globally and is
          ready to take on any design challenge.
        </p>
      </div>
 


      <div class="singletab">
        <ul class="tablinks">
          <li v-for="(button, i) in buttons" :key="i" :class="`nav-links ${i === activeIndex ? 'active' : ''}`" @click="toggleActive(i)">
            <button class="tablink">{{ button }}</button>
          </li> 
        </ul>
        <div class="tabcontents">

          <div :class="`tabitem ${activeIndex === 0 ? 'active' : ''}`">
            <div class="about__v1wrap">
              <div class="row g-4 align-items-lg-start align-items-center">
                <div class="col-lg-5">
                  <div class="about__onethumb" data-aos="zoom-in" data-aos-duration="500">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img">
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="about__onecontent">
                    <h2 class="h2-head" data-aos="fade-up" data-aos-duration="500">
                      Personal Info
                    </h2>
                    <p class="p-descrip" data-aos="fade-up" data-aos-duration="500">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem.
                      Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam
                      nihil
                    </p>
                    <div class="about__contactwrap">
                      <div class="row g-4">
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                          <div class="abox">
                            <div class="about__contbox__item">
                              <span class="ptext fz-18 mb-20 d-block">
                                Email
                              </span>
                              <a href="#">
                                matias999@gmail.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                          <div class="abox">
                            <div class="about__contbox__item">
                              <span class="ptext fz-18 mb-20 d-block">
                                Phone
                              </span>
                              <a href="#">
                                +(2) 871 382 023
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                          <div class="abox">
                            <div class="about__contbox__item">
                              <span class="ptext fz-18 mb-20 d-block">
                                Address
                              </span>
                              <a href="#">
                                Victoria Street London,
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                          <div class="abox">
                            <div class="about__contbox__item">
                              <span class="ptext fz-18 mb-20 d-block">
                                Follow
                              </span>
                              <ul class="d-flex align-items-center gap-2 gap-xl-4">
                                <li>
                                  <NuxtLink target="_blank" to="https://facebook.com"> <i class="bi bi-facebook"></i> </NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink target="_blank" to="https://twitter.com"> <i class="bi bi-twitter"></i> </NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink target="_blank" to="https://instagram.com"> <i class="bi bi-instagram"></i> </NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink target="_blank" to="https://globe.com"> <i class="bi bi-globe"></i> </NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink target="_blank" to="https://linkedin.com"> <i class="bi bi-linkedin"></i> </NuxtLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="`tabitem ${activeIndex === 1 ? 'active' : ''}`">
            <div class="about__v1wrap">
              <div class="row g-4 align-items-lg-start align-items-center">
                <div class="col-lg-5">
                  <div class="about__onethumb">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img">
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="about__onecontent">
                    <h2>
                      My Experience
                    </h2>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem.
                      Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam
                      nihil
                    </p>
                    <div class="exprience__box mt-30">
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          In 2011
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-15 text-white">
                            Software Engineer
                          </h4>
                          <p class="fz-18 pra d-block">
                            UI Head & Manager
                          </p>
                        </div>
                      </div>
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          In 2016
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-15 text-white">
                            Product Designer
                          </h4>
                          <p class="fz-18 pra d-block">
                            Head of Department
                          </p>
                        </div>
                      </div>
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          In 2023
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-15 text-white">
                            Senior UI Designer
                          </h4>
                          <p class="fz-18 pra d-block">
                            Fiverr.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="`tabitem ${activeIndex === 2 ? 'active' : ''}`">
            <div class="about__v1wrap">
              <div class="row g-4 align-items-lg-start align-items-center">
                <div class="col-lg-5">
                  <div class="about__onethumb">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img">
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="about__onecontent">
                    <h2>
                      My Education
                    </h2>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem.
                      Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam
                      nihil
                    </p>
                    <div class="exprience__box mt-30">
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          2011-2013
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-15 text-white">
                            Programming Course
                          </h4>
                          <p class="fz-18 pra d-block">
                            New York University
                          </p>
                        </div>
                      </div>
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          2013-2016
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-15 text-white">
                            University of Design
                          </h4>
                          <p class="fz-18 pra d-block">
                            Kingston, United States
                          </p>
                        </div>
                      </div>
                      <div class="exri__item">
                        <span class="fz-18 fw-500 base">
                          2016-2018
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-15 text-white">
                            Web Design Course
                          </h4>
                          <p class="fz-18 pra d-block">
                            New York University
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="`tabitem ${activeIndex === 3 ? 'active' : ''}`">
            <div class="about__v1wrap">
              <div class="row g-4 align-items-lg-start align-items-center">
                <div class="col-lg-5">
                  <div class="about__onethumb">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img">
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="about__onecontent">
                    <h2>
                      My Skills
                    </h2>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem.
                      Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam
                      nihil
                    </p>
                    <div class="about__contactwrap">
                      <div class="row g-4">
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                          <div class="abox myskill__item">
                            <div class="thumb">
                              <img src="~/assets/img/about/figma.png" alt="img">
                            </div>
                            <div class="mys">
                              <span class="ptext fz-18 mb-15 d-block">
                                Figma
                              </span>
                              <h1 class="fw-600">
                                90%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                          <div class="abox myskill__item">
                            <div class="thumb">
                              <img src="~/assets/img/about/word.png" alt="img">
                            </div>
                            <div class="mys">
                              <span class="ptext fz-18 mb-15 d-block">
                                Wordpress
                              </span>
                              <h1 class="fw-600">
                                95%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                          <div class="abox myskill__item">
                            <div class="thumb">
                              <img src="~/assets/img/about/html.png" alt="img">
                            </div>
                            <div class="mys">
                              <span class="ptext fz-18 mb-15 d-block">
                                HTML
                              </span>
                              <h1 class="fw-600">
                                85%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                          <div class="abox myskill__item">
                            <div class="thumb">
                              <img src="~/assets/img/about/boot.png" alt="img">
                            </div>
                            <div class="mys">
                              <span class="ptext fz-18 mb-15 d-block">
                                Bootstrap
                              </span>
                              <h1 class="fw-600">
                                97%
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
</section>
<!--<< about personal >>-->
</template>
 