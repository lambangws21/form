import Image from "next/image";
import Logo from "@/app/st_carolus.png";


const Header = () => {
  return (
    <div>
      <header className="flex justify-start container items-center p-5 max-w-7xl mx-auto w-screen">
        <div>
          <Image src={Logo} alt="logo" width={200} height={200} />
        </div>
        <div className="flex items-center flex-col space-x-5 font-bold uppercase text-lg">
          <h1>RUMAH SAKIT ST SINT CAROLUS JAKARTA PUSAT</h1>
          <h1>PANDUAN SERAH TERIMA INTRA OPERASI DI KAMAR OPERASI</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
