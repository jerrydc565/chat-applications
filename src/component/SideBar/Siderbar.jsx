import React, { useContext, useState } from "react";
import Menu from "../../assets/menu_8220628.png";
import Plus from "../../assets/plus.png";
import Question from "../../assets/question.png";
import Message from "../../assets/conversation.png";
import Settings from "../../assets/settings.png";
import History from "../../assets/history.png";
import "./Sidebar.css";
import { Context } from "../../context/Context";

function Siderbar() {
  const [extended, setExtended] = useState(false);
  const handleChange = () => {
    if (extended === true) {
      setExtended(false);
    } else {
      setExtended(true);
    }
  };
  const { onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <main className="siderbar">
      <section className="top">
        <img
          src={Menu}
          alt=""
          width={"30px"}
          className="menu"
          onClick={handleChange}
        />

        <div onClick={()=>newChat()} className="new-chat">
          <img src={Plus} alt="" width={"30px"} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={Message} alt="" width={"30px"} />
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
          </div>
         : null}
      </section>
      <section className="bottom">
        <div className="bottom-item recent-entry">
          <img src={Question} alt="" width={"30px"} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={History} alt="" width={"30px"} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={Settings} alt="" width={"30px"} />
          {extended ? <p>Settings</p> : null}
        </div>
      </section>
    </main>
  );
}

export default Siderbar;
