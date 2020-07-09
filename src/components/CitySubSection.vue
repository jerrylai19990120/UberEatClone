<template>
    <div class="container">
            <h3 style="float: left; margin-left: -60px; color: black; position: absolute">Cities Near Me</h3>
            <a href="/" style="color: #20A454; text-decoration: none; position: absolute; right: 188px"><strong>View all 500+ cities</strong></a>
            <div class="list">
                <b-row>
                    <b-col>Calgary</b-col>
                    <b-col>Edmonton</b-col>
                    <b-col>Greater Sudbury</b-col>
                    <b-col>Halifax</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>Hamilton</b-col>
                    <b-col>Kingston</b-col>
                    <b-col>Kitchener-Waterloo</b-col>
                    <b-col>Lethbridge</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>London, Ont</b-col>
                    <b-col>Montreal</b-col>
                    <b-col>Niagrara Region</b-col>
                    <b-col>Ottawa</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>Peterborough</b-col>
                    <b-col>Quebec City</b-col>
                    <b-col>Red Deer</b-col>
                    <b-col>Sault Ste. Marie</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>Sherbrooke</b-col>
                    <b-col>Thunder Bay</b-col>
                    <b-col>Toronto</b-col>
                    <b-col>Trois-Rivieres</b-col>
                </b-row>
                <b-row style="margin-top: 28px">
                    <b-col>Vancouver</b-col>
                    <b-col>Victoria</b-col>
                    <b-col>Windsor</b-col>
                    <b-col>Winnipeg</b-col>
                </b-row>
            </div>
    </div>
</template>

<script>
export default {
    name: "cities"
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
    padding-top: 66px;
}
</style>