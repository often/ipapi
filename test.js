import ipapi from 'https://deno.land/x/ipapi/mod.js' // import the ipapi module

console.log(await ipapi()) // returns information about your ip address
console.log(await ipapi('1.1.1.1')) // {"status":"success","continent":"Oceania","continentCode":"OC","country":"Australia","countryCode":"AU","region":"NSW","regionName":"New South Wales","city":"Sydney","district":"","zip":"1001","lat":-33.8688,"lon":151.209,"timezone":"Australia/Sydney","offset":36000,"currency":"AUD","isp":"Cloudflare, Inc.","org":"","as":"AS13335 Cloudflare, Inc.","asname":"CLOUDFLARENET","reverse":"one.one.one.one","mobile":false,"proxy":false,"hosting":true,"query":"1.1.1.1"}
console.log(await ipapi('2606:4700:4700::1111')) // {"status":"success","continent":"North America","continentCode":"NA","country":"United States","countryCode":"US","region":"CA","regionName":"California","city":"San Francisco","district":"South Beach","zip":"94107","lat":37.7802,"lon":-122.391,"timezone":"America/Los_Angeles","offset":-25200,"currency":"USD","isp":"Cloudflare, Inc.","org":"Cloudflare, Inc.","as":"AS13335 Cloudflare, Inc.","asname":"CLOUDFLARENET","reverse":"one.one.one.one","mobile":false,"proxy":false,"hosting":true,"query":"2606:4700:4700::1111"}
console.log(await ipapi('1.1.1.')) // {"status":"fail","message":"invalid query","query":"1.1.1."}

// supports languages too!

// default: en
// available: en, de, es, pt-BR, fr, ja, zh-CN, ru

console.log(await ipapi('1.3.3.7', 'zh-CN')) // {"status":"success","continent":"亚洲","continentCode":"AS","country":"中国","countryCode":"CN","region":"GD","regionName":"广东","city":"广州","district":"","zip":"","lat":23.379,"lon":113.763,"timezone":"Asia/Shanghai","offset":28800,"currency":"CNY","isp":"CHINANET-GD","org":"Chinanet GD","as":"","asname":"","reverse":"","mobile":false,"proxy":true,"hosting":false,"query":"1.3.3.7"}
console.log(await ipapi('dead::beef', 'de')) // {"status":"success","continent":"Europa","continentCode":"EU","country":"Schweiz","countryCode":"CH","region":"FR","regionName":"Freiburg","city":"Murten","district":"","zip":"3280","lat":46.9219,"lon":7.16595,"timezone":"Europe/Zurich","offset":7200,"currency":"CHF","isp":"Internet Assigned Numbers Authority","org":"Internet Assigned Numbers Authority","as":"","asname":"","reverse":"","mobile":false,"proxy":false,"hosting":false,"query":"dead::beef"}
