install: #install dependencies
	npm install

brain-games: #launch application
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
