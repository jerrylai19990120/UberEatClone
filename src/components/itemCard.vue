<template>
    <b-card :img-src="this.url" img-alt="Card image" img-right style="width: 400px; height: 160px;">
      <b-card-text style="color: gray;">
        <span style="float:left; font-size: 18px; color: black;">Caffè Misto</span><br>
        <div style="display: block; width: 200px; height: 73px; overflow: hidden; text-overflow: ellipsis; float: left; white-space: nowrap;">A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.</div> <br>
        <span style="float:left; font-size: 18px; color: black;">$3.25&nbsp;•&nbsp;50 Cal.<span style="margin-left:20px; cursor: pointer;" @click="this.addToCart">Add+</span></span>  
      </b-card-text>
    </b-card>
</template>

<script>
export default {
    name: "card",
    props: {
        url: String
    },
    methods: {
        addToCart(){
            console.log("added");
        }
    }
}
</script>

<style scoped>
.card-img-right{
    width: 158px;
}
</style>