import { useEffect, useState } from "react";
import Countdown from "react-countdown";

import "./App.css";

const fetchKey = async () => {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/655b047512a5d376599bf9f5",
    {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-KEY":
          "$2a$10$8DmwLsCp0SQAaT8glh0/Cey/zi5Rj4wwHIoUXe7608Jh6f3ulF49e",
      },
    }
  );

  if (res.ok) {
    return res.json();
  } else {
    return {
      record: {
        hash: 1717358400000,
      },
    };
  }
};

function App() {
  const [date, setDate] = useState<number>(0);

  useEffect(() => {
    fetchKey().then((r) => {
      if (r?.record?.hash) {
        console.log(123);
        setDate(r.record.hash);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="main">
        <img className="image" src="deadline.png" alt="deadline" />
        {date ? (
          <Countdown
            date={new Date(date)}
            renderer={(props) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  <div className="wrap">
                    <p className="title">Days</p>
                    <p className="value">{props.days}</p>
                  </div>
                  :
                  <div className="wrap">
                    <p className="title">Hours</p>
                    <p className="value">{props.hours}</p>
                  </div>
                  :
                  <div className="wrap">
                    <p className="title">Minutes</p>
                    <p className="value">{props.minutes}</p>
                  </div>
                  :
                  <div className="wrap">
                    <p className="title">Seconds</p>
                    <p className="value">{props.seconds}</p>
                  </div>
                </div>
              );
            }}
          />
        ) : (
          <p className="title">loading ...</p>
        )}
      </div>
      <div className="footerWrap">
        <div className="footer">
          Made with{" "}
          <img src="/heart.png" className="blob" width={24} height={24} /> by
          noZZa
        </div>
      </div>
    </>
  );
}

export default App;
