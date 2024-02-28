import React , {useContext} from "react";
import {Text , View , StyleSheet , FlatList , Button ,TouchableOpacity} from "react-native";
import BlogContext from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {Feather} from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    const {data , deleteBlog} = useContext(BlogContext);

    return(<View>
        <Text>Index Screen</Text>
        <FlatList
        data={data}
        keyExtractor={(blogPost)=> blogPost.title}
        renderItem={({item})=>{
            return(
            <TouchableOpacity onPress={()=> navigation.navigate('Show', {id : item.id})}>
                  <View style={styles.containerStyle}>
                  <Text>{item.id}</Text>
                  <Text>{item.title}</Text>
                  <Text style={styles.textContentStyle}>{item.content}</Text>
                  <TouchableOpacity onPress={()=>deleteBlog(item.id)}>
                  <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                  </View>
            </TouchableOpacity>
            );
        }}
        />
    </View>   
    );
};


IndexScreen.navigationOptions =({navigation}) => {
    return {
        headerRight:  ()=> 
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <AntDesign name="plus" size={30} />
            </TouchableOpacity>       
    };
};

const styles = StyleSheet.create({
    containerStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderRadius:5,
        margin:5,
        padding:5,

    },
    textContentStyle: {
        textAlign:'right',
    }
});

export default IndexScreen ;