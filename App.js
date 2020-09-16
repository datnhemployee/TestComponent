import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import CustomInput from './src/components/TextInput';

/*
 * Constants.js
 */
const PADDING = 8;
const inputHeight = 24;
const labelAnimatedFontSize = 14;
const screenWidth = Dimensions.get('window').width;
/*
 * App.js
 */

const uniqueId = {
  value: 0,
  next: function () {
    this.value += 1;
    return this.value;
  },
};

const mockData = [
  {value: 'Jan'},
  {value: 'Feb'},
  {value: 'Mar'},
  {value: 'Apr'},
  {value: 'May'},
  {value: 'Jun'},
  {value: 'Jul'},
  {value: 'Aug'},
  {value: 'Sep'},
  {value: 'Oct'},
  {value: 'Nov'},
  {value: 'Dec'},
];

let moreItems = 100;
while (moreItems > 0) {
  mockData.push({value: `${Math.random() * 1000}`});
  moreItems -= 1;
}

for (let item of mockData) {
  item.key = uniqueId.next();
}

class App extends Component {
  constructor(props) {
    super(props);
    this.inputUsernameRef = React.createRef();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFF65'}}>
        <CustomInput
          ref={this.inputUsernameRef}
          label="Username"
          editable
          height={inputHeight}
          inputPadding={PADDING}
          labelAnimatedFontSize={labelAnimatedFontSize}
          /**
           * DO NOT use {`flex`} for set `styleContainer`
           */
          styleContainer={{
            position: 'absolute',
            top: 100,
            left: PADDING,
            width: screenWidth - PADDING * 2,
          }}
          styleLabel={{}}
          styleTextInput={{}}
        />
      </View>
    );
  }
}

export default App;
