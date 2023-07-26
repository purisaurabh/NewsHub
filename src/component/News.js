
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) =>{

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const FirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b530a36a390a4aaa8bd652155bc2e7c1&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect (() =>{
    document.title = `${FirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handlePreClick = async () => {
    setPage(page-1)
    updateNews();
  }

  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();
  }


    return (
      <div className="container my-3">
        <h1 className='text-center' style={{margin:'35px 0px' , marginTop:'90px'}}>Top {FirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}
 
          <div className="row">
            {!loading && articles?.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ''}  description={element.description ? element.description : ''} imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date ={element.publishedAt}/>
                </div>
              )
            })}
          </div>

        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePreClick} > &larr; Previous </button>
          <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )

}


News.defaultProps = {
  country:'in',
  pageSize:8,
  category:'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News