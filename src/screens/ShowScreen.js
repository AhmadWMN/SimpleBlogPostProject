import react from "react";
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({navigation}) =>{
 
    return(
    <View>
        <Text>{navigation.getParam('id')}</Text>
    </View>
    );
}

ShowScreen.navigationOptions =({navigation}) => {
    return {
        headerRight:  ()=> 
            <TouchableOpacity onPress={() =>  navigation.navigate('Edit', {id : navigation.getParam('id')})}>
              <Entypo name="pencil" size={24} color="black" />
            </TouchableOpacity>       
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;