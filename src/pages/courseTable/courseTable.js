// pages/courseTable/courseTable.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    week: [{ "time": [{ "day": ["计算机通信与网络_01(南昌校区3号教学楼,3-204,汤宇,7-18周上)"] }, { "day": ["JEE程序设计_01(南昌校区3号教学楼,3-302,汪雪元,10-17周上)", "软件工程_01(南昌校区3号教学楼,3-206,王强,3-10周上)"] }, { "day": ["Visual C++程序设计_01(南昌校区3号教学楼,3-204,刘琳,3-9周上)"] }, { "day": ["ARM体系结构_01(南昌校区3号教学楼,3-302,邹云康,3-12周上)"] }, { "day": ["软件工程_01(南昌校区3号教学楼,3-206,王强,3-10周上)", "可视化建模与UML_01(南昌校区3号教学楼,3-206,汪宇玲,13-19周上)"] }] }, { "time": [{ "day": ["软件测试技术_01(南昌校区3号教学楼,3-302,汪宇玲,10-19周上)"] }, { "day": ["ARM体系结构_01(南昌校区3号教学楼,3-302,邹云康,3-12周上)", "可视化建模与UML_01(南昌校区3号教学楼,3-206,汪宇玲,13-19周上)"] }, { "day": ["嵌入式Linux程序开发_01(南昌校区3号教学楼,3-206,邹云康,10-19周上)", "操作系统原理_01(南昌校区3号教学楼,3-206,张军,3-9周上)"] }, { "day": ["JEE程序设计_01(南昌校区3号教学楼,3-302,汪雪元,10-17周上)"] }, { "day": ["操作系统原理_01(南昌校区3号教学楼,3-202,张军,3-9周上)"] }] }, { "time": [{ "day": ["Visual C++程序设计_01(南昌校区3号教学楼,3-304,刘琳,3-9周上)"] }, { "day": [""] }, { "day": ["计算机通信与网络_01(南昌校区3号教学楼,3-304,汤宇,7-18周上)"] }, { "day": [""] }, { "day": ["GIS原理_01(南昌校区3号教学楼,3-402,李大军,5-13周上)", "环境影响评价_01(南昌校区3号教学楼,3-303,罗笠,1-12周上)"] }] }, { "time": [{ "day": ["嵌入式Linux程序开发_01(南昌校区3号教学楼,3-202,邹云康,10-19周上)"] }, { "day": [""] }, { "day": ["GIS原理_01(南昌校区3号教学楼,3-408,李大军,5-13周上)", "环境影响评价_01(南昌校区3号教学楼,3-304,罗笠,1-12周上)"] }, { "day": ["Visual C++程序设计_01(南昌校区3号教学楼,3-206,刘琳,3-9周上)", ""] }, { "day": [""] }] }, { "time": [{ "day": ["操作系统原理_01(南昌校区3号教学楼,3-206,张军,3-9周上)"] }, { "day": [""] }, { "day": [""] }, { "day": [""] }, { "day": [""] }] }],
    //[],
    index:0,
    stdData:null,
    //stdNum:wx.getStorageSync("stdData").stdNum || '',
    classNum:wx.getStorageSync("stdData").stdClass || '未登录',
    termArray: {termString: '', termNum:''},
    showChange: false,
    otherClass: '',
    ani: {},
    termList: [],
    mask: false,
    whichTerm: 0
      //{ termString: '2017-2018学年第一学期(两学期)',termNum:'2017-2018-1-1'},
    
    
  },
  changeTerm: function(){
    console.log("changeTerm")
    if(!app.globalData.isLogin){
      this.willLogin()
    }else{
      if(this.data.whichTerm == 0){
        this.setData({
          whichTerm: 1,
          termArray: this.data.termList[1]
        })

      }else{
        this.setData({
          whichTerm: 0,
          termArray: this.data.termList[0]
        })
      }
      this.getCourseTable(false)
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {//ready the term
    // var d = this.data.week;
    // console.log(d.length);
    // console.log(d[0].time)
    // { termString: '2017-2018学年第一学期(两学期)',termNum:'2017-2018-1-1'},
    var d = new Date()
    var year = d.getFullYear()
    var month = d.getMonth()+1
    //d.setMonth(4)
    //month = 2
    
    if (month >= 2 && month <= 7) {//second term        
      var item2 = { termString: (year-1) + '-' + year + '学年第二学期(两学期)', termNum: (year-1) + '-' + year  + '-2-1' }      
      
      var item22 = { termString: year + '-' + (year+1) + '学年第一学期(两学期)', termNum: year + '-' + (year + 1) + '-1-1' }
      var t_list = []

      t_list.push(item2)
      t_list.push(item22)

      this.setData({
        termArray: item2,
        termList : t_list
      })
      console.log('c1: ' + t_list[0].termString + ' ' + t_list[0].termNum)
      console.log('c1: ' + t_list[1].termString + ' ' + t_list[1].termNum)

    } else {//first term
      if(month < 2){
        var item1 = { termString: (year - 1) + '-' + year + '学年第一学期(两学期)', termNum: (year - 1) + '-' + year + '-1-1' }
        var item11 = { termString: (year - 1) + '-' + year + '学年第二学期(两学期)', termNum: (year - 1) + '-' + year + '-2-1' }
        var t_list = []
        t_list.push(item1)
        t_list.push(item11)
        this.setData({
          termArray: item1,
          termList : t_list
        })
        console.log('c2: ' + t_list[0].termString + ' ' + t_list[0].termNum )
        console.log('c2: ' + t_list[1].termString+ ' ' + t_list[1].termNum)
      }else{//8 to 12
        var item1 = { termString: year + '-' + (year + 1) + '学年第一学期(两学期)', termNum: year + '-' + (year + 1) + '-1-1' }
        var item11 = { termString: year + '-' + (year + 1) + '学年第二学期(两学期)', termNum: year + '-' + (year + 1) + '-2-1' }
        var t_list = []
        t_list.push(item1)
        t_list.push(item11)
        this.setData({
          termArray: item1,
          termList: t_list
        })
        console.log('c3: ' + t_list[0].termString + ' ' + t_list[0].termNum)
        console.log('c3: ' + t_list[1].termString + ' ' + t_list[1].termNum)
      }
      
    }
   
    
    //console.log(year)
    //console.log(month)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  willLogin: function(){
    wx.showModal({
      title: '提示',
      content: '你还没登录呢，现在就去吗？',
      confirmText: '好的',
      confirmColor: '#ff1d77',
      cancelText: '不了',
      success: function (res) {
        if (res.confirm) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              wx.getUserInfo({
                success: res => {
                  console.log(res.userInfo)
                  app.globalData.userInfo = res.userInfo
                  wx.navigateTo({
                    url: '../login/login',
                  })

                }
              })
            },
            fail: function () {
              wx.openSetting({

              })
            }
          })

        } else if (res.cancel) {
          //console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var std = wx.getStorageSync("stdData")  //is band
    //console.log(std)
    if(std != ''){//had band
      this.setData({
        classNum: std.classNum,
        otherClass: std.classNum
      })
    }else{  //not band
      this.willLogin()
      return
    }

    //had band
    if (wx.getStorageSync(this.data.classNum + this.data.termArray.termNum) != ''){  //storage had table
      console.log("had table")
      this.setData({
        week: wx.getStorageSync(this.data.classNum + this.data.termArray.termNum)
      })
    }else{  //no local data
      if(app.globalData.isLogin == true ){  //had login
        this.getCourseTable(true)
      }else{  //not login
        this.willLogin()
      }      
    }
  },
  getCourseTable: function(flag){
    if (app.globalData.isLogin == false){
      this.willLogin()
      return
    }
    wx.showLoading({
      title: '请稍等',
    })
    wx.request({
      //url: 'http://localhost:8088/cengkebao/GetCourseTable',
      url: 'https://www.blue58.top/cengkebao/GetCourseTable',
      //classNum, termNum, termString
      data: { classNum: this.data.classNum, termNum: this.data.termArray.termNum, termString: this.data.termArray.termString },
      method: 'post',
      header: { 'content-type': 'application/x-www-form-urlencoded', 'Cookie': 'JSESSIONID=' + app.globalData.KEY },
      success: res => {
        console.log(res)
        /*
			 * 1000 ok
			 * 9999 timeout
			 * 2000 ex
			 * 4000 no key
			 */
        if (res.data.status == 1000) {
          //console.log(res.data.table)
          if (res.data.table == undefined) {
            wx.showModal({
              title: '抱歉！',
              content: '获取失败，请稍后重试或重新登录！',
              confirmColor: '#ff1d77',
              showCancel: false
            })
          } else {//success            
            this.setData({
              week: res.data.table
            })            
            if(this.data.classNum == wx.getStorageSync("stdData").classNum && flag){
              wx.setStorageSync(this.data.classNum + this.data.termArray.termNum, res.data.table)
            }           
          }
        }else if(res.data.status == 9999){
          wx.hideLoading()
          wx.showModal({
            title: '抱歉！',
            content: '请求超时，请重试！',
            confirmColor: '#ff1d77',
            showCancel: false
          })
        } else if (res.data.status == 4000){
          wx.hideLoading()
          wx.showModal({
            title: '抱歉！',
            content: '登录已失效，请重新登录！',
            confirmColor: '#ff1d77',
            showCancel: false
          })
          app.globalData.isLogin = false          
        }else {
          wx.showModal({
            title: '抱歉！',
            content: '发生异常，请稍后重试！',
            confirmColor: '#ff1d77',
            showCancel: false
          })
        }
      },
      fail: res => {
        console.log(res)

      },
      complete: function () {
        wx.hideLoading()
      }
    })
  },
  changeClass: function(){
    
    if (app.globalData.isLogin == true && this.data.showChange == false){
      console.log('change class')

      var an = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease-in'
      })
      var h = 500
      wx.getSystemInfo({
        success: function(res) {
          h = res.windowHeight
        },
      })

      an.translateY(h*0.6).step()

      this.setData({
        ani: an.export(),
        //showChange: true,
        otherClass: this.data.classNum,
        mask: true
      })
    }else{
      this.willLogin()
    }
  },
  cancelChange: function(){
    var an = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease-in'
    })

    an.translateY(0).step()

    this.setData({
      ani: an.export(),
      showChange: false,
      mask: false
    })
  },
  onInputClass: function(e){
    //console.log(e.detail.value)
    this.setData({
      otherClass: e.detail.value.trim()
    })
  },
  getOtherClass: function(){
    var an = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-in'
    })

    an.translateY(0).step()

    this.setData({
      ani: an.export(),
      classNum: this.data.otherClass,
      mask: false
      //showChange: false
    })
    this.getCourseTable(false)
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
  
  },
  dinner:function(){
    console.log('dinner')
  }
})