# Empty 空白區塊

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
textColor       | `string` \| `undefined`              				| `undefined`		| Define the color of text. Following CSS rule.
text          	| `string` \| `undefined`  							| `undefined`		| Define the message shown on the empty block.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.

![](../../image/empty_demo.jpg)

## Example

```javascript
// CYPD Empty sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Empty } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Empty text="No record"/>
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```

# Cone 施工區塊

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
backgroundColor | `string` \| `undefined`              				| `undefined`		| Define the background color of block. Following CSS rule.
color          	| `string` \| `undefined`  							| `undefined`		| Define the text color of message.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.

![](../../image/cone_demo.jpg)

## Example

```javascript
// CYPD Cone sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Cone } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Cone color='yellow' />
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```
