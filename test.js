import ipapi from './mod.js' // import the ipapi module

console.log(await ipapi('1.3.3.7')) // {"status":"success","country":"China","countryCode":"CN","region":"GD","regionName":"Guangdong","city":"Guangzhou Shi","zip":"","lat":23.379,"lon":113.763,"timezone":"Asia/Shanghai","isp":"CHINANET-GD","org":"Chinanet GD","as":"","query":"1.3.3.7"}
