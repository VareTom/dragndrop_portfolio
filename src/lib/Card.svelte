<script lang="ts">

  // Types
  import type { CardType } from '../types/card-type';

  export let card: CardType;

  // Draggable 
  import { draggable } from '@neodrag/svelte';
  import type { DragOptions } from '@neodrag/svelte';

  const dragOptions: DragOptions = {
    axis: 'both',
    bounds: 'body',
    gpuAcceleration: false,
    handle: '.header',
    disabled: window.innerWidth < 750,
    onDrag: () => {
      const windowHeight: number = window.innerHeight; 
      const draggingCard: Element = document.querySelector('.card.neodrag.neodrag-dragging');
      const cardDimension: DOMRect = draggingCard.getBoundingClientRect();
      
      if (cardDimension.y > windowHeight / 2) {
        draggingCard.classList.add('lighter');
      } else {
        draggingCard.classList.remove('lighter');
      }
    }
  }
</script>

<div class="card" id="formations" use:draggable={dragOptions}>
  <div class="header"></div>
  <div class="content">
    <h3>{card.title}</h3>
    {#if card.duration}
      <span class="duration">{card.duration}</span>
    {/if}
    {#if card.content}
      <p>{card.content}</p>
    {/if}
    {#if card.columns && card.columns.length > 0}
      {#each card.columns as column}
        <div class="flex-row skills">
          <div class="flex-column">{column.key}</div>
          <div class="flex-column">{column.value}</div>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .skills {
    justify-content: space-between;
    width: 250px;
    margin-top: 5px;
  }
</style>