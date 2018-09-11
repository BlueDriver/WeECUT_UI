// pages/scoreNew/score.js
const app = getApp()
const url = app.globalData.url
var ddd = [
  {
    "scoreList": [
      {
        "name": "学科前沿知识和技术讲座",
        "point": "2",
        "score": "88.0",
        "type": "任选"
      },
      {
        "name": "大学生就业指导III",
        "point": "0.5",
        "score": "88.0",
        "type": "必修"
      },
      {
        "name": "分布式系统与云计算",
        "point": "2.5",
        "score": "83.0",
        "type": "任选"
      },
      {
        "name": "嵌入式平台综合应用开发",
        "point": "2",
        "score": "95.0",
        "type": "必修"
      },
      {
        "name": "数据挖掘与商务智能",
        "point": "2.5",
        "score": "71.0",
        "type": "任选"
      },
      {
        "name": "大型数据库管理与应用",
        "point": "4",
        "score": "83.0",
        "type": "任选"
      },
      {
        "name": "专业综合技能训练",
        "point": "2",
        "score": "85.0",
        "type": "必修"
      },
      {
        "name": "XML程序设计",
        "point": "2.5",
        "score": "88.0",
        "type": "任选"
      },
      {
        "name": "网络与信息安全技术",
        "point": "2.5",
        "score": "72.0",
        "type": "任选"
      }
    ],
    "term": "2017-2018第二学期"
  },
  {
    "scoreList": [
      {
        "name": "环境影响评价",
        "point": "3",
        "score": "85.0",
        "type": "任选"
      },
      {
        "name": "操作系统原理",
        "point": "3",
        "score": "81.0",
        "type": "必修"
      },
      {
        "name": "软件工程",
        "point": "2.5",
        "score": "88.0",
        "type": "必修"
      },
      {
        "name": "软件测试技术",
        "point": "2",
        "score": "95.0",
        "type": "必修"
      },
      {
        "name": "可视化建模与UML",
        "point": "2.5",
        "score": "86.0",
        "type": "必修"
      },
      {
        "name": "Web项目开发课程设计",
        "point": "2",
        "score": "88.0",
        "type": "必修"
      },
      {
        "name": "ARM体系结构",
        "point": "3",
        "score": "87.0",
        "type": "必修"
      },
      {
        "name": "嵌入式Linux程序开发",
        "point": "4",
        "score": "87.0",
        "type": "必修"
      },
      {
        "name": "计算机通信与网络",
        "point": "4",
        "score": "84.0",
        "type": "必修"
      }
    ],
    "term": "2017-2018第一学期"
  },
  {
    "scoreList": [
      {
        "name": "汽车驾驶技能训练",
        "point": "1.5",
        "score": "80.0",
        "type": "公选"
      },
      {
        "name": "大学生就业指导II",
        "point": "0.5",
        "score": "86.0",
        "type": "必修"
      },
      {
        "name": "环境学概论",
        "point": "2.5",
        "score": "97.0",
        "type": "必修"
      },
      {
        "name": "大学英语IV",
        "point": "3",
        "score": "81.0",
        "type": "必修"
      },
      {
        "name": "数学建模",
        "point": "1",
        "score": "75.0",
        "type": "必修"
      },
      {
        "name": "概率论与数理统计",
        "point": "3",
        "score": "61.0",
        "type": "必修"
      },
      {
        "name": "专业外语",
        "point": "2",
        "score": "94.0",
        "type": "必修"
      },
      {
        "name": "Web程序设计",
        "point": "3",
        "score": "93.0",
        "type": "必修"
      },
      {
        "name": "读书报告",
        "point": "1",
        "score": "89.0",
        "type": "必修"
      },
      {
        "name": "学业规划B",
        "point": "0.5",
        "score": "87.0",
        "type": "必修"
      },
      {
        "name": "Java程序设计",
        "point": "4",
        "score": "79.0",
        "type": "必修"
      },
      {
        "name": "Linux系统管理",
        "point": "3",
        "score": "78.0",
        "type": "任选"
      },
      {
        "name": "智能手机软件开发",
        "point": "2.5",
        "score": "92.0",
        "type": "必修"
      },
      {
        "name": "人机交互与界面设计",
        "point": "2",
        "score": "83.0",
        "type": "必修"
      },
      {
        "name": "大学体育（IV）",
        "point": "2",
        "score": "86.0",
        "type": "必修"
      },
      {
        "name": "体育达标",
        "point": "2",
        "score": "60.0",
        "type": "必修"
      },
      {
        "name": "政治思想理论课社会实践（II）",
        "point": "2",
        "score": "82.0",
        "type": "必修"
      },
      {
        "name": "毛泽东思想和中国特色理论体系概论",
        "point": "3",
        "score": "77.0",
        "type": "必修"
      },
      {
        "name": "形势与政策实践",
        "point": "0.5",
        "score": "78.0",
        "type": "必修"
      },
      {
        "name": "创新、发明与专利实务",
        "point": "1",
        "score": "83.0",
        "type": "公选"
      }
    ],
    "term": "2016-2017第二学期"
  },
  {
    "scoreList": [
      {
        "name": "VB程序设计",
        "point": "4",
        "score": "90.0",
        "type": "必修"
      },
      {
        "name": "家用电器常识",
        "point": "1.5",
        "score": "82.0",
        "type": "公选"
      },
      {
        "name": "应用文写作",
        "point": "1",
        "score": "80.0",
        "type": "必修"
      },
      {
        "name": "大学英语III",
        "point": "3",
        "score": "80.0",
        "type": "必修"
      },
      {
        "name": "外教口语",
        "point": "1.5",
        "score": "85.0",
        "type": "公选"
      },
      {
        "name": "线性代数",
        "point": "2",
        "score": "78.0",
        "type": "必修"
      },
      {
        "name": "数据结构与算法",
        "point": "4.5",
        "score": "82.0",
        "type": "必修"
      },
      {
        "name": "Linux/Unix操作系统（A）",
        "point": "2.5",
        "score": "99.0",
        "type": "必修"
      },
      {
        "name": "关系数据库原理及应用",
        "point": "4",
        "score": "91.0",
        "type": "必修"
      },
      {
        "name": "计算机组成原理",
        "point": "4",
        "score": "94.0",
        "type": "必修"
      },
      {
        "name": "数据库应用开发课程设计",
        "point": "2",
        "score": "85.0",
        "type": "必修"
      },
      {
        "name": "数据结构与算法课程设计",
        "point": "1",
        "score": "90.0",
        "type": "必修"
      },
      {
        "name": "大学体育（III）",
        "point": "2",
        "score": "80.0",
        "type": "必修"
      },
      {
        "name": "形势与政策III",
        "point": "0.5",
        "score": "82.0",
        "type": "必修"
      }
    ],
    "term": "2016-2017第一学期"
  },
  {
    "scoreList": [
      {
        "name": "大学生就业指导I",
        "point": "0.5",
        "score": "84.0",
        "type": "必修"
      },
      {
        "name": "电子商务案例及分析",
        "point": "1.5",
        "score": "85.0",
        "type": "公选"
      },
      {
        "name": "大学英语（II）",
        "point": "4",
        "score": "82.0",
        "type": "必修"
      },
      {
        "name": "高等数学（BII）",
        "point": "4",
        "score": "82.0",
        "type": "必修"
      },
      {
        "name": "大学物理D",
        "point": "4",
        "score": "84.0",
        "type": "必修"
      },
      {
        "name": "面向对象程序设计",
        "point": "4.5",
        "score": "91.0",
        "type": "必修"
      },
      {
        "name": "国防军工知识讲座",
        "point": "1",
        "score": "89.0",
        "type": "必修"
      },
      {
        "name": "C++面向对象课程设计",
        "point": "2",
        "score": "90.0",
        "type": "必修"
      },
      {
        "name": "计算机辅助设计AutoCAD",
        "point": "2.5",
        "score": "96.0",
        "type": "必修"
      },
      {
        "name": "大学体育（II）",
        "point": "2",
        "score": "80.0",
        "type": "必修"
      },
      {
        "name": "政治思想理论课社会实践（I）",
        "point": "2",
        "score": "81.0",
        "type": "必修"
      },
      {
        "name": "马克思主义基本原理概论",
        "point": "3",
        "score": "66.0",
        "type": "必修"
      },
      {
        "name": "形势与政策II",
        "point": "0.5",
        "score": "77.0",
        "type": "必修"
      }
    ],
    "term": "2015-2016第二学期"
  },
  {
    "scoreList": [
      {
        "name": "大学计算机基础",
        "point": "2.5",
        "score": "91.0",
        "type": "必修"
      },
      {
        "name": "大学英语（I）",
        "point": "4",
        "score": "88.0",
        "type": "必修"
      },
      {
        "name": "高等数学（BI）",
        "point": "6",
        "score": "97.0",
        "type": "必修"
      },
      {
        "name": "C语言程序设计",
        "point": "5",
        "score": "97.0",
        "type": "必修"
      },
      {
        "name": "入学教育",
        "point": "0.5",
        "score": "90.0",
        "type": "必修"
      },
      {
        "name": "学业规划A",
        "point": "0.5",
        "score": "90.0",
        "type": "必修"
      },
      {
        "name": "大学体育（I）",
        "point": "2",
        "score": "70.0",
        "type": "必修"
      },
      {
        "name": "大学生心理健康教育",
        "point": "1",
        "score": "83.0",
        "type": "必修"
      },
      {
        "name": "思想道德修养与法律基础",
        "point": "2",
        "score": "84.0",
        "type": "必修"
      },
      {
        "name": "形势与政策I",
        "point": "0.5",
        "score": "80.0",
        "type": "必修"
      },
      {
        "name": "中国近现代史纲要",
        "point": "2",
        "score": "71.0",
        "type": "必修"
      },
      {
        "name": "军事理论",
        "point": "1",
        "score": "85.0",
        "type": "必修"
      },
      {
        "name": "军事技能训练",
        "point": "1.5",
        "score": "80.0",
        "type": "必修"
      }
    ],
    "term": "2015-2016第一学期"
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now: 0,
    data: ddd
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.refresh()
  },
  refresh: function () {
    console.log('refresh score')
    
    var me = this



      if (app.globalData.isLogin == true) {  //had login
        wx.showLoading({
          title: '请稍等',
          mask: 'true'
        })
        wx.request({
          //url: 'http://localhost:8088/cengkebao/GetScoreList',
          url: url + '/GetScoreList',
          method: 'post',
          header: { 'content-type': 'application/x-www-form-urlencoded', 'Cookie': 'JSESSIONID=' + app.globalData.KEY },
          success: res => {
            console.log(res)
            if (res.data.status == 1000) {//ok
              if (res.data.score != '') {
                this.setData({
                  data: res.data.data
                })
                // wx.showToast({
                //   title: '刷新成功！',
                //   duration: 800
                // })
              } else {
                wx.showModal({
                  title: '抱歉！',
                  content: '刷新失败，请重试！',
                  showCancel: false,
                  confirmColor: '#2673ec'
                })
              }
            } else if (res.data.status == 2002) {//lost validation
              wx.showModal({
                title: '提示：',
                content: '登录已失效，请重新登录！',
                showCancel: false,
                confirmColor: '#2673ec'
              })
              app.globalData.isLogin = false
            } else if (res.data.status == 4000) {//no key
              wx.showModal({
                title: '提示：',
                content: '还没有登录！',
                showCancel: false,
                confirmColor: '#2673ec'
              })
              app.globalData.isLogin = false
            } else {  //3000 exception
              wx.showModal({
                title: '抱歉！',
                content: '发生异常，请重试或重新登录！',
                confirmColor: '#2673ec',
                showCancel: false
              })
            }
          },
          fail: res => {
            wx.showModal({
              title: '抱歉！',
              content: '加载失败了，请重试！',
              confirmColor: '#2673ec',
              showCancel: false
            })
          },
          complete: function () {
            wx.hideLoading()
          }
        })
      } else {  //not login
        wx.showModal({
          title: '提示',
          content: '还么有登录呢，现在就去吗？',
          confirmText: '好的',
          confirmColor: '#ff6600',
          cancelText: '不了',
          success: function (res) {
            if (res.confirm) {        
              wx.navigateTo({
                url: '../login/login',
              })                 
            } else if (res.cancel) {
              //console.log('用户点击取消')
            }
          }

        })
      }
  },

  termChange: function(e){
    //console.log(e.currentTarget.id)
    this.setData({
      now: e.currentTarget.id
    });
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