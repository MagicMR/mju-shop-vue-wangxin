<template>
    <div>
        <v-breadcrumbs :items="breadcrumbs" class="pt-1 pb-6"></v-breadcrumbs>
        <v-row >
            <v-card class="mx-7 my-2" color="#ededed" width="100%" elevation="0">
                <v-row>
                    <v-col cols="1">
                        <v-btn color="black" style="color: white" class="my-1">展开</v-btn>
                    </v-col>
                    <v-col cols="4" class="caption mt-2">温馨提示：顶级分类（一级大类）设为推荐是才会在首页楼层中显示</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                        <v-btn class="my-1" color="primary" @click="handleJump('categoryAdd')">新增分类</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
        <br>
        <v-divider></v-divider>
        <v-container class="ml-7">
            <v-row>
                <v-col cols="1"><strong>分类ID</strong></v-col>
                <v-col cols="4"><strong>分类名称</strong></v-col>
                <v-col cols="2"><strong>手机显示名称</strong></v-col>
                <v-col cols="1"><strong>是否推荐</strong></v-col>
                <v-col cols="1"><strong>是否显示</strong></v-col>
                <v-col cols="1"><strong>分组</strong></v-col>
                <v-col cols="1"><strong>排序</strong></v-col>
                <v-col cols="1"><strong>操作</strong></v-col>
            </v-row>
            <v-divider></v-divider>
            <br/>
            <v-row>
               <v-col cols="12" v-for="(item,i) in items" :key="i">
                   <v-card v-bind:color="i%2===0 ? colorOne : colorTwo">
                       <v-row>
                           <v-col cols="1" class="text-center">{{item.id}}</v-col>
                           <v-col cols="4">
                               <v-fab-transition>
                                   <v-btn
                                           @click="item.showChild=!item.showChild"
                                           :key="i"
                                           fab
                                           x-small
                                           style="color: orange"
                                           elevation="0"
                                   >
                                       <v-icon>mdi-plus</v-icon>
                                   </v-btn>
                               </v-fab-transition>
                               {{item.name}}
                           </v-col>
                           <v-col cols="2">{{item.mobileName}}</v-col>
                           <v-col cols="1">
                               <v-checkbox
                                       v-model="item.isHot"
                                       color="success"
                                       hide-details
                                       disabled
                               ></v-checkbox>
                           </v-col>
                           <v-col cols="1">
                               <v-checkbox
                                       v-model="item.isShow"
                                       color="success"
                                       hide-details
                                       disabled
                               ></v-checkbox>
                           </v-col>
                           <v-col cols="1">{{item.catGroup}}</v-col>
                           <v-col cols="1">{{item.sortOrder}}</v-col>
                           <v-col cols="1">
                               <v-icon
                                       small
                                       class="mr-2"
                                       @click="handleEdit(item)"
                               >
                                   mdi-pencil
                               </v-icon>
                               <v-icon
                                       small
                                       @click="handleDelete(item)"
                               >
                                   mdi-delete
                               </v-icon>
                           </v-col>
                       </v-row>
                       <v-row v-if="item.showChild">
                           <v-col cols="12" v-for="(children,j) in item.children" :key="j">
                               <v-divider></v-divider>
                               <v-row class="pt-2 pb-0">
                                   <v-col cols="1" class="text-center">{{children.id}}</v-col>
                                   <v-col cols="4">
                                       <v-btn disabled style="opacity: 0"></v-btn>
<!--                                       <v-btn icon @click="children.showChild=!children.showChild" >+</v-btn>-->
                                       <v-fab-transition>
                                           <v-btn
                                                   @click="children.showChild=!children.showChild"
                                                   fab
                                                   x-small
                                                   style="color: orange"
                                                   elevation="0"
                                           >
                                               <v-icon>mdi-plus</v-icon>
                                           </v-btn>
                                       </v-fab-transition>
                                       {{children.name}}
                                   </v-col>
                                   <v-col cols="2">{{children.mobileName}}</v-col>
                                   <v-col cols="1">
                                       <v-checkbox
                                               v-model="children.isHot"
                                               color="success"
                                               hide-details
                                               disabled
                                               class="pt-0"
                                       ></v-checkbox>
                                   </v-col>
                                   <v-col cols="1">
                                       <v-checkbox
                                               v-model="children.isShow"
                                               color="success"
                                               hide-details
                                               disabled
                                               class="pt-0"
                                       ></v-checkbox>
                                   </v-col>
                                   <v-col cols="1">{{children.catGroup}}</v-col>
                                   <v-col cols="1">{{children.sortOrder}}</v-col>
                                   <v-col cols="1">
                                       <v-icon
                                               small
                                               class="mr-2"
                                               @click="handleEdit(children)"
                                       >
                                           mdi-pencil
                                       </v-icon>
                                       <v-icon
                                               small
                                               @click="handleDelete(children)"
                                       >
                                           mdi-delete
                                       </v-icon>
                                   </v-col>
                               </v-row>
                               <v-row v-if="children.showChild">
                                   <v-col cols="12">
                                       <v-divider></v-divider>
                                       <v-row v-for="(child,k) in children.children" :key="k" class="pt-2">
                                           <v-col cols="1" class="text-center">{{child.id}}</v-col>
                                           <v-col cols="4">
                                               <v-btn disabled style="opacity: 0"></v-btn><v-btn style="opacity: 0" disabled></v-btn>
                                               {{child.name}}
                                           </v-col>
                                           <v-col cols="2">{{child.mobileName}}</v-col>
                                           <v-col cols="1">
                                               <v-checkbox
                                                       v-model="child.isHot"
                                                       color="error"
                                                       hide-details
                                                       disabled
                                                       class="pt-0"
                                               ></v-checkbox>
                                           </v-col>
                                           <v-col cols="1">
                                               <v-checkbox
                                                       v-model="child.isShow"
                                                       color="success"
                                                       hide-details
                                                       disabled
                                                       class="pt-0"
                                               ></v-checkbox>
                                           </v-col>
                                           <v-col cols="1">{{child.catGroup}}</v-col>
                                           <v-col cols="1">{{child.sortOrder}}</v-col>
                                           <v-col cols="1">
                                               <v-icon
                                                       small
                                                       class="mr-2"
                                                       @click="handleEdit(child)"
                                               >
                                                   mdi-pencil
                                               </v-icon>
                                               <v-icon
                                                       small
                                                       @click="handleDelete(child)"
                                               >
                                                   mdi-delete
                                               </v-icon>
                                           </v-col>
                                       </v-row>
                                   </v-col>
                               </v-row>
                           </v-col>
                       </v-row>
                   </v-card>
                   <v-divider></v-divider>
               </v-col>
            </v-row>
            <v-row>
                <v-col cols="5">
                    <v-pagination
                            v-model="page"
                            :length="totalPage"
                            total-visible="6"
                    ></v-pagination>
                    <v-col cols="7"></v-col>
                </v-col>
            </v-row>
        </v-container>



