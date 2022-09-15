import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ProfileInfo from "./ProfileInfo";
import Threads from "./Threads";
import { Formik, Form, Field } from "formik";
import useThreads from "../../hooks/useThreads";
import useAddThread from "../../hooks/useAddThread";
import { supabase } from "../../utils/client";
import { ArrowPathIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Menu({
  handleLoggedIn,
  threads,
  isFetchingThreads,
  currentThread,
  setCurrentThread,
  fetchThreads,
  profile,
  profilePhoto,
  menuToggle,
  handleMenuToggle,
  setMenuToggle
}) {
  const [addThread, isAddingThread] = useAddThread();

  return (
    <div
      className={`${
        menuToggle
          ? "hidden lg:w-72 rounded-[2rem] bg-gray-200/75 lg:flex lg:flex-col"
          : "absolute top-0 left-0 right-0 bottom-0 lg:w-72  bg-gray-100 lg:flex lg:flex-col"
      }`}
    >
      <div className="flex">
        <button>
          <XMarkIcon
            onClick={handleMenuToggle}
            className="h-8 w-8 ml-6 lg:hidden lg:disabled"
          />
        </button>
        <ProfileInfo profile={profile} profilePhoto={profilePhoto} />
      </div>

      <div className="flex flex-col flex-1 overflow-scroll">
        <div className="flex items-center">
          <p className="font-bold text-md text-gray-500 pl-8 mt-10 mb-4">
            DISCUSSIONS
          </p>
          {isFetchingThreads && (
            <ArrowPathIcon className="w-5 h-5 mt-6 ml-3 animate-spin" />
          )}
        </div>
        <div className="">
          {threads.map((thread) => (
            <Threads
              key={thread.id}
              name={thread.threadTitle}
              currentThread={currentThread}
              handleClick={() => {
                setCurrentThread(thread.threadTitle)
                setMenuToggle(true)
              }}
              selected={currentThread === thread.threadTitle}
            />
          ))}
        </div>
      </div>

      <Formik
        initialValues={{ threadTitle: "" }}
        onSubmit={async (values, { resetForm }) => {
          addThread(values);
          resetForm();
          fetchThreads();
        }}
      >
        {({ values, dirty, setFieldValue, resetForm }) => (
          <Form className="flex flex-col justify-center items-center mb-10">
            <Field
              type="text"
              name="threadTitle"
              placeholder="Start new discussion..."
              className="mb-4 bg-transparent w-full text-center focus:outline-none text-xl placeholder:font-normal font-bold"
            />
            <button
              type="submit"
              className="text-white font-bold bg-black px-4 py-2 rounded-lg"
            >
              Create
            </button>
          </Form>
        )}
      </Formik>

      <Footer handleLoggedIn={handleLoggedIn} handleMenuToggle={handleMenuToggle} setMenuToggle={setMenuToggle} />
    </div>
  );
}

export default Menu;
