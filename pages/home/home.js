// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'cvv',
    students:[
      { id: 1, name: 'kobe' },
      { id: 2, name: 'dfd' },
      { id: 3, name: 'sdfjl' },
      {id:4,name:'sdfjliwew3'}
    ],
    counter:0

  },
  addClick() {
    this.setData({
      counter:this.data.counter + 1
    })
  },
  subClick() {
    this.setData({
      counter:this.data.counter <= 0 ? 0 : this.data.counter - 1
    })
  }
})