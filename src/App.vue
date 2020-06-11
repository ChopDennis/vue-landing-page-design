<template>
  <div id="app">
    <router-view name="nav" />
    <router-view />
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
        font-size: 1rem;
        letter-spacing: 1px;
    }
</style>
