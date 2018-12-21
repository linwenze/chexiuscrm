<template>
  <div class="export">
    <el-button type="primary f-l" size="medium" round icon="el-icon-search" @click="exportFile()">导出</el-button>
    <div class="f-l">
      <div class="blue" v-if="progress!='100%'">
        正在下载文件{{progress}}......
      </div>
       <a  class="blue" v-if="progress=='100%'">
        下载导出文件
    </a>
    </div>
  </div>
</template>
<script>
import { mapMutations,mapActions,mapState } from 'vuex'
export default {
  props: {
    config: {
      type: Object,
      default () {
        return {
          taskType: '',
          fileName: '',
          idName: 'id',
          select: [], //选中的行
          ext: 'csv'
        }
      }
    },
    filter:{
      type: Object,
      default () {
        return {
        }
      }
    },
  },
  data() {
    return {
     progress:0

    };
  },
  methods: {
    ...mapMutations(['closeLoading']),
    ...mapActions([
      'warning', 
    ]),
    exportFile() {
      let parma = this.getParma();
      this.$fetch.common.newtask(parma).then((res) => {
        const {code, data, msg} = res;
        if(data.callback == 'handle'){
          this.$fetch.common.handle({taskHash: data.taskHash})
        }else if(data.callback == 'queue'){
          this.warning('任务已排队，请耐心等待');
        }
        this.getProgress(res.data.taskHash)
        this.closeLoading(); //关闭加载中
      }).catch((err) => {
        this.closeLoading();
      })
    },
    //获取进度条
    getProgress(taskHash){
      let parma={taskHash};
      this.$fetch.common.progress(parma).then((res) => {
        this.progress=res.data.progress;
        this.closeLoading(); //关闭加载中
      }).catch((err) => {
        this.closeLoading();
      })
    },
    getParma() {
      let parma = {}
      let select=this.config.select
      if(select && select.length>0){
        let ids=[];
        let idName=this.config.idName;
        for(let i=0;i<select.length;i++){
          ids.push(select[i][idName])
        }
        parma.ids=ids;
      }
      parma.taskType=this.config.taskType;
      console.log(parma)
      return parma;

    }
  },
  created() {


  }

};

</script>
<style>
a.blue:hover {
  color: #409EFF;
}

.export .blue {
  line-height: 36px;
  margin-left: 16px;
}

</style>
