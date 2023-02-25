
import React, { useEffect, useState } from "react";
import BotDetail from "./BotDetail";
import BotMessages from "./BotMessages";
import BotIcon from "@/public/images/icons/botIcons/BotIcon";
import CloseIcon from "@/public/images/icons/CloseIcon";

const Bot = ({ showBot, setShowBot }) => {
  

  const [msgArray, setMsgArray] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [msgRes,setMsgRes]=useState("")
  const [msgPrompt,setMsgPrompt]=useState("")
  useEffect(()=>{
    console.log(msgArray)
  },[msgArray])

   useEffect(()=>{
    if(msgRes!="")
    {
      let newArray=[...msgArray]
      let index=newArray.findIndex((m)=>m.prompt.text==msgPrompt)
      newArray[index].res=msgRes
      newArray[index].isLoading=isLoading
      setMsgArray([...newArray])
    }

   },[msgRes])
   let handleSpeech=()=>{
   console.log(msgArray,"tt")
    let newArray=[...msgArray]
    for(let msgs of newArray)
    {
      if(msgs.mode=="audio")
      msgs.mode="text"
    }
    setMsgArray([...newArray])
    setShowBot(false)

   }
   useEffect(()=>{
    console.log(msgArray,"msg")
   },[msgArray])
  return (
    <>
      {showBot ? (
        <>
          <div
            className="bg-white shadow border border-tertiary-20 fixed right-1 bottom-0 z-10 
            shrink-0 w-[320px] rounded-t-md  h-[60%] "
          >
            <div className="flex justify-between items-center px-4 py-3">
              <div className="flex items-center space-x-4">
                <div className="p-1.5 bg-tertiary-135 rounded-full">
                  <BotIcon height="26" width="26" />
                </div>
                <p className="font-display font-medium text-sm text-blackShade-50">
                  Bot
                </p>
              </div>
              <button
                onClick={handleSpeech}
              >
                <CloseIcon height="19" width="19" />
              </button>
            </div>
            <hr className="border-b-opacity-80 shadow border-tertiary-20  " />

            <div className="absolute max-h-[65%] overflow-y-auto">
              {msgArray.length > 0 && msgArray.map((msg) => <ul className=" py-3 my-2 "><BotMessages {...msg} /></ul>)}
            </div>
            <div className=" absolute bottom-0 w-full "><BotDetail msgArray={msgArray} set={(msg,isLoading) => {
              setMsgArray((prev)=>[...prev,msg])
              setIsLoading(isLoading)
      }} 
      update={(isLoading,prompt,res)=>{
        setIsLoading(isLoading)
        setMsgPrompt(prompt)
        setMsgRes(res)
      }}
      /></div>
          </div>
        

        </>
      ) : null}
    </>
  );
};

export default Bot;