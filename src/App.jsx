import React, { useState } from "react";
import { Table, Button, Modal, Divider, Row } from "antd";
import { DownSquareOutlined, UpSquareOutlined } from "@ant-design/icons";
import AccountDetails from "./components/AccountDetails";
import AccountView from "./components/AccountView";
import { useSelector } from "react-redux";
import { selectFormData } from "./app/FormSlice";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [ifExists, setIfExists] = useState(true);
  const [active, setActive] = useState(true);
  const selectedformData = useSelector(selectFormData);

  const handleButtons = () => {
    if(ifExists && active) {
      setIfExists(false)
      setActive(false)
    } else {
      setIfExists(true)
      setActive(true)
    }
  }

  const columns = [
    {
      title: 'Account Name',
      dataIndex: 'accountname',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: () => <Button type="dashed" onClick={()=> setIsOpen(true)}>+ Add</Button>
    },
    {
      title: 'Account Type',
      dataIndex: 'accounttype',
    },
    {
      title: 'Account Category',
      dataIndex: 'accountcategory',
    },
    {
      title: 'Use Status',
      dataIndex: 'status',
    },
    {
      title: 'Note',
      dataIndex: 'note'
    }
  ];
  const tableData = [
    {
      key: 1,
      accountname: 'Jhone Doe',
      accounttype: 'Debit',
      accountcategory: 'Resource',
      status: 'No',
      note: '',
      child: [
        {
          key: 5,
          accountname: 'Jhone Whick',
          accounttype: 'Credit',
          accountcategory: 'Resource',
          status: 'No',
          note: '',
        }
      ]
    },
  ]
  return (
   <>
      <div className="container">
        <Table
          columns={columns}
          dataSource={tableData}
          bordered
          expandable={{
            expandedRowRender: record => <Table dataSource={record.child} columns={columns} pagination={false} />,
            expandIcon: ({ expanded, onExpand, record }) =>
              expanded ? (
                <DownSquareOutlined onClick={e => onExpand(record, e)} />
              ) : (
                <UpSquareOutlined onClick={e => onExpand(record, e)} />
              )
          }}
        />
        <Modal
          width={700}
          open={isOpen}
          onCancel={()=> setIsOpen(false)}
          okText="Save"
          onOk={() => handleSubmit()}          
        >
          <div className="flexbox">
            <Button type={active ? 'primary' : 'dashed'} onClick={()=> handleButtons()}>Account Details</Button>
            <Divider type="vertical" />
            <Button type={!active ? 'primary' : 'dashed'} onClick={()=> handleButtons()}>Account View Settings</Button>
          </div>
          <Divider />
          {ifExists ? <AccountDetails /> : <AccountView />}      
        </Modal>
      </div>
   </>
  )
}
