import { useState } from "react";

export default function YearImageViewer() {
  const years = [
    "2015-16", "2016-17", "2017-18", "2018-19", "2019-20", 
    "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"
  ];
  
  const images = {
    "2015-16": "https://i.imgur.com/l4D7tEf.png",
    "2016-17": "https://i.imgur.com/7GpQtjW.png",
    "2017-18": "https://i.imgur.com/cPYybmz.png",
    "2018-19": "https://i.imgur.com/LvTwU0k.png",
    "2019-20": "https://i.imgur.com/WUk39oW.png",
    "2020-21": "https://i.imgur.com/IKYQAwZ.png",
    "2021-22": "https://i.imgur.com/TNpeAeS.png",
    "2022-23": "https://i.imgur.com/YX2djrc.png",
    "2023-24": "https://i.imgur.com/PI0ug7Y.png",
    "2024-25": "https://i.imgur.com/GaPSL2r.png",
  };

  const [selectedYear, setSelectedYear] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold mb-4">10 years of STAR vs BUS Topology in CBSE SQPs</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {years.map((year) => (
          <button
            key={year}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => {
              setSelectedYear(year);
              setShowAll(false);
            }}
          >
            {year}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={() => setShowAll(true)}
        >
          Show All
        </button>
      </div>

      {showAll ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {years.map((year) => (
            <div key={year} className="text-center">
              <h2 className="font-bold">{year}</h2>
              <img src={images[year]} alt={year} className="mx-auto" />
            </div>
          ))}
        </div>
      ) : selectedYear ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">{selectedYear}</h2>
          <img src={images[selectedYear]} alt={selectedYear} className="mx-auto" />
        </div>
      ) : (
        <p className="text-gray-500">Click a year to view its image.</p>
      )}
    </div>
  );
}
