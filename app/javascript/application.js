// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


import "@awesome.me/webawesome/dist/components/button/button.js";
import "@awesome.me/webawesome/dist/components/card/card.js";
import "@awesome.me/webawesome/dist/components/input/input.js";

// web awesome imports
import { setBasePath } from "@awesome.me/webawesome/dist/webawesome.js";
setBasePath("node_modules/@awesome.me/webawesome/dist");
