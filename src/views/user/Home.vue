<template>
<div>
    <v-card width="100%"
            height="35px"
            color="#2e2828"
            elevation="0"
            style="color: gray"
            class="text-center rounded-0">
        <v-container class="pt-5" style="width: 78%">
            <v-row>
                <v-col cols="5" class="pa-0">
                    <v-row no-gutters>
                        <v-col cols="1" class="caption headBorder">首页</v-col>
                        <v-col cols="1" class="caption headBorder">xx</v-col>
                        <v-col cols="1" class="caption headBorder">yy</v-col>
                        <v-col cols="1" class="caption headBorder">zz</v-col>
                        <v-col cols="1" class="caption">凑数</v-col>
                    </v-row>
                </v-col>
                <v-spacer/>
                <v-col cols="5" class="pa-0">
                    <v-row no-gutters>
                        <v-col cols="3"></v-col>
                        <v-col cols="1" class="caption">登录，</v-col>
                        <v-col cols="1" class="caption headBorder">注册</v-col>
                        <v-col cols="2" class="caption headBorder">我的订单</v-col>
                        <v-col cols="1" class="caption headBorder">xx</v-col>
                        <v-col cols="1" class="caption headBorder">yy</v-col>
                        <v-col cols="1" class="caption headBorder">zz</v-col>
                        <v-col cols="2" class="caption">购物车</v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    <v-card
            width="100%"
            height="60px"
            elevation="0"
            style="color: gray;"
            class="text-center">
        <v-container style="width: 78%" class="pa-0 my-0">
            <v-row no-gutters>
                <v-col cols="2" class="pa-0 ma-0">
                    <v-img src="../../assets/log.png" height="60px" contain></v-img>
                </v-col>
                <v-col cols="1"></v-col>
                <v-col cols="1" class="pt-5">
                    商品专区
                </v-col>
                <v-col cols="1" class="pt-5">
                    帮助中心
                </v-col>
                <v-spacer/>
                <v-col cols="3">
                    <v-text-field
                            solo
                            dense
                            class="pt-2"
                            append-icon="mdi-magnify"
                            @click:append="handleSearch"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    <v-main id="main">
        <v-carousel
                cycle
                height="500"
                hide-delimiter-background
                show-arrows-on-hover
        >
            <template v-slot:prev="{ on, attrs }">
                <v-btn
                        color="success"
                        v-bind="attrs"
                        v-on="on"
                >Previous slide</v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
                <v-btn
                        color="info"
                        v-bind="attrs"
                        v-on="on"
                >Next slide</v-btn>
            </template>
            <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
            >
                <v-sheet
                        :color="colors[i]"
                        height="100%"
                >
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                    >
                        <div class="display-3">
                            {{ slide }} Slide
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </v-main>
    <v-card id="smallNavigation">
        <v-btn width="100%" height="70px" large class="text-center justify-center">
            <div style="color: grey">
                <v-icon size="30px">mdi-cart-outline</v-icon>
                <div class="caption">购物车</div>
            </div>
        </v-btn>
        <v-btn width="100%" height="70px" large class="text-center justify-center">
            <div style="color: grey">
                <v-icon size="30px">mdi-qrcode</v-icon>
                <div class="caption">二维码</div>

            </div>
        </v-btn>
        <v-btn width="100%" height="70px" large class="text-center justify-center">
            <div style="color: grey">
                <v-icon size="30px">mdi-face-agent</v-icon>
                <div class="caption">在线客服</div>
            </div>
        </v-btn>
        <v-btn width="100%" height="70px" large class="text-center justify-center">
            <div style="color: grey">
                <v-icon size="30px">mdi-clipboard-edit-outline</v-icon>
                <div class="caption">我的订单</div>
            </div>
        </v-btn>
    </v-card>
    <v-footer>
        foot
    </v-footer>
</div>
</template>

<script>
    export default {
        name: "Home",
        data:()=>({
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }),
        methods:{
            handleSearch(){
                alert('search')
            }
        }
    }
</script>

<style scoped>
    #smallNavigation{
        max-width: 80px;
        position: fixed;
        bottom: 60px;
        right: 30px;
    }
    .headBorder{
        border-right: 2px groove gray;
    }
    #main{
        background: #cccccc url(../../assets/background.png)
    }
</style>
