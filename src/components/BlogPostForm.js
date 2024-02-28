import react , {useState} from "react";
import { useContext } from "react";
import {View , Text , TextInput, StyleSheet , Button} from 'react-native';

const BlogPostForm =({onSubmit , initialValues})=> {

    const [title , setTitle] = useState(initialValues.title);
    const [content ,setContent] = useState(initialValues.content);
    
    return(
        <View>
        <Text style={styles.label}>Enter title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) =>setTitle(text)}/>
        <Text style={styles.label}>Enter content</Text>
        <TextInput style={styles.input}  value={content} onChangeText={(text) =>setContent(text)}/>
        <Button 
        title="Save" 
        onPress={()=>{
            onSubmit(title,content);
            }}/>
        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title:'',
        content:'',
    }
}


styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth:1,
        borderColor:'black',
        margin: 10,
        padding: 10
    },
    label: {
        fontSize: 20,
        marginBottom:5,
        marginLeft:5
    }
});


export default BlogPostForm