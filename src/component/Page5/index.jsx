import React, { useEffect, useState } from "react";
import style from "./index.module.css";
export let Page5 = () => {
  const dataList = [
    {
      id: 1,
      name: "cerulean",
      year: 2000,
      color: "#54B2D1",
      pantone_value: "15-4020",
    },
    {
      id: 2,
      name: "fuchsia rose",
      year: 2001,
      color: "#C12575",
      pantone_value: "17-2031",
    },
    {
      id: 3,
      name: "true red",
      year: 2002,
      color: "#AB1932",
      pantone_value: "19-1664",
    },
    {
      id: 4,
      name: "aqua sky",
      year: 2003,
      color: "#7BC4A5",
      pantone_value: "14-4811",
    },
    {
      id: 5,
      name: "tigerlily",
      year: 2004,
      color: "#E2583E",
      pantone_value: "17-1456",
    },
    {
      id: 6,
      name: "blue turquoise",
      year: 2005,
      color: "#53B0AE",
      pantone_value: "15-5217",
    },
    {
      id: 7,
      name: "sand dollar",
      year: 2006,
      color: "#DEC318",
      pantone_value: "13-1106",
    },
    {
      id: 8,
      name: "chili pepper",
      year: 2007,
      color: "#9BABA0",
      pantone_value: "19-1557",
    },
    {
      id: 9,
      name: "blue iris",
      year: 2008,
      color: "#5A5B9F",
      pantone_value: "18-3943",
    },
    {
      id: 10,
      name: "mimosa",
      year: 2009,
      color: "#31505A",
      pantone_value: "14-0848",
    },
    {
      id: 11,
      name: "turquoise",
      year: 2010,
      color: "#45B5AA",
      pantone_value: "15-5519",
    },
    {
      id: 12,
      name: "honeysuckle",
      year: 2011,
      color: "#D94F70",
      pantone_value: "18-2120",
    },
    {
      id: 13,
      name: "cerulean",
      year: 2000,
      color: "#98B2D1",
      pantone_value: "15-4020",
    },
    {
      id: 14,
      name: "fuchsia rose",
      year: 2001,
      color: "#C74375",
      pantone_value: "17-2031",
    },
    {
      id: 15,
      name: "true red",
      year: 2002,
      color: "#BF1932",
      pantone_value: "19-1664",
    },
    {
      id: 16,
      name: "aqua sky",
      year: 2003,
      color: "#7BC4C4",
      pantone_value: "14-4811",
    },
    {
      id: 17,
      name: "tigerlily",
      year: 2004,
      color: "#E8883E",
      pantone_value: "17-1456",
    },
    {
      id: 18,
      name: "blue turquoise",
      year: 2005,
      color: "#5323AE",
      pantone_value: "15-5217",
    },
    {
      id: 19,
      name: "sand dollar",
      year: 2006,
      color: "#DECDBE",
      pantone_value: "13-1106",
    },
    {
      id: 20,
      name: "chili pepper",
      year: 2007,
      color: "#9B1B30",
      pantone_value: "19-1557",
    },
    {
      id: 21,
      name: "blue iris",
      year: 2008,
      color: "#5A189F",
      pantone_value: "18-3943",
    },
    {
      id: 22,
      name: "mimosa",
      year: 2009,
      color: "#F0C05A",
      pantone_value: "14-0848",
    },
    {
      id: 23,
      name: "turquoise",
      year: 2010,
      color: "#45B5AA",
      pantone_value: "15-5519",
    },
    {
      id: 24,
      name: "honeysuckle",
      year: 2011,
      color: "#D95a70",
      pantone_value: "18-2120",
    },
    {
      id: 25,
      name: "blue iris",
      year: 2012,
      color: "#22289F",
      pantone_value: "18-3943",
    },
    {
      id: 26,
      name: "mimosa",
      year: 2013,
      color: "#F0CBBB",
      pantone_value: "14-0848",
    },
    {
      id: 27,
      name: "turquoise",
      year: 2014,
      color: "#444FFF",
      pantone_value: "15-5519",
    },
    {
      id: 28,
      name: "honeysuckle",
      year: 2015,
      color: "#DDEE15",
      pantone_value: "18-2120",
    },
  ];
  const [searchText, setSearchText] = useState("");
  const handleChange = (value) => {
    setSearchText(value);
  };

  return (
    <div>
      Search:{" "}
      <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className={style.box_container}>
        {dataList
          .filter((item) => item.name.toLowerCase().includes(searchText))
          .map((item, index) => {
            return (
              <div
                key={index}
                className={style.box}
                style={{ backgroundColor: item.color }}
              >
                <b>Name: </b>
                {item.name}
                <br />
                <b>Year: </b>
                {item.year}
                <br />
                <b>Color: </b>
                {item.color}
                <br />
                <b>Pantone value: </b>
                {item.pantone_value}
              </div>
            );
          })}
        <div className={style.clearboth}></div>
        {dataList.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
};
