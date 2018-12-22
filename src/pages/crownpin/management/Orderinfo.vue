<template>
  <div>

    <div class="top-table">
        <TopTable @tabSearch='searchTable' :topTableData=topTableData></TopTable>
    </div>
    
    <div class="mar-l-r30 bg-white">
         <div class="baseinfo">
            <el-row>
                <el-col :span="12">
                  <div class="grid-content_title">
                      <h1><i class="el-icon-caret-right"></i>基本资料</h1>
                      <div class="demo-input-suffix"></div>
                  </div>  
                    <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">姓名:</div></el-col>
                      <el-col :span="8"><div class="grid-content "><el-input placeholder="朱一龙"v-model="input10"clearable></el-input></div></el-col>
                    </el-row>
                    <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">性别:</div></el-col>
                      <el-col :span="8"><div class="grid-content grid-content-right "><el-radio v-model="radio" label="1">男</el-radio>
  <el-radio v-model="radio" label="2">女</el-radio></div></el-col>
                    </el-row>
                    <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">手机号码:</div></el-col>
                      <el-col :span="8"><div class="grid-content "><el-input placeholder="12345678901"v-model="input10"clearable></el-input></div></el-col>
                    </el-row>
                    <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">出身日期:</div></el-col>
                      <el-col :span="9"><div class="grid-content "> <el-date-picker v-model="value1" size="large" type="date" placeholder="选择日期"></el-date-picker></div></el-col>
                    </el-row>
                    <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">身份证:</div></el-col>
                      <el-col :span="9"><div class="grid-content "><el-input placeholder="430521198708116587"v-model="input10"clearable></el-input></div></el-col>
                    </el-row>
                    <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">保有车型:</div></el-col>
                      <el-col :span="9"><div class="grid-content ">
                          <el-row>
                            <el-col :span="20"><div class="grid-content-left grid-content-leftmain">EH系列 2017款 EH300 尊享版</div></el-col>
                            <el-col :span="4"><div class="grid-content-right grid-content-rightmain ">请选择</div></el-col>
                          </el-row>
                      </div></el-col>
                    </el-row>
                    <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">居住地址:</div></el-col>
                      <el-col :span="9"><div class="grid-content ">
                          <el-row>
                            <el-col :span="20"><div class="grid-content-left grid-content-leftmain">深圳市南山区高兴科技园大冲国际商务</div></el-col>
                            <el-col :span="4"><div class="grid-content-right grid-content-rightmain ">请选择</div></el-col>
                          </el-row>
                      </div></el-col>
                    </el-row>
                     <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">年龄段:</div></el-col>
                      <el-col :span="9">
                        <div class="grid-content ">
                          <el-select v-model="value" placeholder="请选择">
                              <el-option  v-for="item in options" :key="item.value" :label="item.label":value="item.value"></el-option>
                          </el-select>
                       </div>
                       </el-col>
                    </el-row>
                    <el-row class="rowmbottom10">
                      <el-col :span="3"><div class="grid-content-left">客户标签:</div></el-col>
                      <el-col :span="9"><div class="grid-content ">
                          <el-row>
                            <el-col :span="20"><div class="grid-content-left grid-content-leftmain"><el-button  size="small" >张三<i class="el-icon-close el-icon--right"></i></el-button><el-button  size="small" >张三<i class="el-icon-close el-icon--right"></i></el-button></div></el-col>
                            <el-col :span="4"><div class="grid-content-right grid-content-rightmain ">请选择</div></el-col>
                          </el-row>
                      </div></el-col>
                    </el-row>
                  
                </el-col>
                <el-col :span="12">
                   <div class="grid-content">
                         <div class="grid-content_title">
                            <h1><i class="el-icon-caret-right"></i>意向资料</h1>
                            <div class="demo-input-suffix"></div>
                        </div>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">意向级别:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">C</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">意向车型:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">EH系列 2017款 EH300 尊享版</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">车型颜色:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">潮流灰</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">客户来源:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">微信</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">竞争车型:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">--</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">购车用途:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">--</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">购买类型:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">--</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">购车关注点:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">--</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">是否贷款:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">是</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">客户描述:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">到店</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                        <el-row class="rowmbottom10">
                          <el-col :span="3"><div class="grid-content-left">自定义字段:</div></el-col>
                          <el-col :span="21"><div class="grid-content ">
                              <el-row>
                                <el-col :span="20"><div class="grid-content-left grid-content-leftmain">--</div></el-col>
                              </el-row>
                          </div></el-col>
                        </el-row>
                   </div>
                </el-col>
            </el-row>
         </div>
         <div class="buttongrounp"><el-button type="primary" round icon="el-icon-edit" v-if="editishidden" @click="showsavecance">编辑</el-button><el-button type="primary" round  @click="showedit" v-if="saveiscancer">保存</el-button><el-button round class="changcolor" @click="showedit"  v-if="saveiscancer">取消</el-button><el-button round icon="el-icon-search" class="changcolor">查看档案日志</el-button></div>
    </div>

  </div>
