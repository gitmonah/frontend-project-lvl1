install: #  установка модулей
	npm ci

brain-games:  # запуск
	node bin/brain-games.js

brain-even:  # запуск
	node bin/brain-even.js

publish: #  публикация
	npm publish --dry-run

lint: # проверка линтером
	npx eslint .


