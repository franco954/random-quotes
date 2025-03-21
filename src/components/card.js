
import { useState, useEffect } from "react";


export default function Card() {

    const [content, setContent] = useState()
    const [author, setAuthor] = useState()

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        requestQuote()
    },[]);

    const requestQuote = () => {
        fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        const { content, author } = data; 
        setContent(content);
        setAuthor(author);
        setLoading(false)
      })
      .catch((error) => console.error(error));
    }


  const handleOnClick = (e) => {
    e.preventDefault();
    setLoading(true)
    requestQuote()
  };

  return (


    loading ? <div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Loading...</span>
  </div> :
    <div class="card text-white mb-3 p-4" id="quote-box">
      <div class="card-body" >
        <h5 class="card-text" id="text">
            {content}
        </h5>
        <h6 class="card-subtitle" id="author"> - {author} </h6>
      </div>
      <div className="card-footer">
        <div>
          <button onClick={handleOnClick} id="new-quote" type="button" class="btn btn-info">
            {" "}
            New Quote
          </button>
        </div>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote">Share on Twitter</a>
</div>
      </div>
    </div>
  );
}
