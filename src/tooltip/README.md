# Tooltip 提示框

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
text (*)        | `string`                                          |                   | Define tip message.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
direction  | "top" \| "bottom" \| "left" \| "left" \| "top-right" \| "top-left" \| "right-top" \| "right-bottom" \| "bottom-right" \| "bottom-left" \| "left-bottom" \| "left-top" \| `undefined` | `undefined`       | Define the direction of bubble appears.
fillinOutside   | `boolean` \| `undefined`                          | `undefined`       | If this property is true, the effective range of hover will be changed from a child node to a parent node.
timeout       	| `number` \| `undefined`                           | 1000(milliseconds)| This property defines the time required for hover to stay until the prompt bubble appears.
fixedWidth      | `number` \| `string` \| `undefined`               | `undefined` 		| This property will fix the width of prompt bubble.

![](../../image/15.gif)

## Example

```javascript
// CYPD Tooltip sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Tooltip, Button } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Tooltip 
                    text='Refresh dashboard data.'
                    direction='top'
                >
                    <Button>Refresh</Button>
                </Tooltip>
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```