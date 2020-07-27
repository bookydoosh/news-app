import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    content: any[];
    urlToImage: any[];
}
interface IMediaGridProps {
    SearchQuery: (string | null);
   
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ content: [], urlToImage: [] }]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q='+ props.SearchQuery+ '&apiKey=665857c0539d488da7b5d0efc15757bd' )
            .then(response => response.json())
            .then(response => {
               setItemArray(response.articles)
               console.log (response);
           })
           .catch(() => console.log("it didn't work")
         
            );

    }, [props.SearchQuery]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.content || !el.urlToImage) {

            return;
        }
        let url:string =(el.urlToImage as unknown)as string;
        let contentstr:string =(el.content as unknown)as string;
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={url} Description={contentstr} />
            </Grid>)
    })

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid
