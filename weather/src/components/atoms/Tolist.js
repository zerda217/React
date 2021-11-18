import React, { useState } from 'react'
import { Button } from 'antd';

const Tolist = () => {
  const [list, setList] = useState( "목요일" )

  return (
    <div>
      {list}

      <br/> 
      <Button>
        등록
      </Button>
    </div>

)
}

export default Tolist
