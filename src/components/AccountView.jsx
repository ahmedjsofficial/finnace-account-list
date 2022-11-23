import React from 'react';
import { Button, Checkbox, Divider, Form, Input, Radio, Select } from "antd";
import { useDispatch } from 'react-redux';
import { setFormData } from '../app/FormSlice';

export default function AccountView() {
    const dispatch = useDispatch();
    const accountCode = [{value: 'Validate Account Code'}, {value: 'Generate Code'}];
    const onFinish = (values) => {
        dispatch(setFormData(values));
    };
  return (
   <>
      <div>
        <Form onFinish={onFinish} autoComplete='off'>
            <Form.Item name={'account_code'} label="Account Code" rules={[{required: true, message: 'Account Code is required!'}]}>
                <Select value={accountCode.label} options={accountCode} />
            </Form.Item>
            <Form.Item name={'account_name'} label='Account Name' rules={[{required: true, message: 'Account Name is required!'}]}>
                <Input placeholder='Account Name' />
            </Form.Item>
            <Form.Item label="Evaluation" name={'account_evaluation'}>
                <Radio.Group>
                    <Radio value="no_evaluation"> No Evaluation </Radio>
                    <Radio value="evaluation_target_account"> Evaluation Target Account </Radio>
                    <Radio value="evaluation_account"> Evaluation Account </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'identation_order'} label='Indentation Order' rules={[{required: true, message: 'Intentation Order is required!'}]}>
                <Input placeholder='Identation Order' />
            </Form.Item>
            <Divider />
            <Form.Item name={'view_method'} label='View Method'>
                <Form.Item name={'view_method_button'}>
                    <Radio.Group>
                        <Radio value="no_evaluation"> View </Radio>
                        <Radio value="evaluation_target_account"> Un View </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={'view_name'} label='View Name'>
                    <Input placeholder='View Name' />
                </Form.Item>
                <Form.Item name={'view_print'} label='Print Position'>
                    <Radio.Group>
                        <Radio value="left"> Left </Radio>
                        <Radio value="right"> Right </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={'view_position'} label='View Position'>
                    <Checkbox.Group>
                        <Checkbox value="bold"> Bold </Checkbox>
                        <Checkbox value="bracket"> Bracket </Checkbox>
                    </Checkbox.Group>
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' type='primary'>Submit</Button>
            </Form.Item>
        </Form>
      </div>
   </>
  )
}
