import React from "react";

export const Post = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState("2");
  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );

    const data = await response.json();

    setPost(data);
  };

  return (
    <div> 

    <input type="text" value={id}  

    onChange={(e)=>setId(e.target.value)} /> 

    <p>{JSON.stringify(post)}</p> 

 </div> 
  );
};
