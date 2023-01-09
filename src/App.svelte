<script lang="ts">
  import { onMount } from 'svelte';

  // Assets
  import AtSign from './assets/at-sign.svg';
  import LinkedIn from './assets/linkedin.svg';

  // Components
  import Card from './lib/Card.svelte';

  // Custom Types 
  type Card = {
    title: string;
    content: string;
    subTitle?: string; 
    duration?: string;
  }

  let currentZindex: number = 1;

  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  const cards: Card[] = [
    { title: 'coucou', subTitle: 'subcoucou', content: 'coucou content', duration: 'Juin' },
    { title: 'hello', subTitle: 'subhello', content: 'hello content' },
    { title: 'Formations', duration: 'Septembre 2017 - Juin 2020', content: "Ecole Pratique Hautes Etudes Commerciales Bachelier, Technologie de l'informatique" }
  ];

  onMount(async () => {
    const cards: NodeList = document.querySelectorAll('.card');
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;  

    cards.forEach((element: HTMLElement, index: number) => {
      if (index === 0) {
        const elementDimension = element.getBoundingClientRect();
        element.style.top = ((windowHeight / 2) - (elementDimension.height / 2)) + 'px';
        element.style.left = ((windowWidth / 2) - (elementDimension.width / 2)) + 'px';
      } else {
        element.style.top = getRandom(0, windowHeight) + 'px';
        element.style.left = getRandom(0, windowWidth) + 'px';
        const rect = element.getBoundingClientRect();
      }
    })
  })

  function onSetBoxToTop(e) {
    console.log(e)
    e.target.style.zIndex = currentZindex;
    currentZindex++;
  }

</script>

<main class="main-container">
  
  <div class="flex-row full-height center content">
    <div class="card" id="profile">
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

    <!-- {#each cards as card }
      <Card bind:card />
      <div class="card" id="experiences" use:draggable={dragOptions} >
        <div class="header"></div>
        <div class="card-content">{card.title}</div>
      </div>
    {/each} -->
    <!-- <div class="card" id="experiences" on:click={onSetBoxToTop} >
      <div class="header" use:draggable={{...dragOptions }}></div>
      <div class="card-content">
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
    </div> -->

    <!-- <div class="card" id="skills" use:draggable={dragOptions} on:click={onSetBoxToTop}>
      <h3>Compétences</h3>
    </div>

     -->
  </div>
</main>

<style lang="scss">
  @import 'src/styles/colors';

  .content {
    overflow: hidden;
    height: calc(100% - 20px);
    padding: 10px;

    #profile {
      z-index: 10000;
      padding: 20px;
    }
  }
  
</style>