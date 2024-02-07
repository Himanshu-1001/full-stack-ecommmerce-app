import "./Banner.scss";
import banner from '../../../assets/banner-img.png'
const Banner = () => {
    return (
        <section className="banner-section">
            <div className="banner-content">
                <img src={banner} alt="Banner" className="banner-image" />
                {/* <div className="banner-buttons">
                    <button className="btn-primary">Explore</button>
                    <button className="btn-secondary">Learn More</button>
                </div> */}
            </div>
        </section>
    );

};

export default Banner;
// <div className="banner-section">
//     <div className="banner-left">
//         <h1>Sales</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel expedita veritatis iste eaque facere eveniet esse incidunt. Ad, voluptatibus ab commodi eaque quam excepturi!</p>
//         <div className="banner-btn">
//             <button className="btn">Read More</button>
//             <button className="btn">Shop Now</button>
//         </div>
//     </div>
//     <div className="banner-right">
//         <img src={banner} alt="" />
//     </div>
// </div>
