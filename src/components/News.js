import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import "../App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading';
import PropTypes from 'prop-types';

export default function News({
    country = 'in',
    pageSize = 9,
    category = 'general',
    setProgress,
    mode
}) {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        setProgress(40);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page}&pageSize=${pageSize}`;
        setloading(true);
        let data = await fetch(url);
        setProgress(30);
        let parsedData = await data.json();
        // console.log("hi iam jsonconverted data",parsedData);//use this to know what is happening here..
        setProgress(60);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false);
        setProgress(100);
        document.title = `${capitalize(category)} - NewsViews`;
        
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    // const handleNextClick = async () => {
    //     setpage(page + 1);
    //     updateNews();
    // }

    // const handleBackClick = async () => {
    //     setpage(page - 1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {
       
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page + 1}&pageSize=${pageSize}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log('i am parsedData in fetchMore function ',parsedData);
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
      
    }

    // let { mode } = props;
    // const isLastPage = this.state.page + 1 > Math.ceil(this.state.totalResults / `${pagesize}`);
    return (
        <>
            <div style={{ backgroundColor: mode === "light" ? "#f8f9fa" : "#212529ab", color: mode === "light" ? "#01253b" : "#f8f9fa" }} className="headlines">
                <p style={{ textAlign: "center", margin: "0px" }}>Instant Insight: News that Moves the World <br /> <span style={{ fontSize: "14px" }}>Top {capitalize(category)} Headlines</span></p>
            </div>
            {loading && <Loading />}
            <InfiniteScroll
                className='newsContent'
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
                >

                <div className='wrapMe'>
                    {articles.map((elements) => {
                        return <div className='myBox' key={elements.url}>
                            <NewsItem mode={mode} title={elements.title} description={elements.description} newsUrl={elements.url} imageUrl={elements.urlToImage} author={elements.author === null ? "Unknown" : elements.author} date={elements.publishedAt} source={elements.source.name} />
                        </div>
                    })}
                </div>

            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-around">
                    <button disabled={this.state.page <= 1} onClick={this.handleBackClick} type="button" className={`btn btn-${mode}`}>{this.state.page <= 1 ? "no back page" : "⟵ Back"}</button>
                    <button disabled={isLastPage} onClick={this.handleNextClick} type="button" className={`btn btn-${mode}`}>{isLastPage ? "No next Page " : "Next ⟶"}</button>
                </div> */}
        </>
    )
}


News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
}