"use client";
import React, { useState, useEffect } from "react";

const SurgicalProcedureForm: React.FC = () => {
  const [formData, setFormData] = useState({
    diagnosa: "",
    kemajuanTindakan: "",
    perjalananOperasi: "",
    alergi: false,
    implant: false,
    penyakitKronik: false,
    xray: false,
    ctscan: false,
    mri: false,
    jenisInsisi: "",
    jenisDressing: "",
    rencanaPerawatan: "",
    halKhusus: "",
    area: "",
    ruangPemulihan: "",
    icu: false,
    hcu: false,
    lainnya: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

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
    <form className="max-w-4xl mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Surgical Procedure</h2>
      <div className="mb-4 flex items-center gap-11">
        <label className="block text-gray-700">Diagnosa </label>
        <div className="flex items-center gap-11">
          <p>:</p>
        </div>
        <input
          className="w-96 px-3 py-2 border-2 rounded-full "
          name="diagnosa"
          value={formData.diagnosa}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex ">
        <label className="block text-gray-700">
          Kemajuan Tindakan Operasi:
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded"
          name="kemajuanTindakan"
          value={formData.kemajuanTindakan}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Perjalanan Operasi:</label>
        <input
          className="w-full px-3 py-2 border rounded"
          name="perjalananOperasi"
          value={formData.perjalananOperasi}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          name="alergi"
          checked={formData.alergi}
          onChange={handleChange}
        />
        <label className="text-gray-700">Alergi</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          name="implant"
          checked={formData.implant}
          onChange={handleChange}
        />
        <label className="text-gray-700">Implant</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          name="penyakitKronik"
          checked={formData.penyakitKronik}
          onChange={handleChange}
        />
        <label className="text-gray-700">Penyakit Kronik</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          name="xray"
          checked={formData.xray}
          onChange={handleChange}
        />
        <label className="text-gray-700">X-Ray</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          name="ctscan"
          checked={formData.ctscan}
          onChange={handleChange}
        />
        <label className="text-gray-700">CT-Scan</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          name="mri"
          checked={formData.mri}
          onChange={handleChange}
        />
        <label className="text-gray-700">MRI</label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Jenis Insisi:</label>
        <input
          className="w-full px-3 py-2 border rounded"
          name="jenisInsisi"
          value={formData.jenisInsisi}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Jenis Dressing:</label>
        <input
          className="w-full px-3 py-2 border rounded"
          name="jenisDressing"
          value={formData.jenisDressing}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rencana Perawatan:</label>
        <input
          className="w-full px-3 py-2 border rounded"
          name="rencanaPerawatan"
          value={formData.rencanaPerawatan}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Hal Khusus:</label>
        <input
          className="w-full px-3 py-2 border rounded"
          name="halKhusus"
          value={formData.halKhusus}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Area:</label>
        <input
          className="w-full px-3 py-2 border rounded"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ruang Pemulihan:</label>
        <input
          className="w-full px-3 py-2 border rounded"
          name="ruangPemulihan"
          value={formData.ruangPemulihan}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          name="icu"
          checked={formData.icu}
          onChange={handleChange}
        />
        <label className="text-gray-700">ICU</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          name="hcu"
          checked={formData.hcu}
          onChange={handleChange}
        />
        <label className="text-gray-700">HCU</label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Lainnya:</label>
        <input
          className="w-full px-3 py-2 border rounded"
          name="lainnya"
          value={formData.lainnya}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SurgicalProcedureForm;
