<template>
    <div>
        <v-navigation-drawer permanent color="#65c0bb">
            <v-list-item color="#65c0bb">
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Admin
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        admin@123.com
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-card color="#65c0bb">
                <v-list
                        color="#65c0bb"
                        dense
                        nav>
                    <v-list-group @click="handleJump('info')">
                        <template v-slot:activator>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title>Home</v-list-item-title>
                        </template>
                    </v-list-group>

                    <v-list-group
                            v-for="item in items"
                            :key="item.title"
                            :prepend-icon="item.icon"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </template>

                        <v-list-group
                                v-for="menu in item.menus"
                                :key="menu.name"
                                no-action
                                sub-group
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>{{menu.name}}</v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-list-item
                                    v-for="category in menu.category"
                                    :key="category.name"
                                    link
                                    @click="handleJump(category.path)"
                            >
                                <v-list-item-title v-text="category.name"></v-list-item-title>

                                <v-list-item-icon>
                                    <v-icon v-text="category.icon"></v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-group>

                    </v-list-group>
                </v-list>
            </v-card>


        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "HeadBar",
        data:()=>({
            home:'',
            items:[
                {
                    title:'Admin',
                    icon:'mdi-account-circle',
                    menus:[
                        {
                            name:'用户管理',
                            icon:'mdi-account-multiple-outline',
                            category:[
                                {
                                    name:'商品分类',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                            ]
                        },
                        {
                            name:'商品管理',
                            icon:'mdi-account-multiple-outline',
                            category:[
                                {
                                    name:'商品分类',
                                    icon:'mdi-file-outline',
                                    path:'categoryList'
                                },
                                {
                                    name:'商品列表',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                                {
                                    name:'库存日志',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                                {
                                    name:'测试',
                                    icon:'mdi-file-outline',
                                    path:'test'
                                },
                            ]
                        },
                        {
                            name:'商品管理',
                            icon:'mdi-account-multiple-outline',
                            category:[
                                {
                                    name:'商品分类',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                                {
                                    name:'商品列表',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                                {
                                    name:'库存日志',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                                {
                                    name:'商品类型',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                            ]
                        },
                        {
                            name:'商品管理',
                            icon:'mdi-account-multiple-outline',
                            category:[
                                {
                                    name:'商品分类',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                                {
                                    name:'商品列表',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                                {
                                    name:'库存日志',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                                {
                                    name:'商品类型',
                                    icon:'mdi-file-outline',
                                    path:''
                                },
                            ]
                        },
                    ]
                },
                {
                    title: 'Action',
                    icon:'mdi-account-circle',
                    menus: [
                        {
                            name:'设置',
                            icon:'mdi-account-multiple-outline',
                            path:'',
                            category:[
                                {
                                    name:'Create',
                                    icon:'mdi-plus-outline'
                                },
                                {
                                    name:'Read',
                                    icon:'mdi-update'
                                },
                                {
                                    name:'Update',
                                    icon:'mdi-plus-outline'
                                },
                                {
                                    name:'Delete',
                                    icon:'mdi-delete'
                                },
                            ]
                        },
                    ]
                }
            ],
        }),
        methods:{
            handleJump(path){
                this.$router.push(path);
            }
        }
    }
</script>

<style scoped>

</style>
