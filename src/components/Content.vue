<template>
    <div>
        <div style="background-color:#FFF2D9; width:100vw; height: 415px">
                <img src="../assets/snack2.svg" style="height: 415px;left: 0px; position: absolute">
                <img src="../assets/snack.svg" style="height: 415px; right: 0px; position: absolute">
                <div style="padding-top: 16vh">
                    <h1 style="color; black">Your favorite food, delivered with Uber</h1>
                    <b-nav-form style="margin-top: 36px">
                        <b-form-input id="emailInput" size="sm" class="mr-sm-2" placeholder="Enter delivery address"></b-form-input>
                        <b-button id="findFood" size="sm" class="my-2 my-sm-0" type="submit"><strong style="font-size:18px">Find Food</strong></b-button>
                    </b-nav-form>
                </div>
        </div>
        
        <Section title="New on Uber Eats"/>
        <Section title="Food Near Me"/>
        <Section title="Breakfast and Brunch Delivery in Mississauga"/>
        <Section title="Chinese Delivery in Mississauga"/>
    </div>
</template>

<script>
import Section from "./Section";
export default {
    name: 'content',
    components: {
        Section
    }
}
</script>

<style scoped>
#findFood{
    background-color: black;
    color: white;
    width: 116px;
    height: 66px;
    border: none;
}

#emailInput{
    width: 460px;
    margin-left: 30vw;
    height: 54px;
    font-size: 20px;
}

</style>