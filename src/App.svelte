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
    { title: 'Full Stack Developer @ Rush Labs', duration: 'May 2024 - Present', content: "Mobile and web application development. D'Ieteren project · MyPop app · Gowlz app. NextJs, NestJs, React Native, tRPC, Prisma ORM, PostgreSQL, Vitest" },
    { title: 'Angular & NextJs Developer @ IdWeaver', duration: 'March 2023 - May 2024', content: 'Web application development. Edenred web app. Angular, NextJs, GraphQL, Redis' },
    { title: 'Full Stack Developer @ Underside', duration: 'June 2021 - March 2023', content: "Mobile application and CMS development for various clients. Oxycure · Tribery · Display by Underside. Angular, NodeJS, Ionic, Python, Redis, Linux & MacOS" },
    { title: 'Software Developer @ Inforius', duration: 'August 2020 - June 2021', content: "CMS development to digitize the services of Belgian municipal institutions. Angular, Kotlin & Azure" },
    { title: 'Intern Full Stack Developer @ IT-School', duration: 'February 2020 - April 2020', content: "Integration of new features into a web platform enabling schools to go digital. Symfony, HTML5, CSS3, JavaScript, jQuery, Ajax, RESTful & Github" },
    { title: 'Language Skills', columns: [{key: 'English', value: 'Notions'},{key: 'French', value: 'Mother tongue'}]},
    { title: 'Skills', columns: [
      {key: 'Angular', value: '3.5 yrs'},{key: 'NextJs', value: '2.5 yrs'},
      {key: 'NestJs', value: '4 yrs'},{key: 'React Native', value: '2 yrs'},
      {key: 'Ionic', value: '1.5 yrs'},{key: 'Python', value: '1 yr'},
      {key: 'Docker', value: '5 yrs'},{key: 'Azure', value: '2 yrs'},
      {key: 'Redis', value: '1.5 yrs'},{key: 'Prisma ORM', value: '2.5 yrs'},
      {key: 'GraphQL', value: '2 yrs'},{key: 'tRPC', value: '2 yrs'},
      {key: 'Vitest', value: '3 yrs'}
    ]},
  ];

  onMount(async () => {
    const cards: NodeList = document.querySelectorAll('.card');
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;  

    if (windowWidth > 750) {
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
    }
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