install: 
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js 17.9.0

lint:
	npx eslint .