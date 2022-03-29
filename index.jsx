import React from 'react';
import ReactDOM from 'react-dom';

import {
    Table,
    Icon,
    Input,
    Button,
    Select,
    SelectNative,
    DateTime,
    Empty,
    List,
    Form,
    Cone,
    Checkbox,
    Option,
    RadioGroup,
    SwitchButton,
    Notify,
    Layout,
    Slider,
    Modal,
    ProgressBar,
    Spin,
    Tooltip,
    Dropdown,
    Flat,
} from './src';

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
    return (<div className='icon_container' key={Math.random()}>
        <Icon type={type} onClick={() => { console.log('cross_point(6,1,9,15,1,6,15,9) :', cross_point(6, 1, 9, 15, 1, 6, 15, 9)); }} />
        <div className='label'>{type}</div>
    </div>);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            name: '',
            gender: 1,
            favorit_number: '',
            email: '',
            birthday: new Date(),
            test_checklist: new Set(),
            popup: false,
            progress: 0,
            list_draggable: false,
            label_test: 'TEST'
        };
        this.openModal = () => { this.setState({ popup: true }); }
        this.closeModal = () => { this.setState({ popup: false }); }
        // this.testProgress = setInterval(() => {
        //     if (this.state.progress < 100)
        //         this.setState((prevState) => ({ progress: prevState.progress + 2 }));
        //     else
        //         clearInterval(this.testProgress);
        // }, 100);
        global.setTimeout(() => { this.setState({ label_test: 'APPOINT' }); }, 3000);
        this.onCheckTableItem = this.onCheckTableItem.bind(this);
    }
    triggerSuccessDemo() { Notify({ title: 'Success', context: 'You don\'t have enough permissions, please contact the administrator.', type: 'success', timeout: 1000000 }); }
    triggerWarningDemo() { Notify({ title: 'Warning', context: 'This is a Warning notification demo.', type: 'warning' }); }
    triggerInfoDemo() { Notify({ title: 'Info', context: 'This is a Info notification demo.', type: 'info' }); }
    triggerErrorDemo() { Notify({ title: 'Error', context: 'This is a Error notification demo.', type: 'error' }); }
    onCheckTableItem(row_idx, checked) {
        const { test_checklist } = this.state;
        const new_checklist = new Set(test_checklist);
        if (checked)
            new_checklist.add(row_idx);
        else
            new_checklist.delete(row_idx);
        this.setState({ test_checklist: new_checklist });
    }
    render() {
        const { label_test, favorit_number } = this.state;
        const icons = [
            'loading', 'write', 'arrow-left', 'arrow-right', 'solid-left', 'solid-right', 'left', 'right', 'zoom-out', 'zoom-in',
            'minus', 'plus', 'circle-plus', 'square-plus', 'square-minus', 'trashcan', 'edit',
            'document', 'save', 'calendar', 'clock', 'led-green', 'led-yellow', 'led-red', 'led-gray', 'warning', 'cyp-device',
            'cyplogo', 'scissors', 'cancel',  'exit','import', 'download', 'upload', 'dashboard', 'device', 'update',
            'setting', 'scene', 'volumn', 'idea', 'scenario', 'move', 'stop', 'previous', 'next', 'forward',
            'backward', 'grid', 'pushpin', 'forbid', 'hexigon-no', 'hexigon-yes', 'revert', 'heart', 'heart-solid', 'earth',
            'phone', 'admin', 'autorun', 'address', 'mute', 'info', 'menu', 'microphone', 'password', 'reboot',
        ];
        const sampleOptions = [
            <Option value='1' key={Math.random()}>Johnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Option>,
            <Option value='2' key={Math.random()}>Mary</Option>,
            <Option value='3' key={Math.random()}>David</Option>,
            <Option value='4' key={Math.random()}>Chris</Option>,
        ]
        const tooltip_sample = 'Return to main dashboard page where setup and configuration of the unit is performed.';
        const rows = [
            ['', <DateTime.TimePicker />, <DateTime.DatePicker />, <ProgressBar hint={`${this.state.progress}%`} percentage={this.state.progress} />],
            [<Icon type='led-gray' />, <Input size='small' placeholder='sample input' style={{ width: '75%' }} />, <DateTime.DatePicker />, <DateTime.TimePicker />],
            [<Icon type='led-red' />, <Input size='small' disabled placeholder='sample input' style={{ width: '75%' }} />, <Select value='' onChange={() => { }} style={{ width: '75%' }} size='small'>{sampleOptions}</Select>, <SwitchButton defaultChecked label={[ 'ALL', label_test ]}/>],
            [<Icon type='led-green' />, <div><Checkbox readOnly label='Mornig' disabled checked checkedType='square'/><Checkbox label='Afternoon' checkedType='square' /><Checkbox readOnly defaultChecked={true} label='Night' /></div>, <RadioGroup defaultValue='1' options={[{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3', disabled: true }, { value: '4', label: '4' }]} />, <SwitchButton />],
            [<Icon type='led-yellow' />, <Button type='primary' icon='stop' iconColor='white' onClick={() => { this.setState({ progress: 6 }) }}>Nickname</Button>, <Button>IP addr</Button>, <Button icon='square-minus' type='danger'>gateway</Button>],
            [<Button onClick={this.triggerSuccessDemo}>Success</Button>, <Button onClick={this.triggerWarningDemo} tooltipDirection='top-left' tooltip={tooltip_sample}>Warning</Button>, <Button icon='update' onClick={this.triggerInfoDemo}>Info</Button>, <Button onClick={this.triggerErrorDemo} tooltipDirection='top-right' tooltip={tooltip_sample}>Error</Button>],
            [<Icon type='led-blue' />, <Button type='primary' size='small' icon='edit' tooltipDirection='left-top' tooltip={tooltip_sample}>Submit</Button>, <Button size='small' tooltipDirection='top' tooltip={tooltip_sample}>Click</Button>, <Button icon='trashcan' type='danger' size='small' tooltipDirection='right-top' tooltip={tooltip_sample}>Delete</Button>],
            [<Icon type='led-red' />, <Button type='primary' icon='edit' tooltipDirection='left' tooltip={tooltip_sample}>Submit</Button>, <Button icon='move' onClick={this.openModal}>Click</Button>, <Button icon='trashcan' type='danger' tooltipDirection='right' tooltip={tooltip_sample}>Delete</Button>],
            [<Icon type='led-red' />, <Button type='primary' icon='import' tooltipDirection='left-bottom' tooltip={tooltip_sample} />, <Button icon='zoom-out' tooltipDirection='bottom' tooltip={tooltip_sample} />, <Button icon='square-minus' type='danger' tooltipDirection='right-bottom' tooltip={tooltip_sample} />],
            [undefined, <Button type='primary' icon='import' tooltipDirection='bottom-left' tooltip={tooltip_sample} />, undefined, <Button icon='square-minus' type='danger' tooltipDirection='bottom-right' tooltip={tooltip_sample} />],
            [<Icon type='loading' />, <Slider max={10} min={-10} step={1} value={this.state.progress} onAfterChange={(v) => { this.setState({ progress: v }); }} />, <Button icon='cancel' shape='round' />, <Button icon='square-minus' type='danger' shape='round' />],
        ];
        const table = <Table
            headers={['1', '2', '3', '4']}
            columnWidth={[ 300, 200, 200, 200 ]}
            rows={rows}
            pagination={true}
            rowLimit={10}
            responsive='transform'
        />;
        // const email_example = [
        //     ['David', 'Male', 'david.chang@example.com', '1987/5/31', '21', 'in 2nd grade'],
        //     ['Chris', 'Male', 'chris.lou@example.com', '1990/12/1', '20', 'in 1st grade'],
        //     ['Kenipher', 'Female', 'kenipher.kenway@example.com', '1993/7/9', '22', 'in 3rd grade'],
        //     ['Mary', 'Female', 'mary.su@example.com', '1983/10/22', '21', 'in 2nd grade'],
        //     ['David', 'Male', 'david.chang@example.com', '1987/5/31', '21', 'in 2nd grade'],
        //     ['Chris', 'Male', 'chris.lou@example.com', '1990/12/1', '20', 'in 1st grade'],
        //     ['Kenipher', 'Female', 'kenipher.kenway@example.com', '1993/7/9', '22', 'in 3rd grade'],
        //     ['Mary', 'Female', 'mary.su@example.com', '1983/10/22', '21', 'in 2nd grade'],
        // ];
        // const table = <Table
        //     headers={['Name', 'Gender', 'Email', 'Birthday', 'Age', 'Grade']}
        //     rows={email_example}
        //     pagination={true}
        //     rowLimit={5}
        //     responsive='transform'
        //     shortenProps={{
        //         layout: {
        //             bottomLeft: 0,
        //             topLeft: 5,
        //             topRight: [1, 4, 3],
        //             bottomRight: [2],
        //         }
        //     }}
        //     checkable
        //     checkList={Array.from(this.state.test_checklist)}
        //     onCheck={this.onCheckTableItem}
        // ></Table>;
        const icondemo = icons.map(type => icon_container(type));
        const form = <Form.Form labelStyle={{ width: '130px' }}>
            <Form.Item label='Name' error='Name cannot be null'>
                <Input
                    value={this.state.name}
                    type='password'
                    onChange={(e) => { this.setState({ name: e.target.value }); }}
                ></Input>
            </Form.Item>
            <Form.Item label='Gender'>
                <Select value={this.state.gender} onChange={(v) => { this.setState({ gender: v }); }} disabled>
                    <Option value='1'>Male</Option>
                    <Option value='2'>Female</Option>
                </Select>
            </Form.Item>
            <Form.Item label='Favorit Number' error={(favorit_number.length === 0) ? 'Required field' : undefined}>
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
            </Form.Item>
            <Form.Item label='Email'>
                <Input
                    value={this.state.email}
                    placeholder="frank.cho@example.com"
                    onChange={(e) => { this.setState({ email: e.target.name }); }}
                    disabled
                ></Input>
            </Form.Item>
            <Form.Item label='Birthday'>
                <DateTime.DatePicker value={this.state.birthday} onChange={(date) => { this.setState({ birthday: date }); }} />
            </Form.Item>
            <Form.Item label='Score' layout='vertical'>
                <Slider max={10} min={-10} onAfterChange={(v) => { console.log('v :>> ', v); }}></Slider>
            </Form.Item>
            <Form.Item error='Test hint affect in only button formitem' style={{ justifyContent: 'flex-end' }}>
                <Button type='danger'>Delete</Button>
                <Button icon='update' disabled>Reset</Button>
                <Button type='primary'>Save</Button>
            </Form.Item>
        </Form.Form>;
        return (
                <Layout.Layout>
                    <Layout.Header>
                        <h1 style={{ fontSize: '24px', height: '40px', lineHeight: '40px', margin: 0, color: 'gray' }}>Layout.Header</h1>
                        <div
                            className='demo-navitem'
                            style={{
                                height: '100%',
                                width: '300px',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                        >
                            <Dropdown
                                parent={<Icon type='earth' color='#008AAB' style={{ transform: 'scale(1.3)' }}/>}
                                children={[
                                    { label: 'Chinese', icon: { type: 'dashboard', color: '#008aab' } },
                                    { label: 'English', icon: { type: 'scene', color: '#008aab' } },
                                    { label: 'Japanese', icon: { type: 'calendar', color: '#008aab' } },
                                ]}
                                style={{ marginRight: '20px' }}
                            />
                        </div>
                    </Layout.Header>
                    <Layout.Navigation />
                    <Layout.Body>
                        <Spin type='linear' visible={false} />
                        <Layout.Sider
                            visible={this.state.visible}
                            toggleTooltip={'This is Layout.Sider\'s toggler.'}
                            onCollapse={(visible) => { this.setState({ visible }); }}
                            forceExtend={false}
                        >
                            <Layout.NavigationItem icon='dashboard' tooltip='dashboard' label='NavigationItem 1' children={[ { label: 'Level2 1' }, { label: 'Level2 2' }, { label: 'Level2 3' } ]} />
                            <Layout.NavigationItem icon='calendar' label='NavigationItem 2'/>
                            <Layout.NavigationItem icon='save' label='NavigationItem 3' children={[ { label: 'Level2 1' }, { label: 'Level2 2' }, { label: 'Level2 3' } ]} />
                            <Layout.NavigationItem icon='scenario' label='NavigationItem 4'/>
                            <Layout.NavigationItem icon='setting' label='NavigationItem 5'/>
                            <Layout.NavigationItem icon='idea' label='NavigationItem 6'/>
                            <h1 style={{ fontSize: '28px', paddingLeft: '80px', transform: 'translate(88px, -50px) rotate(-90deg)', height: '40px', lineHeight: '40px', margin: 0, color: 'white' }}>Layout.Sider</h1>
                        </Layout.Sider>
                        <Layout.Center>
                            <Flat.Playground contextStyle={{ height: 'auto', paddingTop: '10px' }}>
                                {table}
                                <div className='empty_demo_wrapper'><Tooltip direction='top-left' fixedWidth={300} text='Return to main dashboard page where setup and configuration of the unit is performed.'><Empty /></Tooltip></div>
                                <div className='empty_demo_wrapper'><Cone color='yellow' /></div>
                                <div className='icon_demo_wrapper'>
                                    {icondemo}
                                </div>
                                <SwitchButton style={{ transform: 'scale(1.3)' }} defaultChecked={this.state.list_draggable} onChange={(e) => { this.setState({ list_draggable: e.target.checked }); }} type='hexigon' />
                                <SwitchButton style={{ transform: 'scale(1.3)' }} defaultChecked={this.state.list_draggable} onChange={(e) => { this.setState({ list_draggable: e.target.checked }); }} type='heart' />
                                {/* <List draggable={this.state.list_draggable} onAfterDrag={undefined} items={email_example.map(data => ({ label: data[0], index: data[0], description: data.slice(1).join(',') }))} /> */}
                                <Flat.Section title='Form Demo'>
                                    {form}
                                </Flat.Section>
                            </Flat.Playground>
                            {/* <div className='app_dashboard_container'>
                                {table}
                                <div className='empty_demo_wrapper'><Tooltip direction='top-left' fixedWidth={300} text='Return to main dashboard page where setup and configuration of the unit is performed.'><Empty /></Tooltip></div>
                                <div className='empty_demo_wrapper'><Cone color='yellow' /></div>
                                <div className='icon_demo_wrapper'>
                                    {icondemo}
                                </div>
                                <SwitchButton style={{ transform: 'scale(1.3)' }} defaultChecked={this.state.list_draggable} onChange={(e) => { this.setState({ list_draggable: e.target.checked }); }} type='hexigon' />
                                <SwitchButton style={{ transform: 'scale(1.3)' }} defaultChecked={this.state.list_draggable} onChange={(e) => { this.setState({ list_draggable: e.target.checked }); }} type='heart' />
                                <List draggable={this.state.list_draggable} onAfterDrag={undefined} items={email_example.map(data => ({ label: data[0], index: data[0], description: data.slice(1).join(',') }))} />
                                {form}
                            </div> */}
                            {/* <h1 style={{ fontSize: '48px', color: 'gray', paddingLeft: '20px' }}>Layout.Body</h1> */}
                        </Layout.Center>
                    </Layout.Body>
                    <Layout.Footer>
                        <h1 style={{ fontSize: '18px', height: '40px', lineHeight: '40px', margin: 0 }}>Layout.Footer</h1>
                    </Layout.Footer>
                    <Modal
                        visible={this.state.popup}
                        onClose={this.closeModal}
                        title='Demostration'
                    >
                        This is a CYPD demostration.
                </Modal>
            </Layout.Layout>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
