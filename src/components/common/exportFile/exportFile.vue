<template>
  <div class="export">
    <el-button type="primary f-l" size="medium" round icon="el-icon-search" @click="exportFile()">导出</el-button>
    <div class="f-l">
      <div class="blue" v-if="progress!='100%'">
        正在下载文件{{progress}}......
      </div>
      <a  class="blue" v-if="progress=='100%'" @click="download()">
        下载导出文件
    </a>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'
import moment from 'moment';
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
    filter: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  data() {
    return {
      progress: 0

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
        const { code, data, msg } = res;
        if (data.callback == 'handle') {
          this.$fetch.common.handle({ taskHash: data.taskHash })
        } else if (data.callback == 'queue') {
          this.warning('任务已排队，请耐心等待');
        }
        this.loopGetProgress(res.data.taskHash)
        this.closeLoading(); //关闭加载中
      }).catch((err) => {
        this.closeLoading();
      })
    },
    //获取进度条
    getProgress(taskHash) {
      let parma = { taskHash };
      return this.$fetch.common.progress(parma).then((res) => {
        const { code, data, msg } = res;
        this.taskHash = data.taskHash
        this.progress = res.data.progress;
        return data && data.progress
        this.closeLoading(); //关闭加载中
      }).catch((err) => {
        return 'error'
        this.closeLoading();
      })
    },
    loopGetProgress(taskHash) {
      this.getProgress(taskHash).then(progress => {
        if (progress != '100%' && progress != 'error') {
          this.timerId = this.$timeout(() => {
            this.loopGetProgress(taskHash);
          }, 3000);
        } else if (progress == 'error') {
          Object.assign(this.StoreService[this.currentTask], { //获取进度有问题给出提示
            progress: 'error'
          })
          this.StoreService[this.currentTask].finished = true; //标记任务完成
        } else {
          this.taskFinshed();
        }
      });
    },
    //导出结束
    taskFinshed() {

    },
    //参数设置
    getParma() {
      let parma = {}
      let select = this.config.select
      if (select && select.length > 0) {
        let ids = [];
        let idName = this.config.idName;
        for (let i = 0; i < select.length; i++) {
          ids.push(select[i][idName])
        }
        parma.ids = ids;
      }
      parma.taskType = this.config.taskType;
      console.log(parma)
      return parma;
    },
    //下载文件
    download() {
      let parma = { taskHash: this.taskHash }
      let options={};
      if (this.config && !this.config.isFile) {
        options = { responseType: 'arraybuffer' };
      }
      this.$fetch.AJAX('POST', '/common/export/download', parma,options).then((response) => {
        this.LoadingService.show = false;
        if (this.config && response && response.code == 200) {
          this.downloadUrl = response.data.file_url;
          console.log('下载地址:' + this.downloadUrl);
          return;
        }
        this.closeLoading(); //关闭加载中
      }).catch((response) => {
        const blob = new Blob([response], { type: 'application/ms-excel' });
        this.createForDownloadFile(blob, this.config.fileName, this.config.ext || 'xlsx');
        this.closeLoading();
      })

    },
    //创建链接下载
    createForDownloadFile(blob, fileName, ext = 'xlsx') {
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = `${fileName}-${moment().format('YYYYMMDDHHmmss')}.${ext}`;
      a.textContent = 'export data';
      a.style.textIndent = '-1000px';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
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