<!-- ================================弹出框====================================-->
        <v-dialog
                transition="dialog-bottom-transition"
                v-model="deleteDialog"
                hide-overlay
                persistent
                max-width="600"
        >
            <template v-slot:default="dialog">
                <v-card>
                    <v-toolbar
                            color="primary"
                            dark
                    >删除操作</v-toolbar>
                    <v-card-text>
                        <br>
                        <v-row>
                            <v-col cols="4"><v-subheader class="justify-end"><strong>分类ID：</strong></v-subheader></v-col>
                            <v-col cols="8"><v-subheader class="justify-start">{{deleteData.id}}</v-subheader></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4"><v-subheader class="justify-end"><strong>分类名称：</strong></v-subheader></v-col>
                            <v-col cols="8"><v-subheader class="justify-start">{{deleteData.name}}</v-subheader></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4"><v-subheader class="justify-end"><strong>分类级别：</strong></v-subheader></v-col>
                            <v-col cols="8"><v-subheader class="justify-start">{{deleteData.level}}</v-subheader></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4"><v-subheader class="justify-end"><strong>是否包含子分类：</strong></v-subheader></v-col>
                            <v-col cols="8"><v-subheader class="justify-start">{{!(deleteData.children==null)}}</v-subheader></v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn
                                text
                                @click="confirmDelete"
                                color="red"
                        >确认删除</v-btn>
                        <v-btn
                                text
                                @click="dialog.value = false"
                        >取消</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
    import {request} from "../../../../network/request";

    export default {
        name: "List",
        data: () => ({
            colorOne:'#eeeeee',
            colorTwo:'white',
            //分类列表
            items: [],
            //删除操作的 dialog
            deleteDialog:false,
            deleteData:{},
            showNumber:10,
            totalPage:0,
            page:1,
            breadcrumbs:[
                {
                    text: '后台首页',
                    disabled: false,
                },
                {
                    text: '商品管理',
                    disabled: false,
                },
                {
                    text: '商品分类',
                    disabled: true,
                },
            ]
        }),
        created() {
            this.getGoodsCategory();
            this.handlePagination();
        },
        methods:{
            //获取分类列表
            getGoodsCategory(){
                request({
                    url:'/api/shop-manager/goods/category/categoryList'
                })
                .then(resp =>{
                    for (let gcv of resp.data) {
                        gcv.showChild=false
                        for (let child of gcv.children) {
                            child.showChild=false
                        }
                    }
                    this.items=resp.data;
                })
                .catch(err =>{

                })
            },

            handlePagination(){
                if (this.items.length<=this.showNumber){
                    this.totalPage = 1
                }else {
                    this.totalPage = Math.ceil(this.items.length,this.showNumber)
                }
            },
            handleJump(path){
                this.$router.push(path)
            },
            // 处理删除操作
            handleDelete(goodsCategory){
                this.deleteDialog=true
                this.deleteData=goodsCategory
            },
            // 确认删除
            confirmDelete(){
                if (this.deleteData.children==null || this.deleteData.children.length===0){
                    request({
                        url:'/api/shop-manager/goods/category/deleteCategory',
                        params:{id:this.deleteData.id}
                        })
                        .then(resp => {
                            alert(resp.data)
                            this.deleteDialog=false
                            this.$router.go(0)
                        })
                        .catch(err => {})
                }else {
                    alert("该分类包含子分类，不能删除")
                }
            },
            handleEdit(goodsCategory){
                this.$router.push({
                    name:'Edit',
                    query:{
                        goodsCategory
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
