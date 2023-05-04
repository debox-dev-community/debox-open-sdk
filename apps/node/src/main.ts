export async function testBuild() {
	return await resloveBoolean()
}

function resloveBoolean() {
	return new Promise((reslove) => {
		reslove(true)
	})
}
