const scriptName = "阻止网页跳转到App";
const scriptVersion = "1.0";

const appJumpPatterns = [
    /itunes\.apple\.com\/.+/i, // Apple App Store
    /\/alipays\//i, // Alipay
    /\/weixin:\/\//i, // WeChat
    /\/alibaba\//i, // Alipay
    /\/mqqapi\//i, // QQ
    /\/taobao\//i, // Taobao
    /\/suning\//i, // Suning
    /\/jd\//i, // JD
    /\/tmall\//i, // Tmall
    /\/meituan\//i, // Meituan
    /\/ele\.me\//i, // Ele.me
    /:\/\/d\.url\.cn\/.*\.plist.*/i, // Tim
    /:\/\/h5\.qzone\.qq\.com\/(report|log|proxy).*/i, // Tim
    /:\/\/i\.gtimg\.cn\/qqshow.*/i, // Tim
    /:\/\/mp\.weixin\.qq\.com\/mp\/(wapcommreport|appmsg_comment|jsreport|jsmonitor).*/i, // Weixin
    /:\/\/badjs\.weixinbridge\.com\/report.*/i, // Weixin
    /:\/\/rmonitor\.qq\.com\/appconfig.*/i, // Tencent Meeting
    /:\/\/live-spare\.alicdn\.com\/message.*/i, // Alibaba
    /:\/\/alive-interact\.alicdn\.com\/(livedetail|groupBuy)\/common.*/i, // Alibaba
    /:\/\/livemsgconnect\.taobao\.com\/live\/message.*/i, // Alibaba
    /:\/\/videotool\.ossgw\.alicdn\.com\/material\/tblive.*/i, // Alibaba
    /:\/\/fe\.m\.taobao\.com\/app\/mtb-guang.*/i, // Alibaba
    /:\/\/loggw-ex\.alipay\.com\/loggw\/logUpload\.do.*/i, // Alipay
    /:\/\/datagw-edge\.alipay\.com\/loggw\/logUpload\.do.*/i, // Alipay
    /:\/\/loggw\.alipay\.com\.cn\/loggw\/logUpload\.do.*/i, // Alipay
    /:\/\/gw\.alipayobjects\.com\/config\/loggw\/logConfig.do.*/i, // Alipay
    /:\/\/amdc-sibling\.alipay\.com\.cn\/s\?query.*/i, // Alipay
    /:\/\/amdc\.alipay\.com\/s\?query.*/i, // Alipay
    // 可以根据需要添加更多模式
];

async function main() {
    if (typeof $httpClient !== 'undefined') {
        const client = $httpClient;
        const request = client.request;
        client.request = async function (url, opts = {}) {
            if (appJumpPatterns.some(pattern => pattern.test(url))) {
                console.log(`拦截跳转到App的请求: ${url}`);
                return {
                    status: '拦截',
                    response: {
                        status: 403,
                        headers: {
                            'Content-Type': 'text/plain; charset=utf-8'
                        },
                        body: '请求被拦截，防止跳转到App'
                    }
                };
            }
            return request.call(client, url, opts);
        };
    }
}

main();
