import React, { useEffect, useState } from 'react';
import './App.css';
import { Form, Table, Input, Button, Select } from 'antd'




function App () {

  const [form] = Form.useForm();
  const [tabelData, setTableData] = useState([])

  const onFinish = (values) => {
    console.log('values', values)
  }

  const increate = () => {
    const list = form.getFieldValue('table');
    const nextList = list.concat([{
      id: Math.random() * 10000,
      name: '',
      age: '',
      address: ''
    }]);
    // form.submit()
    form.setFieldsValue({
      table: nextList,
    });
    setTableData(nextList)
  }

  const mock = () => {
    const params = [{
      id: 100,
      name: '张三',
      age: '男',
      address: '成都'
    }]
    form.setFieldsValue({
      table: params
    });
    setTableData([...tabelData, ...params])
  }

  useEffect(() => {
    console.log(tabelData)
  }, [tabelData])


  const validate = () => {
    const result = form.validateFields()
  }


  return (
    <div className="App">

      <Form
        form={form}
        name='base'
        initialValues={{ table: tabelData }}
        onFinish={onFinish}
      >
        <Form.List name="table">
          {(fields, { add, remove }) => {
            const rules = [{ required: true, message: '请填充内容' }]
            return (
              <div>
                <Table
                  dataSource={fields}
                  dataIndex='name'
                  rowKey={'name'}
                  pagination={false}
                  columns={[
                    {
                      title: '名称',
                      key: 'name',
                      dataIndex: 'name',
                      render: (_, record) => {

                        return <Form.Item
                          rules={rules}
                          name={[record.name, 'name']}
                          fieldKey={[record.fieldKey, 'name']}
                        >
                          <Input />
                        </Form.Item>
                      }
                    },
                    {
                      title: '性别',
                      key: 'age',
                      dataIndex: 'age',
                      render: (_, record) => {
                        return <Form.Item
                          rules={rules}
                          // name={[record.name, 'age']}
                          fieldKey={[record.fieldKey, 'age']}
                          shouldUpdate
                        >
                          {({ getFieldValue }) => {
                            console.log('性别', record);
                            const fieldValue = getFieldValue('table')
                            const currentData = fieldValue[record.key]

                            return (
                              <Form.Item name={[record.name, 'age']}>
                                <Select disabled={currentData.id === 100}>
                                  <Select.Option value="男">男</Select.Option>
                                  <Select.Option value="女">女</Select.Option>
                                </Select>
                              </Form.Item>
                            )
                          }}
                        </Form.Item>
                      }
                    },
                    {
                      title: '地址',
                      key: 'address',
                      dataIndex: 'address',
                      render: (_, record) => {
                        return <Form.Item
                          rules={rules}
                          // name={[record.name, 'address']}
                          fieldKey={[record.fieldKey, 'address']}
                          shouldUpdate
                        >
                          {({ getFieldValue }) => {
                            const fieldValue = getFieldValue('table')
                            const currentData = fieldValue[record.key]
                            console.log('fieldValue', fieldValue);
                            const result = currentData.age === '女' ? <Input /> : (
                              <Select>
                                <Select.Option value="四川">四川</Select.Option>
                                <Select.Option value="重庆">重庆</Select.Option>
                              </Select>
                            )

                            return (
                              <Form.Item name={[record.name, 'address']}>
                                {result}
                              </Form.Item>
                            )
                          }}

                        </Form.Item>
                      }
                    },
                    {
                      title: '操作',
                      key: 'action',
                      dataIndex: 'action',
                      render: (_, record) => {
                        return <Button onClick={() => {
                          const list = form.getFieldValue('table').filter((element, index) => {
                            return index !== record.name
                          });
                          const nextList = list.concat([]);
                          setTableData(nextList)
                          form.setFieldsValue({
                            table: nextList,
                          });

                          console.log('record', list, record);
                          // tabelData.
                          // remove(record.name)
                        }}>删除</Button>
                      }
                    }
                  ]}
                />
              </div>
            );
          }
          }
        </Form.List>
      </Form>


      <Button onClick={() => validate()}>校验</Button>
      <Button onClick={() => increate()}>新增数据</Button>
      <Button onClick={() => mock()}>模拟加载</Button>
    </div>
  );
}



export default App;
