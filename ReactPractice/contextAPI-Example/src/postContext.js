import { useState, useContext, createContext, useMemo } from "react";

const postContext = createContext();

export const usePostsValue = () => {
  const value = useContext(postContext);
  return value;
};

export const PostContextProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const resetPosts = () => setSavedPosts([]);

  const savePost = (post) => {
    const isSaved = savedPosts.find((p) => p.id === post.id);
    if (isSaved) {
      return alert("Post is already saved.");
    }
    setSavedPosts((prev) => [post, ...prev]);
  };

  // create a function to unsave post here
  const unsavePost = (post)=>{
    const updatedPosts = savedPosts.filter((p) => p.id!== post.id);
    setSavedPosts(updatedPosts);
  }

  const contextValues = useMemo(()=>({
    savedPosts,
    setSavedPosts,
    resetPosts,
    savePost,
    unsavePost,
  }),[savedPosts])

  return (
    <postContext.Provider
      value={contextValues}
    >
      {children}
    </postContext.Provider>
  );
};
