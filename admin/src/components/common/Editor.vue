<template>
    <div class="editor">
      <input type="text" class="title" id="title" v-model="title" @input="autosave">
      <div class="operate-bar">
        <section class="tag-container">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tag"></use>
          </svg>
          <ul class="tags">
            <el-tag :key="index" v-for="tag,index in getTags" closable :disable-transitions="false" @close="handleClose(index)">
              {{tag}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </ul>
        </section>
        <section class="btn-container">
          <el-row>
            <el-tooltip class="item" effect="dark" content="发布这篇文章" placement="top-start">
              <el-button type="success" round @click="publishArticle">发布文章</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除这篇文章" placement="top-start">
              <el-button type="danger" round @click="deleteArticle">删除文章</el-button>
            </el-tooltip>
          </el-row>
        </section>
      </div>
      <p class="tips">标签查询页面只能批量更改标签，修改的文章内容会自动保存</p>
      <div class="content">
        <textarea></textarea>
      </div>
    </div>
</template>
<script>
    //引入message
    import { Message } from 'element-ui';
    //引入编辑器
    import 'simplemde/dist/simplemde.min.css'
    import SimpleMDE from 'simplemde'
    import { mapState,mapGetters } from 'vuex'
    //引入debounce方法
    import debounce from 'lodash.debounce'
    //引入发请求方法
    import request from '@/utils/request'
    export default {
        name: "Editor",
        data(){
          return {
            simplemde:'', //编辑器
            showTags:false,//默认是不显示的
            inputVisible: false,
            inputValue: ''
          }
        },
        computed:{
          ...mapState(['id','tags','content','isPublished']),
          ...mapGetters(['getTags']),
          //因为这个title是数据双向绑定的，因此，它可能会被改变，如果我们直接从mapState中读取它的话
          //那么如果改变title的话，又因为它没有setter方法，就会导致无法直接改变state中的title.
          title:{
            get(){
              return this.$store.state.title
            },
            set(value){
              this.$store.commit('SET_TITLE',value)
            }
          }
        },
        mounted(){
          this.simplemde = new SimpleMDE({
            placeholder:'Talk to me , what are you say...',
            spellChecker:false,
            toolbarTips: false,
          });
          //将vuex里面的正在编辑的文章的相关信息输出到编辑器里面
          this.simplemde.value(this.content)
          //绑定编辑器的按键事件以及复制、黏贴的事件发生
          this.simplemde.codemirror.on('keyHandler',()=>this.autosave())
          this.simplemde.codemirror.on('inputRead',()=>this.autosave())
        },
        //监控ID值的变化，如果一旦发生变化，就直接将内容变化
        watch:{
          id(newVal,oldVal){
            this.simplemde.value(this.content)
          }
        },
        methods:{
          //避免发请求的次数过多....
          autosave:debounce(function(){
            if(this.id){
              this.$store.dispatch('saveArticle',{
                id:this.id,
                title:this.title,
                tags:this.getTags.join(','),
                content:this.simplemde.value(),
                isPublished:this.isPublished
              })
            }
          },1000),
          //删除文章
          deleteArticle(){
            request({
              url:`/articles/${this.id}`,
              method:'delete',
              data:{}
            }).then(res=>{
              //删除以后，要更新视图，让视图中的文章也跟着删除.
              this.$store.commit('SET_DELETE_ARTICLE')
              const h = this.$createElement;
              this.$message({
                showClose: true,
                message: '删除成功',
                type: 'success'
              });
            }).catch(err=>{
              console.log(err)
            })
          },
          //发布文章
          publishArticle(){
            if(!this.isPublished){
              request({
                url:`/articles/publish/${this.id}`,
                method:'put',
                data:{}
              }).then(res=>{
                this.$store.commit('SET_PUBLISH_STATE')
                this.$message({
                  showClose: true,
                  message: '发布成功',
                  type: 'success'
                });
              }).catch(err=>{
                console.log(err)
              })
            }
          },
          //删除标签
          handleClose(index) {
            this.getTags.splice(index,1)
            //每次按下enter键的时候，会自动
            this.autosave()
          },
          //添加标签
          showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
              this.$refs.saveTagInput.$refs.input.focus();
              this.autosave()
            });
          },
          handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
              this.getTags.push(inputValue);
              this.autosave()
            }
            this.inputVisible = false;
            this.inputValue = '';
          }
        }
        }
</script>

<style type="text/scss" lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../../assets/style/variable';
  .title {
    margin-bottom: 0.3em;
    width: 100%;
    height: 2em;
    border: none;
    font-size: 2.4rem;
    color: $title;
    outline: none;
    border-bottom: 1px solid $special;
    background: none;
    text-align: center;
  }
  .operate-bar {
    @include flex($justify: space-between);
    height: 4em;
    font-size: 1.3rem;
    margin-bottom: 1em;
    .tag-container {
      @include flex($justify: flex-start);
      .icon {
        width: 1.5em;
        height: 1.5em;
        margin-right: 10px;
      }
      .tags {
        @include flex;
        list-style: none;
        margin-right: 10px;
        padding: 0;
        .tag {
          margin-right: 10px;
          color: $base;
          position: relative;
          &:last-child {
            margin-right: 0px;
          }
        }
      }
      .tag-add {
        font: {
          weight: 600;
          size: 1.6rem;
        }
        color: $special;
        cursor: pointer;
      }
    }
  }
  .tips {
    color: $quote;
    text-align: center;
  }
  .content {
    font-size: 1.6rem;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
