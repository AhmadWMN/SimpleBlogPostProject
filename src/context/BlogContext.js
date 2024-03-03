import React , {useState} from "react";
import jsonServer from "../api/jsonServer";

const BlogContext = React.createContext();

export const BlogProvider =({children})=> {

    const [ Blog, setBlog] = useState([]);

    const  getBlogPosts  = async ()=> {
        const res = await jsonServer.get('/blogposts');
        setBlog(res.data);
        return res;
        
    }

    const addBlog = async ({title ,content},callback)=> {

        const res = await jsonServer.post('/blogposts',{title,content})
        setBlog(res.data);
        if(callback){
            callback();
        }
    }

    const deleteBlog = async(id)=> {
        await jsonServer.delete(`/blogposts/${id}`)
    }

    const editBlog = async({id,title,content},callback)=> {

        await jsonServer.put(`/blogposts/${id}`,{title,content})

        if(callback){
            callback();
        }
    }

    return <BlogContext.Provider  value={{data:Blog,addBlog,deleteBlog,editBlog,getBlogPosts}}>
        {children}
    
    </BlogContext.Provider>
}

export default BlogContext ;