<template>
	<div id="sale">
		<el-dialog
		  title="导入潜客"
		  :visible.sync="dialogVisible"
		  width="952px" height="486px"
		  :before-close="handleClose">
		  <div class="drqk_content">
		  	<el-row>
			  <el-col :span="22">
			  	 <div class="grid-content drqk_contenttitle">
			  	      <h2>一、导入准备</h2>
			  	      <p>固定格式请参考导入模板，每次导入的潜客数量最大500条(如数据中存在不符合格式的字段，上传文件将无法导入)</p>
			  	      <ul>
			  	      	<li>客户姓名为必填字段</li>
			  	      	<li>客户电话为必填字段</li>
			  	      	<li>销售顾问/DCC为必填字段</li>
			  	      	<li>客户等级请填写:H、A、B、C、O、F、N</li>
			  	      	<li>建档时间请填写格式为:YYYY/MM/DD</li>
			  	      	<li>导入后心仪车型请进行匹配,否则将无法在筛选与统计中显示</li>
			  	      </ul>
			  	      <el-button round icon="el-icon-download" class="downbtn">下载导入模板</el-button>
			  	      <h2>一、上传文件</h2>
			  	      <div class="uploadmain">
			  	      	 <el-button round icon="el-icon-upload2" class="uploadbtn" type="primary">浏览导入文件</el-button>
			  	      	 <span>目前支持的文件类型为XLS、CSV</span>
			  	      </div> 
			  	      
			     </div>
			</el-col>
			  <el-col :span="2"><div class="grid-content "><el-button type="text" class="drrz">导入日志</el-button></div></el-col>
			</el-row>
		  </div>
		  
		</el-dialog>
	</div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          region: ''
        },
        dialogVisible: true
      }
    },
    methods: {
      dialogVisible(){
      	this.dialogVisible=false
      }
    }
  };
</script>
<style>
.el-dialog__header{
	 	font-size:12px;
		padding:24px 30px;
		border-bottom:1px solid #ebeaf0 !important;
	}
	.dialog-center-title{
		padding-left:80px;
		font-size:14px;
		color:#444;
		width:523px;
		line-height:24px;
		padding-bottom:10px;
		
	}
	.dialog-center-title span{
		color:#f06060;
	}
	.dialog-center-selection{

	}

	.el-dialog__title{
		font-size:14px !important;
		color:#444446 !important;
	}
	.el-select{
		display:block !important;
	}
	.el-dialog__body{
		padding:30px 20px 0px !important;
	}
	.el-dialog__footer{
		display:flex;
		justify-content: center;
		align-items: center;
	}
	.el-button.el-button--default.is-round{
		border-color:#1494eb !important;
		color:#1494eb;
	}
	.el-form-item__label{
		color:#454545 !important;
	}
	#sale .el-icon-close{
		font-size:24px;
	}
	.drqk_content{
		width:100%;

	}
	.drqk_contenttitle h2{
		font-size:14px;
	}
	.drqk_contenttitle p{
		padding-left:30px;
		margin-top:15px;
	}
	.drqk_contenttitle ul{
		padding-left:45px;
	}
	.drqk_contenttitle ul li{
		line-height:26px;
	}
	.downbtn,.uploadbtn{
		margin-left:30px;
		margin-top:10px;
		margin-bottom:15px;
	}
	.uploadmain span{
		margin-left:10px;
	}
	.drrz{
		text-decoration: underline;
	}
</style>