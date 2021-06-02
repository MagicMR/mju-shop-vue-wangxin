<template>
    <div>
        <v-app-bar dense elevation="0" color="#f2f2f2">
            <v-row no-gutters>
                <v-col cols="2">
                    <v-img src="../../assets/log.png" height="60px" contain></v-img>
                </v-col>
                <v-col cols="2" class="pt-5"><div class="text-body-1"><strong>闽大在线超市</strong></div></v-col>
                <v-spacer/>
                <v-col cols="2" class="pt-5"><div class="text-body-1"><strong>MAGICMUSHROOM</strong></div></v-col>
            </v-row>
        </v-app-bar>
        <v-main>
            <v-container>

                <div class="text-h4" id="title" v-text="loginByPhone ? '短信验证码登录' : '闽大超市账号登录'"></div>

                <v-row no-gutters>
                    <v-col cols="3"></v-col>
                    <v-col cols="3">
                        <v-img src="../../assets/login01.png" width="160px" ></v-img>
                        <div class="subtitle-2 pt-2" style="color: gray">扫一扫,看一看，不要错过</div>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="1"></v-col>
                    <v-col cols="4">
                        <v-card elevation="0" v-show="!loginByPhone">
                            <v-text-field
                                    v-model="username"
                                    label="账号"
                                    solo-inverted
                            ></v-text-field>
                            <v-text-field
                                    v-model="password"
                                    label="密码"
                                    solo-inverted
                                    type="password"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'"
                                    @click:append="showPassword=!showPassword"
                                    :rules="[(val)=>{
                                    if (val.length<8){
                                        return '至少8位'
                                    }
                                }]"
                            ></v-text-field>
                        </v-card>
                        <v-card elevation="0" v-show="loginByPhone">
                            <v-text-field
                                    v-model="phone"
                                    label="手机号"
                                    solo-inverted
                            ></v-text-field>
                            <v-text-field
                                    label="验证码"
                                    solo-inverted
                                    v-model="checkCode"
                            >
                                <template v-slot:append>
                                    <v-btn
                                            text
                                            :color="btnColor"
                                            :disabled="disabled"
                                            @click="handleYzm"
                                    >{{ btnText }}
                                    </v-btn>
                                </template>
                            </v-text-field>
                        </v-card>
                        <v-btn text color="primary" class="pa-0 ma-0"
                               @click="loginByPhone=!loginByPhone"
                                v-text="loginByPhone? '账号登录' : '短信验证码登录'">
                        </v-btn><br/>
                        <v-btn color="#ca141d" style="color: white" block large :disabled="isEmpty"><strong>登录</strong></v-btn>
                        <v-card height="50px" class="mt-5 pt-0" elevation="0">
                            <v-row>
                                <v-col cols="2"></v-col>
                                <v-col cols="2"><v-btn text color="primary" @click="$router.push('register')">注册</v-btn> </v-col>
                                <v-col cols="3"><v-btn text color="primary">忘记密码</v-btn> </v-col>
                                <v-col cols="2"><v-btn text color="primary">帮助</v-btn> </v-col>
                                <v-col cols="2"></v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="3"></v-col>
                                <v-col cols="2"><v-btn fab small elevation="0"><v-icon>mdi-qqchat</v-icon></v-btn></v-col>
                                <v-col cols="2"><v-btn fab small elevation="0"><v-icon>mdi-credit-card-marker</v-icon></v-btn> </v-col>
                                <v-col cols="2"><v-btn fab small elevation="0"><v-icon>mdi-wechat</v-icon></v-btn> </v-col>
                                <v-col cols="3"></v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <img src="../../assets/msglogo.png" alt="万能的魔术菇" id="msgLogo"/>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data:()=>({
            //账号密码登录
            username:'',
            password:'',
            //是否显示密码   false :不显示   true :显示
            showPassword:false,

            //验证码登录
            phone:'',
            checkCode:'',
            btnColor:'primary',
            disabled:true,
            //获取验证码的倒计时
            totalCount:0,

            //是否通过phone登录  false:账号密码登录   true:短信验证码登录
            loginByPhone:false,

            //是否可以登录 进行初步的表单验证
            canLogin_checkCode:false,
            canLogin_password:false

        }),
        watch:{
            //监听手机号是否达到11位
            phone(val) {
                this.disabled = val.length !== 11;
            }
        },
        computed:{
            //改变获取验证码的按钮显示文本
            btnText() {
                return this.totalCount !== 0 ? `${this.totalCount}秒再次获取` : "获取验证码"
            },

            //初步表单验证
            isEmpty() {
                if (this.loginByPhone===false){
                    return (this.username.length < 3 || this.password.length < 8)
                }else {
                    return (this.phone.length < 11 || this.checkCode.length < 6)
                }
            }
        },
        methods:{
            //获取短信验证码
            handleYzm(){
                // request({
                //     url: '/api/user/checkCode',
                //     params: {
                //         phone: this.phone
                //     }
                // })
                //     .then(resp => {
                //         this.sendSmsMsg = resp.data.msg
                //         this.snackbarSms = true
                //     })
                //     .catch(err => {
                //
                //     })

                // 按钮60秒倒计时
                this.disabled = true
                this.totalCount = 30
                this.interval = setInterval(() => {
                    this.totalCount--
                    if (this.totalCount === 0) {
                        clearInterval(this.interval)
                        this.disabled = false
                    }
                }, 1000);
            }
        }
    }
</script>

<style scoped>
    #title{
        text-align: center;
        margin-top: 80px;
        margin-bottom: 80px;
    }
    #msgLogo{
        height: 80px;
    }
</style>
