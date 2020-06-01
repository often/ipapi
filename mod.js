export default async function ipapi(ip, lang) {
	if (!ip) ip = ''
	if (!lang) lang = 'en'

	const langs = ['en', 'de', 'es', 'pt-BR', 'fr', 'ja', 'zh-CN', 'ru']

	if (!langs.includes(lang)) throw 'unknown language, supported ones are: ' + langs.join(', ')

	const data = await fetch('http://ip-api.com/json/' + ip + '?lang=' + lang + '&fields=66842623')

	return data.json()
}
