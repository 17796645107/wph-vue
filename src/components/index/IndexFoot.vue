<template>
    <!--
    作者：邓宁
    时间：2018-09-19
    描述：--用户主页
  -->
    <div class="footer_main">
        <div class="footer_icon">
            <ul>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
            </ul>
        </div>
        <div class="footer_service">
            <dl>
                <dt>服务保障</dt>
                <dd><a href="">正品保证</a></dd>
                <dd><a href="">7天无理由放心退</a></dd>
                <dd><a href="">退货返运费</a></dd>
                <dd><a href="">7X15小时客户服务</a></dd>
                <dd><a href="">7天无理由随心换</a></dd>
            </dl>
            <dl>
                <dt>购物指南</dt>
                <dd><a href="">导购演示</a></dd>
                <dd><a href="">订单操作</a></dd>
                <dd><a href="">会员注册</a></dd>
                <dd><a href="">账户管理</a></dd>
                <dd><a href="">收货样品</a></dd>
                <dd><a href="">会员等级</a></dd>
            </dl>
            <dl>
                <dt>支付方式</dt>
                <dd><a href="">快捷支付</a></dd>
                <dd><a href="">23家主流网银支付</a></dd>
                <dd><a href="">货到付款</a></dd>
                <dd><a href="">支付宝、银联等支付</a></dd>
                <dd><a href="">信用卡支付</a></dd>
                <dd><a href="">零钱支付</a></dd>
            </dl>
            <dl>
                <dt>配送方式</dt>
                <dd><a href="">全场满288元免运费</a></dd>
                <dd><a href="">配送范围及运费</a></dd>
                <dd><a href="">验货与签收</a></dd>
            </dl>
            <dl>
                <dt>售后服务</dt>
                <dd><a href="">退货政策</a></dd>
                <dd><a href="">退货流程</a></dd>
                <dd><a href="">退款方式和时效</a></dd>
                <dd><a href="">换货服务</a></dd>

            </dl>
            <dl>
                <dt>APP二维码</dt>
                <dd><img src="../../assets/user/page_bottom_dl_n.png"></dd>
            </dl>
        </div>
        <div class="aboutUS">
            <a href="">关于我们</a>|
            <a href="">About us</a>|
            <a href="">Investor Relations</a>|
            <a href="">媒体报道</a>|
            <a href="">品牌招商</a>|
            <a href="">隐私条款</a>|
            <a href="">唯品诚聘</a>|
            <a href="">365爱心基金</a>|
            <a href="">唯品卡</a>|
            <a href="">联系我们</a>
        </div>
        <div class="footer_context">
            <p>Copyright © 2008-2018 qiushuiyiren.com，All Rights Reserved 使用本网站即表示接受用户协议。版权所有 秋水伊人电子商务有限公司</p>
            <p><img src="../../assets/user/police_icon.png">豫公网安备 44010302111111号 豫ICP备08114786号 增值业务经营许可证：豫B2-20170777
                网络文化经营许可证：豫网文〔2015〕1528-229</p>
            <p>自营主体经营证照 风险监测信息 互联网药品交易服务资格证（豫C20140002）</p>
        </div>
        <div class="pay_list">
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexFoot"
    }
</script>

<style scoped>

  li{
    float: left;
  }
    .footer_main {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
    }

    .footer_icon {
        width: 100%;
        height: 75px;
        padding-top: 30px;
    }

    .footer_icon > ul {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .footer_icon > ul > li {
        width: 100px;
        height: 100%;
    }

    .footer_icon li > i {
        width: 58px;
        height: 100%;
        display: inline-block;
        background: url(../../assets/user/footer_vip_iconsv_0705-hash-728f749a.png) 0 0;
    }

    .footer_service {
        width: 100%;
        height: 160px;
        margin: 40px 0;
        overflow: hidden;
    }

    .footer_service dt {
        margin-bottom: 10px;
    }

    .footer_service > dl {
        width: 166.666px;
        height: 148px;
        float: left;
    }

    .footer_service > dl > dd {
        background: url(../../assets/user/footer-hash-3de6f1ae.png) no-repeat -6px -494px;
    }

    .footer_service dd > a {
        margin-left: 10px;
        color: grey;
        font-size: 12px;
    }

    .aboutUS {
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: rgb(215, 35, 126);
        text-align: center;
        color: white;
    }

    .aboutUS > a {
        color: white;
        font-size: 12px;
    }

    .footer_context {
        width: 100%;
        height: 57px;
        margin: 15px 0 0;
    }

    .footer_context > p {
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .pay_list {
        width: 100%;
        height: 40px;
        background: white;
    }

    .pay_list > ul {
        width: 650px;
        height: 100%;
        margin: 0 auto;
    }

    .pay_list > ul > li > a {
        width: 105px;
        height: 40px;
        display: inline-block;
        background: url(../../assets/user/footer-hash-3de6f1ae.png);
    }
</style>
