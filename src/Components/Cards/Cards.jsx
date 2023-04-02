import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import Sidebar from './Sidebar/Sidebar';

const Cards = () => {

    const [articles, setArticles] = useState([]);

    const [readTime, setReadTime] = useState("");

    const [booked, setBooked] = useState([])

    const handleMarkRead = (time) => {
        const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
        if(previousReadTime){
            const sum = previousReadTime + time;
            localStorage.setItem("readTime", sum);
            setReadTime(sum);
        }
        else{
            localStorage.setItem("readTime", time);
            setReadTime(time);
        }  
    };

    const handleBookmarked = (bookedTitle) => {
        
        const newBooked = [...booked, bookedTitle];
        setBooked(newBooked)
    }
    
    useEffect(() => {
      fetch(`FakeDb/Articles.json`)
        .then(res => res.json())
        .then(data => setArticles(data))
    }, []);

    
    return (
        <div className='pt-8 px-4 md:px-16 grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-7 rounded-lg'>
                {
                    articles.map(article => <Card
                    
                        key={article.id}
                        article={article}
                        handleMarkRead = {handleMarkRead}
                        handleBookmarked = {handleBookmarked}
                    
                    />)
                }
            
            </div>
            <div className='col-span-12 md:col-span-5'>
                <Sidebar 
                readTime = {readTime}
                booked = {booked}
                />
            </div>
        </div>
    );
};

export default Cards;