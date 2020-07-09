<template>
    <div class="container">
        <h3 style="float: left; margin-left: -100px; color: black; position: absolute">{{this.title}}</h3>
        <div class="scrollable">
            <Resturant class="item"/>
            <Resturant class="item"/>
            <Resturant class="item"/>
        </div>
    </div>
</template>

<script>
import Resturant from "./Resturant";
export default {
    name: "section",
    props: {
        title: String
    },
    components: {
        Resturant
    }
}
</script>

<style scoped>
.container{
    margin-top: 46px;
    width: 100vw;
    height: 460px;
}
.resturants{
    list-style: none;
    float: left;
    margin-left: -163px;
    margin-top: 80px;
}
.item{
    float: left;
}
.scrollable{
    overflow: auto;
    margin-left: -122px;
    padding-top: 66px;
    overflow: auto;
    height: 430px;
    width: 100vw;
}
</style>