<template>
    <div>
        <div class="picture">
                <img src="../assets/starbucksMenu.jpeg" class="pic">
        </div>
        <div>
            <b-list-group horizontal style="margin-left:236px">
                <b-list-group-item>Hot Coffees</b-list-group-item>
                <b-list-group-item>Hot Teas</b-list-group-item>
                <b-list-group-item>Hot Drinks</b-list-group-item>
                <b-list-group-item>Cold Coffees</b-list-group-item>
                <b-list-group-item>Cold Teas</b-list-group-item>
                <b-list-group-item>Cold Drinks</b-list-group-item>
                <b-list-group-item>Hot Breakfast</b-list-group-item>
                <b-list-group-item>Bakery</b-list-group-item>
            </b-list-group>
        </div>
        <div style="width:100vw;height:1px;background-color: #E2E2E2; width: 90vw; margin-left: 5vw;"></div>
        <div style="margin-top: 36px">
                <Category category="Hot Coffees"/>
                <Category category="Hot Teas"/>
                <Category category="Hot Drinks"/>
                <Category category="Cold Coffees"/>
                <Category category="Cold Teas"/>
                <Category category="Cold Drinks"/>
                <Category category="Hot Breakfast"/>
                <Category category="Bakery"/>
        </div>
    </div>
</template>

<script>
import Category from "./menuCate";
export default {
    name: "items",
    components: {
        Category
    }
}
</script>

<style scoped>
.picture{
    width: 100vw;
    height: 380px;
}
.pic{
    width: 100vw;
    height: 380px;
}
.list-group-item{
    border: none;
    padding-top: 36px;
    padding-bottom: 36px;
}
</style>