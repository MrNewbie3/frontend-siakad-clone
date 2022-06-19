import React, { Component } from "react";
import { FaIdCard } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
class Report extends Component {
  state = {};
  render() {
    const dummy = [
      {
        name: "Ajiawan Putra",
        kelas: "XI rpl 6",
        jamAbsen: "06:00:01",
      },
      {
        name: "Dani Saputro",
        kelas: "XI rpl 8",
        jamAbsen: "06:00:02",
      },
      {
        name: "Ahmad Sahroni",
        kelas: "XI rpl 1",
        jamAbsen: "06:00:03",
      },
      {
        name: "Sangaji Putra Bakti",
        kelas: "XI rpl 2",
        jamAbsen: "06:00:04",
      },
    ];

    return (
      <div className="container grid grid-cols-11 gap-x-8 my-10">
        <div className="card 1 col-span-4">
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
        <div className="card 2 col-span-4">
          <div className="card 2 preview grid ">
            <div className="header bg-slate-500 px-5 py-5 ">
              <p className="text-white">2022</p>
              <p className="text-white">Sunday, Jun 19</p>
            </div>
            <div className="content bg-white px-5 py-5 grid ">
              <Calendar className={"justify-self-center "} />
            </div>
          </div>
        </div>
        <div className="card 3 col-span-3">
          <div className="card 2 preview grid ">
            <div className="header bg-blue-800 px-5 py-5 ">
              <p className="text-white">100 Besar</p>
              <p className="text-white">kehadiran Pertama</p>
            </div>
            <div className="content w-full bg-white border px-3 py-5">
              <div className="container  border border-grey-100 py-2 px-2 grid grid-cols-3">
                <div className="rounded-full bg-yellow-200 w-14 h-14"></div>
                <div className=" col-span-2 wrapper w-full">
                  <p className="text">1. Ahmad Habibullah</p>
                  <p className="">X RPL 6 - (06:00:00)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
