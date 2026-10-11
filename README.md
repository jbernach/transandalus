# TransAndalus

[TransAndalus](https://www.transandalus.org) new web site.

# Technology used

This application uses AngularJS.

KML map layers are parsed client-side with GeoXML3, so their URLs must be accessible from the site origin or allow cross-origin requests.

The Google Maps JavaScript API uses the quarterly release channel for the latest stable updates.

# Build

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools (like
[Bower][] and [BrowserSync][]). You will only need to run this command when dependencies change in package.json.

    npm install

We use [Grunt][] as our build system. Install the grunt command-line tool globally with:

    npm install -g grunt-cli

Run the following command to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    grunt

Bower is used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in `bower.json`. You can also run `bower update` and `bower install` to manage dependencies.
Add the `-h` flag on any command to see how you can use it. For example, `bower update -h`.

## GeoXML3 patch

The GeoXML3 copy in `src/main/webapp/vendor-patches/geoxml3/geoxml3.js` contains local fixes for the Vita map:
it defaults invalid zero-sized KML icon scales to `1` and corrects the My Maps pin hotspot so the pin tip aligns
with its coordinates. Bower can overwrite the installed copy under `src/main/webapp/bower_components/geoxml3`.
After running `bower install` or `bower update`, restore the patched version with:

    cp src/main/webapp/vendor-patches/geoxml3/geoxml3.js src/main/webapp/bower_components/geoxml3/geoxml3.js

# Building for production

To optimize the TransAndalus site for production, run:

    grunt build

This will concatenate and minify CSS and JavaScript files. It will also modify `index.html` so it references
these new files.

[Node.js]: https://nodejs.org/
[Bower]: http://bower.io/
[Grunt]: http://gruntjs.com/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
