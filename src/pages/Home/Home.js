import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Speakers from "../../components/Speakers/Speakers";
import Sponsors from '../../components/Sponsors/Sponsors'
import Agenda from '../../components/Agenda/Agenda';
import Afterparty from '../../components/Afterparty/Afterparty';
import Divider from "../../components/Divider/Divider";
import SectionTemplate from "../../components/SectionTemplate/SectionTemplate";
import PastEvents from "../../components/PastEvents/PastEvents";
import { useRef } from "react";

function Home() {
    const sectionTitles = [
        // {name: 'About', component: <About />, disabled: false}, 
        {name:'Speakers', component: <Speakers />, disabled: true },
        {name:'Sponsors', component: <Sponsors />, disabled: true},
        {name:'Agenda', component: <Agenda />, disabled: true},
        {name:'Afterparty', component: <Afterparty />, disabled: true},
        {name: 'Past Events', component: <PastEvents />, disabled: false}
    ];

    const endRef = useRef();
    return (
        <div>
            <Divider end={endRef} />
            <Hero />
            <div className="sections">
                <div ref={endRef}>
                    <div className="section">
                        <About />
                    </div>
                {
                    sectionTitles.map((sectionTitle, index) => (
                        !sectionTitle.disabled &&
                        <SectionTemplate title={sectionTitle.name} key={index} index={index}>
                            {sectionTitle.component}
                        </SectionTemplate>
                    ))
                }
                </div>
                
            </div>
        </div>
    );
}

export default Home;