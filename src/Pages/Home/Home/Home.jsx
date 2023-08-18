import Banner from "../Banner/Banner";
import SoftwareAdvantages from "../SoftwareAdvantages/SoftwareAdvantages";
import WhatIsNolan from "../WhatIsNolan/WhatIsNolan";


const Home = () => {
    return (
        <div className=" h-screen">
            <Banner></Banner>
            <SoftwareAdvantages></SoftwareAdvantages>
            <WhatIsNolan></WhatIsNolan>
        </div>
    );
};

export default Home;