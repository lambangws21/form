// src/app/components/SurgicalProcedureForm.tsx
"use client";
import React, { useState } from "react";
import useFormState from "../hooks/useformstate";
import Header from "./header";
import Footer from "./footer";
import FormSection from "./formsection";

const SurgicalProcedureForm: React.FC = () => {
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
    <form className="max-w-5xl sm:w-full mx-auto p-6 bg-white rounded shadow-md">
      <Header />
      <div className="text-2xl font-bold mb-4 sm:text-xs uppercase flex items-center justify-start md:text-xl">
        <div className="text-7xl mr-3 font-bold sm:font-medium sm:sr-only">
          S
        </div>
        Surgical Procedure
      </div>
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
      <Footer />
    </form>
  );
};

export default SurgicalProcedureForm;
