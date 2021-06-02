<template>
    <div style="height: 100%">
        <v-card id="head" class="rounded-0">
            HEAD
        </v-card>
        <v-card id="navigation" class="rounded-0">
        <HeadBar/>
        </v-card>
        <v-card id="main">
            <router-view/>
        </v-card>
    </div>
</template>

<script>
    import HeadBar from "../../components/HeadBar";
    export default {
        name: "Home",
        components: {HeadBar}
    }
</script>

<style scoped>
    #head{
        position: fixed;
        height: 50px;
        width: 100%;
        background-color: #336666;
        z-index: 1;
    }
    #navigation{
        position: fixed;
        top: 50px;
        width: 230px;
        height: 92%;
        z-index: 1;
        overflow: scroll;
        background: #65c0bb;
    }
    #main{
        position: absolute;
        top: 50px;
        left: 230px;
        min-height: 92%;
        width: 85%;
        background: #cccccc url(../../assets/background.png)
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 6px;
        background-color: rgba(240, 240, 240, 1);
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
        border-radius: 10px;
        background-color: rgba(240, 240, 240, .5);
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
        background-color: rgba(240, 240, 240, .5);
    }
</style>
