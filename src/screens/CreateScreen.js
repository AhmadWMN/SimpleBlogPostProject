import react, { useState } from "react";
import {View , Text , TextInput, StyleSheet , Button} from 'react-native';
import { useContext } from "react";
import BlogContext from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) =>{

    const {addBlog} = useContext(BlogContext);
 
    return(
        <BlogPostForm onSubmit={(title , content)=>{
            addBlog({title,content},()=>navigation.pop());
        }}/>
    );
}


const styles = StyleSheet.create({});

export default CreateScreen ;