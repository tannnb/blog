import React, { useState, useEffect } from 'react';
import { Form, Table, Input, Checkbox, Select, Button } from 'antd';
import { LikeTwoTone, MenuOutlined } from '@ant-design/icons';
import { arrayMoveImmutable } from 'array-move';
import type { SortableContainerProps, SortEnd } from 'react-sortable-hoc';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import _ from 'lodash';
import './we.css';

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} />
));
const SortableBody = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props} />
));

let goobaleIndex = 2;
const Welcome: React.FC = () => {
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: 0,
      index: 0,
      name: '0',
    },
    {
      key: 1,
      index: 1,
      name: 1,
    },
    // {
    //   key: 2,
    //   index: 2,
    //   name: 2,
    // },
    // {
    //   key: 3,
    //   index: 3,
    //   name: 3,
    // },
    // {
    //   key: 4,
    //   index: 4,
    //   name: 4,
    // },
  ]);

  useEffect(() => {
    // setDataSource(dataSource);
    form.setFieldsValue({ table: dataSource });
  }, []);

  const columns = [
    {
      title: '',
      dataIndex: 'sort',
      width: 30,
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
    {
      title: '序号',
      width: 80,
      render: (_: number, record: any) => {
        return (
          <Form.Item style={{ margin: 0 }} shouldUpdate>
            {({ getFieldValue }) => {
              const currentData = getFieldValue('table');
              const data = currentData[record.fieldKey];
              console.log(currentData, data);
              // console.log(dataSource, record, data);
              return (
                <Form.Item noStyle style={{ margin: 0 }}>
                  <div>{data.index}</div>
                </Form.Item>
              );
            }}
          </Form.Item>
        );
      },
    },
    {
      title: 'name',
      dataIndex: 'name',
      render: (_, record: any) => {
        return (
          <Form.Item style={{ margin: 0 }} shouldUpdate fieldKey={[record.fieldKey, 'name']}>
            {({ getFieldValue }) => {
              const currentData = getFieldValue('table');
              const data = currentData[record.fieldKey];
              return (
                <Form.Item
                  noStyle
                  style={{ margin: 0 }}
                  name={[record.fieldKey, 'name']}
                  rules={[{ required: true, message: '必填' }]}
                >
                  {edit ? (
                    <Input
                      onBlur={(e) => {
                        const newData = currentData.map((item, index) => {
                          if (record.fieldKey === index) {
                            item.address = e.target.value;
                          }
                          return item;
                        });
                        form.setFieldsValue({ table: newData });
                      }}
                    />
                  ) : (
                    <div>{data?.name}</div>
                  )}
                </Form.Item>
              );
            }}
          </Form.Item>
        );
      },
    },
  ];

  const onSortEnd = ({ oldIndex, newIndex }: SortEnd) => {
    if (oldIndex !== newIndex) {
      const table = form.getFieldsValue().table;
      const newData = arrayMoveImmutable(table, oldIndex, newIndex).filter((el) => !!el);

      // setDataSource(newData);
      form.setFieldsValue({ table: newData });
      form.validateFields();
    }
  };

  const DraggableContainer = (props: SortableContainerProps) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow: React.FC<any> = ({ className, style, ...restProps }) => {
    const index = dataSource?.findIndex((x) => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  const getMaxIndex = () => {
    let currentIndex = 0;
    const table = form.getFieldsValue().table;
    const currentData = _.cloneDeep(table);
    currentData.forEach((item, index: number) => {
      if (index >= currentIndex) {
        currentIndex = index;
      }
    });
    return currentIndex + 1;
  };

  const expandState = () => {
    setEdit(!edit);
  };

  const increateAdd = () => {
    const newData = form.getFieldsValue().table;

    const currentData = _.cloneDeep(newData);
    console.log('添加之前:', newData);

    const params = {
      key: goobaleIndex,
      index: goobaleIndex,
      name: goobaleIndex,
    };
    currentData.push(params);
    console.log('添加之后:', currentData);

    setDataSource(currentData);
    form.setFieldsValue({ table: currentData });

    goobaleIndex += 1;
  };

  // initialValues={{ table: dataSource }}
  return (
    <div>
      <Button onClick={() => expandState()}>切换状态</Button>
      <Button onClick={() => increateAdd()}>增加一条</Button>
      <div>----</div>
      <Form form={form}>
        <Form.List name="table">
          {(fields) => {
            console.log('fields', fields);
            return (
              <Table
                bordered
                // rowKey="key"
                dataSource={fields}
                columns={columns}
                pagination={false}
                components={{
                  body: {
                    wrapper: DraggableContainer,
                    row: DraggableBodyRow,
                  },
                }}
              />
            );
          }}
        </Form.List>
      </Form>
    </div>
  );
};

export default Welcome;
