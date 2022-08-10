import React, { useState } from 'react';
import { Form, Table, Input, Checkbox } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { arrayMoveImmutable } from 'array-move';
import type { SortableContainerProps, SortEnd } from 'react-sortable-hoc';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import './we.css';

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} />
));
const SortableBody = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props} />
));

const Welcome: React.FC = () => {
  const [form] = Form.useForm();

  const [dataSource] = useState([
    {
      key: 0,
      index: 0,
      name: '1111',
      age: '1111',
      address: true,
    },
    {
      key: 1,
      index: 1,
      name: '2222',
      age: '2222',
      address: false,
    },
  ]);

  const columns = [
    {
      title: 'Sort',
      dataIndex: 'sort',
      width: 30,
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      render: (_, record) => {
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
                  <Input
                    onBlur={(e) => {
                      const newData = currentData.map((item, index) => {
                        if (record.fieldKey === index) {
                          item.address = e.target.value;
                        }
                        return item;
                      });
                      form.setFieldsValue({ table: newData });
                      // setDataSource(newData);
                    }}
                  />
                </Form.Item>
              );
            }}
          </Form.Item>
        );
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      editable: true,
      render: (_, record) => {
        return (
          <Form.Item style={{ margin: 0 }} shouldUpdate fieldKey={[record.fieldKey, 'age']}>
            {({ getFieldValue }) => {
              return (
                <Form.Item
                  noStyle
                  style={{ margin: 0 }}
                  name={[record.fieldKey, 'age']}
                  rules={[{ required: true, message: '必填' }]}
                >
                  <Input />
                </Form.Item>
              );
            }}
          </Form.Item>
        );
      },
    },
    {
      title: 'address',
      dataIndex: 'address',
      render: (_, record) => {
        return (
          <Form.Item style={{ margin: 0 }} shouldUpdate fieldKey={[record.fieldKey, 'address']}>
            {({ getFieldValue }) => {
              const currentData = getFieldValue('table');
              const data = currentData[record.fieldKey];
              return (
                <Form.Item
                  noStyle
                  initialValue={true}
                  style={{ margin: 0 }}
                  name={[record.fieldKey, 'address']}
                  rules={[{ required: true, message: '必填' }]}
                >
                  <Checkbox
                    checked={data.address}
                    onChange={(e) => {
                      const newData = currentData.map((item, index) => {
                        if (record.fieldKey === index) {
                          item.address = e.target.checked;
                        }
                        return item;
                      });
                      console.log(newData);
                      form.setFieldsValue({ table: newData });
                      // setDataSource(newData);
                    }}
                  />
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
      form.setFieldsValue({ table: newData });
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
    const index = dataSource.findIndex((x) => x.index === restProps['data-row-key']);
    return <SortableItem key={index} index={index} {...restProps} />;
  };

  return (
    <div>
      <Form form={form} initialValues={{ table: dataSource }}>
        <Form.List name="table">
          {(fields) => {
            return (
              <Table
                rowClassName={() => 'editable-row'}
                bordered
                // rowKey="index"
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
