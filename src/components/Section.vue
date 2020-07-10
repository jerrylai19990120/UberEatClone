<template>
    <div class="container">
        <h3 style="float: left; margin-left: -60px; color: black; position: absolute">{{this.title}}</h3>
        <div class="scrollable">
            <Resturant class="item" ratings="4.6" brand="McDonald's (Matheson)" deliveryTime="10-20" deliveryFee="0.99" category="Burgers • American • Fast Food" icons="mc"/>
            <Resturant class="item" ratings="4.8" brand="A&amp;W (Heartland)" deliveryTime="30-50" deliveryFee="2.99" category="Burgers • American • Fast Food" icons="a&amp;w"/>
            <Resturant class="item" ratings="4.2" brand="Starbucks (Confederation Pkwy)" deliveryTime="15-25" deliveryFee="1.99" category="Bakery • Breakfast and Brunch • Cafe" icons="starbucks"/>
            <Resturant class="item" ratings="3.8" brand="Tim Horton's (4595 Tomken Road)" deliveryTime="40-50" deliveryFee="0" category="Bakery • Cafe • Donuts" icons="tims"/>
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
    display: inline-block;
}
.scrollable{
    overflow: auto;
    margin-left: -82px;
    padding-top: 66px;
    overflow-x: auto;
    height: 540px;
    width: 82vw;
    white-space: nowrap;
}

.scrollable::-webkit-scrollbar{
    background-color: transparent;
}
</style>