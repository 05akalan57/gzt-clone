<template>
  <div>
    <swiper :navigation="true" :breakpoints="breakpoints" :spaceBetween="12">
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/19/8506a5bd-ioh4envqq28mzyq5k31v7.png"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/17/92fbc9fb-ka5mditud5nwj6ng6m2dri.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/16/c3d2e3d5-uyu9fizlz9slppmsdf49m.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/16/018a5443-pln51dwchs10uskq0y24of.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/13/4d333280-cjvlhpoz3dbpabnb0qag1p.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/14/be370f91-vc82lw2gku7tmj2aghegr.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/13/eca25da7-l3r4532c2zkjeawuvqfmh.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/7/703eaacb-ai7lxj293t4cjg748iv7i.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/8/33cb4d21-8bfmx4uz9ien43e35pvu5b.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/6/e6de404c-3pr9wcdopvgdvcl2hkxjgc.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/3/96bc5b3f-uj1211s40p2ww4aimaiyb.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/12/1/7357d5df-dz7na1c0sbgbryxunwrqgk.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/11/30/e95f5363-45svxr7d9tb7xtztseas19.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/11/30/1cf51fb2-3f1audyojkb5418n3g88b2.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/11/29/05401299-e22yeno1x2erjk71xs7my.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.piri.net/mnresize/113/-/piri/upload/3/2021/11/29/86037c06-dypvw6ag9xalbtwd117rce.jpeg"
          class="h-44 w-full object-cover rounded transition-all active:scale-95"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-button-prev,
.swiper-button-next {
  @apply w-8 h-8 rounded-full bg-gray-100 bg-opacity-60;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  @apply text-black text-sm;
}
</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'

SwiperCore.use([Navigation])

export default {
  data() {
    return {
      breakpoints: {
        360: {
          slidesPerView: 4,
        },
        601: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        },
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>
