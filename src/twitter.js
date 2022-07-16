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
  font-size: 1em;
  text-align: right;
`;
const Buttons = styled.div`
  width: 400px;
  display: block;
  margin: auto;
`;
const Seif = styled.p`
  font-size: 25px;
  color: blue;
`;

export default function Twitter() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
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
    let randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex]);
  };
  return (
    <WidgetWrapper>
      <Seif>
        {" "}
        {/* {quotes.map((quote) => (
          <div>{quote.text}</div>
        ))} */}
        {randomQuote ? (
          <>
            {" "}
            <p>{randomQuote.text}</p>
            <p>{randomQuote.author || "No author"}</p>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </Seif>
      <Buttons>
        <Button onClick={click}>
          {" "}
          <a
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent(
                '"' + randomQuote.text + '"' + randomQuote.author
              )
            }
          >
            <i className="fa fa-twitter"> </i>
          </a>
        </Button>{" "}
        <Button>
          {" "}
          <a href="https://facebook.com">
            <i className="fa fa-tumblr"> </i>
          </a>
        </Button>{" "}
        <Button2 onClick={newQuote}> New quote</Button2>{" "}
      </Buttons>
      <br />
      <br />
    </WidgetWrapper>
    //   <div id="container">
    //     <div id="quote-box">
    //       <div class="quote-text">
    //         <i class="fa fa-quote-left"> </i>
    //         <span id="text">
    //           First, have a definite, clear practical ideal; a goal, an
    //           objective. Second, have the necessary means to achieve your ends;
    //           wisdom, money, materials, and methods. Third, adjust all your
    //           means to that end.
    //         </span>
    //       </div>
    //       <div class="quote-author">
    //         - <span id="author">seif</span>
    //       </div>
    //       <div class="buttons">
    //         <a
    //           class="button"
    //           id="tweet-quote"
    //           title="Tweet this quote!"
    //           target="_top"
    //         >
    //           <i class="fa fa-twitter"></i>
    //         </a>
    //         <a
    //           class="button"
    //           id="tumblr-quote"
    //           title="Post this quote on tumblr!"
    //           target="_blank"
    //         >
    //           <i class="fa fa-tumblr"></i>
    //         </a>
    //         <button class="button" id="new-quote">
    //           New quote
    //         </button>
    //       </div>
    //     </div>
    //   </div>
  );
}
