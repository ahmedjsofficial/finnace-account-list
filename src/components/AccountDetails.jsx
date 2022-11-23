import React from 'react';
import { Button, Divider, Form, Input, Radio, Select } from "antd";
import { useDispatch } from 'react-redux';
import { setFormData } from '../app/FormSlice';

export default function AccountDetails() {
    const dispatch = useDispatch();

    const accountCode = [{value: 'Validate Account Code'}, {value: 'Generate Code'}];

    const onFinish = (values) => {
        dispatch(setFormData({ values }));
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
            <Form.Item name={'account_tag'} label='Account Tags' rules={[{required: true, message: 'Account Tag is required!'}]}>
                <Input placeholder='Account Tag' />
            </Form.Item>
            <Form.Item label="Account Loan Type" name={'account_loan_type'}>
                <Radio.Group>
                    <Radio value="Credit"> Credit </Radio>
                    <Radio value="Debit"> Debit </Radio>
                </Radio.Group>
            </Form.Item>
            <Divider />
            <Form.Item label={'Account Properties'} name='account_properties'>
                <Form.Item label={'Account Type'}><Select/></Form.Item>
                <Form.Item label={'Account Category'}><Select/></Form.Item>
                <Form.Item label={'Parent Account'}><Select/></Form.Item>
                <Form.Item label={'Additional Items'}><Select/></Form.Item>
            </Form.Item>
            <Form.Item label="Relational Business" name={'account_relations'}>
                <Radio.Group>
                    <Radio value="business"> No Business</Radio>
                    <Radio value="deposit"> Deposit </Radio>
                    <Radio value="debit"> Debit </Radio>
                    <Radio value="bill"> Bill </Radio>
                    <Radio value="bond"> Bond </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'account_note'} label='Account Notes' rules={[{required: true, message: 'Account Note is required!'}]}>
                <Input placeholder='Account Notes' />
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' type='primary'>Submit</Button>
            </Form.Item>
        </Form>
      </div>
   </>
  )
}
