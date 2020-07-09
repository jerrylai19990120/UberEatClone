<template>
    <div class="container">
            <h3 style="float: left; margin-left: -60px; color: black; position: absolute">{{this.title}}</h3>
            <div class="list">
                <b-row>
                    <b-col>United States</b-col>
                    <b-col>Spain</b-col>
                    <b-col>Brazil</b-col>
                    <b-col>Mexico</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>France</b-col>
                    <b-col>Canada</b-col>
                    <b-col>Japan</b-col>
                    <b-col>Poland</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>United Kingdom</b-col>
                    <b-col>Australia</b-col>
                    <b-col>Italy</b-col>
                    <b-col>Portugal</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>Chile</b-col>
                    <b-col>Colombia</b-col>
                    <b-col>Switzerland</b-col>
                    <b-col>Taiwan(ROC)</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>New Zealand</b-col>
                    <b-col>Belgium</b-col>
                    <b-col>South Africa</b-col>
                    <b-col>Ukraine</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>Peru</b-col>
                    <b-col>Ireland</b-col>
                    <b-col>Saudi Arabia</b-col>
                    <b-col>Ecuador</b-col>
                </b-row>
            </div>
    </div>
</template>

<script>
export default {
    name: "SubSection",
    props: {
        title: String
    }
}
</script>

<style scoped>
.container{
    margin-top: 46px;
    width: 100vw;
    height: 460px;
}

.list{
    width: 80vw;
    margin-left: -60px;
    height: 400px;
    padding-top: 54px;
}
</style>