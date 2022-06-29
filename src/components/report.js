import React, { Component } from "react";
import { FaIdCard } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "react-calendar/dist/Calendar.css";
import studentData from "../data/studentData";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

class Report extends Component {
  state = {};
  render() {
    const [value, setValue] = (React.useState < Date) | (null > new Date());
    return (
      <div className="grid grid-cols-12 xl:grid-cols-11 gap-x-8 my-10">
        <div className="card 1 xl:pb-5 col-span-12  xl:col-span-4">
          <div className="card persentase w-full bg-white grid-cols-2 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.3)] px-5 py-5 grid justify-items-stretch">
            <div className="text">
              <p>Belum Absen (Presensi 6:00 - 09:00)</p>
              <p>Waktu Habis</p>
            </div>
            <div className="justify-self-end">
              <IconContext.Provider value={{ style: { fontSize: "50px", color: "silver" } }}>
                <FaIdCard />
              </IconContext.Provider>
            </div>
          </div>
          <div className="card preview grid ">
            <div className="header bg-red-700 px-5 py-5 mt-8">
              <p className="text-white">PERSENTASE KEHADIRAN 99 %</p>
              <p className="text-white">Berikut detail rekap kehadiran anda.</p>
            </div>
            <div className="content bg-white px-5 py-5  ">
              <div className="border-solid border border-gray-300 grid-cols-1 divide-y divide-gray-300 ">
                <div className="row grid grid-cols-2 px-5 py-3">
                  <div className="text">sakit</div>
                  <div className="banner justify-self-end text-xs bg-blue-800 text-white font-bold px-2 py-1 rounded-sm">1 hari</div>
                </div>
                <div className="row grid grid-cols-2 px-5 py-3">
                  <div className="text">izin</div>
                  <div className="banner justify-self-end text-xs bg-yellow-400 text-white font-bold px-2 py-1 rounded-sm">1 hari</div>
                </div>
                <div className="row grid grid-cols-2 px-5 py-3">
                  <div className="text">masuk</div>
                  <div className="banner justify-self-end text-xs bg-blue-500 text-white font-bold px-2 py-1 rounded-sm">1 hari</div>
                </div>
                <div className="row grid grid-cols-2 px-5 py-3">
                  <div className="text">alpha</div>
                  <div className="banner justify-self-end text-xs bg-red-700 text-white font-bold px-2 py-1 rounded-sm">1 hari</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card 2 py-5 col-span-12 xl:col-span-4 xl:py-0">
          <div className="card 2 preview grid ">
            <div className="header bg-slate-500 px-5 py-5 ">
              <p className="text-white">2022</p>
              <p className="text-white">Sunday, Jun 19</p>
            </div>
            <div className="content bg-white px-5 py-5 grid ">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  orientation="landscape"
                  openTo="day"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className="card 3 py-5 col-span-12 xl:col-span-3 xl:py-0">
          <div className="card 2 preview grid w-full">
            <div className="header bg-blue-800 px-5 py-5 ">
              <p className="text-white">100 Besar</p>
              <p className="text-white">kehadiran Pertama</p>
            </div>
            <div className="content w-full bg-white border px-3 py-5">
              {studentData.map((student) => (
                <div key={student.id}>
                  <StudentItem id={student.id} name={student.name} kelas={student.kelas} jamAbs={student.jamAbs} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const StudentItem = (props) => {
  const { id, name, kelas, jamAbs } = props;

  return (
    <div className="my-2">
      <div className="container  border border-grey-100 py-2 px-2 grid grid-cols-3">
        <div className="rounded-full bg-yellow-200 w-14 h-14"></div>
        <div className=" col-span-2 wrapper w-full">
          <p className="text">
            {id}. {name}
          </p>
          <p className="">
            {kelas} - ({jamAbs})
          </p>
        </div>
      </div>
    </div>
  );
};

export default Report;
