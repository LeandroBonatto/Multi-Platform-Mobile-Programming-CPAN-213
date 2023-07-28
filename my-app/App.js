import * as React from 'react';
import ProgressBar from './components/progressbar';
import { Text, View, StyleSheet, Button} from 'react-native';
import {useState,useRef,useEffect} from 'react';
    function Seperator(){
        return 
            <View 
                style={styles.seperator}>
            </View>
    }

export default function App() {
    const [progress, setProgress] = useState(50);
    var increament = 10;
    var updateProgress = (increament) => {
    var futureValue = progress + increament;
    
    if(futureValue>= 0 && futureValue <= 100) {
    setProgress(progress + increament);
    }
}
    return(
    <View 
        style={styles.container}>
        <ProgressBar progress={progress} max={100} min={0}
        backColor={"silver"} barColor={"#a134eb"} borderColor={"white"}/>
        <Seperator/>
            <Text>{progress}%</Text>
        <Seperator/>
        <Button 
            onPress={()=>{updateProgress(increament)}} title="Increase">
        </Button>
        <Seperator/>
        <Button 
            onPress={()=>{updateProgress(-increament)}} title="Decrease">
        </Button>
    </View>
    );
}

const styles = StyleSheet.create({
    seperator:{margin:3},
    container:{flex:1, alignItems: 'center',padding:30,paddingTop:60}});



