## vue-magic-tree

> 牛顿曾言：我之所以这么成功，是因为我站在巨人的肩膀上！

- 本项目建立在 vue-giant-tree 和 ztree ，产出了可以自定义iconfont图标和海量数据渲染的vue-magic-tree!

- 在本项目中的components中就是vue-magic-tree组件，目前没有发布到npm，如需使用单独提出即可。

## 疑问

有任何问题，直接留下issue。


## 掘金

[Element、Iview、Ztree性能对比专栏](https://juejin.im/post/5e17c1615188254bee1b452f)


## 测试地址

线上测试地址：[测试](http://tree.inner.ink/)

## 使用方法

### 引入vue-magic-tree

```js
// 注意此组件依赖jquery
yarn add vue-magic-tree jquery
```
### props配置

> 配置一下settings对象, 传入nodes数组

```html
<vue-magic-tree
  :setting="setting"
  :nodes="nodes"
  @onClick="onClick"
  @onCheck="onCheck"
  @onCreated="handleCreated"
/>
````
除了我自定义的图标功能

```js
setting: {
  data: {
    // 设置图标库(采用iconfont class形式)
    iconMap: {
      0: 'iconjianyuede',
      1: 'icon-xuexiaodanwei',
      2: 'iconhuiyuan'
    },
    // 设置对应每个节点的节点类型，与数据中customType属性对应
    key: {
      nodeType: 'customType'
    }
  },
  view: {
    // 开启图标显示功能
    showIcon: true
  }
}

nodes = [
  { id: 1, pid: 0, name: "随意勾选 1", open: true, customType: 0, chkDisabled: true }
]
```

如上配置，就可以使用iconfont图标库功能，当你的程序运行时，我会找到nodeType为`customType`的属性，也就是上面那条数据中的`customType`属性，拿到它的值为0，然后去iconMap中匹配，将匹配的结果渲染成图标。


没错，流程就是这么简单。


其余所有配置都基于ztree，所以推荐看[ztree官网](http://www.treejs.cn/v3/main.php#_zTreeInfo)

### event

> 事件配置

```js
onAsyncError: (...arg) => {
  this.$emit('onAsyncError', ...arg)
},
onAsyncSuccess: (...arg) => {
  this.$emit('onAsyncSuccess', ...arg)
},
onCheck: (...arg) => {
  this.$emit('onCheck', ...arg)
},
onClick: (...arg) => {
  this.$emit('onClick', ...arg)
},
onCollapse: (...arg) => {
  this.$emit('onCollapse', ...arg)
},
onDblClick: (...arg) => {
  this.$emit('onDblClick', ...arg)
},
onDrag: (...arg) => {
  this.$emit('onDrag', ...arg)
},
onDragMove: (...arg) => {
  this.$emit('onDragMove', ...arg)
},
onDrop: (...arg) => {
  this.$emit('onDrop', ...arg)
},
onExpand: (...arg) => {
  this.$emit('onExpand', ...arg)
},
onMouseDown: (...arg) => {
  this.$emit('onMouseDown', ...arg)
},
onMouseUp: (...arg) => {
  this.$emit('onMouseUp', ...arg)
},
onRemove: (...arg) => {
  this.$emit('onRemove', ...arg)
},
onRename: (...arg) => {
  this.$emit('onRename', ...arg)
},
onRightClick: (...arg) => {
  this.$emit('onRightClick', ...arg)
}
```

如上emit出去的事件就是本组件支持的事件了，至于ztree中更多的事件我觉得你可能用不上。


更详细的内容，移步至[ztree官网](http://www.treejs.cn/v3/main.php#_zTreeInfo)