</template>
<script>
import { dataTable } from "@/components/common/dataTable";
import { searchBar } from "@/components/common/searchBar";
import { SubNavView } from "@/components/common/subNavView"
import TopTable from "../../layout/TopTable"

import { mapMutations, mapState } from 'vuex'
export default {
  components: {
    dataTable,
    searchBar,
    TopTable,
    SubNavView
  },
  data() {
    return {
      editishidden:false,
      saveiscancer:true,
      formOption: {accoutOptions:[],advisor:{},typeOptions:[],over_timeOptions:[],sourceone:[],sourcetwo:[]},
      filter: {
        page: 1,
        drive:[],
        send:[],
        tab: 0,
        per_page: 10,
        advisor_id:"",
        gw:'',
        level:'',
        sourceone:'',
        sourcetwo:''
      },
      value6: '',
      dataTable: {},
      topTableData:{},
      searchIsOpen:true,
      //showsearchoption:[]
    }
  },
  created() {
    this.initTable();
    this.searchTable();
    this.getAccount();
    this.initTopTable()
    
  },
  methods: {
    ...mapMutations(['closeLoading']),
    
   searchTable(){},
    exportFile() {
      alert('导出')
    },

    //点击保存取消按钮显示编辑
    showedit(){
         this.editishidden = true;
         this.saveiscancer = false;
    },
    //点击编辑显示保存取消按钮
    showsavecance(){
      this.editishidden = false;
      this.saveiscancer = true;
    },
    initTable() {

      this.dataTable = {
        tr: [{
            id: '1',
            label: '客户姓名',
            prop: 'name',
            show: 'template',
            className: 'name'
          },
          {
            id: '2',
            label: '客户电话',
            show: 'template',
            prop: 'tel'
          },
          {
            id: '3',
            label: '预约车型',
            prop: 'style'
          },
          {
            id: '4',
            label: '发起预约时间',
            prop: 'addtime'
          },
          {
            id: '7',
            label: '到店时间',
            prop: 'confirm_at'
          },
          {
            id: '8',
            label: '试驾时间',
            prop: 'drive_at',
            minWidth: '150'
          },
          {
            id: '9',
            label: '智能试驾',
            prop: 'lincense_info',
            minWidth: '150'
          },
          {
            id: '10',
            label: '销售顾问',
            prop: 'advisor_name'
          }, {
            id: '11',
            label: '处理时长',
            prop: 'when_long'
          },
          {
            id: '12',
            label: '状态',
            prop: 'statusText'
          }
        ],
        data: [],
        page: {},
        hasSelect: true, //是否有复选框
        hasExpand: false, //是否有收缩功能
        hasFirstPagination: true, //是否有第一条分页条
        hasOperation: true,
        search: {
          show: true,
          url: 'crownpin.shijia', //快捷搜索的方法名称
          width: '260', //快捷搜索输入框宽度
          placeholder: '客户名称、手机号', //快捷搜索输入框提示文字
          displayCol: ['name', 'tel'] //弹出需要显示的列
        },
        operation: { // 操作功能
          label: '操作', // 操作列的行首文字
          width: '80', // 操作列的宽度
          className: 'text-center', // 操作列的class名
          data: [ // 操作列数据
            {
              label: '查看', // 按钮文字
              Fun: 'handleSee', // 点击按钮后触发的父组件事件
              size: 'mini', // 按钮大小
              icon: '', //图标
              type: 'primary',
              id: '1' // 按钮循环组件的key值
            }
          ]
        }

      }
    },
    handleSelectionChange() {},
    searchIshidden(){
      this.searchIsOpen = !this.searchIsOpen
    },
    //获取菜单列表
    getAccount() {
      this.$fetch.common.getAccount({
        all: 1,
        roleId: '6,7,22',
        unbind: '9'
      }).then((res) => {
        this.formOption.accoutOptions = res.data.list.data;
        this.closeLoading(); //关闭加载中
      }).catch((err) => {
        this.closeLoading();
      })
    },
    //搜索回调
    find() {
      //时间参数处理
      this.filter.drive_start_at=this.filter.drive[0];
      this.filter.drive_end_at=this.filter.drive[1];
       this.filter.start_at=this.filter.send[0];
      this.filter.end_at=this.filter.send[1];
      this.filter.advisor_id=this.formOption.advisor.accountId;
      this.searchTable()
    },
    //清除搜索条件
    clear() {
      this.filter = {page: 1,
        drive:[],
        send:[],
        tab: 0,
        per_page: 10};
        this.formOption.advisor={};
      this.searchTable()
    },
    // handleSync(){
    // },
    /**
     * @param OBJECT [参数]
     * parma.searchData OBJECT 快捷搜索返回结果
     */
    searchTable(parma) {
      if (parma && parma.searchData) {
        this.dataTable.data = [parma.searchData];
      } else {
        Object.assign(this.filter, parma)
        this.$fetch.crownpin.qianke(this.filter).then((res) => {
          this.closeLoading(); //关闭加载中
          this.dataTable.data = res.data.list.data;//表格所需数据
          this.dataTable.page = res.data.list.page;//表格所需数据
          this.topTableData =res.data.tabs
          this.formOption.typeOptions=res.data.search.type.enum;//下拉列表智能试驾列表
          this.formOption.over_timeOptions=res.data.search.over_time.enum;//下拉列表是否超时列表
          //this.showsearchoption = this.formOption.accoutOptions;
        }).catch((err) => {
          this.closeLoading();
        })
      }
    },
    
    initTopTable(){
      this.$fetch.crownpin.qianke(this.filter).then((res) => {
          //this.closeLoading(); //关闭加载中
          //this.dataTable.data = res.data.list.data;//表格所需数据
          //this.dataTable.page = res.data.list.page;//表格所需数据
          this.topTableData =res.data.tabs
         // this.formOption.typeOptions=res.data.search.type.enum;//下拉列表智能试驾列表
         // this.formOption.over_timeOptions=res.data.search.over_time.enum;//下拉列表是否超时列表
        }).catch((err) => {
          //this.closeLoading();
        })
    },
    /*
    @param idx Number 表下标
    row Object 当前行数据
    id String 行ID
     */
    handleSee(idx, row, id) {
      alert(idx)
    }
  },
  computed: {
    ...mapState(['userInfo']),
  }
};

