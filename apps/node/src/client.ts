import request from './request'

class Client {
	endpoint: string // IP or hostname of SLS endpoint
	apiKey: string
	userAgent: string // default defaultLogUserAgent
	requestTimeOut: number // seconds to wait
	retryTimeOut: number // times to retry
	authVersion: string // AuthVersionType

	constructor(config: {
		endpoint: string
		apiKey: string
		userAgent?: string
		requestTimeOut?: number
		retryTimeOut?: number
		authVersion?: string
	}) {
		this.endpoint = config.endpoint
		this.apiKey = config.apiKey
		this.userAgent = config.userAgent || '@deboxdao/debox-open-sdk'
		this.requestTimeOut = config.requestTimeOut || 30
		this.retryTimeOut = config.retryTimeOut || 3
		this.authVersion = config.authVersion || '0.6.0'
	}
	init() {
		console.log(this.endpoint)
	}
	async registerCallbakUrl(body: {
		registerUrl?: string
		httpMethod?: string
	}) {
		try {
			const apiUrl = '/openapi/register_callbak_url'
			const res = await request(this.endpoint + apiUrl, {
				method: 'POST',
				body: { url: body.registerUrl || '', http_method: body.httpMethod || 'POST' },
				headers: {
					'X-Chat-Bodyrawsize': JSON.stringify(body).length.toString(),
					'User-Agent': this.userAgent,
					'Content-Type': 'application/json',
					'Accept-Encoding': 'deflate',
					'X-Api-Key': this.apiKey,
					'X-Chat-Apiversion': this.authVersion,
				},
			})
			return res
		} catch (error) {
			console.log(error)
			return
		}
	}
	async sendChatMsg(body: {
		toUserId?: string
		groupId?: string
		message?: string
	}) {
		try {
			const apiUrl = '/openapi/send_chat_message'
			const res = await request(this.endpoint + apiUrl, {
				method: 'POST',
				body: { to_user_id: body.toUserId || '', group_id: body.groupId || '', message: body.message || '' },
				headers: {
					'X-Chat-Bodyrawsize': JSON.stringify(body).length.toString(),
					'User-Agent': this.userAgent,
					'Content-Type': 'application/json',
					'Accept-Encoding': 'deflate',
					'X-Api-Key': this.apiKey,
					'X-Chat-Apiversion': this.authVersion,
				},
			})
			return res
		} catch (error) {
			console.log(error)
			return
		}
	}
}

export default Client
