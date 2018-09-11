// pages/util_home/note/note.js
const app = getApp()
//const url = 'http://localhost:8088/util'
//const url = 'http://192.168.1.101:8088/util'
const url = 'https://i-code.top/utils'
var page = Page({

  /**
   * 页面的初始数据
   */
  data: {
    addAni: {},
    noteAni:{},
    mask: false,
    notes:[
      {id:1, content:'2018年3月16日20:53:49',time: '2018-3-16 20:54:00'},
      { id: 2, content: '2018年3月', time: '2018-3-16 20:54:00' },
      {id: 3, content: '2018年3月118年3月16日20:518年3月16日20:518年3月16日20:518年3月16日20:56日20:53:49', time: '2018-3-16 20:54:00' },
    ],
    content:'',
    count: 0,
    studentNumber :'',
    key:''
  },
  submit: function(){
    console.log(this.data.content)
    var content = this.data.content
    if(!content.trim().length > 0){
      wx.showModal({
      title: 'o(╥﹏╥)o',
        content: '不要提交空白内容哦！',
          confirmColor: '#f2484b',
            showCancel: false
      })
      return
    }
    wx.showLoading({
      title: '保存中',
      mask: 'true'
    })
    //this.addNote()
    wx.request({
      //url: 'http://localhost:8088/cengkebao/StdLogin',
      url: url + '/add.wow',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: { studentNumber: this.data.studentNumber, key: this.data.key, content: content },
      method: 'post',
      success: res => {
        //console.log('login')
        console.log(res)
        console.log(res.data.status)
        if (res.statusCode == 200) {
          if (res.data.status == 1000) {// success
            // wx.showModal({
            //   title: '(*^▽^*)',
            //   content: '数据已保存！',
            //   confirmColor: '#f2484b',
            //   showCancel: false
            // })         
            this.addNote()   
            this.search(this.data.key, this.data.studentNumber)
            
            this.setData({
              content:''
              
            })
          }else{
            wx.showModal({
              title: '抱歉！',
              content: '出错了，请重试！',
              confirmColor: '#f2484b',
              showCancel: false
            })
          }          
        } else {
          wx.showModal({
            title: '抱歉！',
            content: '出错了，请重试！',
            confirmColor: '#f2484b',
            showCancel: false
          })
        }
      },
      fail: res => {
        wx.showModal({
          title: '抱歉！',
          content: '连接失败，请重试！',
          confirmColor: '#f2484b',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  },
  inputing: function(e){
    this.setData({
      content: e.detail.value.trim(),
      count: e.detail.value.trim().length
    })
  },
  operation: function(e){
    //console.log(e == this)
    var that = this
    //console.log(this) -> e
    //console.log(this.data.studenNumber)
    //return;
    var id = e.currentTarget.dataset.id;
    var content = e.currentTarget.dataset.content;
    var index = e.currentTarget.dataset.index;
    //console.log(id)
    //console.log(content)
    //console.log(e)
    //console.log(1)
    setTimeout(function(){
      wx.showActionSheet({
        itemList: ['复制', '删除'],
        success: function (res) {
          //console.log(res.tapIndex)
          if(res.tapIndex == 0){//copy
            wx.setClipboardData({
              data: content,
              success: function (res) {
                wx.showToast({
                  title: '已复制！',
                })
              }
            })
          }else if(res.tapIndex == 1){//delete
            wx.showLoading({
              title: '请稍等',
              mask: 'true'
            })
            var openid = wx.getStorageSync('openid')
            var studentNumber = wx.getStorageSync('account').stdNum
            wx.request({
              //url: 'http://localhost:8088/cengkebao/StdLogin',
              url: url + '/delete.wow',
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              data: { studentNumber: studentNumber, key: openid,id:id },
              method: 'post',
              success: res => {
                //console.log('login')
                console.log(res)
                if (res.statusCode == 200) {
                  if (res.data.status == 1000) {// success
                    // wx.showToast({
                    //   title: '已删除！',
                    //   duration: 2000
                    // })     
                    var before = that.data.notes
                    before.splice(index, 1)
                    that.setData({
                        notes: before
                    })
                    //console.log(after.length)                  
                  }
                } else {
                  wx.showModal({
                    title: '抱歉！',
                    content: '出错了，请重试！',
                    confirmColor: '#f2484b',
                    showCancel: false
                  })
                }
              },
              fail: res => {                
                wx.showModal({
                  title: '抱歉！',
                  content: '连接失败，请重试！',
                  confirmColor: '#f2484b',
                  showCancel: false
                })
              },
              complete: function () {
                wx.hideLoading()
              }
            })
          }
        },
        fail: function (res) {
          //console.log(res.errMsg)
        }
      })
    },300)
  },
  addNote: function(){
    console.log("add note");
    var an = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-in'
    })
    var an2 = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-in'
    })
    if(this.data.mask){//showing mask
      an.rotate(0).step().step();
      an2.translateY(0).step();
    }else{
      an.rotate(135).step();
      an2.translateY(440).step();
    }   
    this.setData({
      addAni: an.export(),
      noteAni: an2.export(),
      mask: !this.data.mask
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  search: function(openid, studentNumber){
    console.log('searching')
    wx.showLoading({
      title: '加载中',
      mask: 'true'
    })
    wx.request({
      //url: 'http://localhost:8088/cengkebao/StdLogin',
      url: url + '/mine.wow',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: { studentNumber: studentNumber, key: openid },
      method: 'post',
      success: res => {
        //console.log('login')
        console.log(res)
        if (res.statusCode == 200) {
          if (res.data.status == 1000) {// success
            this.setData({
              notes:res.data.data.reverse()
            })
          }
        }else{
          wx.showModal({
            title: '抱歉！',
            content: '出错了，请重试！',
            confirmColor: '#f2484b',
            showCancel: false
          })
        }
      },
      fail: res => {
        console.log('login fail')
        wx.showModal({
          title: '抱歉！',
          content: '连接失败，请重试！',
          confirmColor: '#f2484b',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  },
  onLoad: function (options) {
    return
    wx.showLoading({
      title: '请稍等',
      mask: 'true'
    })
    var that = this
    //is login?????
    if(!app.globalData.isLogin){
      wx.redirectTo({
        url: '../../index/index',
      })
      return;
    }
    var openid = wx.getStorageSync('openid')
    var studentNumber = wx.getStorageSync('account').stdNum
    //console.log(account == {})
    //console.log(openid != '')
    //console.log(openid.length == 28)
    //console.log(studentNumber)
    //console.log(studentNumber == 12)
    if(openid != '' && openid.length==28 && studentNumber.length == 12){
      //console.log('searching')
      this.setData({
        studentNumber: studentNumber,
        key: openid
      })
      this.search(openid, studentNumber)
      return
    }
    //yes
    wx.showLoading({
      title: '请稍等',
      mask: 'true'
    })
    console.log('get key ...')
    //console.log(wx.getStorageSync('account'))
    //console.log(this.data)
    wx.login({
      success: login_res => {
        console.log(login_res.code)
        wx.request({
          //url: 'http://localhost:8088/cengkebao/StdLogin',
          url: url + '/login.wow',
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          data: { studentNumber: wx.getStorageSync('account').stdNum, code: login_res.code },
          method: 'post',
          success: res => {
            //console.log('login')
            console.log(res)
            if(res.statusCode == 200){
              if (res.data.status == 1000 || res.data.status == 1001) {//login success
                wx.setStorageSync("openid", res.data.key)
                that.setData({
                  key: res.data.key,
                  studentNumber: wx.getStorageSync('account').stdNum
                })
                that.search(that.data.key,that.data.studentNumber)
              } else if (res.data.status == 1004) {//exception
                wx.hideLoading()
                wx.showModal({
                  title: '抱歉！',
                  content: '服务器出错了，请稍后重试！',
                  confirmColor: '#f2484b',
                  showCancel: false
                })
              }
            }else{
              wx.showModal({
                title: '访问出现错误！',
                content: '请先返回上一级页面，再进入本页！',
                showCancel: false,
                confirmColor: '#f2484b'
              })
            }            
          },
          fail: res => {
            console.log('login fail')
            wx.showModal({
              title: '抱歉！',
              content: '连接失败，请重试！',
              confirmColor: '#f2484b',
              showCancel: false
            })
          },
          complete: function () {
            wx.hideLoading()
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})