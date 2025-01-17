import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/app/st_carolus.png";
import FormField from "./formfield";


const Header = () => {
  const [dataNama,setDataNama] = useState({
    namaPasien : "",
    noRekamMedis : "",
  })
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setDataNama(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(dataNama));
  }, [dataNama]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setDataNama((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setDataNama((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  return (
    <div>
      <header className="flex justify-start container items-center p-5 max-w-fit mx-auto  gap-1 w-3/1">
        <div className="w-1/5 md:2/5 sm:sr-only">
          <Image src={Logo} alt="logo" width={500} height={300} />
        </div>
        <div className="flex items-center md:text-xs text-pretty flex-col font-semibold xs:underline sm:font-normal uppercase text-md w-4/5">
          <div className="text-md w-full text-center md:p-2 sm:text-md lg:text-xl sm:text-[10px]">RUMAH SAKIT ST SINT CAROLUS JAKARTA PUSAT</div>
          <div className="text-sm w-full text-center md:text-[10px] md:-mt-2 sm:mt-1 sm:bg-red-200 lg:text-lg sm:leading-normal sm:text-[8px] ">PANDUAN SERAH TERIMA INTRA OPERASI DI KAMAR OPERASI</div>
        </div>
        <div className="flex flex-col shadow-md bg-slate-200 rounded-md p-1 lg:text-xl md:p-0 md:w-2/4 md:text-xs items-start sm:leading-tight md:text-[9px] text-pretty lg:text-nowrap lg:gap-4 lg:p-2">
          <FormField
            label="Nama Pasien"
            name="namaPasien"
            value={dataNama.namaPasien}
            onChange={handleChange}
            type="text"
            className="w-full bg-transparent border-b-slate-400 border-b-2 rounded-none hover:ring-0 lg:w-1/2" 
          />
          <div className="-mt-4">
          <FormField
            label="No RM"
            name="noRekamMedis"
            value={dataNama.noRekamMedis}
            onChange={handleChange}
            type="text"
            className="w-full bg-transparent border-b-slate-400 border-b-2 rounded-none hover:ring-0 lg:w-1/2"
          />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
