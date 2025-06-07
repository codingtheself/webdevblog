<script lang="ts">

import { link } from "svelte-spa-router";
export let back_url;
export let next_url;

</script>

<hr>

If you are also learning Web Development or Aspiring to be a Full-Stack Web developer then, Join me on this journey by hitting me up on my social media handles:
    <br>
    <br>

    <ul>
        <li><a href="https://x.com/coding_theself">Twitter -> @Coding_TheSelf</a></li>
        <li><a href="https://www.linkedin.com/in/sourav-yadav-self/">LinkedIn -> sourav-yadav-self</a></li>
        <li><a href="https://dev.to/coding_self">Dev.To -> coding_self</a></li>
    </ul>

<br><br>

<hr>
<div class="bottom-nav" style="margin-top: 20px; margin-bottom: 50px; width: 100%; display: flex; flex-direction: row; justify-content: space-between;">
    <span><a href={back_url} use:link>&lt;&lt; Prev</a></span>
    <span><a href={next_url} use:link>Next &gt;&gt;</a></span>
</div>
