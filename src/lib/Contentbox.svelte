<script lang="ts">
    export let subTitle: string;
</script>

<div
  class="content-box"
  style="width: 75%; margin-left: auto; margin-right: auto;"
>
  <h2><u>{subTitle}</u></h2>
  
  <slot />

</div>
