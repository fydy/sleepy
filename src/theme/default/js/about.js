import { setTitle } from "./utils";
import "../sass/pages";
import "../sass/about";
import Highway from "@dogstudio/highway/build/es5/highway";


class Renderer extends Highway.Renderer {
    onEnter() {
      console.log("About: onEnter");
    }
    onLeave() {
      console.log("About: onLeave");
    }
    onEnterCompleted() {
        document.querySelector('.tui-editor-contents').innerHTML = '123456789'

    }
    onLeaveCompleted() {
      console.log("About: onLeaveCompleted");
    }
  }
  
  export default Renderer;