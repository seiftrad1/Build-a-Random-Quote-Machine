import React, { useEffect, useState } from "react";
import styled from "styled-components";
const click = () => {
  console.log("seif");
};

const WidgetWrapper = styled.div`
  border-radius: 3px;
  position: relative;
  //margin:8% auto auto auto;
  width: 450px;
  padding: 40px 50px;
  background-color: #fff;
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: baseline;
`;
const Button = styled.button`
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #333;
  outline: none;
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  float: left;
  text-align: center;
  font-size: 1em;
  margin-right: 5px;
  width: 40px;
`;
const Button2 = styled.button`
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #333;
  outline: none;
  font-size: 0.85em;
  padding: auto;
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  float: right;
`;

const Author = styled.span`
  width: 450px;
  height: auto;
  clear: both;
  padding-top: 20px;
  font-size: 0.6em;
  text-align: right;
`;
const Buttons = styled.div`
  width: 400px;
  display: block;
  margin: auto;
  margin-top: 30px;
`;
const Text = styled.p`
  font-size: 25px;
  color: black;
`;

export default function Twitter() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [color, setColor] = useState("#16a085");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  const newQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    let randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex]);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randColorIndex]);
  };
  return (
    <header className="App-header" style={{ backgroundColor: color }}>
      <WidgetWrapper>
        {randomQuote ? (
          <>
            <Text>
              {" "}
              <i class="fa fa-quote-left"> </i> {randomQuote.text}
            </Text>
            <Author style={{ marginLeft: 250 }}>
              -{randomQuote.author || "No author"}
            </Author>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
        <Buttons>
          {" "}
          <a
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent(
                '"' + randomQuote.text + '"' + randomQuote.author
              )
            }
          >
            <Button style={{ backgroundColor: color }}>
              {" "}
              <i className="fa fa-twitter"> </i>
            </Button>{" "}
          </a>{" "}
          <a
            href={
              "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
              encodeURIComponent(randomQuote.author) +
              "&content=" +
              encodeURIComponent(randomQuote.text) +
              "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
            }
          >
            <Button style={{ backgroundColor: color }}>
              {" "}
              <i className="fa fa-tumblr"> </i>
            </Button>{" "}
          </a>
          <Button2 onClick={newQuote}> New quote</Button2>{" "}
        </Buttons>
        <br />
        <br />{" "}
      </WidgetWrapper>{" "}
    </header>
  );
}
