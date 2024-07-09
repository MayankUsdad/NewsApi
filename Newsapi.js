import React, { useEffect, useState } from 'react';

function Newsapi(){
    const[data,setData] = useState([]);

    useEffect(()=> {
        fetch("https://newsapi.org")
        .then(response => response.json())
        .then(data =>setData(data.articles));
    });
    return(
        <>
        <h1 class="hending" style={{textAlign : "center"}}>News Api</h1>
        <div class='container'>
            <div class='row product'>
       
            {data.map((value) => {
                return(
                    <div class='col-md-4'>
                        <div class='col'>
                            <img src={value.urlToImage} width={100} height={200} class='card-img-top'/>
                            <div class='card-body'>
                                <h5 class='card-title'>{value.title}</h5>
                                <p class='card-text'>{value.description}</p>
                            </div>
                            <div class="card-footer">
                            <small class='text-body-secondary'>{value.content}</small><br/>
                            <a href={value.url} class='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>
                )
})}
           </div>
           </div> 
        </>
    );
}


export default Newsapi;






