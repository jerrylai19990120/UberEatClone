<template>
    <div>
        <h5 style="margin-left: -81vw;">{{this.category}}</h5>
        <b-row>
            <b-col><itemCard /></b-col>
            <b-col><itemCard /></b-col>
            <b-col><itemCard /></b-col>
        </b-row>
    </div>
</template>

<script>
import itemCard from "./itemCard";
export default {
    name: "section",
    props: {
        category: String
    },
    components: {
        itemCard
    }
}
</script>

<style scoped>

</style>