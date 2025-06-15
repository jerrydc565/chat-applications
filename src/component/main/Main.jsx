import React, { useContext } from "react";
import User from "../../assets/7309681.jpg";
import Bulb from "../../assets/lightbulb.png";
import Messeage from "../../assets/conversation.png";
import Code from "../../assets/code.png";
import Gallary from "../../assets/baisc.png";
import Mic from "../../assets/mic.png";
import Send from "../../assets/send.png";
import Compass from "../../assets/compass.png";
import "./Main.css";
import { Context } from "../../context/Context";
import Germini from "../../assets/google-gemini-logomark-24438 (1).png";
function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setShowResult,
    setInput,
    input,
  } = useContext(Context);
  const handleKeyEvent = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onSent()
    } 
}
  return (
    <main className="main">
      <section className="nav">
        <p>Gemini</p>
        <img src={User} alt="" width={"100px"} />
      </section>
      <section className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can i help you today</p>
            </div>
            <div className="all-cards">
              <div className="cards">
                <div className="card">
                  <p>
                    Suggest beautiful places to see on an upcomnig road trip
                  </p>
                  <img src={Compass} alt="" width={"50px"} />
                </div>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Briefly summarize this concept: urban planning</p>
                  <img src={Bulb} alt="" width={"50px"} />
                </div>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Brainstorm team boding activites for our work retreat</p>
                  <img src={Messeage} alt="" width={"50px"} />
                </div>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Improve the readability of the following code</p>
                  <img src={Code} alt="" width={"50px"} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={User} alt="" width={"30px"} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={Germini} alt="" width={"20px"} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a promt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
             onKeyDown={handleKeyEvent}
            />
            <div>
              <img src={Mic} alt="" />
              {input ? (
                <img src={Send} alt="" onClick={() => onSent()} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display niaccurate ingo, includig about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </section>
    </main>
  );
}

export default Main;

