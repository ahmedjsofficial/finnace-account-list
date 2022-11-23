import { Form, Input, Select } from "antd";
import { useState } from "react";

export default function Inputs() {
  const [inputState, setInputState] = useState({

  });

  const handleSubmit = (values)=> {
    console.log(values)
  }

  return (
   <>
      <div>
        <Form onFinish={()=> handleSubmit()}>
          <Form.Item name={'account_code'} label="Account Code">
            <Select></Select>
          </Form.Item>
        </Form>
      </div>
   </>
  )
}
