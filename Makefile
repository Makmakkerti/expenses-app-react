lint:
	npx eslint .

install:
	npm install

serve:
	npx live-server public/

dev-server:
	npx webpack serve

build:
	npx webpack