</script>
<style lang="scss" scoped> 
.crownpin-top {
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .05);
  margin: 0 30px 20px;
  height: 50px;
  line-height: 50px;
  padding-right: 15px;
}
.searchClose{
  padding:0 20px 20px;
}
.searchClose ul li{

    font-size:14px;
    border:1px solid #d3d8db;
    list-style:none;
    display:inline;
    padding: 10px;
    margin-right:15px;
}
.el-tabs__header{
  margin:0 !important;
}
.baseinfo{
  padding:34px 16px;
}
.grid-content_title h1{
  color:#1494ed;
  font-size:14px;
  background:#eef3f9;
  margin-right:20px;
  height:40px;
  line-height:40px;
}
.grid-content_title h1 i{
  font-size:18px;
}
.grid-content-left{
  text-align: right;
  margin-right:6px;
  line-height:40px;
  font-size:13px;
  color:#454545;
}
.grid-content_title{
  margin-bottom:36px;
}
.grid-content-right{
  height:40px;
  line-height:40px;
}
.rowmbottom10{
  margin-bottom:20px;
}
.grid-content-leftmain{
  text-align: left;
}
.grid-content-rightmain{
  font-size:14px;
  text-decoration: underline;
  cursor:pointer;
  color:#1593e8;
}
.buttongrounp{
  width:100%;
  display:flex;
  justify-content:center;
  align-item:center;
  padding-bottom:30px;
}
.changcolor{
  border-color:#1494eb;
  color:#1494eb;
}
</style>
