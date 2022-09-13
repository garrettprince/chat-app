import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { placeholderPrompts } from "../../utils/data";
import { supabase } from "../../utils/client";
import { useState } from "react";
import { Formik, Form, Field } from "formik";

function MessageInput() {
  // const [messages, setMessages] = useState("");

  // const submitMessage = async (message) => {
  //   setMessages([...messages, message]);
  //   await supabase.from("chats").insert(message);
  // };

  return (
    <div className="h-18 px-4 pt-4 mx-2">
      
      <Formik
        initialValues={{  }}
      >
        
      </Formik>
      
      <div className="flex w-full border border-gray-400 rounded-3xl h-full p-1 pl-4 space-x-2">
        <form action="submit" className="flex w-full justify-between">
          <input
            type="text"
            className="w-full text-xl focus:outline-none"
            placeholder={
              placeholderPrompts[
                Math.floor(Math.random() * placeholderPrompts.length)
              ]
            }
          />
          <button>
            <ArrowUpCircleIcon className="h-10 w-10 text-green-500 " />
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageInput;
