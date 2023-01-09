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
  <h3>Formations</h3>
  <span class="duration">Septembre 2017 - Juin 2020</span>
  <p>
    Ecole Pratique Hautes Etudes Commerciales
    Bachelier, Technologie de l'informatique
  </p>
</div>

<style lang="scss">
  @import 'src/styles/colors';

  .card {
    position: absolute;
    border-radius: 12px;
    //padding: 0 15px 10px 15px;
    max-width: 350px;
    min-width: 150px;
    background: $white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    .header {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      height: 20px;
      background: lightgray;
      cursor: grab;
    }

    .card-content {
      margin: 10px 15px;
    }
    
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    }

    .duration {
      color: $bg-light;
      font-size: 14px;
    }

    .personnal-infos {
      border-radius: 12px;
      width: 100%;
      gap: 10px;
      margin-top: 15px;
      display: flex;
      justify-content: space-around;
      
      & > * {
        cursor: pointer;
        height: 35px;
        width: 35px;

        &:hover {
          transform: scale(1.1);
        }
      }

      img {
        height: 30px;
        width: 30px;
      }
    }
  }
</style>