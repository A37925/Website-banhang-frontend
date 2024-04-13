import React from 'react'
import { Col } from 'antd';
import { WrapperTextHeader, WrapperHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from "./style"
import Search from 'antd/lib/transfer/search'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>
            Web ban hang
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
        <Search placeholder="input search text" enterButton />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px' }}>
          <WrapperHeaderAccount>
            <div>
              <UserOutlined style={{ fontSize: '30px'}}/>
            </div>
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
            <div>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff'}}/>
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
        </Col>
        
    </WrapperHeader>
  </div>
  )
}

export default HeaderComponent