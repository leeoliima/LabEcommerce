import styled from "styled-components"


export const CardContainer = styled.div`
   color: black;
   font-size: 10px;
   text-align: center;
   margin: 20px;
   padding: 10px;
   border-radius: 10px;
   width: 250px;
   flex-wrap:wrap;
   border: 3px solid whitesmoke;
   box-shadow: 5px 5px 5px lightgray;
`
export const CardName = styled.h2`
  width: 250px;
`
export const CardPrice = styled.h2`
   width: 250px;  
`

export const CardImage = styled.div`
display: flex;
width: 50px;
   .img{width: 50px;} 
`
export const ButtonCart = styled.button`
   font-size: 15px;
   text-align: center;
   border: 0;
   border-radius: 15px;
   padding: 5px 25px;
   color: white;
   background: linear-gradient(90deg, #002e61, #b527cf);
   cursor: pointer;
   overflow: hidden;
:hover{
   background: linear-gradient(90deg, #b527cf, #002e61);
   transition: 0.4s;
}
`