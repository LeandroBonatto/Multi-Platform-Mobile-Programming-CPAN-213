import React from 'react';
import { View, Text} from 'react-native';

const Text = () => {
    const [progressValue, setProgressValue] = useState()
    return (
    <View
        multiline={true}
        maxLength={100}
        onChangeText={(Text) => setCharacters(text.length)
        <ProgressBar
        progress = {setCharacters / 100}
        width={200}
        color={currentChars === 100 ? 'red' : 'blue'}
        />
    </View>
  );
};

export default Text;
