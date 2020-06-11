<template>
    <b-navbar
            toggleable="lg"
            type="dark"
            fixed="top"
            style="background: rgba(153,204,51,0.7)"
    >
        <b-container fluid="md">
            <b-navbar-brand
                    to="/"
                    href="#"
            >
                <b-img
                        height="30px"
                        src="../assets/img/ima-navbar-icon.png"
                />
                今時科技
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"/>
            <b-collapse
                    id="nav-collapse"
                    is-nav
            >
                <b-navbar-nav>
                    <b-nav-item to="service">
                        省電指標
                    </b-nav-item>
                    <b-nav-item to="examples">
                        工程實例
                    </b-nav-item>
                    <a href="https://ems-spa.ima-ems.com/" target="_blank" style="padding-bottom: 8px">能管系統</a>
                    <b-nav-item><b-link @click="alertAbouts()">關於今時</b-link></b-nav-item>
                    <a href="tel:+886-2-66168178" class="text-white">聯絡我們</a>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
<style scoped>
    nav {
        font-family: "Noto Sans";
        letter-spacing: 0.1rem;
    }

    .nav-link {
        color: white !important;
    }

    a {
        padding-top: 0.5rem;
        color: white;
    }
</style>
<script>
    export default {
        data: () => {
            return {}
        },methods:{
            alertAbouts(){
                alert("頁面建置中，敬請期待！")
            }
        }
    }
</script>