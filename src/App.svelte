<script lang="ts">
  import { onMount } from 'svelte';

  // Draggable 
  import { draggable } from '@neodrag/svelte';
  import type { DragOptions } from '@neodrag/svelte';

  const dragOptions: DragOptions = {
    axis: 'both',
    bounds: 'parent',
    gpuAcceleration: false,
    onDragStart: (e) => {
      onDragStart(e);
    },
  }
  let currentZindex: number = 1;

  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  onMount(async () => {
    const cards: NodeList = document.querySelectorAll('.card');
    const windowWidth: number = window.innerWidth - 370;
    const windowHeight: number = window.innerHeight - 170;  

    cards.forEach((element: HTMLElement) => {
      element.style.top = getRandom(0, windowHeight) + 'px';
      element.style.left = getRandom(0, windowWidth) + 'px';
      const rect = element.getBoundingClientRect();      
      //currentZindex++;
    })
  })

  function onDragStart(element) {
    console.log(element)
  }

</script>

<main class="main-container">
  <div class="flex-row full-height content">
    <div class="card" id="experiences" use:draggable={dragOptions}>
      <h3>Profil</h3>
      <div class="separator"></div>
      <p>Varewyck Tom</p>
      <p>Développeur Full Stack</p>
      <a href="https://www.linkedin.com/in/tom-varewyck-26a51a11a/">Profil LinkedIn</a>
    </div>

    <div class="card" id="experiences" use:draggable={dragOptions}>
      <h3>Expériences</h3>
      <div class="separator"></div>
    </div>

    <div class="card" id="experiences" use:draggable={dragOptions}>
      <h3>Compétences</h3>
      <div class="separator"></div>
    </div>

    <div class="card" id="experiences" use:draggable={dragOptions}>
      <h3>Formations</h3>
      <div class="separator"></div>
    </div>
  </div>
  
    <!--<div class="card" id="formations">
      <h3>Formations</h3>
    </div>-->
</main>

<style lang="scss">
  @import 'src/styles/colors';

  .content {
    overflow: hidden;
    height: calc(100% - 20px);
    padding: 10px;
    .card {
      position: absolute;
      border-radius: 12px;
      padding: 10px 15px;

      height: 150px;
      width: 350px;
      background: $white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
      }
    }
  }
  
</style>