// pages/schooltimetables/schooltimetables.js
Page({
  data: {
    jcs: ["时间", "一二", "三四", "午休", "五六", "七八"],
    kcData: [
      ["周一", "-", "-", "-", "计算机1733,微信开发", "-"],
      ["周二", "计算机1732,微信开发", "计算机1733,微信开发", "-", "-", "-"],
      ["周三", "-", "-", "-", "计算机1732,微信开发", "-"],
      ["周四", "-", "-", "-", "-", "-"],
      ["周五", "-", "-", "-", "-", "-"],
    ]
  },
  onLoad: function () {
    console.log('onLoad')

    //关闭本列表的红点
    wx.hideTabBarRedDot({
      index: 1,
    });

  }

})