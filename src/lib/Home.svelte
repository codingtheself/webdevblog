<script lang="ts">
  import { link } from "svelte-spa-router";
  import Header from "./Header.svelte";
  import Contentbox from "./Contentbox.svelte";
  const title = "Welcome to My WebDevBlog!";
</script>

<Header {title}>
  <Contentbox subTitle="Recent Posts">
    <div class="blog-posts-box" style="margin-top: 2em;">
      <ul>
        <li><a href="/posts/day08" use:link>Day 08: Got Overwhelmed + learning TailwindCSS</a></li>
        <li><a href="/posts/day07" use:link>Day 07: Some Rest + trying Vue.JS</a></li>
        <li><a href="/posts/day06" use:link>Day 06: Finally Integrated Svelte Library in my Blog</a></li>
        <li><a href="/posts/day05" use:link>Day 05 - Rewriting my Blog in Svelte + Stuck in adding Images</a></li>
        <li>
          <a href="/posts/day04" use:link>Day 04: Svelte Routing fixed and Reading</a
          >
        </li>
        <li>
          <a href="/posts/day03" use:link>Day 03: Trying Svelte and Routing</a>
        </li>
        <li><a href="/posts/day02" use:link>Day 02: Styling my Blog</a></li>
        <li><a href="/posts/day01" use:link>Day 01: The Starting of Web Dev</a></li>
      </ul>
    </div>
  </Contentbox>
</Header>
