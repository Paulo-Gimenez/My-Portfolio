import Navbar from "../components/Nav-bar";

function Home() {
  return (
    <>
      <div className="mt-16 w-screen h-screen bg-[url('/blob-scene-haikei.svg')] bg-no-repeat bg-cover bg-center">
        <Navbar />
        <div className="text-4xl flex ">
          <div className="container mx-auto flex flex-col items-center justify-center h-full">
            <p className="text-xl">This is a simple home page.</p>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Home;