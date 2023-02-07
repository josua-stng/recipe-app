import ContributorParticipant from '../components/ContributorParticipant';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';
import Navbar from '../components/Navbar';
import Participant from '../components/Participant';
import PopularRecipe from '../components/PopularRecipe';
import TriedParticipants from '../components/TriedParticipants';


function Home() {

    return (
        <div>
         <Navbar/>
            <Participant/>
            <ContributorParticipant/>
            <PopularRecipe/>
            <TriedParticipants/>
            <ImageBanner/>
            <Footer/>
    
        </div>
    )
}

export default Home;