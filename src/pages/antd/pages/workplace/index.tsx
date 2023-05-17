
import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Avatar, Button, List, Skeleton } from 'antd';
import IconFont from "@/components/IconFont/index";
import "./index.scss";
import antd_logo from "@/assets/images/button/antd_logo.svg";
import testimg from "@/assets/images/static/cr.svg";

const docData = [
  {
    imgUrl: antd_logo,
    title: "Ant Design",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  },
  {
    imgUrl: antd_logo,
    title: "Ant Design",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  },
  {
    imgUrl: antd_logo,
    title: "Ant Design",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  },
  {
    imgUrl: antd_logo,
    title: "Ant Design",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  },
  {
    imgUrl: "https://element-plus.gitee.io/images/element-plus-logo.svg",
    title: "Ant Design",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  },
  {
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
    title: "React",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  }
]
const navData = [
  {
    title: "Google",
    icon: "icon-google",
    url: "https://www.google.com/"
  },
  {
    title: "Bing",
    icon: "icon-biying",
    url: "https://www.bing.com/"
  },
  {
    title: "GitHub",
    icon: "icon-github-fill",
    url: "https://github.com/"
  },
  {
    title: "YouTube",
    icon: "icon-youtube",
    url: "https://www.youtube.com/"
  },
  {
    title: "知乎",
    icon: "icon-shejiaotubiao-10",
    url: "https://www.zhihu.com/"
  },
  {
    title: "Steam",
    icon: "icon-steam",
    url: "https://store.steampowered.com/"
  },
]

interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const Workplace: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))),
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <div className="page-workplace-container">
      <div className="workplace-info">
        <div className="info-header">
          <span className="title">工作台</span>
        </div>
        <div className="info-content">
          <div className="detail">
            <div className="info">
              <span className="img"><img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="qw" /></span>
              <div className="info-detail">
                <div className="title">早安，吴彦祖</div>
                <div className="detail">今日晴，20℃ - 32℃！</div>
              </div>
            </div>
            <div className="static">static</div>
          </div>
        </div>
      </div>
      <div className="workplace-content">
        <div className="content">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={16}>
              <Card className='marginBottom16' title="文档" extra={<a href="#">全部文档</a>} bodyStyle={{ padding: 0, width: '100%' }}>
                <div className='card-container'>
                  <Row>
                    {docData.map((item, index) => (
                      <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card.Grid style={{ width: '100%' }}>
                          <div className='card-box'>
                            <div className='img'><img src={item.imgUrl} alt={item.title} /></div>
                            <div className='info'>
                              <div className='title'>{item.title}</div>
                              <div className='detail'>{item.description}</div>
                            </div>
                          </div>
                          {/* </Card> */}
                        </Card.Grid>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Card>
              <Card title="动态" extra={<a href="#">更多</a>} bodyStyle={{ padding: 24, width: '100%' }}>
                <div className='message-container'>
                  <List
                    loading={initLoading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={(item) => (
                      <List.Item>
                        <Skeleton avatar title={false} loading={item.loading} active>
                          <List.Item.Meta
                            avatar={<Avatar src={item.picture.large} />}
                            title={item.name?.last}
                            description="三天前"
                          />
                        </Skeleton>
                      </List.Item>
                    )}
                  />
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
              <Card className='marginBottom16' title="快捷导航" bodyStyle={{ padding: 0, width: '100%' }}>
                <div className='card-container-nav' >
                  {navData.map((item, index) => (
                    <Card.Grid key={index} style={{
                      width: '33.33%',
                      textAlign: 'center',
                      padding: 0
                    }} >
                      <a href={item.url} className='nav-box' style={{ padding: '24px' }}>
                        <div className='icon'><IconFont type={item.icon} style={{ fontSize: '22px' }} /></div>
                        <div className='title'>{item.title}</div>
                      </a>
                    </Card.Grid>
                  ))}
                </div>
              </Card>
              <Card className='marginBottom16' bodyStyle={{ padding: 24, width: '100%' }}>
                <div>
                  <img src={testimg} alt="testimg" />
                </div>
              </Card>
              <Card className='marginBottom16' bodyStyle={{ padding: 24, width: '100%' }}>
                <div >
                  121212
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
export default Workplace