// pages/shoplist/shoplist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopList: [],
        pageSize: 20,
        // 由于第一次加载时就要自增1;所以默认值设置为0
        pageIndex: 0,
        catId: 1,
        // 2.1 用于记录更多数据
        hasMore: true
    },
    // 1.3 自己定义函数，用来加载更多数据
    loadMore: function() {
        // 2.2 如果没有更多数据就直接返回
        // var hasMore;
        // if (!this.data.hasMore) return;
        if(!this.data.hasMore){
            return;
        }
        wx.request({
            
            url: 'https://locally.uieee.com/categories/' + this.data.catId + '/shops',
            data: {
                _limit: this.data.pageSize,
                _page: ++this.data.pageIndex
            },
            success: (res) => {
                // console.log(res);
                // bug 每次请求过来的数据把本来的替换掉了
                // 1.6 解决bug的思路,先获取本来的数据再通过concat链接获取到的数据，再赋值一次值给数组
                var newList = this.data.shopList.concat(res.data);
                // 2.3 获取统计单页数的总数据 -0强制转化数学运算
                // var count = res.header["X-Total-Count"] - 0;
                var count = parseInt(res.header["X-Total-Count"]);
                // 2.4 用来判断比较是否还有更多数据
                var flag = this.data.pageIndex * this.data.pageSize < count;

                this.setData({
                    shopList: newList,
                    hasMore: flag,
                });
            },
        });
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.showNavigationBarLoading();
        console.log(options);
        // 1.1 设置首页传递过来的参数，设置导航条标题
        if (options.title) {
            wx.setNavigationBarTitle({
                // title: options.title,
                title: '' + options.title + ''
            });
        };

        // 1.2 把获取到的参数设置到data中，方便复用
        this.setData({
            catId: options.cat
        });
        // 1.4 调用封装函数
        this.loadMore();
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
        // 3 下拉刷新页面
        // 3.1 先把数据设置为默认值
        this.setData({
            shopList: [],
            pageIndex: 0,
            hasMore: true

        });
        // 3.2 刷新完再重新请求数据
        this.loadMore();
        // 3.3 如果加载完毕要记得停止刷新小圆圈，否则手机端体验它会一直存在。
        wx.stopPullDownRefresh();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        // 1.5 上拉触底再次加载页面
        this.loadMore();
        wx.hideNavigationBarLoading();

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})