import AnimatedSpark from '../components/animatedSpark';
import Hero from '../components/hero';
import WorkExamples from '../components/workExamples';


export default function Home() {
  return (
     <div className="min-h-screen bg-[#181A1B] text-gray-200 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <AnimatedSpark />
        <Hero />
        <WorkExamples />
      </main>
    </div>
  );
}
