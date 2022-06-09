install: 
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js 17.9.0

lint:
	npx eslint .

brain-even:
	node bin/brain-even.js 17.9.0

brain-calc:
	node bin/brain-calc.js 17.9.0