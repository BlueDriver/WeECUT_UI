// pages/jobDetail/jobDetail.js
const app = getApp()
const url = app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: { author: '', head:'提示：下拉可刷新！',date:'',status:0,content:{}},
    urlInfo:''
    
  },
  copyURL: function(){
    
    wx.setClipboardData({
      data: this.data.urlInfo,
      success: res=>{
        wx.showToast({
          title: '已复制！',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('url: ' + options.url)
    //console.log('url decode: ' + decodeURI(options.url))  //no use!
    console.log('url decode: ' + decodeURIComponent(options.url))
    this.setData({
      urlInfo: decodeURIComponent(options.url)
    })
    
  },
  loadContent:function(){
    wx.showLoading({
      title: '加载中',
    }) 
    try {
      wx.request({
        url: url + '/JobDetail',
        //url:'http://localhost:8088/cengkebao/JobDetail',
        data: { url: this.data.urlInfo },
        success: res => {
          console.log(res)
          wx.hideLoading()
          if (res.data.status == 1000 && res.data.content != '') {
            this.setData({
              detail: res.data,
              urlInfo: this.data.urlInfo
            })
            return
          } else{                   
            this.setData({
              detail: { author: '', head: '请求超时，请下拉刷新！', date: '', status: 0, content: {} },
            })
            return
          }
        },
        fail: res => {
          console.log('request fail')
          wx.hideLoading()
          this.setDate({
            detail: { author: '', head: '获取失败，请检查网络，或下拉刷新！', date: '', status: 0, content: {} },
          })
        }
      })
    } catch (e) {
      this.setDate({
        detail: { author: '', head: '出错了，请下拉刷新！', date: '', status: 0, content: {} },
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var storage = wx.getStorageSync(this.data.urlInfo + '_url')
    if(storage !=''){
      console.log("had storage")
      this.setData({
        detail:storage
      })
      wx.hideLoading()
      return
    }
    console.log('no storage')    
    this.loadContent()
    
  },
  viewImage:function(ev){
    console.log('tap img')
    var imgUrl = ev.currentTarget.dataset.url;
    wx.previewImage({
      urls: [imgUrl]
    })
  },
  //DownloadFile
  
  viewDoc: function (ev) {
    var docUrl = ev.currentTarget.dataset.url;
    console.log(docUrl)
    wx.showLoading({
      title: '请稍等',
      mask:true
    })
    //doc, xls, ppt, pdf, docx, xlsx, pptx
    //'http://localhost:8088/spider/DownloadFile.xlsx?file_url='+docUrl,
    //var req = 'http://localhost:8088/spider/DownloadFile'
    var req = url + '/DownloadFile'
    if(docUrl.lastIndexOf("doc") == docUrl.length-3 ){
      console.log('doc')
      req += '.doc?file_url='+docUrl
    } else if (docUrl.lastIndexOf("xls") == docUrl.length - 3 ){
      console.log('xls')
      req += '.xls?file_url=' + docUrl
    } else if (docUrl.lastIndexOf("ppt") == docUrl.length - 3 ){
      console.log('ppt')
      req += '.ppt?file_url=' + docUrl
    } else if (docUrl.lastIndexOf("pdf") == docUrl.length - 3 ){
      console.log('pdf')
      req += '.pdf?file_url=' + docUrl
    } else if (docUrl.lastIndexOf("docx") == docUrl.length - 4 ){
      console.log('docx')
      req += '.docx?file_url=' + docUrl
    } else if (docUrl.lastIndexOf("xlsx") == docUrl.length - 4) {
      console.log('xlsx')
      req += '.xlsx?file_url=' + docUrl
    } else if (docUrl.lastIndexOf("pptx") == docUrl.length - 4) {
      console.log('pptx')
      req += '.pptx?file_url=' + docUrl
    }else{
      wx.showModal({
        title: '错误！',
        content: '不支持的文件类型！',
        confirmColor: '#2673ec',
        showCancel: false
      })
      wx.hideLoading()
      return
    }
    console.log(req)
    //url: 'https://www.blue58.top/spider/JobDetail',
    //url:'http://localhost:8088/spider/JobDetail',
    wx.downloadFile({
     
      //url: 'http://localhost:8088/spider/DownloadFile.xlsx?file_url='+docUrl,
      url: req,
      success: function (res) {
        console.log(res)
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          },
          fail: res => {
            console.log('open doc fail')
          }
        })
      },
      fail: res => {
        //console.log('download fail fail')
        wx.showModal({
          title: '抱歉！',
          content: '下载失败！',
          confirmColor: '#2673ec',
          showCancel: false
        })
      },
      complete:function(){
        wx.hideLoading()
      }
    })
  },

  /*
  viewDoc:function(ev){
    var docUrl = ev.currentTarget.dataset.url;
    console.log(docUrl)
    wx.showLoading({
      title: 'Loading',
    })
    wx.downloadFile({
      url: docUrl,
      success: function (res) {
        console.log(res)       
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          },
          fail:res=>{
            console.log('open doc fail')
          }
        })
      },
      fail:res=>{
        console.log('download fail fail')
      },
      complete: function(){
        wx.hideLoading()
      }
    })
  },
  */

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('jobDetail hide............')
    wx.setStorageSync(this.data.urlInfo + "_url", this.data.detail)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('jobDetail unload............')
    wx.setStorageSync(this.data.urlInfo+"_url", this.data.detail)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {    
    try{
      wx.removeStorageSync(this.data.urlInfo + "_url")
      this.setData({
        detail: { author: '', head: '提示：下拉可刷新！', date: '', status: 0, content: {} }
      })
      console.log('remove sto')
    }catch(e){
      console.log('remove storag exception')
    }
    wx.stopPullDownRefresh()
    this.loadContent()
   
    
    
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