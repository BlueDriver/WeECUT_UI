//app.js
App({
  onLaunch: function() {

    this.getWeek()

  },
  getWeek: function() {
    //时间起点
    var s = '2018-09-10 00:00:00';
    s = s.replace(/-/g, "/");
    var start = new Date(s);
    // var n = '2018-09-10 00:00:00';
    // n = n.replace(/-/g, "/");
    // var now = new Date(n);
    var now = new Date();
    //时间戳
    var st = Date.parse(start)
    var nt = Date.parse(now)
    //小时差
    var hours = Math.ceil((nt - st) / 3600 / 1000)

    console.log(hours)
    var week = Math.ceil(hours/24/7)
    console.log(week)
    return week
    //array from 0 to n
    //let a = [...(new Array()).keys()];
  },
  viewImage: function(ev) {
    //console.log('tap img')
    var imgUrl = ev.currentTarget.dataset.url;
    //console.log(imgUrl)
    wx.previewImage({
      urls: [imgUrl]
    })
  },
  globalData: {
    code: null,
    userInfo: null, 
    url: 'http://localhost:8088/'
  }
})