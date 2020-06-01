import ipapi from './mod.js' // import the ipapi module

console.log(await ipapi()) // returns information about your ip address
console.log(await ipapi('1.1.1.1')) // {"status":"success","country":"Australia","countryCode":"AU","region":"NSW","regionName":"New South Wales","city":"Sydney","zip":"1001","lat":-33.8688,"lon":151.209,"timezone":"Australia/Sydney","isp":"Cloudflare, Inc.","org":"","as":"AS13335 Cloudflare, Inc.","query":"1.1.1.1"}
console.log(await ipapi('2606:4700:4700::1111')) // {"status":"success","country":"United States","countryCode":"US","region":"CA","regionName":"California","city":"San Francisco","zip":"94107","lat":37.7802,"lon":-122.391,"timezone":"America/Los_Angeles","isp":"Cloudflare, Inc.","org":"Cloudflare, Inc.","as":"AS13335 Cloudflare, Inc.","query":"2606:4700:4700::1111"}
console.log(await ipapi('1.1.1.')) // {"status":"fail","message":"invalid query","query":"1.1.1."}
