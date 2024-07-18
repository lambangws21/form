import FormSection from "../components/formsection"
import  us

const procedureSurgical = () => {
  return (
    <div>
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
    </div>
  )
}

export default procedureSurgical