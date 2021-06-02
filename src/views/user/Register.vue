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
                <br>
                <v-row no-gutters>
                    <v-col cols="3">
                        <v-list dense rounded>
                            <v-list-item-group v-model="registerByWho" color="primary">
                                <v-list-item value="phone">
                                    <v-list-item-icon><v-icon>mdi-cellphone-message</v-icon></v-list-item-icon>
                                    <v-list-item-title>手机号注册</v-list-item-title>
                                </v-list-item>
                                <v-list-item value="email">
                                    <v-list-item-icon><v-icon>mdi-email</v-icon></v-list-item-icon>
                                    <v-list-item-title>邮箱地址注册</v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="8">
                        <br>
                        <div id="title_1" class="text-sm-h4">闽大超市账号注册</div>
                        <div id="title_2">已有账号；<a href="javascript:void(0);" @click="$router.push('login')">去登陆&nbsp;> </a></div>
                        <br>
                        <br>
                        <br>
                        <v-row>
                            <v-col cols="7">
                                <v-select
                                        label="地球/国家"
                                        dense
                                        filled
                                        color="gray"
                                        :items="country"
                                ></v-select>
                                <div v-show="registerByWho==='phone'">
                                    <v-text-field
                                            prefix="+86(中国):"
                                            label="手机号"
                                            solo-inverted
                                            v-model="phone"
                                    ></v-text-field>
                                    <v-text-field
                                            label="短信验证码"
                                            solo-inverted
                                            v-model="checkCode_phone"
                                    >
                                        <template v-slot:append>
                                            <v-btn
                                                    text
                                                    color="primary"
                                                    :disabled="disabled_phone"
                                                    @click="handleYzm"
                                            >{{ btnText_phone }}
                                            </v-btn>
                                        </template>
                                    </v-text-field>
                                </div>
                                <div v-show="registerByWho==='email'">
                                    <v-text-field
                                            label="邮箱"
                                            solo-inverted
                                            v-model="email"
                                    ></v-text-field>
                                    <v-text-field
                                            label="邮箱验证码"
                                            solo-inverted
                                            v-model="checkCode_email"
                                    >
                                        <template v-slot:append>
                                            <v-btn
                                                    text
                                                    color="primary"
                                                    :disabled="disabled_email"
                                                    @click="handleYzm"
                                            >{{ btnText_email }}
                                            </v-btn>
                                        </template>
                                    </v-text-field>
                                </div>
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
                                <v-text-field
                                        v-model="confirmPassword"
                                        label="确认密码"
                                        solo-inverted
                                        type="password"
                                        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="showConfirmPassword ? 'text' : 'password'"
                                        @click:append="showConfirmPassword=!showConfirmPassword"
                                        :rules="[(val)=>{
                                    if (val.length<8){
                                        return '至少8位'
                                    }
                                }]"
                                ></v-text-field>
                                <v-btn color="primary" block large :disabled="isEmpty"><strong>注册</strong></v-btn>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer>
            <v-container class="text-center">
                <v-btn text>用户协议</v-btn>
                <v-btn text>关于账号与隐私的声明</v-btn>
                <v-btn text>帮助</v-btn><br/>
                <v-img src="../../assets/msglogo.png" height="150px" contain></v-img>
            </v-container>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data:()=>({
            // 用手机号注册还是邮箱注册     phone     email
            registerByWho:'phone',

            // 地区数组
            country:['中国'],

            //公用信息
            password: '',
            confirmPassword:'',
            showPassword:false,
            showConfirmPassword:false,

            //手机号注册
            phone:'',
            checkCode_phone:'',
            disabled_phone: false,
            totalCount_phone:0,
            //邮箱注册
            email:'',
            checkCode_email:'',
            disabled_email: false,
            totalCount_email:0,
        }),
        watch:{

        },
        computed:{
            //改变获取验证码的按钮显示文本
            btnText_phone() {
                return this.totalCount_phone !== 0 ? `${this.totalCount_phone}秒再次获取` : "获取验证码"
            },
            btnText_email() {
                return this.totalCount_email !== 0 ? this.totalCount_email+'秒再次获取' : "获取验证码"
            },

            // 表单的初步验证
            isEmpty(){
                if (this.password==null || this.password.length <8){
                    return true;
                }
                if (this.confirmPassword==null || this.confirmPassword.length <8){
                    return true;
                }
                if (this.registerByWho==='phone'){
                    if (this.phone.length !==11 || this.checkCode_phone===null || this.checkCode_phone.length < 6){
                        return true;
                    }
                }else {
                    if (this.email.length <=8 || this.checkCode_email===null || this.checkCode_email.length < 6){
                        return true;
                    }
                }
                return false;
            }
        },
        methods:{
            //获取验证码
            handleYzm(){
                if (this.registerByWho==='phone'){
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
                    this.disabled_phone = true
                    this.totalCount_phone = 30
                    this.interval = setInterval(() => {
                        this.totalCount_phone--
                        if (this.totalCount_phone === 0) {
                            clearInterval(this.interval)
                            this.disabled_phone = false
                        }
                    }, 1000);
                }else {
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
                    this.disabled_email = true
                    this.totalCount_email = 30
                    this.interval = setInterval(() => {
                        this.totalCount_email--
                        if (this.totalCount_email === 0) {
                            clearInterval(this.interval)
                            this.disabled_email = false
                        }
                    }, 1000);
                }
            }
        }
    }
</script>

<style scoped>
    #title_1{
        position: relative;
        left: 80px;
    }
    #title_2{
        position: relative;
        top: 10px;
        left: 180px;
    }
</style>
