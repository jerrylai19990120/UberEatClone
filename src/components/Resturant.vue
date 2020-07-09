<template>
    <div class="section">
        <b-card
    :img-src="require('../assets/mc.jpeg')"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 23rem;"
    img-height="240px"
    class="mb-2"
  >
    <b-card-text>
        <h5 style="float: left;">Mcdonald's</h5><br>
        <span style="float: left">$0.99 Delivery Fee &nbsp;•&nbsp; 10-20 Min &nbsp;•&nbsp; $</span><br>
        <div class="divider"></div>
        <span style="float: left">Burgers • American • Fast Food</span>
        <div class="ratings"><strong style="font-family: avenir;">{{this.ratings}}</strong></div>
    </b-card-text>
  </b-card>
    </div>
</template>

<script>
export default {
    name: 'resturant',
    props: {
        brand: String,
        category: String,
        deliveryFee: Number,
        deliveryTime: String,
        ratings: String
    }
}
</script>

<style scoped>
.section{
    margin-left: 23px;
}
.card{
    border: none;
}
.divider{
    background-color: #EEEEEE; 
    width: 23rem; 
    height:1px; 
    margin-left: -18px;
    margin-top:16px;
    margin-bottom: 8px;
}
.ratings{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #EEEEEE;
    margin-top: -76px;
    margin-left: 308px;
    text-align: center;
    padding-top: 6px;
}
</style>