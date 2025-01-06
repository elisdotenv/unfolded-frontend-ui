const PostCard = () => {
  const Title = `This is some random title from the world!`;
  const Brief = `Some random brief summary goes on here explaining some random junky shit and shut!`;
  return (
    <>
      <div className={`p-[2rem] border-[1.5px] border-purple-800 rounded-lg`}>
        <h1>Title is {Title}</h1>
        <p>Brief is {Brief}</p>
      </div>
    </>
  );
};

export default PostCard;
