import BotPause from "@/public/images/icons/botIcons/BotPause";
import BotPlay from "@/public/images/icons/botIcons/BotPlay";
import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from 'react-speech-kit'

const BotMessages = (props) => {

  const { speak } = useSpeechSynthesis()
  const [isSpeaking, setisSpeaking] = useState(false)
  const msg = new SpeechSynthesisUtterance()
  msg.text = props.res.text


  useEffect(() => {

    if (props.mode == "audio" && props.res.text != "") {

      setisSpeaking(true)

    }
  }, [props.res.text])

  useEffect(() => {
    window.speechSynthesis.cancel()
    if (isSpeaking) {
      window.speechSynthesis.speak(msg)

    }
    else {
      window.speechSynthesis.pause()
    }
  }, [isSpeaking])
  return (
    <div className="flex flex-col space-y-3 px-3">
      {/* User UI */}

      <div className="flex w-full">
        <div className="flex flex-col flex-1">
          <div className="rounded-l-md rounded-b-md text-left text-sm text-black break-all py-1 px-2 bg-tertiaryBlue-750 mr-3">
            {props.prompt.text}
          </div>
          <p className="flex items-end justify-end text-[10px] text-black mr-3 mt-0.5">
            {props.prompt.time}
          </p>
        </div>

        <div className="">
          <img
            className={`flex-1 flex flex-col items-start  justify-start rounded-full h-9 w-9`}
            src={"/images/Profilephoto.svg"}
            alt=""
          />
        </div>
      </div>

      {/* Bot UI */}
      <div className="flex w-full ">
        <div className="mr-3">
          <img
            className={`flex-1 rounded-full h-9 w-9`}
            src={"/images/icons/botIcons/BotProfileImg.svg"}
            alt=""
          />
        </div>
        {props.isLoading && <div className="rounded-l-md rounded-b-md text-left text-sm text-blackShade-050 break-all py-1 px-2  flex items-center bg-tertiaryBlue-750 mr-3">
          <img src="/botLoader.svg" width={20} height={20} ></img>
        </div>}
        {!props.isLoading && <div className="flex flex-col flex-1">
          <div className={ "rounded-l-md rounded-b-md text-left text-black text-sm text-blackShade-050 break-all  px-2 bg-tertiaryblue-60 mr-3 whitespace-pre-line" }>
            {props.res.text}
          </div>
          <p className="flex items-end justify-end text-[10px] text-black mr-3 mt-0.5">
            {props.res.time}
          </p>
        </div>}
        {!isSpeaking && <button onClick={() => setisSpeaking(true)}>
          <BotPlay />
        </button>}
        {isSpeaking && <button onClick={() => setisSpeaking(false)}>
          <BotPause />
        </button>}
      </div>
    </div>
  );
};

export default BotMessages;