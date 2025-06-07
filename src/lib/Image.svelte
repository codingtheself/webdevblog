<script lang="ts">
    export let image_src: string;
    export let image_alt: string;

    export let image_width: string;
    export let image_height: string;
    export let image_caption: string;
</script>


<figure style="text-align: center;">
  <img
    src={image_src}
    alt={image_alt}
    width={image_width}
    height={image_height}
  />

  <figcaption style="font-size: small;">
    {image_caption}
  </figcaption>
</figure>
