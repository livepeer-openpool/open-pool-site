<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <section id="home">
          <banner />
        </section>
        <!--
        <section>
          <company-logo />
        </section>
        -->
        <!-- COUNTER
        <section class="space-top-short">
          <counter />
        </section>
        -->
        <section id="about" class="space-top-short">
          <feature />
        </section>

        <section id="staking" class="space-bottom-short">
          <testimonials />
        </section>
       
        <section id="get_started" class="space-top-short">
          <pricing-plan />
        </section>
  
        <section id="faq" class="space-top-short">
          <faq />
        </section>
        <!-- NEWS
        <section class="space-top-short space-bottom-short">
          <news-event />
        </section>
        --> 
      </div>
      <section id="footer">
        <footer-with-deco />
      </section>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <!-- COOKIE ALERT
      <hidden point="mdDown">
        <notification />
      </hidden>
      -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(6px);
  }
}
.space-bottom-testi {
  @include breakpoints-up(md) {
    margin-bottom: section-margin($spacing2);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 / 2);
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(sm) {
    margin-top: section-margin(6px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 / 2);
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import Banner from '~/components/Banner'
import Feature from '~/components/Feature'
import Testimonials from '~/components/Testimonials'
import PricingPlan from '~/components/PricingPlan'
import Faq from '~/components/Faq'
import FooterWithDeco from '~/components/Footer/FooterWithDeco'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    Banner,
    Feature,
    Testimonials,
    PricingPlan,
    Faq,
    FooterWithDeco,
    PageNav,
    Hidden,
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    }
  },
  head() {
    return {
      title: brand.saas.name + ' - Home Page'
    }
  }
}
</script>
