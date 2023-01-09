<script lang="ts">
  export let card: any;
  $: console.log(card);

  // Draggable 
  import { draggable } from '@neodrag/svelte';
  import type { DragOptions } from '@neodrag/svelte';

  const dragOptions: DragOptions = {
    axis: 'both',
    bounds: 'body',
    gpuAcceleration: false,
    onDragStart: (e) => {
      onDragStart(e);
    },
  }

  function onDragStart(element) {
    console.log(element)
  }

</script>

<div class="card" id="formations" use:draggable={dragOptions}>
  <h3>{card.title}</h3>
  {#if card.subTitle}
    <span class="sub-title">{card.subTitle}</span>
  {/if}
  {#if card.duration}
    <span class="duration">{card.duration}</span>
  {/if}
  <p class="content">{card.content}</p>
</div>