import React from 'react';
import ReactDOM from 'react-dom';

import { Table, Icon, Input, Button, Select, DateTime, Empty, Form, Checkbox, Option, RadioGroup, SwitchButton, Notify, Layout, Slider, Modal, ProgressBar, Spin } from './src';

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
    constructor(props) {
        super(props);
        this.state = { visible: true, name: '', gender: 1, email: '', birthday: new Date(), popup: false, progress: 0 };
        this.openModal = () => { this.setState({ popup: true }); }
        this.closeModal = () => { this.setState({ popup: false }); }
        // this.testProgress = setInterval(() => {
        //     if (this.state.progress < 100)
        //         this.setState((prevState) => ({ progress: prevState.progress + 2 }));
        //     else
        //         clearInterval(this.testProgress);
        // }, 100);
    }
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
        const rows = [
            [<Icon type='led-gray' />, <Input size='small' placeholder='sample input' style={{ width: '75%' }} />, <DateTime.DatePicker />, <DateTime.TimePicker />],
            [<Icon type='led-red' />, <Input size='small' disabled placeholder='sample input' style={{ width: '75%' }} />, <Select value='' onChange={() => { }} style={{ width: '75%' }} size='small'>{sampleOptions}</Select>, <SwitchButton checked />],
            [<Icon type='led-green' />, <div><Checkbox readOnly label='Mornig' disabled checked /><Checkbox label='Afternoon' /><Checkbox readOnly checked label='Night' /></div>, <RadioGroup options={[{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3', disabled: true }, { value: '4', label: '4' }]} />, <SwitchButton />],
            [<Icon type='led-yellow' />, <Button type='primary' icon='edit'>Nickname</Button>, <Button>IP addr</Button>, <Button icon='square-minus' type='danger'>gateway</Button>],
            [<Button onClick={this.triggerSuccessDemo}>Success</Button>, <Button onClick={this.triggerWarningDemo}>Warning</Button>, <Button onClick={this.triggerInfoDemo}>Info</Button>, <Button onClick={this.triggerErrorDemo}>Error</Button>],
            [<Icon type='led-red' />, <Button type='primary' size='small' icon='edit'>Submit</Button>, <Button size='small'>Click</Button>, <Button icon='trashcan' type='danger' size='small'>Delete</Button>],
            [<Icon type='led-red' />, <Button type='primary' icon='edit'>Submit</Button>, <Button onClick={this.openModal}>Click</Button>, <Button icon='trashcan' type='danger'>Delete</Button>],
            [<Icon type='led-red' />, <Button type='primary' icon='import' />, <Button icon='zoom-out' />, <Button icon='square-minus' type='danger' />],
            [<Icon type='loading' />, <Slider max={1} min={0} step={0.1}/>, <Button icon='zoom-in' shape='round' />, <Button icon='square-minus' type='danger' shape='round' />],
            ['', <ProgressBar hint={`${this.state.progress}%`} percentage={this.state.progress}/>, <DateTime.DatePicker />, <DateTime.TimePicker />],
        ];
        const table = <Table
            headers={['1', '2', '3', '4']}
            rows={rows}
            pagination={true}
            rowLimit={6}
        />;
        // const table = <Table
        //     headers={['Name', 'Gender', 'Email', 'Birthday']}
        //     rows={[
        //         ['David', 'Male', 'david.chang@example.com', '1987/5/31'],
        //         ['Chris', 'Male', 'chris.lou@example.com', '1990/12/1'],
        //         ['Kenipher', 'Female', 'kenipher.kenway@example.com', '1993/7/9'],
        //         ['Mary', 'Female', 'mary.su@example.com', '1983/10/22'],
        //     ]}
        //     pagination={true}
        //     rowLimit={10}
        //     columnWidth={[1, 1, 2, 1]}
        // ></Table>;
        const icondemo = icons.map(type => icon_container(type));
        const form = <div style={{ width: '300px' }}>
            <Form.Item label={<span style={{display: 'inline-block', width: '55.5px'}}>Name</span>}>
                <Input 
                    value={this.state.name} 
                    type='password'
                    onChange={(e) => { this.setState({ name: e.target.value }); }}
                ></Input>
            </Form.Item>
            <Form.Item label={<span style={{display: 'inline-block', width: '55.5px'}}>Gender</span>}>
                <Select value={this.state.gender} onChange={(v) => { this.setState({ gender: v }); }}>
                    <Option value='1'>Male</Option>
                    <Option value='2'>Female</Option>
                </Select>
            </Form.Item>
            <Form.Item label={<span style={{display: 'inline-block', width: '55.5px'}}>Email</span>}>
                <Input
                    value={this.state.email}
                    placeholder="frank.cho@example.com"
                    onChange={(e) => { this.setState({ email: e.target.name }); }}
                ></Input>
            </Form.Item>
            <Form.Item label='Birthday'>
                <DateTime.DatePicker value={this.state.birthday} onChange={(date) => { this.setState({ birthday: date }); }} />
            </Form.Item>
        </div>;
        return (
            <div className='app'>
                <Layout.Header />
                <Layout.Navigation />
                <Layout.Body>
                    <Spin type='linear' visible={false}/>
                    <Layout.Sider 
                        visible={this.state.visible}
                        onCollapse={(visible) => { this.setState({ visible }); }}
                    ></Layout.Sider>
                    <Layout.Center>
                        <div className='app_dashboard_container'>
                            {table}
                            <div className='empty_demo_wrapper'><Empty /></div>
                            <div className='icon_demo_wrapper'>
                                {icondemo}
                            </div>
                            {form}
                        </div>
                    </Layout.Center>
                </Layout.Body>
                <Modal
                    visible={this.state.popup}
                    onClose={this.closeModal}
                    title='Demostration'
                >
                    This is a CYPD demostration.
                </Modal>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
