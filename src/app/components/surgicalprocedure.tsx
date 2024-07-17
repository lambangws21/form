// src/app/components/SurgicalProcedureForm.tsx
"use client";
import React, { useState, useEffect } from "react";
import useFormState from "../hooks/useformstate";
import FormField from "./formfield";
import CheckboxField from "./checkboxfield";
import Header from "./header";

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
    <form className="max-w-5xl mx-auto p-4 bg-white rounded shadow-md">
      <Header/>
      <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start ">
        <div className="text-5xl mr-3 font-bold">S</div> Surgical Procedure
      </div>
      <div className="relative grid gap-4">
        <div className="flex justify-center flex-col border-b-8" >
          <FormField
            label="Diagnosa"
            name="diagnosa"
            value={formData.diagnosa}
            onChange={handleChange}
          />
          <FormField
            label="Kemajuan Tindakan Operasi"
            name="kemajuanTindakan"
            value={formData.kemajuanTindakan}
            onChange={handleChange}
            type="textarea"
          />
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Perjalanan Operasi :</label>
            <CheckboxField
              label="Baru mulai"
              name="baruMulai"
              checked={formData.baruMulai}
              onChange={handleChange}
            />
            <CheckboxField
              label="Pertengahan"
              name="pertengahan"
              checked={formData.pertengahan}
              onChange={handleChange}
            />
            <CheckboxField
              label="Hampir selesai"
              name="hampirSelesai"
              checked={formData.hampirSelesai}
              onChange={handleChange}
            />
            <FormField
              label="Lainnya"
              name="lainnya"
              value={formData.lainnya}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start items-center  gap-3 mb-2">
            <label className="block text-gray-700 ">Yang perlu diperhatikan pada pasien :</label>
            <CheckboxField
              label="Alergi"
              name="alergi"
              checked={formData.alergi}
              onChange={handleChange}
            />
            <CheckboxField
              label="Implant"
              name="implant"
              checked={formData.implant}
              onChange={handleChange}
            />
            <CheckboxField
              label="Penyakit Kronik"
              name="penyakitKronik"
              checked={formData.penyakitKronik}
              onChange={handleChange}
            />
            <FormField
              label="Lainnya"
              name="lainnya"
              value={formData.lainnya}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start items-center gap-2 mb-2">
            <FormField
              label="Jenis Insisi"
              name="jenisInsisi"
              value={formData.jenisInsisi}
              onChange={handleChange}
            />
            <FormField
              label="Area"
              name="areaInsisi"
              value={formData.areaInsisi}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start  gap-3 mb-2">
            <label className="block text-gray-700 ">
              Jenis Dressing yanng dibutuhkan :
            </label>
            <CheckboxField
              label="Kasa"
              name="kasa"
              checked={formData.kasa}
              onChange={handleChange}
            />
            <CheckboxField
              label="Khusus"
              name="khusus"
              checked={formData.khusus}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start gap-2 items-center mb-2">
            <label className="block text-gray-700 ">
              Hal Khusus yang diperhatikan setelah operasi :
            </label>
            <div className="flex gap-x-6 items-center mt-2">
              <FormField
                label="Ada"
                name="ada"
                value={formData.ada}
                onChange={handleChange}
              />
              <CheckboxField
                label="Tidak Ada"
                name="tidakAdaHalKhusus"
                checked={formData.tidakAdaHalKhusus}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-start  gap-2 items-center mb-3">
            <label className="block text-gray-700 ">
              Rencana perawatan pasca operasi :
            </label>
            <CheckboxField
              label="Ruang Pemulihan"
              name="ruangPemulihan"
              checked={formData.ruangPemulihan}
              onChange={handleChange}
            />
            <CheckboxField
              label="ICU"
              name="icu"
              checked={formData.icu}
              onChange={handleChange}
            />
            <CheckboxField
              label="HCU"
              name="hcu"
              checked={formData.hcu}
              onChange={handleChange}
            />
            <FormField
              label="Lainnya"
              name="lainnya"
              value={formData.lainnya}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Wet */}
      <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start ">
        <div className="text-5xl mr-3 font-bold">W</div> wet
      </div>
      <div className="relative grid gap-4">
        <div className="flex justify-center flex-col border-b-8 ">
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">
              Obatan-obatan di meja operasi :
            </label>
            <FormField
              label="Nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
            />
            <FormField
              label="Jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start items-center  gap-3 mb-2">
            <label className="block text-gray-700 ">Cairan Irigasi :</label>
            <FormField
              label="Nama Cairan"
              name="cairan"
              value={formData.cairan}
              onChange={handleChange}
            />
            <CheckboxField
              label="Hangat"
              name="hangat"
              checked={formData.hangat}
              onChange={handleChange}
            />
            <CheckboxField
              label="Dingin"
              name="dingin"
              checked={formData.dingin}
              onChange={handleChange}
            />
            <CheckboxField
              label="Suhu Ruagan"
              name="suhuRuangan"
              checked={formData.suhuRuangan}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start gap-2 items-center mb-2">
            <label className="block text-gray-700 ">
              Cairan di Meja instrument :
            </label>
            <div className="flex gap-x-6 items-center mt-2 ml-6">
              <FormField
                label="Ada"
                name="ada"
                value={formData.ada}
                onChange={handleChange}
              />
              <CheckboxField
                label="Tidak Ada"
                name="tidakAdaInstrumentMeja"
                checked={formData.tidakAdaInstrumenMeja}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-start gap-2 items-center mb-2">
            <label className="block text-gray-700 ">
              Jumlah perdarahan sampai saat ini:
            </label>
            <div className="flex gap-x-6 items-center mt-2 ml-6">
              <FormField
                label="Darah"
                name="darah"
                value={formData.darah}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-start gap-2 items-center mb-2">
            <label className="block text-gray-700 ">Produksi Urine:</label>
            <div className="flex gap-x-6 items-center mt-2 ml-6">
              <FormField
                label="Jumlah"
                name="urine"
                value={formData.urine}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">
              Persiapan darah yang tersedia :
            </label>
            <FormField
              label="Jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
            />
            <FormField
              label="Jenis"
              name="jenis"
              value={formData.jenisDarah}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Drain pasien :</label>
            <FormField
              label="Letak Drain"
              name="letakDrain"
              value={formData.letakDrain}
              onChange={handleChange}
            />
            <FormField
              label="Jenis Drain"
              name="jenis"
              value={formData.jenisDrain}
              onChange={handleChange}
            />
            <FormField
              label="Ukuran Drain"
              name="ukuranDrain"
              value={formData.ukuranDrain}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Instrumen */}
      <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start ">
        <div className="text-5xl mr-3 font-bold">I</div> Instrumen
      </div>
      <div className="relative grid gap-4">
        <div className="flex justify-center flex-col border-b-8 ">
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">
              Instrumen yang dipakai :
            </label>
            <FormField
              label="Nama Set Instrumen"
              name="namaSetInstrumen"
              value={formData.setInstrumen}
              onChange={handleChange}
            />
            <CheckboxField
              label="Lengkap"
              name="lengkap"
              checked={formData.lengkap}
              onChange={handleChange}
            />
            <CheckboxField
              label="Tidak Lengkap"
              name="tidakLengkap"
              checked={formData.tidakLengkap}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Instrumen Tambahan :</label>
            <FormField
              label="Nama Set Instrumen"
              name="instrumenTambahan"
              value={formData.instrumenTambahan}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">
              Instrumen yang selanjutnya dipakai :
            </label>
            <FormField
              label="Nama Set Instrumen"
              name="instrumenSelanjutnya"
              value={formData.instrumenSelanjutnya}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">
              Instrumen yang akan disterilkan ulang :
            </label>
            <FormField
              label="Nama Set Instrumen"
              name="instrumenSterilkanUlang"
              value={formData.instrumenSterilkanUlang}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Kebutuhan Implant :</label>
            <FormField
              label="Jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
            />
            <FormField
              label="Jenis"
              name="jenis"
              value={formData.jenisDarah}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Tissue */}
      <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start ">
        <div className="text-5xl mr-3 font-bold">T</div> Tissue
      </div>
      <div className="relative grid gap-4">
        <div className="flex justify-center flex-col border-b-8 ">
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Specimen :</label>
            <CheckboxField
              label="Ada Specimen"
              name="adaSpecimen"
              checked={formData.adaSpecimen}
              onChange={handleChange}
            />
            <CheckboxField
              label="Tidak Ada"
              name="tidakAdaSpecimen"
              checked={formData.tidakAdaSpecimen}
              onChange={handleChange}
            />
            <CheckboxField
              label="Sudah diambil"
              name="sudahDiambil"
              checked={formData.sudahDiambil}
              onChange={handleChange}
            />
            <CheckboxField
              label="Belum diambil"
              name="belumDiambil"
              checked={formData.belumDiambil}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Jenis Pemeriksaan :</label>
            <CheckboxField
              label="Patologi"
              name="patologi"
              checked={formData.patologi}
              onChange={handleChange}
            />
            <CheckboxField
              label="VC"
              name="vc"
              checked={formData.vc}
              onChange={handleChange}
            />
            <CheckboxField
              label="Sitologi"
              name="sitologi"
              checked={formData.sitologi}
              onChange={handleChange}
            />
            <CheckboxField
              label="Kultur"
              name="kultur"
              checked={formData.kultur}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Fiksasi Specimen :</label>
            <CheckboxField
              label="Formalin 10%"
              name="formalin"
              checked={formData.formalin}
              onChange={handleChange}
            />
            <CheckboxField
              label="Tidak difikasasi"
              name="tidakDifikasasi"
              checked={formData.tidakDifiksasi}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Label Specimen :</label>
            <CheckboxField
              label="Ada Label"
              name="adaLabel"
              checked={formData.adaLabel}
              onChange={handleChange}
            />
            <CheckboxField
              label="Tidak ada"
              name="tidakAdaLabel"
              checked={formData.tidakAdaLabel}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-3 ">
            <label className="block text-gray-700 ">Penggunaan Graft :</label>
            <CheckboxField
              label="Tidak ada"
              name="tidakAdaGraft"
              checked={formData.tidakAdaGraft}
              onChange={handleChange}
            />
            <FormField
              label="Ada, Letak"
              name="ada"
              value={formData.ada}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Counts */}
      <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start ">
        <div className="text-5xl mr-3 font-bold">C</div> Counts
      </div>
      <div className="relative grid gap-4">
        <div className="flex justify-center flex-col border-b-8 ">
          <div className="mb-2 flex justify-start items-center gap-5 ">
            <label className="block text-gray-700 ">
              Kassa yang digunanakan :
            </label>
            <FormField
              label="Jenis dan Jumlah"
              name="jenisKassa"
              value={formData.jenisKassa}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-5 ">
            <label className="block text-gray-700 ">
              Kassa dalam rongga tubuh :
            </label>
            <FormField
              label="Ada, Jenis dan Jumlah"
              name="KasaDalamRongga"
              value={formData.KasaDalamRongga}
              onChange={handleChange}
            />
            <CheckboxField
              label="Tidak ada"
              name="tidakAdaKasa"
              checked={formData.tidakAdaKasa}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-5 ">
            <label className="block text-gray-700 ">Jarum :</label>
            <FormField
              label="Jumlah"
              name="jumlahJarum"
              value={formData.jumlahJarum}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-5 ">
            <label className="block text-gray-700 ">Pisau :</label>
            <FormField
              label="No Pisau"
              name="noPisau"
              value={formData.noPisau}
              onChange={handleChange}
            />
            <FormField
              label="Jumlah"
              name="jumlahPisau"
              value={formData.jumlahPisau}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-5 ">
            <label className="block text-gray-700 ">Instrument :</label>
            <FormField
              label="Jenis "
              name="jenis"
              value={formData.jenis}
              onChange={handleChange}
            />
            <FormField
              label="Jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Have Any Question */}
      <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start ">
        <div className="text-5xl mr-3 font-bold">H</div> Have You Any Question?
      </div>
      <div className="relative grid gap-4">
        <div className="flex justify-center flex-col border-b-8 ">
          <div className="mb-2 flex justify-start items-center gap-5 ">
            <label className="block text-gray-700 ">
              Hal lain yang ingin di tanyakan :
            </label>
            <FormField
              label="Ada"
              name="ada"
              value={formData.ada}
              onChange={handleChange}
              type="textarea"
            />
            <CheckboxField
              label="Tidak ada"
              name="tidakAdaPertanyaan"
              checked={formData.tidakAdaPertayaan}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-5 ">
            <label className="block text-gray-700 ">
              Dokumen yang harus dilengkapi :
            </label>
            <FormField
              label="Ada"
              name="adaPertanyaan"
              value={formData.adaPertanyaan}
              onChange={handleChange}
            />
            <CheckboxField
              label="Tidak ada"
              name="tidakAdaDokumen"
              checked={formData.tidakAdaDokumen}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-start items-center gap-5 ">
            <label className="block text-gray-700 ">
              Nomor serial Implant :
            </label>
            <FormField
              label="Ada Impan"
              name="nomorSerialImplant"
              value={formData.nomorSerialImplant}
              onChange={handleChange}
            />
              <CheckboxField
              label="Tidak ada"
              name="tidakAdaSerialImplant"
              checked={formData.tidakAdaSerialImplant}
              onChange={handleChange}
            />
            
          </div>
        </div>
      </div>
    </form>
  );
};

export default SurgicalProcedureForm;
