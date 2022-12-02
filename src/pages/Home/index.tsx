import { Contact } from './components/Contact';
import { Intro } from './components/Intro';
import { PhotoSection } from './components/Photos';

export function Home(){
  return(
    <>
      <Intro />
      <PhotoSection />
      <Contact />
    </>
  )

}