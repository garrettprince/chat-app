import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ProfileInfo from "./ProfileInfo";
import Threads from "./Threads";
import { discussions } from "../../utils/data";
import { supabase } from "../../utils/client";

function Menu({ handleLoggedIn }) {
  const [thread, setThread] = useState("");
  const [currentThread, setCurrentThread] = useState("general");

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const handleCategoryChange = () => {
    setCurrentThread(currentThread);
    console.log("clicked");
  };

  const fetchDiscussions = async () => {
    const { data } = await supabase.from("discussions").select("title");
    setThread(data);
  };

  console.log(currentThread);

  return (
    <div className="hidden lg:w-72 rounded-[2rem] bg-gray-200/75 lg:flex lg:flex-col">
      <ProfileInfo />

      <div className="flex-1">
        <p className="font-bold text-md text-gray-500 pl-8 mt-16 mb-4">
          DISCUSSIONS
        </p>
        {discussions.map((discussion) => (
          <Threads
            key={discussion.title}
            name={discussion.title}
            currentThread={currentThread}
            // selected={values.discussion === discussion.title}
            handleClick={handleCategoryChange}
          />
        ))}
      </div>

      {/* {categoryData.map((category) => (
        <Threads
          key={discussion.title}
          name={category.title}
          categoryColor={category.color}
          selected={values.category === category.title}
          handleClick={() => setFieldValue("category", category.title)}
        />
      ))} */}

      <form
        action=""
        className="flex flex-col justify-center items-center mb-10"
      >
        <input
          type="text"
          placeholder="Start new discussion..."
          className=" mb-4 bg-transparent w-full text-center focus:outline-none text-xl placeholder:font-normal font-bold"
        />
        <button className="text-white font-bold bg-black px-4 py-2 rounded-lg">
          Create
        </button>
      </form>
      <Footer handleLoggedIn={handleLoggedIn} />
    </div>
  );
}

export default Menu;
