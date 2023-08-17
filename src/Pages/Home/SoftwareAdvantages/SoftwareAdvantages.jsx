

const SoftwareAdvantages = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 md:px-24 absolute top-[43rem]">
            <div className="bg-slate-900 p-5 text-white flex items-start rounded-xl gap-4">
                <img src="/public/ant.svg" alt="" />
                <div>
                    <h1 className="font-bold text-xl pb-2">AI-Copilot</h1>
                    <p>Enhance your screenwriting experience with GPT-powered editing features and AI-generated imagery</p>
                </div>
            </div>
            <div className="bg-slate-900 p-5 text-white flex items-start rounded-xl gap-4">
                <img src="/public/offline.svg" alt="" />
                <div>
                    <h1 className="font-bold text-xl pb-2">Offline-Capable</h1>
                    <p>Work on the go without having to rely on the cloud and an always-required internet connection</p>
                </div>
            </div>
            <div className="bg-slate-900 p-5 text-white flex items-start rounded-xl gap-4">
                <img src="/public/offline.svg" alt="" />
                <div>
                    <h1 className="font-bold text-xl pb-2">Free</h1>
                    <p>Enjoy the NOLAN free version while also influencing the further development of the product.</p>
                </div>
            </div>
            <div className="bg-slate-900 p-5 text-white flex items-start rounded-xl gap-4">
                <img src="/public/offline.svg" alt="" />
                <div>
                    <h1 className="font-bold text-xl pb-2">Secure</h1>
                    <p>Don’t worry, your screenplay is secure and encrypted with Nolan</p>
                </div>
            </div>
        </section>
    );
};

export default SoftwareAdvantages;