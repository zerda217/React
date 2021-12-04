import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

const SelecBox = () => {
  return (
    <div>
      <Select
    showSearch
    style={{ width: 200 }}
    placeholder="등록할 사이트"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">사이트</Option>
    <Option value="2">주소가</Option>
    <Option value="3">알파벳</Option>
    <Option value="4">순서대로</Option>
    <Option value="5">나열될거에요</Option>
    <Option value="6">디비에서 불러옴</Option>
  </Select>
    </div>
  )
}

export default SelecBox
