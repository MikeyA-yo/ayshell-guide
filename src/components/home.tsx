export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-8 justify-center">
      <h2 className="text-2xl font-bold">Explore →</h2>
      <div className="flex gap-4">
      <div className="flex bg-white w-80 h-96 flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
        <div className="flex-[1] overflow-hidden">
          <img src="/aysh.png" alt="aysh" width={200} height={200} className="rounded-md w-32 h-32" />
        </div>
        <div className="flex-[1]">
          <h3>Installation</h3>
          <p>Get started by installing.</p>
        </div>
      </div>
      
      <div className="flex bg-white w-80 h-96 flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
        <div className="flex-[1] overflow-hidden">
          <img src="/ayshu.png" alt="aysh in action" width={200} height={200} className="rounded-md w-32 h-32" />
          </div>
          <div className="flex-[1]">
          <h3>Built in commands</h3>
          <p>See the list of built in commands</p>
        </div>
      </div>
    </div>
    </div>
  );
}
