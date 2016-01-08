#VanHooseDotWork  site
Site of VanHooseDotwork made with [Hugo](https://gohugo.io/) static site generator.

##Install

Get [Hugo](https://gohugo.io/):

On Mac just

	brew install hugo

Or get a release at: https://github.com/spf13/hugo/releases

Get this repo:

	git clone git@github.com:ernstkui/vanhoosedotwork.git

Inside the folder vanhoosedotwork run:

    mkdir themes
    cd themes
    git clone git@github.com:ernstkui/hugo-creative-theme.git

Go back to vanhoosedotwork:

	cd ..

Run hugo

	hugo server

Open your browser and go to:

	localhost:1313

##Deploy

Fetch the deployment script into the root of your source tree, make it executable.

	wget https://github.com/ernstkui/git-directory-deploy/raw/master/deploy.sh && chmod +x deploy.sh

Build the site to /dist.

	hugo -d dist

Run the deploy.sh script installed above.

	./deploy.sh -m "<name of deploy>"
