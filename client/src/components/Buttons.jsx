const Buttons = ({ label, onClick, styleType, icon }) => {
    const baseStyle =
      "w-full px-4 py-2 font-semibold text-white rounded-lg focus:outline-none transition ease-in duration-500 flex items-center justify-center";
    const baseStyle2 =
      "w-full px-4 py-2 font-semibold text-black rounded-lg focus:outline-none transition ease-in duration-500 flex items-center justify-center";

    const baseStyle3 = "w-[25%] h-10 rounded-lg"
  
    const styles = {
      primary: `${baseStyle3} bg-[#EB9721] hover:bg-[#EBA732] hover:text-black ml-[14vh]`,
      primary1: `${baseStyle} bg-[#3bc907ea] hover:bg-transparent border border-green-600 hover:text-black`,
      primary4: `${baseStyle} bg-[#059212] hover:bg-transparent border border-green-600 hover:text-black`,
      primary2: `${baseStyle2} text-black border border-green-600 hover:text-green-800`,
      primary3: `${baseStyle2} text-black border border-red-600 hover:text-red-500`,
    };
  
    return (
      <button className={`${styles[styleType]} text-center`} onClick={onClick}>
        {icon && <span  className="mr-1">{icon}</span>}
  
        {label}
      </button>
    );
  };
  
  export default Buttons;