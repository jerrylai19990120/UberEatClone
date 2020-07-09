<template>
    <div>
        <Header />
        <Content />
    </div>
</template>

<script>
import Header from "./Header";
import Content from "./Content";
export default {
    name: 'homepage',
    components: {
        Header,
        Content
    }
}
</script>

<style scoped>

</style>