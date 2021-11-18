import React from 'react';
import { Progress, Badge } from 'antd';

const progress = () => {
  return (
    <div style={{width: "100%"}}>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={10} />
    <br />
    <Progress percent={90} steps={10} size="small" strokeColor="#52c41a" />
    <br />
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="성공" />
    <br />
    <Badge status="error" text="에러" />
    <br />
    <Badge status="default" text="기본" />
    <br />
    <Badge status="processing" text="진행 중" />
    <br />
    <Badge status="warning" text="경고" />
    </div>
  )
}

export default progress
