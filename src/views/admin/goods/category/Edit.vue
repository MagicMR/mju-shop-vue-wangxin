<template>
    <div class="mt-3">
        <v-row>
            <v-col cols="2">
                <v-card-title class="pt-0"><strong>添加分类</strong></v-card-title>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <v-btn small @click="$router.go(-1)">
                    <v-icon>mdi-keyboard-return</v-icon>
                </v-btn>
                <v-btn small>帮助</v-btn>
            </v-col>
        </v-row>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>分类名称：</strong></v-subheader>
                </v-col>
                <v-col cols="6">
                    <v-text-field
                            label="Name"
                            v-model="saveCategory.name"
                            value=""
                            prefix="-"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>手机分类名称：</strong></v-subheader>
                </v-col>
                <v-col cols="6">
                    <v-text-field
                            label="CategoryName"
                            v-model="saveCategory.mobileName"
                            value=""
                            prefix="-"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>上级分类：</strong></v-subheader>
                </v-col>
                <v-col cols="3">
                    <v-select
                            label="顶级分类"
                            :items="topCategory"
                            v-model="selectedTopCategory"
                            outlined
                            dense>
                    </v-select>
                </v-col>
                <v-col cols="3">
                    <v-select
                    label="请选择商品分类"
                    :items="goodsCategory"
                    v-model="selectedGoodsCategory"
                    outlined
                    dense>
                    </v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>是否显示：</strong></v-subheader>
                </v-col>
                <v-col cols="5">
                    <v-radio-group row v-model="saveCategory.isShow">
                        <v-radio label="是" value="1"></v-radio>
                        <v-radio label="否" value="0"></v-radio>
                    </v-radio-group>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>分类分组：</strong></v-subheader>
                </v-col>
                <v-col cols="2">
                    <v-select dense solo label="分类分组" v-model="saveCategory.catGroup"></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>分类显示图片：</strong></v-subheader>
                </v-col>
                <v-col cols="5">
                    <v-file-input
                            accept="image/*"
                            label="上传图片"
                            v-model="imgFile"
                    >
                        <template v-slot:append-outer>
                            <v-icon>mdi-file-upload-outline</v-icon>
                            <v-btn text class="pt-0 px-0 mx-0" @click="uploadImage">
                                上传图片
                            </v-btn>
                        </template>
                    </v-file-input>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>上传图片预览：</strong></v-subheader>
                </v-col>
                <v-col cols="5">
                    <v-img :src="saveCategory.image" contain height="150px"></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>显示排序：</strong></v-subheader>
                </v-col>
                <v-col cols="2">
                    <v-text-field dense solo label="50" v-model="saveCategory.sortOrder">

                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-subheader class="justify-end"><strong>分佣比例：</strong></v-subheader>
                </v-col>
                <v-col cols="2">
                    <v-text-field dense solo label="0" suffix="%" v-model="saveCategory.commissionRate">

                    </v-text-field>
                </v-col>
            </v-row>
            <br>
            <v-row class="justify-center">
                <v-col cols="2">
                    <v-btn color="primary" style="color: white" @click="saveGoodsCategory()">
                        提交
                    </v-btn>
                </v-col>
            </v-row>
                <v-dialog
                        v-model="dialog"
                        width="500"
                >
                    <v-card>
                        <v-card-title class="headline grey lighten-2">
                            {{result}}
                        </v-card-title>

                        <v-divider></v-divider>
                        <br>
                        <br>
                        <v-card-actions>
                            <v-btn
                                    color="primary"
                                    text
                                    @click="dialog = false"
                            >
                                返回
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="primary"
                                    text
                                    @click="dialog = false"
                            >
                                继续添加
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
        </v-container>
    </div>
</template>

<script>
    import {request} from "../../../../network/request";
    import axios from 'axios'
    export default {
        name: "Edit",
        data(){
            return{
                topCategory:[],
                selectedTopCategory:'',
                goodsCategory:[],
                selectedGoodsCategory:'',
                topCategoryList:[],
                goodsCategoryList:[],
                imgFile:'',
                saveCategory:{
                    name: '',
                    mobileName: '',
                    parentId: 0,
                    level: 1,
                    sortOrder: 0,
                    isShow: 1,
                    image: "",
                    isHot: 0,
                    catGroup: 0,
                    commissionRate: 0
                },
                dialog:false,
                result:'',
            }
        },
        created() {
            this.getTopCategory()
            this.saveCategory=this.$route.query.goodsCategory
            this.setTopCategory();
        },
        watch:{
            selectedTopCategory(val){
                this.selectedGoodsCategory=''
                for (const category of this.topCategoryList) {
                    if (category.name === val){
                        this.saveCategory.parentId=category.id
                        this.saveCategory.level = 2
                        this.getGoodsCategory(category.id)
                        return
                    }
                }
            },
            selectedGoodsCategory(val){
                for (const category of this.goodsCategoryList) {
                    if (category.name === val){
                        this.saveCategory.parentId =category.id
                        this.saveCategory.level = 3
                        return
                    }
                }
            }
        },
        methods:{
            // 获取顶级分类
            getTopCategory(){
                request({
                    url:'/api/shop-manager/goods/category/topCategory'
                })
                .then(resp =>{
                    this.topCategoryList = resp.data;
                    for (const category of this.topCategoryList) {
                        this.topCategory.push(category.name)
                    }
                })
                .catch(err =>{})
            },
        //    获取次级分类
            getGoodsCategory(parentId){
                this.goodsCategory = []
                request({
                    url:'/api/shop-manager/goods/category/secondaryCategory',
                    params:{
                        parentId:parentId
                    }
                })
                .then(resp =>{
                    this.goodsCategoryList = resp.data;
                    for (const category of this.goodsCategoryList) {
                        this.goodsCategory.push(category.name)
                    }
                })
                .catch(err =>{})
            },

            // 保存分类
            saveGoodsCategory(){
                request({
                    url:'/api/shop-manager/goods/category/addCategory',
                    params:{
                        name: this.saveCategory.name,
                        mobileName: this.saveCategory.mobileName,
                        parentId: this.saveCategory.parentId,
                        level: this.saveCategory.level,
                        sortOrder: this.saveCategory.sortOrder,
                        isShow: this.saveCategory.isShow,
                        image: this.saveCategory.image,
                        isHot: this.saveCategory.isHot,
                        catGroup: this.saveCategory.catGroup,
                        commissionRate: this.saveCategory.commissionRate,
                    }
                })
                .then(resp =>{
                    this.dialog = true
                    this.result = resp.data.message;
                })
                .catch(err =>{})
            },
            //图片上传
            uploadImage(){
                let param = new FormData();
                param.append("file",this.imgFile);
                axios.post('/api/shop-manager/goods/category/upload',
                    param,{headers:{'Content-Type':'multipart/form-data'}})
                    .then(resp=>{
                        this.saveCategory.image=resp.data;
                        console.log(resp.data)
                    })
                    .catch(err =>{})
            },
            setTopCategory(){
                if (this.saveCategory.level===1){
                    return;
                }else if (this.saveCategory.level===2){
                    this.selectedGoodsCategory=''
                    for (const category of this.topCategoryList) {
                        if (category.id === this.saveCategory.parentId){
                            this.selectedGoodsCategory=this.saveCategory.name
                            return;
                        }
                    }
                }else {
                    // this.selectedGoodsCategory=''
                    // for (const category of this.topCategoryList) {
                    //     if (category.id === this.saveCategory.parentId){
                    //         this.selectedGoodsCategory=this.saveCategory.name
                    //         return;
                    //     }
                    // }
                }

            }
        }
    }
</script>

<style scoped>

</style>
