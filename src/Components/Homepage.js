import Info from './Info';
import Navbar from './Navbar';
import Hero from './Hero';
import ThreeCols from './ThreeCols';
import Sherbimet from './Sherbimet';
import ZgjidhniNe from './ZgjidhniNe';
import Feature from './Feature';
import KontaktForma from './KontaktForma';
import Footer from './Footer';
import TwoColumn from './TwoColumn';
import FourCols from './FourCols';
import Aboutus from './Aboutus';
export default function Homepage() {
    return (
        <div className="Homepage">
            {/* <Info /> */}
            <Navbar />
            <Info />
            <Hero />
            {/* <ThreeCols /> */}
            <Feature />
            <TwoColumn />
            <FourCols />
            <Aboutus />
            {/* <Sherbimet /> */}
            {/* <ZgjidhniNe /> */}
            {/* <KontaktForma /> */}
            <Footer />
        </div>
    )
}