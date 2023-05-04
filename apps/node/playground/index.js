import { testBuild } from '../dist/main'

const init = async () => {
	const data = await testBuild()
	console.log(data)
}

init()
