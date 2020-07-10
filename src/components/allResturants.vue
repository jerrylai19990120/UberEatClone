<template>
    <div class="container">
        <h3 style="float: left; margin-left: -60px; color: black; position: absolute">Food Near Me</h3>
        <div class="cate" style="margin-left: -66px;">
            <img src="../assets/fastFood.jpg" class="pic"><br>
            <div style="margin-top: 16px"><strong>Fast Food</strong></div>
        </div>
        <div class="cate">
            <img src="../assets/pizza.jpg" class="pic">
            <div style="margin-top: 16px"><strong>Pizza</strong></div>
        </div>
        <div class="cate">
            <img src="../assets/Brunch.jpg" class="pic">
            <div style="margin-top: 16px"><strong>Breakfast and Brunch</strong></div>
        </div>
        <div class="cate">
            <img src="../assets/chinese.jpg" class="pic">
            <div style="margin-top: 16px"><strong>Chinese</strong></div>
        </div>
        <div class="cate">
            <img src="../assets/BubbleTea.jpg" class="pic">
            <div style="margin-top: 16px"><strong>Bubble Tea</strong></div>
        </div>
        <div class="cate">
            <img src="../assets/essentials.jpg" class="pic">
            <div style="margin-top: 16px"><strong>Everyday Essentials</strong></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "allResturants"
}
</script>

<style scoped>
.container{
    margin-top: 46px;
    width: 100vw;
    height: 268px;
}
.pic{
    width: 160px;
    height: 160px;
    border-radius: 50%;
}
.cate{
    float: left;
    width: 170px;
    height: 170px;
    margin-top: 60px;
    margin-right: 26px;
}
</style>