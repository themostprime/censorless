all:
	DISPLAY=:0 sudo google-chrome --pack-extension=Source --pack-extension-key=Censorless.pem --user-data-dir=/tmp/foooo
	sudo chown srsly:srsly Source.crx
	mv Source.crx Censorless.crx
