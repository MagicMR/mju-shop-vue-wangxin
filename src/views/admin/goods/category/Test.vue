<template>
    <div>
        <v-file-input
                accept="image/*"
                label="上传图片"
                v-model="upfile"
                show-size
        >
            <template v-slot:append-outer>
                <v-icon>mdi-file-upload-outline</v-icon>
                <v-btn text class="pt-0 px-0 mx-0" @click="upload">
                    文件上传
                </v-btn>
            </template>
        </v-file-input>

    </div>
</template>

<script>
    import axios from "axios";
    import Index from "../../../user/Index";

    export default {
        name: "Test",
        components: {Index},
        data:()=>({
            img:'',
            upfile:''
        }),
        watch:{
            img(val){
                console.log(val)
            }
        },
        methods:{
            upload(){
                let param = new FormData();
                param.append("file",this.upfile);
                axios.post('/api/shop-manager/goods/category/upload',
                param,{headers:{'Content-Type':'multipart/form-data'}})
                .then(resp=>{
                    console.log(resp.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
