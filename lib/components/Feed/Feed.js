import React from "react";
import Nav from "./Nav";
import { supabase } from "../../utils/client";
import { Formik, Form, Field } from "formik";
import { placeholderPrompts } from "../../utils/data";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import TimeAgo from "react-timeago";
import useAddChat from "../../hooks/useAddChat";
import useChat from "../../hooks/useChat";
import { useState } from "react";
import ChatBubble from "./Chat/ChatBubble";

function Feed({
  threads,
  isFetchingThreads,
  currentThread,
  setCurrentThread,
  fetchThreads,
  loggedIn,
  profileIcon,
  currentUser,
  profile,
  profilePhoto,
  handleMenuToggle,
  menuToggle,
  setMenuToggle
}) {
  const [addChat, isAddingChat] = useAddChat("");
  const [chats, isFetchingChats, fetchChats] = useChat("");

  return (
    <div className="w-full sm:w-[44rem] flex flex-col">
      <Nav currentThread={currentThread} handleMenuToggle={handleMenuToggle} menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

      {/* Displayed Messages */}
      <section className="flex flex-col-reverse flex-1 overflow-scroll scrollbar-none">
        <div className="flex-col-reverse justify-end mr-6">
          {chats.map((chat) => (
            <ChatBubble
              key={chat.id}
              name={chat.id}
              message={chat.message}
              discussion={chat.discussion}
              currentThread={currentThread}
              loggedIn={loggedIn}
              timestamp={chat.created_at}
              profileIcon={profileIcon}
              currentUser={currentUser}
              profilePhoto={profilePhoto}
              profile={profile}
            />
          ))}
        </div>
      </section>

      {/* Message Input Form */}
      <section className="h-18 px-4 pt-4 mx-2">
        <Formik
          initialValues={{ discussion: "", message: "" }}
          onSubmit={async (values, { resetForm }) => {
            addChat(values);
            resetForm();
            fetchChats();
          }}
        >
          {({ values, dirty, setFieldValue, resetForm }) => (
            <div className="flex w-full border border-gray-400 rounded-3xl h-full p-1 pl-4 space-x-2">
              <Form className="flex w-full justify-between">
                <Field
                  type="text"
                  name="message"
                  placeholder={
                    placeholderPrompts[
                      Math.floor(Math.random() * placeholderPrompts.length)
                    ]
                  }
                  className="w-full text-xl focus:outline-none"
                />
                <button
                  type="submit"
                  onClick={() => setFieldValue("discussion", currentThread)}
                >
                  <ArrowUpCircleIcon className="h-10 w-10 text-green-500 " />
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </section>
    </div>
  );
}

export default Feed;
