import "../sass/pages";
import "../sass/404";
import Highway from "@dogstudio/highway/build/es5/highway";

class Renderer extends Highway.Renderer {
  onEnter() {
    console.log("About: onEnter");
  }
  onLeave() {
    console.log("About: onLeave");
  }
  onEnterCompleted() {
    console.log("About: onEnterCompleted");
  }
  onLeaveCompleted() {
    console.log("About: onLeaveCompleted");
  }
}

export default Renderer;
