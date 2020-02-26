import React from 'react';
import ReactDOM from 'react-dom';

import { Table, Icon, Input, Button, Select, DateTime, Checkbox, Option, RadioGroup, SwitchButton, Notify, Slider } from './src';

class App extends React.Component {
    triggerSuccessDemo() { Notify({ title: 'Success', context: 'This is a Success.', type: 'success', timeout: 1000000 }); }
    triggerWarningDemo() { Notify({ title: 'Warning', context: 'This is a Warning notification demo.', type: 'warning' }); }
    triggerInfoDemo() { Notify({ title: 'Info', context: 'This is a Info notification demo.', type: 'info' }); }
    triggerErrorDemo() { Notify({ title: 'Error', context: 'This is a Error notification demo.', type: 'error' }); }
    render() {
        const sampleOptions = [
            <Option value='1' key={Math.random()}>1</Option>,
            <Option value='2' key={Math.random()}>2</Option>,
            <Option value='3' key={Math.random()}>3</Option>,
            <Option value='4' key={Math.random()}>4</Option>,
            <Option value='5' key={Math.random()}>5</Option>,
        ]
        return (
            <div className='app_dashboard_container'>
                <Table
                    headers={['State', 'Device Name', 'IP Address', 'Gateway']}
                    rows={[
                        [<Icon type='led-gray' />,<Input size='small' placeholder='sample input' style={{width: '75%'}} />,<Select value='' onChange={() => {}} style={{width: '75%'}} size='small'>{sampleOptions}</Select>,<DateTime.TimePicker disabled />],
                        [<Icon type='led-green' />,<div><Checkbox readOnly label='Mornig' disabled checked/><Checkbox label='Afternoon'/><Checkbox readOnly checked label='Night'/></div>,<RadioGroup options={[ {value: '1', label: '1'}, {value: '2', label: '2'}, {value: '3', label: '3', disabled: true}, {value: '4', label: '4'}]}/>,<SwitchButton />],
                        [<Icon type='led-yellow' />,<Button type='primary' icon='edit'>Nickname</Button>,<Button>IP addr</Button>,<Button icon='square-minus' type='danger'>gateway</Button>],
                        [<Button onClick={this.triggerSuccessDemo}>Success</Button>,<Button onClick={this.triggerWarningDemo}>Warning</Button>,<Button onClick={this.triggerInfoDemo}>Info</Button>,<Button onClick={this.triggerErrorDemo}>Error</Button>],
                        [<Icon type='loading' />,<Button type='primary' icon='save' size='small' />,<Button icon='square-plus' size='small'/>,<Button icon='square-minus' type='danger' size='small'/>],
                        [<Icon type='led-red' />,<Input size='small' placeholder='sample input' style={{width: '75%'}} />,<Select value='' onChange={() => {}} style={{width: '75%'}} size='small'>{sampleOptions}</Select>,'4'],
                        [<Icon type='led-red' />,<Button type='primary' size='small' icon='edit'>Nickname</Button>,<Button size='small'>IP addr</Button>,<Button icon='square-minus' type='danger' size='small'>gateway</Button>],
                        [<Icon type='led-red' />,<Button type='primary' icon='edit'>Nickname</Button>,<Button>IP addr</Button>,<Button icon='square-minus' type='danger'>gateway</Button>],
                        [<Icon type='led-red' />,<Button type='primary' icon='edit' />,<Button icon='square-plus'/>,<Button icon='square-minus' type='danger'/>],
                        [<Icon type='loading' />,<Button type='primary' icon='save' size='small' />,<Button icon='square-plus' size='small'/>,<Button icon='square-minus' type='danger' size='small'/>],
                        [<Slider />],
                    ]}
                    pagination={true}
                    rowLimit={11}
                    bodyStyle={{width: '1000px'}}
                />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
