import Highway from "@dogstudio/highway/build/es5/highway";

class Index extends Highway.Renderer {
  onEnter() {
    console.log("Index: onEnter");
  }
  onLeave() {
    console.log("Index: onLeave");
  }
  onEnterCompleted() {
    console.log("Index: onEnterCompleted");
  }
  onLeaveCompleted() {
    console.log("Index: onLeaveCompleted");
  }
}

export default Index;
