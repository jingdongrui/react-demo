import React from "react";
import { Col, Row } from 'antd';
import { Button, Form, Input } from 'antd';
import "./index.scss"
import { UpOutlined } from "@ant-design/icons";

const TableList: React.FC = () => {
  return (
    <div className="table-list-container">
      <div className="main">
        <section className="search">
          <Form
            name="basic"
            autoComplete="off"
          >
            <Row>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item
                  label="姓名"
                  name="title"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item
                  label="手机号"
                  name="tel"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item>
                  <div className="search-form-control">
                    <Button>重置</Button>
                    <Button type="primary">查询</Button>
                    <a>展开<UpOutlined /></a></div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </section>
        <section></section>
        <section></section>
      </div>
    </div>
  )
}
export default TableList