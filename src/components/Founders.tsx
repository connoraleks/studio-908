import '../css/Founders.css';
const Founders = () => {
    return (
        <div className="founder-container">
            <h3>Meet the Designers</h3>
            <p>“Good programmers do programming not because they expect to<br />get paid or get adulation by the public, but because it is fun to program.”<br />— Linus Torvalds, software engineer, inventor of the Linux operating system</p>
            <div className="founders">
                <div className="founder">
                    <img src={require("../assets/cosmiq.png")} alt="alternative" />
                    <h6>Connor Aleks<br />Frontend Lead</h6>
                </div>
                <div className="founder">
                    <img src={require("../assets/lemonhead.jpg")} alt="alternative" />
                    <h6>Cole Peterson<br />Backend Lead</h6>
                </div>
            </div>
        </div>
    );
};
export default Founders;






