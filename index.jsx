import React from 'react';
import ReactDOM from 'react-dom';

import { Table, Icon, Input, Button, Select, DateTime, Checkbox, Option, RadioGroup, SwitchButton, Notify, Slider } from './src';

import './index.css'

const cross_point = (x11, y11, x12, y12, x21, y21, x22, y22) => {
    const p1a = (y11 - y12) / (x11 - x12);
    const p1b = y11 - (p1a * x11);
    const p2a = (y21 - y22) / (x21 - x22);
    const p2b = y21 - (p2a * x21);
    const x = -1 * (p1b - p2b) / (p1a - p2a);
    const y = p1a * x + p1b;
    return [x, y];
}

const icon_container = (type) => {
    return <div className='icon_container' key={Math.random()}>
        <Icon type={type} color='gray' onClick={() => { console.log('cross_point(6,1,9,15,1,6,15,9) :', cross_point(6,1,9,15,1,6,15,9)); }}/>
        <div className='label'>{type}</div>
    </div>;
}

class App extends React.Component {
    triggerSuccessDemo() { Notify({ title: 'Success', context: 'This is a Success.........................................................................................', type: 'success', timeout: 1000000 }); }
    triggerWarningDemo() { Notify({ title: 'Warning', context: 'This is a Warning notification demo.', type: 'warning' }); }
    triggerInfoDemo() { Notify({ title: 'Info', context: 'This is a Info notification demo.', type: 'info' }); }
    triggerErrorDemo() { Notify({ title: 'Error', context: 'This is a Error notification demo.', type: 'error' }); }
    render() {
        const icons = [
            'loading', 'write', 'arrow-left', 'arrow-right', 'left', 'right', 'zoom-out', 'zoom-in',
            'minus', 'plus', 'circle-plus', 'square-plus', 'square-minus', 'trashcan', 'edit',
            'document', 'save', 'calendar', 'clock', 'led-green', 'led-yellow', 'led-red', 'led-gray', 'cyp-device',
            'cyplogo', 'scissors', 'cancel', 'import', 'download', 'upload',
        ];
        const sampleOptions = [
            <Option value='1' key={Math.random()}>John</Option>,
            <Option value='2' key={Math.random()}>Mary</Option>,
            <Option value='3' key={Math.random()}>David</Option>,
            <Option value='4' key={Math.random()}>Chris</Option>,
        ]
        const table = <Table
            headers={['1', '2', '3', '4']}
            rows={[
                [<Icon type='led-gray' />, <Input size='small' placeholder='sample input' style={{ width: '75%' }} />, <Select value='' onChange={() => { }} style={{ width: '75%' }} size='small'>{sampleOptions}</Select>, <DateTime.TimePicker disabled />],
                [<Icon type='led-red' />, <Input size='small' disabled placeholder='sample input' style={{ width: '75%' }} />, <Select value='' onChange={() => { }} style={{ width: '75%' }} size='small'>{sampleOptions}</Select>, <SwitchButton checked />],
                [<Icon type='led-green' />, <div><Checkbox readOnly label='Mornig' disabled checked /><Checkbox label='Afternoon' /><Checkbox readOnly checked label='Night' /></div>, <RadioGroup options={[{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3', disabled: true }, { value: '4', label: '4' }]} />, <SwitchButton />],
                [<Icon type='led-yellow' />, <Button type='primary' icon='edit'>Nickname</Button>, <Button>IP addr</Button>, <Button icon='square-minus' type='danger'>gateway</Button>],
                [<Button onClick={this.triggerSuccessDemo}>Success</Button>, <Button onClick={this.triggerWarningDemo}>Warning</Button>, <Button onClick={this.triggerInfoDemo}>Info</Button>, <Button onClick={this.triggerErrorDemo}>Error</Button>],
                [<Icon type='led-red' />, <Button type='primary' size='small' icon='edit'>Submit</Button>, <Button size='small'>Click</Button>, <Button icon='trashcan' type='danger' size='small'>Delete</Button>],
                [<Icon type='led-red' />, <Button type='primary' icon='edit'>Submit</Button>, <Button>Click</Button>, <Button icon='trashcan' type='danger'>Delete</Button>],
                [<Icon type='led-red' />, <Button type='primary' icon='import' />, <Button icon='zoom-out' />, <Button icon='square-minus' type='danger' />],
                [<Icon type='loading' />, <Slider />, <Button icon='zoom-in' shape='round' />, <Button icon='square-minus' type='danger' shape='round' />],
                ['', <Slider />],
            ]}
            pagination={true}
            rowLimit={11}
        />;
        const icondemo = icons.map(type => icon_container(type));
        return (
            <div className='app_dashboard_container'>
                {table}
                {icondemo}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
