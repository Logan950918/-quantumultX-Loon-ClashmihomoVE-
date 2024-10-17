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
