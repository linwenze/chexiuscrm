<template>
  <div>

    <search-bar @find="find" @clear="clear" @searchIshidden=searchIshidden>

      <template slot="searchFilter">
        <div class="searchOpen" v-if="searchIsOpen">
          <el-row class="m-b-30">
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="5" class="search-lable">创建时间</el-col>
                <el-col :span="19">
                  <el-date-picker size="small" :clearable="false"  v-model="filter.addtime" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">最后跟进</el-col>
                <el-col :span="17">
                  <el-date-picker size="small" :clearable="false"  v-model="filter.last_follow_time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">跟进标签</el-col>
                <el-col :span="17">
                  <select v-model="filter.customer_tags">
                   <!--  <option v-for="option in formOption.accoutOptions" v-bind:value="option.accountId">
                      {{ option.nickname }}
                    </option> -->
                     <option v-for="(option,key) in formOption.lasttag" v-bind:value="key">
                      {{ option}}
                    </option>
                  </select>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">意向品牌</el-col>
                <el-col :span="17">
                  <select v-model="filter.carpp">
                   <!--  <option v-for="option in formOption.accoutOptions" v-bind:value="option.accountId">
                      {{ option.nickname }}
                    </option> -->
                     <option v-for="option in formOption.cartype" v-bind:value="option.id">
                      {{ option.title}}
                    </option>
                  </select>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row class="m-b-30">
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="5" class="search-lable">意向车型</el-col>
                <el-col :span="19">
                  <select v-model="filter.car_name">
                    <option v-for="option in formOption.cartype" v-bind:value="option.id">
                      {{ option.title}}
                    </option>
                  </select>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">资料是否完善</el-col>
                <el-col :span="17">
                  <select v-model="filter.iscomplete">
                    <option v-for="option in formOption.iscomplete" v-bind:value="option.id">
                      {{ option.title }}
                    </option>
                  </select>
                </el-col>

              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">销售顾问</el-col>
                <el-col :span="17">
                  <select v-model="filter.advisor_name">
                   <!--  <option v-for="option in formOption.accoutOptions" v-bind:value="option.accountId">
                      {{ option.nickname }}
                    </option> -->
                     <option v-for="option in formOption.advisor" v-bind:value="option">
                      {{ option.nickname }}
                    </option>
                  </select>
                </el-col>
                
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="7" class="search-lable">意向等级</el-col>
                <el-col :span="17">
                  <select v-model="filter.iscomplete">
                    <option v-for="option in formOption.level" v-bind:value="option.id">
                      {{ option.title }}
                    </option>
                  </select>
                </el-col>
                
              </el-row>
            </el-col>

          </el-row>
          <el-row class="m-b-30">
            <el-col :span="6">
              <el-row type="flex" align="middle">
                <el-col :span="5" class="search-lable">客户来源</el-col>
                <el-col :span="9">
                  <select v-model="filter.sourceone" placeholder="一级来源">
                    <option v-for="option in formOption.sourceone"  v-bind:value="option">
                      {{ option }}
                    </option>
                  </select>
                </el-col>
                <el-col :span="9">
                  <select v-model="filter.sourcetwo" placeholder="二级来源">
                    <option v-for="option in formOption.sourcetwo" v-bind:value="option">
                      {{ option }}
                    </option>
                  </select>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <!--收起时显示的内容start-->
        <!-- <div class="searchClose" v-if="false">
             <ul>
               
               
               <li v-if="filter.addtime !=false">{{filter.addtime |normalTime}}</li>
               <li v-if="filter.last_follow_time !=false">{{filter.last_follow_time |normalTime}}</li>
               <li v-if="filter.customer_tags !=undefined">{{filter.customer_tags}}</li>
               <li v-if="formOption.accoutOptions && formOption.advisor.nickname">{{formOption.advisor.nickname}}</li>
               <li v-if="filter.customer_tags !=undefined"></li>
               <li v-if="filter.customer_tags !=undefined"></li>
               <li v-if="filter.customer_tags !=undefined"></li>
               
               <li v-if="filter.keyword !=undefined">{{filter.keyword}}</li>

             </ul>
        </div> -->
        <!--收起时显示的内容end-->

      </template>
    </search-bar>
    <div class="mar-l-r30 bg-white">
      <div class="mar-l-r16">
        <data-table :table="dataTable" @searchTable='searchTable' @onHandleSelectionChange="handleSelectionChange" @handleSee="handleSee">
          <div slot="buttons">
            <el-button type="primary" size="medium" round icon="el-icon-upload2" @click="importFile">导入客户</el-button>
            <el-button type="primary" size="medium" round icon="el-icon-download" @click="exportFile()">导出</el-button>
            <el-button type="primary" size="medium" round icon="el-icon-setting" @click="exportFile()">分配</el-button>
          </div>

          <template slot-scope="props" slot="name">
            <a class="template-username" :href="'/market/softTemplate?mobile=' + props.obj.row.name" target="_blank">{{ props.obj.row.name }}</a>
          </template>
          <template slot-scope="props" slot="tel">
            <a class="template-username" :href="'/market/softTemplate?mobile2=' + props.obj.row.tel" target="_blank">{{ props.obj.row.tel }}</a>
          </template>
        </data-table>
      </div>
    </div>
    <Drqk v-if="drqkisshow"></Drqk>
    <QkfpView v-if=false></QkfpView>
  </div>
