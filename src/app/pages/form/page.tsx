"use client";

import React from "react";
import useFormState from "@/app/hooks/useformstate";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FormSection from "@/app/components/iu/formsection";

const Form: React.FC = () => {
  const { formData, setFormData } = useFormState();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className="container mx-auto px-4">
      <FormSection
        title="Surgical Procedure"
        fields={[
          {
            label: "Diagnosa",
            name: "diagnosa",
            value: formData.diagnosa,
            onChange: handleChange,
          },
          {
            label: "Kemajuan Tindakan Operasi",
            name: "kemajuanTindakan",
            type: "textarea",
            value: formData.kemajuanTindakan,
            onChange: handleChange,
          },
          {
            label: "Baru mulai",
            name: "baruMulai",
            type: "checkbox",
            checked: formData.baruMulai,
            onChange: handleChange,
          },
          {
            label: "Pertengahan",
            name: "pertengahan",
            type: "checkbox",
            checked: formData.pertengahan,
            onChange: handleChange,
          },
          {
            label: "Hampir selesai",
            name: "hampirSelesai",
            type: "checkbox",
            checked: formData.hampirSelesai,
            onChange: handleChange,
          },
          {
            label: "Lainnya",
            name: "tindakanLainnya",
            value: formData.tindakanLainnya,
            onChange: handleChange,
          },
        ]}
      />
      <FormSection
        title="Medical History"
        fields={[
          {
            label: "Alergi",
            name: "alergi",
            type: "checkbox",
            checked: formData.alergi,
            onChange: handleChange,
          },
          {
            label: "Implant",
            name: "implant",
            type: "checkbox",
            checked: formData.implant,
            onChange: handleChange,
          },
          {
            label: "Penyakit Kronik",
            name: "penyakitKronik",
            type: "checkbox",
            checked: formData.penyakitKronik,
            onChange: handleChange,
          },
          {
            label: "Lainnya",
            name: "penyakitLainnya",
            value: formData.penyakitLainnya,
            onChange: handleChange,
          },
        ]}
      />
      <FormSection
        title="Incision Details"
        fields={[
          {
            label: "Jenis Insisi",
            name: "jenisInsisi",
            value: formData.jenisInsisi,
            onChange: handleChange,
          },
          {
            label: "Area",
            name: "areaInsisi",
            value: formData.areaInsisi,
            onChange: handleChange,
          },
        ]}
      />
      <FormSection
        title="Post-Procedure"
     
        fields={[
          {
            label: "Kasa",
            name: "kasa",
            type: "checkbox",
            checked: formData.kasa,
            onChange: handleChange,
            
          },
          {
            label: "Khusus",
            name: "khusus",
            type: "checkbox",
            checked: formData.khusus,
            onChange: handleChange,
          },
          {
            label: "Ada",
            name: "ada",
            value: formData.ada,
            onChange: handleChange,
          },
          {
            label: "Tidak Ada",
            name: "tidakAdaHalKhusus",
            type: "checkbox",
            checked: formData.tidakAdaHalKhusus,
            onChange: handleChange,
          },
          {
            label: "Ruang Pemulihan",
            name: "ruangPemulihan",
            type: "checkbox",
            checked: formData.ruangPemulihan,
            onChange: handleChange,
          },
          {
            label: "ICU",
            name: "icu",
            type: "checkbox",
            checked: formData.icu,
            onChange: handleChange,
          },
          {
            label: "HCU",
            name: "hcu",
            type: "checkbox",
            checked: formData.hcu,
            onChange: handleChange,
          },
          {
            label: "Lainnya",
            name: "lainnya",
            value: formData.lainnya,
            onChange: handleChange,
          },
        ]}
       
      />
    </div>
  );
};

export default Form;