function Home() {
  return (
    <>
      <h1 className="font-heading text-3xl text-secondary">Heading</h1>
      <p className="font-body text-base text-secondary ">Text</p>
      <button className="px-4 py-2 bg-primary text-bg rounded-md">
        Button
      </button>
      <div className="p-4 my-4 rounded-lg bg-secondary shadow border border-secondary/20">
        Card
      </div>
      <input
        type="text"
        placeholder="name"
        className="w-full px-3 py-2 rounded-md border border-secondary/30 focus:border-primary outline-none"
      />
    </>
  );
}

export default Home;
