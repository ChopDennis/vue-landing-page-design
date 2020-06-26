<template>
  <div id="app">
    <router-view name="nav" />
<!--    <transition name="fade">-->
      <router-view />
<!--    </transition>-->
  </div>
</template>

<style>

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    h1, h2, h3, h4, p {
        font-family: 'HuaKangTiFan'
    }

    span {
        font-family: 'Noto Sans TC'
    }

    p {
        font-size: 1.25rem;
        letter-spacing: 0.125rem;
    }

    span {
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 1.5rem;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition-duration: 0.3s;
      transition-property: opacity;
      transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
      opacity: 0
    }
</style>
