import Hero from "./components/Hero"

const App = () => {
  return (
   <main className="relative min-h-screen w-screen overflow-x-hidden">
    <Hero />

    <section className="z-0 relative min-w-screen h-dvh bg-blue-300">hi</section>
   </main>
  )
}

export default App