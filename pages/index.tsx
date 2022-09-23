import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { About } from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProject } from '../utils/fetchProjects'
import { fetchSkill } from '../utils/fetchSkills'
import { fetchSocial} from '../utils/fetchSocials'
import Skills from '../components/Skills'


type Props ={
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home= ({pageInfo, projects, skills, socials} : Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80' >
      <Head>
        <title>LaeeqtheDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/*Header*/ }
      <Header socials={socials}  />

      {/*Hero*/ }
      <section id='hero' className='snap-center'>
        <Hero pageInfo = {pageInfo} />

      </section>

      {/*About*/ }
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/*Skills*/ }
      <section id='skills' className='snap-start'>
       <Skills  skills={skills}  />


      </section>

      {/*Project*/ }
    <section id='projects' className='snap-start'>
      <Projects projects={projects}/>
    </section>
      {/*Contact*/ }
      <section id='contact' className='snap-start'>

        <ContactMe />
      </section>
     
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill = await fetchSkill();
  const projects: Project = await fetchProject();
  const socials: Social = await fetchSocial();
  return {
    props: {
      pageInfo, skills, projects, socials,
    }
  }
}
