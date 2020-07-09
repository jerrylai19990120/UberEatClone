<template>
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
</template>

<script>
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
export default {
    name: 'homepage',
    components: {
        Header,
        Content, 
        Footer
    }
}
</script>

<style scoped>

</style>