</template>
<script>
import { dataTable } from "@/components/common/dataTable";
import { searchBar } from "@/components/common/searchBar";
import { SubNavView } from "@/components/common/subNavView"
import Drqk from "./dialog/drqk"
import QkfpView from "./dialog/Qkfp"
import Qkcareful from "./dialog/Qkcareful"
import { mapMutations, mapState } from 'vuex'
export default {
  components: {
    dataTable,
    searchBar,
    Drqk,
    QkfpView

  },
  data() {
    
    return {
      drqkisshow:false,
      formOption: {accoutOptions:[],typeOptions:[],over_timeOptions:[],customer_tags:{},iscomplete:{},level:{},cartype:{},lasttag:{},sourceone:[],sourcetwo:[],advisor:[]},
      filter: {
        page: 1,
        addtime:[],   //创建时间
        last_follow_time:[],  //最后跟进
        customer_tags:'',       //跟进标签
        advisor_name:"",   //销售顾问
        car_name:'',      //意向车型
        sourceone:"",     //意向来源一
        sourcetwo:"",    //意向来源二
        carpp:"",          //品牌车型
        iscomplete:'',     //客户来源
        tab: 0,
        levelName:" ",    //意向等级
        per_page: 10,
       
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
    

    
  },
  methods: {
    ...mapMutations(['closeLoading']),
    
    importFile(){
      this.drqkisshow = true;
    },
    exportFile() {
      alert('导出')
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
            id: '4',
            label: '关联粉丝',
            show: 'template',
            prop: 'wechat_name'
          },
          {
            id: '3',
            label: '预约车型',
            prop: 'car_name'
          },
          {
            id: '2',
            label: '客户电话',
            prop: 'tel'
          },
          {
            id: '5',
            label: '客户来源',
            prop: 'source'
          },
          {
            id: '6',
            label: '销售顾问/DCC',
            prop: 'advisor_name',
            minWidth: '150'
          },
          {
            id: '7',
            label: '意向等级',
            prop: 'levelName',
            minWidth: '150'
          },
          {
            id: '8',
            label: '建档时间',
            prop: 'addtime'
          },
           {
            id: '9',
            label: '最后跟进',
            prop: 'last_follow_time'
          },
           {
            id: '10',
            label: '跟进标签',
            prop: 'customer_tags[0].name'
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
          url: 'crownpin.qianke', //快捷搜索的方法名称
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
      this.filter.drive_start_at=this.filter.addtime[0];
      this.filter.drive_end_at=this.filter.addtime[1];
       this.filter.start_at=this.filter.last_follow_time[0];
      this.filter.end_at=this.filter.last_follow_time[1];
      


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
          //this.topTableData =res.data.tabs
          //console.log(res.data.search.is_complete.enum)
           this.formOption.iscomplete = res.data.search.is_complete.enum
           this.formOption.level = res.data.search.level.enum;
           this.formOption.cartype = res.data.search.lost_model_name.enum
           this.formOption.lasttag =res.data.search.last_tag_id.enum
           this.formOption.sourceone = res.data.search.source.enum

           this.formOption.sourcetwo = res.data.search.source_second.enum

           this.forOption.advisor = res.data.search.advisor_id.enum


         

           //console.log(this.formOption.cartype)
          //console.log(res)
          this.dataTable.data = res.data.list.data;//表格所需数据
          this.dataTable.page = res.data.list.page;//表格所需数据
          
         // this.formOption.typeOptions=res.data.search.type.enum;//下拉列表智能试驾列表
         // this.formOption.over_timeOptions=res.data.search.over_time.enum;//下拉列表是否超时列表
          
         
          

          //this.formOption.customer_tags = res.data.search.last_tag_id
          //this.showsearchoption = this.formOption.accoutOptions;
        }).catch((err) => {
          this.closeLoading();
        })
      }
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
}

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
</style>
