<template>
    <div>
        <h5 style="margin-left: -81vw;">{{this.category}}</h5>
        <b-row style="margin: 60px; margin-top: 30px; margin-bottom: 46px">
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/943378d7-b5f4-4f39-aec6-f771e5c44084.jpeg" style="width: 400px; height: 158px;"/></b-col>
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/e983fa5e-5717-4070-8d37-a5b5b629ab06.jpeg"/></b-col>
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/12615870-4673-4b5c-b380-d8c54a15f7ac.jpeg"/></b-col>
        </b-row>
        <b-row style="margin: 60px; margin-top: 30px; margin-bottom: 46px">
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/2619c49b-f464-4aca-be9f-32cfa731dcaa.jpeg"/></b-col>
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/4f998a9e-b4b2-4169-afde-faeea32e2823.jpeg"/></b-col>
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/1a546d85-898b-43c3-9cf8-4a8cf54603d2.jpeg"/></b-col>
        </b-row>
        <b-row style="margin: 60px; margin-top: 30px; margin-bottom: 46px">
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/e9ada601-2c04-4b2a-89f8-03bedfdd582a.jpeg"/></b-col>
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/75a5048c-dcdc-4f3b-b87c-8b40c60b7163.jpeg"/></b-col>
            <b-col><itemCard url="https://d1ralsognjng37.cloudfront.net/b0b36e1e-caae-4174-af83-f33747376fe2.jpeg"/></b-col>
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