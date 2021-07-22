# Href 超連結

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
to           	| `string` \| `() => void`      					|       			| Define the action when click on this link.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.

## Example

```javascript
// CYPD Href sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Href } from 'cypd';

class App extends React.Component {
    render() {
        return (
            <div>
				<Href to="https://www.google.com">Google</Href>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```