<template>
    <div class="mt-2" style="background-color: #ecf0f5;min-height: 700px">
        <v-breadcrumbs :items="breadcrumbs" class="pt-1 pb-8"></v-breadcrumbs>
        <v-row class="px-5">
            <v-col cols="3">
                <v-card height="90px" elevation="0">
                    <v-row>
                        <v-col cols="4" class="py-0">
                            <div style="background-color: #00c0ef;width: 90px">
                                <v-icon size="90px">
                                    mdi-account
                                </v-icon>
                            </div>
                        </v-col>
                        <v-col cols="8" class="py-0">
                            <p>待处理单数</p>
                            <h3>139</h3>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card height="90px" elevation="0">
                    <v-row>
                        <v-col cols="4" class="py-0">
                            <div style="background-color: #00a65a;width: 90px">
                                <v-icon size="90px">
                                    mdi-account
                                </v-icon>
                            </div>
                        </v-col>
                        <v-col cols="8" class="py-0">
                            <p>商品数量</p>
                            <h3>139</h3>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card height="90px" elevation="0">
                    <v-row>
                        <v-col cols="4" class="py-0">
                            <div style="background-color: #f39c12;width: 90px">
                                <v-icon size="90px">
                                    mdi-account
                                </v-icon>
                            </div>
                        </v-col>
                        <v-col cols="8" class="py-0">
                            <p>文章数量</p>
                            <h3>139</h3>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card height="90px" elevation="0">
                    <v-row>
                        <v-col cols="4" class="py-0">
                            <div style="background-color: #ddcb39;width: 90px">
                                <v-icon size="90px">
                                    mdi-account
                                </v-icon>
                            </div>
                        </v-col>
                        <v-col cols="8" class="py-0">
                            <p>会员数量</p>
                            <h3>139</h3>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pb-0">
                <v-alert
                        border="top"
                        colored-border
                        color="primary"
                        elevation="2"
                        class="mx-5"
                >
                    <v-card-title class="px-0 py-0 mx-0 my-00">今日统计</v-card-title>
                    <v-row>
                        <v-col>新增订单：0</v-col>
                        <v-col>今日访问：0</v-col>
                        <v-col>新增会员：0</v-col>
                        <v-col>待审核数：0</v-col>
                    </v-row>
                </v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pb-0">
                <v-alert
                        border="top"
                        colored-border
                        color="#3c8dbc"
                        elevation="2"
                        class="mx-5"
                >
                    <v-simple-table>
                        <tbody>
                        <tr>
                            <td>服务器操作系统：</td>
                            <td>Linux</td>
                            <td>服务器域名/IP：</td>
                            <td>demo2.ego.cn [ 183.158.35.60 ]</td>
                            <td>服务器环境：</td>
                            <td>Apache/2.4.12 (Unix) OpenSSL/1.0.1m /5.6.8 mod_perl</td>
                        </tr>
                        <tr>
                            <td>版本：</td>
                            <td>5.6.8</td>
                            <td>Mysql版本：</td>
                            <td>8.0.19</td>
                            <td>GD版本：</td>
                            <td>bundled (2.1.0 compatible)</td>
                        </tr>
                        <tr>
                            <td>文件上传限制：</td>
                            <td>12M</td>
                            <td>最大占用内存：</td>
                            <td>123M</td>
                            <td>最大执行时间：</td>
                            <td>30s</td>
                        </tr>
                        <tr>
                            <td>安全模式：</td>
                            <td>NO</td>
                            <td>Zlib支持：</td>
                            <td>YES</td>
                            <td>Curl支持：</td>
                            <td>YES</td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pb-0">
                <v-alert
                        border="top"
                        colored-border
                        color="#00a65a"
                        elevation="2"
                        class="mx-5"
                >
                    <v-simple-table>
                        <tbody>
                        <tr>
                            <td>程序版本：</td>
                            <td>magicMr_shop v1.0.0.0.0</td>
                            <td>更新时间：</td>
                            <td>2021-4-27</td>
                            <td>程序开发：</td>
                            <td>18软工王鑫</td>
                        </tr>
                        <tr>
                            <td>版权所有：</td>
                            <td>xx</td>
                            <td>授权：</td>
                            <td>xx</td>
                            <td>博客：</td>
                            <td>还没写完</td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols12>
                <v-alert
                        border="left"
                        color="#00a65a"
                        dark
                        class="mx-5"
                >
                    暂时不知道写啥！！！！！
                </v-alert>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Info",
        data(){
            return{
                breadcrumbs:[
                    {
                        text: '后台首页',
                        disabled: false,
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>
