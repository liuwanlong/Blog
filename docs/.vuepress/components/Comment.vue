<template>
    <div id="gitalk-container"></div>
</template>

<script>
  import 'gitalk/dist/gitalk.css'
  import Gitalk from 'gitalk'

  export default {
    name: "Comment",

    mounted: () => {
      let pathLength = location.pathname.length;
      let pathname = location.pathname.substring(pathLength - 15, pathLength);
      const gitalk = new Gitalk({
        clientID: 'c91763a5c1a03f98b2f8',
        clientSecret: 'e7c2fe00e34d87ea3233a475965d7a374bbfd8e0',
        repo: 'Blog',
        owner: 'liuwanlong',
        admin: ['liuwanlong'],
        id: pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
      });
      gitalk.render('gitalk-container')
    }
  }
</script>