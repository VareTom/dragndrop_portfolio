<script lang="ts">
  export let card: any;

  // Draggable 
  import { draggable } from '@neodrag/svelte';
  import type { DragOptions } from '@neodrag/svelte';

  const dragOptions: DragOptions = {
    axis: 'both',
    bounds: 'body',
    gpuAcceleration: false,
    onDrag: (e) => {
      const windowHeight: number = window.innerHeight; 
      const draggingCard = document.querySelector('.card.neodrag.neodrag-dragging');
      const cardDimension = draggingCard.getBoundingClientRect();
  
      if (cardDimension.y > windowHeight / 2) {
        draggingCard.classList.add('lighter');
      } else {
        draggingCard.classList.remove('lighter');
      }
    }
    // onDragStart: (e) => {
    // console.log(e);
    // }
  }
</script>

<div class="card" id="formations" use:draggable={dragOptions}>
  <div class="header"></div>
  <div class="content">
    <h3>{card.title}</h3>
    {#if card.subTitle}
      <span class="sub-title">{card.subTitle}</span>
    {/if}
    {#if card.duration}
      <span class="duration">{card.duration}</span>
    {/if}
    <p>{card.content}</p>
  </div>
</div>