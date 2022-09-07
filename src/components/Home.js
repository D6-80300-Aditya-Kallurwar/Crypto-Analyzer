import React,{useState} from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom';
import { useGlobalContext } from "../Context";
const Home = () => {
    const {movie,page,setPage}=useGlobalContext();
    const {query,setQuery}=useGlobalContext();
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
      

    console.log(movie);
    console.log("hello");
    return (
        <div className='continer-fluid'>
            <div className='row'>
                <div className='head col-md-12 col-12 justify-content-center align-items-center text-center'>
                    <h1 className='text-white mt-5'>Welcome to the crypto analyzer app</h1>
                </div>
                <div className='col-md-12 col-12'>
                    <div className='row container-fluid mt-4'>
                        <h1 class="center text-center">LIST OF CRYPTO COINS </h1>

                        <div className='col-md-12 bg-light text-black'>
                        
                            <article class="row episode__content episode">
                            <div class="episode__number col-3">
                                <div className='row'>
                                <div className='col-4 text-center mt-4'>
                                 <h4 className='font m-0 text-uppercase'>ICON</h4>
                                
                                </div>
                                <div className='col-8 text-left mt-3'>
                                 <h4 className='font m-0 text-uppercase'>NAME</h4>
                                 <break/>
                                 <p>other name</p>
                                </div>
                                </div>
                                </div>
                                <div class=" col-9">
                                    <div className='row mt-4'>

                                    <div class="col-4 align-middle">
                                    <h3>PRICE</h3>
                                    </div>
                                    <div class="col-4">
                                    <h3>CHANGE PERCENTAGE</h3>
                                        
                                    </div>
                                    <div class="col-4">
                                    <h3>MARKET CAP</h3>
                                        
                                    </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {movie.map((curMovie)=>{
                            if(query!=""){
                                if(  curMovie.id===query){

                        return <NavLink to={`coin/${curMovie.id}`} key={curMovie.id} className="hell">

                        <div className='col-md-12'>
                        
                            <article class="row episode__content episode">
                            <div class="episode__number col-3">
                                <div className='row'>
                                <div className='col-4'>
                                <img className='coinImagee p-3' src={curMovie.image}></img>
                                </div>
                                <div className='col-8 text-left mt-3'>
                                 <h4 className='font m-0 text-uppercase'>{curMovie.symbol}</h4>
                                 <break/>
                                 <p>{curMovie.name}</p>
                                </div>
                                </div>
                                </div>
                                <div class=" col-9">
                                    <div className='row mt-4'>

                                    <div class="col-4 align-middle">
                                    <h3>₹ {curMovie.current_price}</h3>
                                    </div>
                                    <div class="col-4">
                                    <h3>{curMovie.price_change_percentage_24h}%</h3>
                                        
                                    </div>
                                    <div class="col-4">
                                    <h3>₹ {curMovie.market_cap}</h3>
                                        
                                    </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        </NavLink>
                                }
                            }
                            else{
                        return <NavLink to={`coin/${curMovie.id}`} key={curMovie.id} className="hell">

                        <div className='col-md-12'>
                        
                            <article class="row episode__content episode">
                            <div class="episode__number col-3">
                                <div className='row'>
                                <div className='col-4'>
                                <img className='coinImagee p-3' src={curMovie.image}></img>
                                </div>
                                <div className='col-8 text-left mt-3'>
                                 <h4 className='font m-0 text-uppercase'>{curMovie.symbol}</h4>
                                 <break/>
                                 <p>{curMovie.name}</p>
                                </div>
                                </div>
                                </div>
                                <div class=" col-9">
                                    <div className='row mt-4'>

                                    <div class="col-4 align-middle">
                                    <h3>₹ {numberWithCommas(curMovie.current_price.toFixed(2))}
                                    </h3>
                                    </div>
                                    <div class="col-4">
                                    <h3>
                                    {curMovie.price_change_percentage_24h.toFixed(2)}%</h3>
                                        
                                    </div>
                                    <div class="col-4">
                                    <h3>₹  {numberWithCommas(
                                        curMovie.market_cap.toString().slice(0, -6))}
                                    </h3>
                                        
                                    </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        </NavLink>

                            }
                    })}
                    <nav aria-label="Page navigation example my-auto bg-dark text-white">
  <ul class="pagination my-3 bg-transparent justify-content-center align-items-center text-white w-100">
    <li class="page-item"><a class="page-link bg-transparent text-white" href="#" onClick={e=>{setPage(page-1)}}>← Previous</a></li>
    <li class="page-item"><a class="page-link bg-transparent text-white" href="#" onClick={e=>{setPage(page+1)}}>Next →</a></li>
  </ul>
</nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;