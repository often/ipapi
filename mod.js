export default async function ipapi(ip) {
	if (!ip) ip = ''

	const data = await fetch('http://ip-api.com/json/' + ip)

	return data.json()
}
