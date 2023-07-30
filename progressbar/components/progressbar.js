import * as React from 'react';
import * as Progress from 'react-native-progress';

const progress = () => {
    return (
    <View style={styles.container}>
        <Progress.Bar progress={progress} width={150}/>
        <Progress.Pie progress={0.75} size={150}/>
    </View>
    );
} 

export default Progress;
