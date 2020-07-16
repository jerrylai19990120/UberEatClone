<template>
    <div>
        <Header />
        <menuItems />
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import menuItems from "../components/menuItems";

export default {
    name: "menu",
    components: {
        Header,
        Footer,
        menuItems
    }
}
</script>

<style scoped>
html{
    scroll-behavior: smooth;
}
</style>

