# Select & Option 選擇框與選項

If you plan to use the `select` element native to the browser, please refer to `SelectNative`.

## Select

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
value           | `string` \| `number`                              | `undefined`       | Determine Select value.
size            | "normal" \| "small"                               | "normal"          | Determine Select's size (Only 2 options. if you want somthing else, please check `className` or `style` properties).
placeholder     | `string`                                          | `undefined`       | Content showed when value is empty.
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine Select is disabled or not.
collapsed       | `boolean` \| `undefined`                          | `undefined`       | Control the options' view collapsed or not
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
onChange        | `(value: string) => void` \| `undefined`          | `undefined`       | This function is triggered after selecting.

## Option

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
value           | `string` \| `number`                              | `undefined`       | Determine Option value.
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine Option is disabled or not.

![](../../image/4.png)

```javascript
// CYPD Select & Option sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Select, Option } from 'cypd';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    handler = (value) => {
        this.setState({ value: value });
    } 
    render() {
        return ( 
            <div>
                <Select value={this.state.value} onChange={this.handler}>
                    <Option value='1'>John</Option>
                    <Option value='2'>Mary</Option>
                    <Option value='3'>David</Option>
                    <Option value='4'>Chris</Option>
                </Select>
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```

# SelectNative 原生選擇框

Properties is the same as `Select`.

## Example

```javascript
// CYPD SelectNative sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { SelectNative } from 'cypd';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favorit_number: '' };
    }
    render() {
		const { favorit_number } = this.state;
        return ( 
            <div>
                <SelectNative placeholder={'Favorit Number'} value={favorit_number} onChange={(v) => { this.setState({ favorit_number: v }); }}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </SelectNative>
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

```