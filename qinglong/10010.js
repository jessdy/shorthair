let config = require("./utils/config");
const axios = require('axios');
const LT_API_HOST = 'https://act.10010.com/SigninApp/signin/daySign';
console.log(`\n🔔${config.APIKey}, 开始!\n`)
// 判断环境变量里面是否有联通cookie
if (process.env.LT_COOKIE) {
    console.log(`已获取到联通cookie`)
    const headers = {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)  unicom{version:iphone_c@11.0500}',
        'Accept': 'application/json, text/plain, */*',
        'Sec-Fetch-Site': 'same-site',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Sec-Fetch-Mode': 'cors',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': process.env.LT_COOKIE
    }
    await axios.post(LT_API_HOST, {}, {
        headers
    }).then(res => {
        console.log(res.msg)
    })
}
