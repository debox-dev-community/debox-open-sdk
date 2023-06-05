import { Client } from '../'

const init = async () => {
	const data = new Client({
		endpoint: 'https://open.debox.pro',
		apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		userAgent: 'golang-sdk-v0.1.0',
	})
	const res = await data.getGroupId({
		inviteUrl: 'https://debox.site/group/00021pru'
	})
	console.log(res)
}

init()
