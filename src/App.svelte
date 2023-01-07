<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async () => {
    const cards: NodeList = document.querySelectorAll('.card');
    const windowWidth: number = screen.width;
    const windowHeight: number = screen.height; 
    
    console.log(windowHeight, windowWidth);
    cards.forEach((element: HTMLElement) => {
      //const randomX = Math
      element.addEventListener('dragstart', dragStart);
      element.addEventListener('dragenter', dragEnter)
      element.addEventListener('dragover', dragOver);
      element.addEventListener('dragend', dragEnd);
      console.log(element);
      const rect = element.getBoundingClientRect();
      console.log(rect);
      /*return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };*/
        });
  })

  function dragStart(e) {
  console.log(e);
  
}

function dragEnd(e) {
  //this.className = "fill";
  console.log(e);
  console.log('end')
  changePosition(e, e.screenX, e.screenY);
}

function dragOver(e) {
  e.preventDefault();
  console.log(e);
}

function dragEnter(e) {
  e.preventDefault();
  //this.className += " hovered";
  console.log(e);
}

function changePosition(element, positionX, positionY) {
  element.style('top', positionY);
  element.style('left', positionX);
}

</script>

<main class="main-container">
  <div class="flex-row center title">
    <h2>Varewyck Tom</h2>
  </div>
  <div class="content">
    <div class="card" id="experiences" draggable="true">
      <h3>Expériences</h3>
    </div>
    <!--<div class="card" id="formations">
      <h3>Formations</h3>
    </div>-->
  </div>
</main>

<style lang="scss">
  @import 'src/styles/colors';

  .title {
    color: $white;
    font-size: 32px;
  }

  .content {
    margin: 20px;
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