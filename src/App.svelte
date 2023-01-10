<script lang="ts">
  import { onMount } from 'svelte';

  // Assets
  import LinkedIn from './assets/linkedin.svg';
  import Github from './assets/github.svg';

  // Components
  import Card from './lib/Card.svelte';
  
  // Types
  import type { CardType } from './types/card-type';

  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  const cards: CardType[] = [
    { title: 'Education', duration: 'September 2017 - June 2020', content: "Bachelor, IT @ EPHEC" },
    { title: 'Full Stack Developer @ Underside', duration: 'June 2021 - now()', content: "Mobile applications & CMS development for different type of sector. Angular, NodeJS, Ionic, Python, Linux & MacOS" },
    { title: 'Front-End Developer @ Inforius', duration: 'August 2020 - June 2021', content: "Development of CMS with the aim of digitizing the various services of Belgian communal establishments. Angular, Kotlin & Azure" },
    { title: 'Application Development Internship @ IT-School', duration: 'February 2020 - April 2021', content: "Integration of new functionalities in the web platform allowing establishments schools to go digital. Symfony, HTML5, CSS3, JavaScript, jQuery, Ajax, RESTful & Github" },
    { title: 'Language Skills', columns: [{key: 'English', value: 'Notions'},{key: 'French', value: 'Mother tongue'}]},
    { title: 'Soft Skills', columns: [
      {key: 'Angular', value: '2.5 ans'},{key: 'NodeJs', value: '2 ans'},
      {key: 'Ionic', value: '1.5 an'},{key: 'Python', value: '1.5 an'},
      {key: 'NestJs', value: '1 an'},{key: 'Linux', value: '4 ans'},
      {key: 'Docker', value: '2 ans'},{key: 'Azure', value: '1 an'}
    ]},
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
        element.style.top = getRandom(0, windowHeight - 150) + 'px';
        element.style.left = getRandom(0, windowWidth - 350) + 'px';
        const elementDimension = element.getBoundingClientRect();

        if (elementDimension.y > windowHeight / 2) {
          element.classList.add('lighter');
        } else {
          element.classList.remove('lighter');
        }
      }
    })
  })
</script>

<main class="main-container">
  <div class="flex-row full-height center content">
    <div class="card" id="profile">
      <h1>Varewyck Tom</h1>
      <p>Full Stack Developer</p>
      <div class="flex-row personnal-infos">
        <div class="flex-column">
          <a href="https://github.com/VareTom" target="_blank" rel="noreferrer">
            <img src={Github} alt="github icon">
          </a>
        </div>
        <div class="flex-column">
          <a href="https://www.linkedin.com/in/tom-varewyck-26a51a11a/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="linkedin icon">
          </a>
        </div>
      </div>
    </div>

    {#each cards as card}
      <Card bind:card />
    {/each}
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
      text-align: center;
    }
  }
</style>