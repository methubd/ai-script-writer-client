

const Banner = () => {
    return (
        <div className="bg-[url('https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_1.webp&w=1920&q=75')] bg-cover bg-center min-h-[78%] flex items-center">
            <div className="pl-6 md:pl-16">
                <div className="w-[220px] md:w-[350px]">
                    <img className="w-full" src="https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_logo.png&w=640&q=75" alt="" />
                </div>
                <h1 className="text-white font-bold text-5xl py-5">Free Script Writing Software</h1>
                <p className="text-white text-2xl md:text-2xl font-normal pb-5">Unleash creativity with AI Copilot - craft compelling <br /> screenplays</p>
                <button className="bg-red-400 text-white text-lg font-bold px-8 py-5 rounded-lg active:bg-red-700 transition-colors hover:bg-red-300">Start Writing</button>
                <button className="px-8 py-5 border mx-4 border-white rounded-lg text-white text-lg font-bold active:text-red-700 active:border-red-700 transition-colors hover:border-red-300 hover:text-red-300">Log in</button>
            </div>
        </div>
    );
};

export default Banner;