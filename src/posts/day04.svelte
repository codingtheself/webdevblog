<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "What's my Goal";
    const title = "Day 04: Routing Works 🎉 + Reading";

    const back_url = "/posts/day03";
    const next_url = "/posts/day05";

</script>

<Header {title}>
    <Contentbox {subTitle}>

        <ul>
          <li>Fix the <code>svelte-spa-router</code> routing issue I was stuck on yesterday.</li>
          <li>Make modular pages render properly like <code>/home</code>, <code>/about</code>, and individual blog posts.</li>
        </ul>
        
        <br>

         <h3><u>Problems I Faced</u></h3>

         <ul>
          <li>
            Yesterday, <i>none</i> of the routes were working — the browser was blank, and no components showed up.
            <br><br>
            Turns out, I wasn’t passing the correct <code>routes</code> config to the router.
          </li>
          <br>
          <li>
            Today, I fixed it by creating a <code>router.js</code> file and explicitly defining the route-component mapping like this:
            <pre><code>{`import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Day04 from './pages/Day04.svelte';

const routes = {
    '/home': Home,
    '/about': About,
    '/post/day04': Day04,
};

export default routes;`}
</code></pre>
          </li>

          <br>
          <li>
            Then I imported and used it inside <code>App.svelte</code>:
            <pre><code>{`<script>
  import Router from "svelte-spa-router";
  import NavBar from "./pages/NavBar.svelte";
  import routes from './router.js';

  console.log('Active route:', routes);
</script>

<NavBar />;

<main class="main-body">
  <Router {routes} />
</main>`}
</code></pre>
          </li>
        </ul>

        <br>

        <Image image_src="assets/images/day04-router-code.png" image_alt="VS Code and router.js codes" image_width="600vw" image_height="400" image_caption="Writing routes in the router.js for svelte" />

         <h3><u>What I've Learned</u></h3>

        <ul>
          <li>
            I finally understood how <code>svelte-spa-router</code> works — defining and passing routes is crucial. And I could now build these file by:
            <br><br>
            <code>
                npm run build
            </code>

            <br><br>
            this will create your static site files inside the <code>dist/</code> folder.
          </li>
          <br>
          <li>
            Was trying how to use <i>OpenGL</i> in C to create some GUI windows but I got stuck at setting up and linking <code>GLFW.h</code> and other libraries. As C and C++ doesn't seem to have a convenient package manager. Maybe in the Future I will try to create it.
          </li>
          <br>
          <li>
            I also read an amazing article: <a href="https://yoan-thirion.gitbook.io/knowledge-base/software-craftsmanship/the-programmers-brain"><b>The Programmer’s Brain</b></a> — it discusses how we process and understand code. I highly recommend it to any dev feeling stuck while learning.
          </li>
        </ul>


        <Footer {back_url} {next_url} />
    </Contentbox>
</Header>



