//index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [],
        navList: [],
        indicatorDots: true,
        autoplay: true,
        interval: 2500,
        duration: 500,
        circular: true,
        message: 'JS数据'

    },
    changeIndicatorDots(e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay(e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange(e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange(e) {
        this.setData({
            duration: e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.showLoading({
            title: '努力加载中...',
        });
        setTimeout(function(){
            wx.hideLoading();
        },500);
        /**
         * 网上请求数据,显示在小程序上,
         * 小程序如此多的生命周期函数中,在哪里请求数据比较合适
         */
        // AJAX
        // $.ajax({
        //     url:"",
        //     success:function(){

        //     }
        // })
        // console.log('wx',wx);
        // wx.request({
        //     // 请求地址
        //     url: 'https://locally.uieee.com/slides',
        //     // 参数
        //     data: '',
        //     // 头部信息header
        //     header: {},
        //     // 请求方式 需要大写
        //     method: 'GET',
        //     // 数据类型
        //     dataType: 'json',
        //     responseType: 'text',
        //     // 成功请求执行一个回调函数
        //     success: function(res) {
        //         console.log(res);
        //     },
        //     // 请求失败执行一个回调函数
        //     fail: function(res) {},
        //     // 接口调用结束的回调函数 成功与失败都会执行
        //     complete: function(res) {},
        // });
        console.log(this.data);
        // 请求轮播图

        /**
         * this.setData 有两个功能:
         * 1.更新数据
         * 2.更新视图
         */

        wx.request({
            url: 'https://locally.uieee.com/slides',
            success: (res) => {
                this.setData({
                    imgUrls: res.data
                });
            },
        });
        //请求列表
        wx.request({
            url: 'https://locally.uieee.com/categories',
            success: (res) => {
                this.setData({
                    navList: res.data
                });
            },
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})