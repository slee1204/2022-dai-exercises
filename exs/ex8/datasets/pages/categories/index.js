//import {useRouter}
import {useRouter} from 'next/router';

import {header, cat1, cat2, cat3, cat1Imgs, cat2Imgs, cat3Imgs} from '../../data/cate_content';
import Display from '../../comps/Display';


export default function Categories(){
  const r = useRouter();

  const {page, type} = r.query;

  if(page === "3"){
    return <div>

      <h1>YOU ARE ON PAGE 3</h1>
      <button onClick={
      ()=>r.replace({
      pathname:"/categories",
      query:{
        //page+1 is string, not a number
        //increase this by 1 every click
        page: 1
      }
    })
    }>RESTART</button>
    </div>
  }


  
  return <div>  

      {

      page === undefined ? <h1>Select Try Router</h1> : <h1>You Are On {page}</h1>

      }

    {/* <h1>Categories #{page} - {type}</h1> */}

    <button onClick={
      ()=>console.log(r)
    }>Console log the router</button>

    <button onClick={
      ()=>r.replace({
      pathname:"/categories",
      query:{
        //page+1 is string, not a number
        //if page is undefined then page:1, else page:Number(page)+1
        page: page === undefined ? 1 : Number(page)+1,
        type: "sports"
      }
    })
    }>Try Routing</button>

    <hr />
    <div>
    <h3>{header} - {type}</h3>
    </div>
      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat1.route
          }
      })
    }>
        {cat1.title}
      </div>

      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat2.route
          }
        })
      }>
        {cat2.title}
      </div>

      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat3.route
          }
        })
      }>
        {cat3.title}
      </div>

      {
          type === "fo" && 
            <div>
            Show the food images
            
                <Display arr={cat1Imgs} />
                
            
            </div>
      }
      {
          type === "an" && 
            <div>
            Show the animal images
            {
                // cat2Imgs.map((o,i)=><img src={o} height={100}/>)
            }
            
                <Display arr={cat2Imgs} />
                
            
            </div>
      }
      {
          type === "ch" && 
            <div>
            Show the cheese images
            {
                // cat3Imgs.map((o,i)=><img src={o} height={100}/>)
            }
            
                <Display arr={cat3Imgs} />
                
            
            </div>
      }







  </div>
}



/*
Condition shortcuts

1. ? :
2. &&
3. ||

if the boolean condition is true, use value1, else use value 2
value can be both a data type (like integer, string, array etc) and a UI Element(<div>)
1. boolean condition ? value1 : value2

if the boolena condition is true, then use value
2. boolean condition && value

if value1 can be use, then use it. Otherwise use value2
3. value1 || value2

*/