<template>
  <div>

    <div class="top-table">
        <TopTable @tabSearch='searchTable' :topTableData=topTableData></TopTable>
    </div>
    <div class="mar-l-r30 bg-white">
      <div class="mar-l-r16">
        <dataTablenosee :table="dataTable" @searchTable='searchTable' @onHandleSelectionChange="handleSelectionChange" @handleSee="handleSee">
          

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
            label: '订单编号',
            prop: 'order_id',
            show: 'template',
            className: 'name'
          },
          {
            id: '4',
            label: '订单车型',
            show: 'template',
            prop: 'car_name'
          },
          {
            id: '3',
            label: '车牌号',
            prop: 'license_plate'
          },
          {
            id: '2',
            label: 'Vin码',
            prop: 'vin'
          },
          {
            id: '5',
            label: '订单金额',
            prop: 'deal_price'
          },
          {
            id: '6',
            label: '购买保险',
            prop: 'is_insurance',
            minWidth: '150'
          },
          {
            id: '7',
            label: '是否贷款',
            prop: 'is_loan',
            minWidth: '150'
          },
          {
            id: '8',
            label: '创建顾问',
            prop: 'create_advisor_name'
          },
           {
            id: '9',
            label: '下定日期',
            prop: 'done_at'
          },
           {
            id: '10',
            label: '交车日期',
            prop: 'order_at'
          },
           {
            id: '11',
            label: '取消日期',
            prop: 'cancel_at'
          }
          ,
           {
            id: '12',
            label: '取消原因',
            prop: 'cancel_remark'
          }
          ,
           {
            id: '14',
            label: '状态',
            prop: 'status'
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
          url: 'crownpin.Ordergl', //快捷搜索的方法名称
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

        this.$fetch.crownpin.Orderlist().then((res) => {
          this.closeLoading(); //关闭加载中
        
            console.log(res.data.list.data)

          this.dataTable.data = res.data.list.data;//表格所需数据
          this.dataTable.page = res.data.list.page;//表格所需数据
     
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
