const Buttons = ({ label, onClick, styleType, icon }) => {
    const baseStyle1 =
      "w-[25%] px-4 py-2 font-semibold text-white rounded-lg flex items-center justify-center";

    const baseStyle3 = "w-[25%] h-10 rounded-lg"
  
    const styles = {
      primary: `${baseStyle3} bg-[#EB9721] hover:bg-[#EBA732] ml-[14vh]`,
      primary1: `${baseStyle1} bg-[#EB9721] hover:bg-[#EBA732] mx-auto`,
    };
  
    return (
      <button className={`${styles[styleType]} text-center`} onClick={onClick}>
        {icon && <span  className="mr-1">{icon}</span>}
  
        {label}
      </button>
    );
  };
  
  export default Buttons;