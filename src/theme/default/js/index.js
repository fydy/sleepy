import '../sass/index';
import creatPost from "./utils/creatPost";
import { infiniteScroll, sortPosts } from "./utils";
import Highway from "@dogstudio/highway/build/es5/highway";
let currentPage = 1;
const posts = sortPosts(window.database.posts);
creatPost('.posts', currentPage++, posts);
infiniteScroll(() => {
    creatPost('.posts', currentPage++, posts);
});

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