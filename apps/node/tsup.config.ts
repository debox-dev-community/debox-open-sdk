import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/main.ts'],
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	shims: true,
	format: ['cjs', 'esm'],
})
