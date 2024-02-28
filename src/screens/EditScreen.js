import react, { useState } from "react";
import {StyleSheet} from 'react-native';
import { useContext } from "react";
import BlogContext from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) =>{

    const {data,editBlog} = useContext(BlogContext);
    const blogPost = data.find((blogPost)=>blogPost.id === navigation.getParam('id'));
    const id = navigation.getParam('id')
    
    return(  
        <BlogPostForm initialValues={{title:blogPost.title,content:blogPost.content}} 
        onSubmit={(title,content) => editBlog({id,title,content},()=>navigation.pop())}/>
    );
}

export default EditScreen ;