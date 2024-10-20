import Header from "../../component/Header/Header"
import Hero from "../../component/Hero/HEro"
import AlphaCard from "../../component/Card/AlphaCard"
import Image1 from "../../assets/image1.jpg"
import Image2 from "../../assets/image2.jpg"
import Image3 from "../../assets/image3.jpg"
import Image4 from "../../assets/image4.jpg"
import Image5 from "../../assets/image5.jpg"
import Image6 from "../../assets/image6.jpg"
import Image7 from "../../assets/image7.jpg"
import Image8 from "../../assets/image8.jpg"

import"./Home.css"

function Home() {
 

    return (
      <>
       <Header />
       <Hero />
       <div className="Container">
       <AlphaCard image={Image1} name= "Kendrick"  age="26" location="New jersey, USA"/>
       <AlphaCard image={Image2} name= "Sarah"  age="30" location="Michigan, USA"/>
       <AlphaCard image={Image3} name="Malcolm"  age="32" location="Ohio, USA"/>
       <AlphaCard image={Image4} name="Aleysha"  age="23" location="Washington DC,USA"/>
       <AlphaCard image={Image5} name="Sean"  age="27" location="Illinois, USA"/>
       <AlphaCard image={Image6} name="Martha"  age="25" location="Texas, USA"/>
       <AlphaCard image={Image7} name="Aaron"  age="35" location="West Virginia, USA"/>
       <AlphaCard image={Image8} name="Miriam"  age="29" location="Maryland, USA"/>
       </div>
      </>
    )
  }
  
  export default Home