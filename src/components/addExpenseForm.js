import React from 'react'
import { Button, Form, Input } from 'antd';
import { useContext } from 'react'; 
import { mainContext } from '../contexts';
import { InputNumber } from 'antd';


    const MyFormItemContext = React.createContext([]);
    function toArr(str) {
      return Array.isArray(str) ? str : [str];
    }
    const MyFormItemGroup = ({ prefix, children }) => {
      const prefixPath = React.useContext(MyFormItemContext);
      const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
      return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
    };
    const MyFormItem = ({ name, ...props }) => {
      const prefixPath = React.useContext(MyFormItemContext);
      const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
      return <Form.Item name={concatName} {...props} />;
    };
    const AddExpenseForm = () => {
      const {dispatch} = useContext(mainContext);
      const onFinish = (value) => {
        console.log(value.expense);
        dispatch({type:'ADD_EXPENSE',payload :  value.expense.name});
      };
      return (
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <MyFormItemGroup prefix={['expense']}>
            <MyFormItemGroup prefix={['name']}>
               <div className='form'>
                  <MyFormItem name="name" label="Name">
                    <Input />
                  </MyFormItem>
                  <MyFormItem name="cost" label="Cost">
                    {/* <Input type='num' /> */}
                    <InputNumber  />
                  </MyFormItem>
                </div> 
            </MyFormItemGroup>
              
          </MyFormItemGroup>
    
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form>
      );
    };

export default AddExpenseForm