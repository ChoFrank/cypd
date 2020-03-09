# CYPD Module

## 1. Quick Start

* 利用 npx 安裝開發環境
```
yarn create-react-app my-app --template typescript
yarn add typescript @types/node @types/react @types/react-dom @types/jest
npm install --save https://github.com/ChoFrank/cypd.git
# my-app可自由替換成專案名稱
```

* 利用 npm/yarn 測試/編譯您的 javascript project
```
npm run start 
# run your project through the entry point (usually index.js/index.tsx/index.jsx)
npm run build 
# compile your project to ES5 javascript code
```

## 2. Upgrade Library

```
npm update cypd
```
Update to speific version
```
npm install --save https://github.com/ChoFrank/cypd.git#${commit}
# commit fillin version number
```

## 3. Component Example

* [Button](#1)
* [Icon](#2)
* [Input](#3)
* [Select & Option](#4)
* [Checkbox](#5)

### 1. <a name="1"></a>Button

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
type            | "default" \| "primary" \| "danger"                | "default"         | Determine button style.
icon            | `string`                                          | `undefined`       | Determine button prefix icon.
size            | "normal" \| "small"                               | "normal"          | Determine button's size (Only 2 options. if you want somthing else, please check `className` or `style` properties).
shape           | "round" \| `undefined`                            | `undefined`       | Determine button's shape.
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine button is disabled or not.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
onClick         | `(e: React.MouseEvent) => void` \| `undefined`    | `undefined`       | The handle function of clicking action

![](image/1.png)

```javascript
// CYPD Button sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Button type="primary">Submit</Button>
                <Button type="default">Edit</Button>
                <Button type="danger">Delete</Button>
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```

### 2. <a name="2"></a>Icon

> properties (*) are compulsory

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
type(*)         | `string`                                          |                   | Determine which icon.
color           | `string`                                          | `undefined`       | Determine stroke or fill color.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
onClick         | `(e: React.MouseEvent) => void` \| `undefined`    | `undefined`       | The handle function of clicking action

![](image/2.png)

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

### 3. <a name="3"></a>Input

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
value           | `string` \| `number`                              | `undefined`       | Determine Input value.
size            | "normal" \| "small"                               | "normal"          | Determine Input's size (Only 2 options. if you want somthing else, please check `className` or `style` properties).
placeholder     | `string`                                          | `undefined`       | Content showed when value is empty.
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine Input is disabled or not.
defaultValue    | `string` \| `number`                              | `undefined`       | You should use either `value` property or this (choose one).
readOnly        | `boolean` \| `undefined`                          | `undefined`       | Make input read-only when this property is true.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
onChange        | `(e: React.ChangeEvent<HTMLInputElement>) => void` \| `undefined`    | `undefined`       | This function is triggered when typing.
onBlur          | `(e: React.FocusEvent<HTMLInputElement>) => void` \| `undefined`    | `undefined`       | This function is triggered when unfocusing.
onKeyPress      | `(e: React.KeyboardEvent<HTMLInputElement>) => void` \| `undefined`    | `undefined`       | This function is triggered when pressing keyboard.
onMouseDown     | `(e: React.MouseEvent<HTMLInputElement>) => void` \| `undefined`    | `undefined`       | This function is triggered when mouse clicking.

![](image/3.png)

```javascript
// CYPD Input sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'cypd';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '' };
    }
    handler1 = (e) => {
        this.setState({ value1: e.target.value });
    } 
    render() {
        return ( 
            <div>
                <Input value={this.state.value1} onChange={this.handler1}></Input>
                <Input value={this.state.value2} disabled></Input>
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```

### 4. <a name="4"></a>Select & Option

#### Select

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

#### Option

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
value           | `string` \| `number`                              | `undefined`       | Determine Option value.
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine Option is disabled or not.

![](image/4.png)

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

### 5. <a name="5"></a>Checkbox

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
label           | `string` \| `undefined`                           | `undefined`       | Determine Checkbox's label.
checked         | `boolean` \| `undefined`                          | `undefined`       | Determine Checkbox is checked or not.
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine Checkbox is disabled or not.
readOnly        | `boolean` \| `undefined`                          | `undefined`       | Make Checkbox read-only when this property is true.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
onChange        | `(e: React.ChangeEvent<HTMLInputElement>) => void` \| `undefined`    | `undefined`       | This function is triggered after component is clicked.

![](image/5.png)

```javascript
// CYPD Checkbox sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Checkbox readOnly label='Mornig' disabled checked></Checkbox>
                <Checkbox label='Afternoon'></Checkbox>
                <Checkbox readOnly checked label='Night'></Checkbox>
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```

### <a name="6"></a>6. SwitchButton

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
checked         | `boolean` \| `undefined`                          | `undefined`       | Determine SwitchButton is checked or not.
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine SwitchButton is disabled or not.
readOnly        | `boolean` \| `undefined`                          | `undefined`       | Make SwitchButton read-only when this property is true.
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
style           | `React.CSSProperties`                             | `undefined`       | Programmer can use this property to defined inline CSS style.
onChange        | `(e: React.ChangeEvent<HTMLInputElement>) => void` \| `undefined`    | `undefined`       | This function is triggered after component is clicked.

![](image/6.png)

```javascript
// CYPD SwitchButton sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { SwitchButton } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <SwitchButton />
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```

### <a name="7"></a>7. RadioGroup

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
options (*)     | `RadioOption` (below)                             |                   | Determine the radio amount and state
layout          | "vertical" \| "horizontal"                        | "horizontal"      | Determine RadioGroup orientation
value           | `string` \| `undefined`                           | `undefined`       | Determine current value of RadioGroup
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
onChange        | `(value: string) => void` \| `undefined`          | `undefined`       | This function is triggered after clicking.

#### RadioOption

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
value (*)       | `string`                                          |                   | Define radio value
label           | `string` \| `undefined`                           | `undefined`       | Determine label of radio
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine option is disabled or not.

![](image/7.png)

```javascript
// CYPD RadioGroup sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { RadioGroup } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <RadioGroup 
                    options={[
                        { value: '1', label: '1' }, 
                        { value: '2', label: '2' }, 
                        { value: '3', label: '3', disabled: true }, 
                        { value: '4', label: '4' }
                    ]} 
                />
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```

### <a name="8"></a>8. Slider

Properties      | Type                                              | Default value     | Description
----------------|:--------------------------------------------------|:------------------|:----------------------
value           | `number` \| `undefined`                           | `undefined`       | Determine current value of Slider
disabled        | `boolean` \| `undefined`                          | `undefined`       | Determine Slider is disabled or not.
min             | `number` \| `undefined`                           | `undefined`       | Define the lower bound of Slider
max             | `number` \| `undefined`                           | `undefined`       | Define the upper bound of Slider
step            | `number` \| `undefined`                           | `undefined`       | Define value unit
className       | `string` \| `undefined`                           | `undefined`       | Programmer can use this property to defined specific CSS style.
style           | `React.CSSProperties` \| `undefined`              | `undefined`       | Programmer can use this property to defined inline CSS style.
onChange        | `(value: string) => void` \| `undefined`          | `undefined`       | This function is triggered ***when*** draging.
onAfterChange   | `(value: string) => void` \| `undefined`          | `undefined`       | This function is triggered ***after*** draging.

![](image/8.png)

```javascript
// CYPD Slider sample code
import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from 'cypd';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Slider />
            </div> 
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```