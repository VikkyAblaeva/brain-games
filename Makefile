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

brain-gcd:
	node bin/brain-gcd.js 17.9.0

brain-prime:
	node bin/brain-prime.js 17.9.0

brain-progression:
	node bin/brain-progression.js 17.9.0