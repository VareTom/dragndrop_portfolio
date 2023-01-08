<script lang="ts">
  import { onMount } from 'svelte';

  // Assets
  import AtSign from './assets/at-sign.svg';
  import LinkedIn from './assets/linkedin.svg';

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
    })
  })

  function onDragStart(element) {
    console.log(element)
  }

  function onSetBoxToTop(e) {
    console.log(e)
    e.target.style.zIndex = currentZindex;
    currentZindex++;
  }

</script>

<main class="main-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="flex-row full-height content">
    <div class="card" id="profile" use:draggable={dragOptions} on:click={onSetBoxToTop}>
      <h1>Varewyck Tom</h1>
      <p>Développeur Full Stack</p>
      <div class="flex-row personnal-infos">
        <div class="flex-column">
          <a href="mailto:varewycktom@gmail.com">
            <img src={AtSign} alt="email sign icon">
          </a>
        </div>
        <div class="flex-column">
          <a href="https://www.linkedin.com/in/tom-varewyck-26a51a11a/">
            <img src={LinkedIn} alt="linkedin icon">
          </a>
        </div>
      </div>
    </div>

    <div class="card" id="experiences" use:draggable={dragOptions} on:click={onSetBoxToTop}>
      <h3>Expériences</h3>
      <div class="experience">
        Underside - Développeur Full Stack
        <span class="duration">Juin 2021 - now()</span>
        Développement d’application mobile et CMS
        pour différents clients.
        Angular, NodeJS, Ionic, Python, Linux & MacOS
      </div>

      <div class="experience">
        Inforius - Développeur de logiciel
        <span class="duration">Août 2020 - Juin 2021</span>
        Développement de CMS dans le but de
        numériser les différents services des
        établissements communaux belges.
        Angular, Kotlin & Azure
      </div>

      <div class="experience">
        IT-School - Stagiaire - Développeur Full Stack
        <span class="duration">Février 2020 - Avril 2020</span>
        Intégration de nouvelles fonctionnalités dans la
        plateforme web permettant aux établissements
        scolaires de passer au numérique.
        Symfony, HTML5, CSS3, JavaScript, jQuery, Ajax,
        RESTful & Github
      </div>
    </div>

    <div class="card" id="skills" use:draggable={dragOptions} on:click={onSetBoxToTop}>
      <h3>Compétences</h3>
    </div>

    <div class="card" id="formations" use:draggable={dragOptions} on:click={onSetBoxToTop}>
      <h3>Formations</h3>
      <span class="duration">Septembre 2017 - Juin 2020</span>
      <p>
        Ecole Pratique Hautes Etudes Commerciales
        Bachelier, Technologie de l'informatique
      </p>
    </div>
  </div>
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
      max-width: 350px;
      background: $white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      
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
  }
  
</style>