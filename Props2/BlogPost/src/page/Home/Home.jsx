import Blog from "../../component/Blog"
import "./Home.css"
import Image1 from "../../assets/publicspeaking.jpg"
import Image2 from "../../assets/aloeimage.jpg"
import Image3 from "../../assets/workplace.jpg"
import Image4 from "../../assets/roseolive.jpg"



function Home (){
    return(
        <div className="Blog-contanier"> 
            <Blog title="If you want to be more confident when talking in public, start practising these 7 body language tricks" image={Image1} author="Lachlan Brown" content="Public speaking can be nerve-wracking but it doesn't have to be. In fact, how you carry yourself can make all the difference when it comes to commanding a room.It's not just about what you say, but how you say it - and that inclides your body language. Through adopting certain body language tricks, you can exude confidence even if you're feeling a little shaky on the inside. I'm about to share 7 body language tricks that, with practice, can help boosts your confidence when speaking in public. Let's get started. 1) Stand tall and proud. 2) Maintain eye contact. 3) Use open gestures. 4) Smile genuinely. 5) Slow down your speech. 6) Use pauses effectively. 7) Practice, practice, practice."  date="Oct. 19, 2024"/>

            <Blog title="9 reasons why the 'Aloe vera' plant is a blessing." image={Image2} author="Aakanksha Sharma" content="Aloe vera, one of the most versatile succulents to exist, is not just a trendy plant, but also one that helps in healing you and the air around you. Here we mention 9 reasons why it is a complete blessing for your space.  1) The aesthetics. 2) It spreads around nicely. 3) A lifesaver gel. 4) It is NASA-approved. 5) It is super low-maintenance 6) Brings in positive energy and healing qualities to your home. 7) It is easy to propagate. 8) Air purification. 9) It is also great for haircare" date="Oct. 19, 2024"/>

            <Blog title="5 mistakes to avoid when interacting with coworkers, according to an etiquette coach" image={Image3} author="Alyshia Hull" content="From spreading gossip to showing up late to meeting, employees often make subtle missteps when interacting with coworkers. Here are few mistakes to avoid. 1. Don't gossip with coworkers - no matter how close you think you are. 2. There are some topics that should be avoided in the workplace. 3. Don't arrive late to meetings. 4. Refrain from making jokes at the expense of others. 5. Pay attention to your body language when iteracting with colleagues" date="Oct. 18, 2024"/>


            <Blog title="Rosemary oil vs Olive oil: which is better for hair growth?" image={Image4} author="Yashika Goel" content="Rosemary oil and olive oil both help promote hair health. Rosemary oil is rich in anti-microbial and anti-inflammatory properties. It helps prevent dandruff and improves blood circulation. Olive oil is rich in antioxidant properties and fatty acids. It promotes hair health by preventing dryness. If you want to nourish dry and damaged hair use olive oil.Rosemary oil can rip natural olis from the scalp. If you want to improve hair growth and prevent hair loss use rosemary essential oil. Olive oil does not promote hair growth.Rosemary oil and olive oil both improve hair health. Use it according to your hair-specific needs. If you have dry or damaged hair use olive oil and if you have an oil scalp use rosemary oil.  " date="Oct. 8,2024"/>
        </div>
    )
}

export default Home