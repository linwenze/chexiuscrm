<template>
  <div>

    <div class="top-table">
        <TopTable @tabSearch='searchTable' :topTableData=topTableData></TopTable>
    </div>
    <div class="mar-l-r30 bg-white">
      <div class="mar-l-r16">
        <dataTablenosee :table="dataTable" @searchTable='searchTable' @onHandleSelectionChange="handleSelectionChange" @handleSee="handleSee">
          <div slot="buttons" class="followmanall">
            <el-button type="primary" size="medium" round  @click="exportFile()">全部</el-button>
            <div class="followman">跟进人</div>
            <el-button round class="followzh">审核专用账号(50)</el-button>
          </div>

          <template slot-scope="props" slot="name">
            <a class="template-username" :href="'/market/softTemplate?mobile=' + props.obj.row.name" target="_blank">{{ props.obj.row.name }}</a>
          </template>
          <template slot-scope="props" slot="tel">
            <a class="template-username" :href="'/market/softTemplate?mobile2=' + props.obj.row.tel" target="_blank">{{ props.obj.row.tel }}</a>
          </template>
        </dataTablenosee>
      </div>
    </div>
  </div>
</template>
<script>
import { dataTablenosee } from "@/components/common/dataTable";
import { searchBar } from "@/components/common/searchBar";
import { SubNavView } from "@/components/common/subNavView"
import TopTable from "../../layout/TopTable"

import { mapMutations, mapState } from 'vuex'
export default {
  components: {
   dataTablenosee,
    searchBar,
    TopTable

  },
  data() {
    return {
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
    

    exportFile() {
      alert('导出')
    },

    initTable() {

      this.dataTable = {
        tr: [{
            id: '1',
            label: '本次跟进时间',
            prop: 'addtime',
            show: 'template',
            className: 'name'
          },
          {
            id: '2',
            label: '客流编码',
            show: 'template',
            prop: 'id'
          },
          {
            id: '3',
            label: '意向级别',
            prop: 'level_name'
          },
          {
            id: '4',
            label: '意向车型',
            prop: 'log_car_name'
          },
          {
            id: '5',
            label: '发生事件',
            prop: 'behavior_name3[event]'
          },
          {
            id: '6',
            label: '通话时长(普)',
            prop: 'phone_log',
            minWidth: '150'
          },
          {
            id: '7',
            label: '下次跟进时间',
            prop: 'next_revisit_time',
            minWidth: '150'
          },
          {
            id: '8',
            label: '跟进人',
            prop: 'au_name'
          },
           {
            id: '9',
            label: '跟进标签',
            prop: 'tags'
          },
           {
            id: '10',
            label: '备注',
            prop: 'content'
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
          url: 'crownpin.Followinfo', //快捷搜索的方法名称
          width: '260', //快捷搜索输入框宽度
          placeholder: '客户名称、手机号', //快捷搜索输入框提示文字
          displayCol: ['name', 'tel'] //弹出需要显示的列
        },
        operation: { // 操作功能
          //label: '操作', // 操作列的行首文字
          width: '80', // 操作列的宽度
          className: 'text-center', // 操作列的class名
          
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
        this.$fetch.crownpin.qianke().then((res) => {
          this.closeLoading(); //关闭加载中
        
          this.topTableData =res.data.tabs
     
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
.followmanall{
  display:flex;
  justtify-content:center;
  align-item:center;

}
.followman{
  font-size:14px;
  height:40px;
  line-height:40px;
  padding:0 10px 0 20px;
}
.followzh{
  color:#1494eb;
  border-color: #1494eb;
}
</style>
