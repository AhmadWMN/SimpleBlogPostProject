import React , {useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider =({children})=> {

    const [ Blog, setBlog] = useState([]);

    const addBlog =({title ,content},callback)=> {
        setBlog([...Blog, {id:Math.floor(Math.random()*9999),title: title,content:content}] );
        if(callback){
            callback();
        }
    }

    const deleteBlog =(id)=> {
        setBlog(Blog.filter(blog => blog.id !== id));
    }

    const editBlog =({id,title,content},callback)=> {
        deleteBlog(id); 
        setBlog(prevBlog =>[...prevBlog, {id:id,title: title,content:content}]);
        if(callback){
            callback();
        }
    }

    return <BlogContext.Provider  value={{data:Blog,addBlog,deleteBlog,editBlog}}>
        {children}
    
    </BlogContext.Provider>
}

export default BlogContext ;