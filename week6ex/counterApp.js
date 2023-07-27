import { view } from "react-native";
import { connect } from 'react-redux';
import { increase, decrease } from "./redux/actions";

const CounterApp = (props) => {
    const handleIncrease = () => {increase(5);};
    const handleDecrease = () => {decrease(5);};
    return (
        <View>
            <Text>Counter value is (props.counter)</Text>
            <Button title="Increase" onPress={handleIncrease} />
            <View style={Styles.separator}></View>
            <Button title="Decrease" onPress={handleDecrease} />
        </View>
    )
}

const mapStateToProps = (state) => ({counter: state.counter.value});
const mapDispatchToProps = {increase, decrease};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);