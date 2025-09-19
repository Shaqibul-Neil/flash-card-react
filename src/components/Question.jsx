const Question = ({ question, isOpenID, handleClick }) => {
  const { query, answer, id } = question;
  //const [isOpenID, setIsOpenID] = useState(null);

  //প্রতি Question কম্পোনেন্টের ভেতরে তুই আলাদা useState লিখসিস। মানে প্রতিটা Question তার নিজের আলাদা state ধরে রাখছে। তাই যখন তুই একটা ক্লিক করিস, সেটা শুধু ওই কম্পোনেন্টের ভেতরে কাজ করে, অন্য Question গুলা আসলে কিছুই জানে না। সমাধান হচ্ছে: state টা parent (Questions) কম্পোনেন্টে রাখবি। কারণ parent সব Question কে control করে, তাই ক্লিক করলে parent জানে কোনটা open আছে, আর props দিয়ে সেটা নিচে পাঠায়।
  //   const handleClick = (id) => {
  //     setIsOpenID(isOpenID === id ? null : id);
  //   };

  return (
    <div
      className={isOpenID === id ? "selection" : "question"}
      onClick={() => handleClick(id)}
    >
      <p>{isOpenID === id ? answer : query}</p>
    </div>
  );
};

export default Question;

/*Case 1: State child এ থাকলে

প্রতিটা child নিজের state রাখে।

Parent কিছু জানে না।

সমস্যা: একসাথে সব child এর state manage করা যায় না।

Case 2: State parent এ উঠালে

Parent এর কাছে একটা centralized state থাকে।

Child শুধু parent এর props নেয়।

Child এর UI control parent করে।

সুবিধা: Parent easily জানে কোন child খোলা/বন্ধ। চাইলে সব control করা যায়।  React বলে: "UI = f(state)"
মানে UI পুরোপুরি state এর উপর নির্ভরশীল হবে। আর state যতটা সম্ভব কম জায়গায় রাখো, যেখান থেকে দরকার child গুলোকে দিতে পারবে।

তোর এই প্রশ্ন–উত্তর উদাহরণে, state parent এ রাখলে সবার সাথে share করা সহজ হয়। তাই একটাতে ক্লিক করলে parent জানে কোনটা খোলা আর সেটা child গুলোকে জানায়।*/
