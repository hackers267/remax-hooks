import { useState } from 'react';

export function useMore(requestMethod:any){
  const [] = useState();
  return {
    all:[],
    current:{},
    init:()=>{},
    next:()=>{}
  };
}
