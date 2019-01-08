// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            {name:'USA',value:'美国'},
            {name:'CNA',value:'中国',checked:'true'},
            {name:'ENA',value:'英国',color:'#f50'},
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },
    /**
     * 页面事件
     */
    radioChangeHandle : function(event){
        // event.detail.value 点击携带的value值
        // console.log(event);
        // console.log(event.detail.value);
        // console.log(event.target.dataset.para);
    },
    switchChange(event){
        // console.log(event.detail.value);
        // console.log(event.target.dataset.para);
        console.log(event);
    },
    // 页面脚本
    // < wxs module = 'foo' >
    //     //var sum = function(a,b){
    //         return a + b;
    //     };
    // //这里可以导出一个对象，这个对象可以直接在界面上使用
    // //module.exports.sum = sum;
        // 第二种写法
    // module.exports = {
    //     sum: function (a, b) {
    //         return a + b;
    //     }
    // };
    // </wxs >
    fatherTapHandle: function(){
        console.log('A：选中了父亲');
    },
    sonTapHandle: function (event) {
        console.log('B：选中了儿子');
        console.log('你当前点击的是第'+ event.target.dataset.index + '个儿子');
    },
})