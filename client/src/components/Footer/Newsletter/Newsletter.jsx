import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-background">
                <div className="newsletter-content">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>Get the latest updates and news delivered straight to your inbox.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
