<template>
  <div id="z-tree" class="flex-col">
    <div class="wrap flex-1">
      <div class="c">
        <vue-magic-tree
          :setting="setting"
          :nodes="nodes"
          @onClick="onClick"
          @onCheck="onCheck"
          @onCreated="handleCreated"
        />
      </div>
    </div>

    <div class="toolbar">
      <button class="btn" type="button" @click="update">更新数据</button>
    </div>

  </div>
</template>

<script>
const bigData = require("@/mock/big-tree.json");
const simpleData = [
  // 设置了节点类型后，就可以显示自定义图标 customType 此名称任意
  { id: 1, pid: 0, name: "随意勾选 1", open: true, customType: 0, chkDisabled: true },
  { id: 11, pid: 1, name: "随意勾选 1-1", open: true, customType: 1},
  { id: 111, pid: 11, name: "随意勾选 1-1-1", },
  { id: 112, pid: 11, name: "随意勾选 1-1-2",  },
  { id: 12, pid: 1, name: "随意勾选 1-2", open: true,  },
  { id: 121, pid: 12, name: "随意勾选 1-2-1", },
  { id: 122, pid: 12, name: "随意勾选 1-2-2",  },
  { id: 2, pid: 0, name: "随意勾选 2", checked: true, open: true, },
  { id: 21, pid: 2, name: "随意勾选 2-1",  },
  { id: 22, pid: 2, name: "随意勾选 2-2", open: true, },
  { id: 221, pid: 22, name: "随意勾选 2-2-1", checked: true, },
  { id: 222, pid: 22, name: "随意勾选 2-2-2",  },
  { id: 23, pid: 2, name: "随意勾选 2-3",  }
];
const dataQueue = [bigData.data, simpleData];
import VueMagicTree from 'vue-magic-tree'
export default {
  name: "app",
  components: {
    VueMagicTree, // 引入组件包
    // tree: resolve => require(["@/components/ztree.vue"], resolve) // 本地引入
  },
  data() {
    return {
      showIndex: 0,
      ztreeObj: null,
      setting: {
        edit: {
          enable: true,
          drag: {
            isMove: true
          },
          showRemoveBtn: false,
          showRenameBtn: false
        },
        check: {
          enable: true,
        },
        data: {
          simpleData: {
            enable: true,
            pIdKey: "pid"
          },
          // 设置图标库(采用iconfont class形式)
          iconMap: {
            0: 'iconjianyuede',
            1: 'icon-xuexiaodanwei',
            2: 'iconhuiyuan'
          },
          // 设置对应每个节点的节点类型，与数据中customType对应(25行)
          key: {
            nodeType: 'customType'
          }
        },
        view: {
          // 开启图标显示功能
          showIcon: true,
          addHoverDom: this.addHoverDom,
          removeHoverDom: this.removeHoverDom,
        },
      }
    };
  },
  computed: {
    nodes: function() {
      return dataQueue[this.showIndex];
    }
  },
  methods: {
    addHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);

      if(item && !item.querySelector('.tree_extra_btn_add')) {
        const add = document.createElement('sapn');
        add.id = `${treeid}_${treeNode.id}_btn_add`;
        add.classList.add('tree_extra_btn_add');
        add.innerText = '添加';
        add.addEventListener('click', (e) => {
          e.stopPropagation()
          this.addNode(treeNode)
        })
        item.appendChild(add)
      }

      if(item && !item.querySelector('.tree_extra_btn')){
        const btn = document.createElement('sapn');
        btn.id = `${treeid}_${treeNode.id}_btn`;
        btn.classList.add('tree_extra_btn');
        btn.innerText = '删除';
        btn.addEventListener('click', (e) => {
          e.stopPropagation()
          this.clickRemove(treeNode)
        })
        item.appendChild(btn);
      }
    },
    removeHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      if(item){
        const btn = item.querySelector('.tree_extra_btn');
        const addBtn = item.querySelector('.tree_extra_btn_add');
        if(btn){
          item.removeChild(btn)
        }
        if(addBtn){
          item.removeChild(addBtn)
        }
      }
    },
    addNode(treeNode) {
      function sum(m,n){
        const num = Math.floor(Math.random()*(m - n) + n);
        return num
      }
      const index = sum(0, 3)
      const newNode = { name: `newNode_${parseInt(Math.random()* 1e5)}`, customType: index }
      this.ztreeObj.addNodes(treeNode, newNode)
    },
    clickRemove(treeNode) {
      console.log('remove', treeNode)
      this.ztreeObj && this.ztreeObj.removeNode(treeNode)
    },
    onClick: function(evt, treeId, treeNode) {
      // 点击事件
      console.log(evt.type, treeNode);
    },
    onCheck: function(evt, treeId, treeNode) {
      // 选中事件
      console.log(evt.type, treeNode);
    },
    handleCreated: function(ztreeObj) {
      this.ztreeObj = ztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      ztreeObj.expandNode(ztreeObj.getNodes()[0], true);
    },
    update: function() {
      // 更新示例数据
      this.showIndex = this.showIndex === 0 ? 1 : 0;
    }
  }
};
</script>

<style>

#z-tree {
  height: 100%;
}

</style>
