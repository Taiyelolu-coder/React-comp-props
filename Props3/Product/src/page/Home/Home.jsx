import Product from "../../component/Product"

import "./Home.css"
import Image1 from "../../assets/moin-moin.jpg"
import Image2 from "../../assets/egusi.jpg"
import Image3 from "../../assets/Native-rice.jpg"
import Image4 from "../../assets/Jollof-rice.jpg"
import Image5 from "../../assets/amala.jpg"
import Image6 from "../../assets/nkwobi.jpg"
import Image7 from "../../assets/ofada-rice.jpg"
import Image8 from "../../assets/puff-puff.jpg"
import Image9 from "../../assets/ogbono.jpg"
function Home() {
  

    return (
      <div className="Product-page">
        <Product image={Image1} name="Steamy delicious Moin-moin" price="#3,000" description="Made with beans and mackerel fish"/> 

        <Product image={Image2} name="Egusi soup with pounded yam" price="#6,000" description="Prepared with melon seeds, chicken, cow tripe and skin and paired with pounded yam"/> 

        <Product image={Image3} name="Native rice" price="#5,000" description="Made with rice, shrimps, prawns and smoked fish"/> 

        <Product image={Image4} name="Jollof rice" price="#10,000" description="Consists with rice and chicken, garnished with parsley and fresh tomatoes "/>

        <Product image={Image5} name="Amala" price="#9,000" description="Made with yam flour, served withtomato stew and assorted beef"/> 

        <Product image={Image6} name="Nkwobi" price="#7,000" description="Made with goat meat, peppers and veggies"/>

        <Product image={Image7} name="Ofada rice" price="#8,000" description="Consist of steamed local rice, beef and moin-moin "/> 

        <Product image={Image8} name="Puff-puff" price="#3,500" description="Made with flour, yeast, milk and sugar"/> 

        <Product image={Image9} name="Ogbono soup" price="#6,500" description="Made from ogono seeds, and assorted beef garnished with uziza leaf" />
      </div>
    )
  }
  
  export default Home