# Icon 圖標

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
type            | `string`                                          |                   | Determine which icon.
color           | `string`                                          | `undefined`       | Determine stroke or fill color.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
onClick         | `(e: React.MouseEvent) => void` \| `undefined`    | `undefined`       | The handle function of clicking action

## Type List

![](../../image/2.png)

## Example

```javascript
// CYPD Icon sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Icon type="save"></Icon>
                <Icon type="write"></Icon>
                <Icon type="download"></Icon>
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```