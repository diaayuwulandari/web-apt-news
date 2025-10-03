import { use, useCallback, useState } from "react";
import * as newsService from "../services/NewsService";
import { useEffect, userCallback } from "react";

export const useNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const fetchNews = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await newsService.fetchNews();
            setNews(data.data);
        } catch (err) {
            setError(err.message || "Failed to fetch news");
        } finally {
            setLoading(false);
        }
    }, []);  

    const createNews = async (newsData) => { 
        setLoading(true);
        setError(null);
        try{
         const response = await newsService.storeNews(newsData);
         setNews((prevNews) => [response.data?.data, ...prevNews]);
         return response;
        } catch(err) {
            setError(err.message || "Failde to create news");
        } finally {
            setLoading(false);
        }
     }; 

     const updateNews = async (Id, newsData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await newsService.updateNews(Id, newsData);
            setNews((prevNews) => 
                prevNews.map((item) => (item.id ? response.data?.data : item))
            );
        }catch (err) {
            setError(error.message  || "Failed to update news");
        } finally {
            setLoading(false);
        }
     };

     const deleteNews = async (id) => {
        setLoading(true);
        setError(null); 
        try {
            await newsService.deleteNews(id);
            setNews((prevNews) => prevNews.filter((item) => item.id !== id));
        } catch (err) {
            setError(error.message || "Failed to delete news");
        } finally {
            setLoading(false);
        }
     }; 

     useEffect(() => {
        fetchNews();
     }, [fetchNews]);

     return {
        news, 
        loading,
        error,
        fetchNews,
        createNews,
        updateNews,
        deleteNews,
     };

};