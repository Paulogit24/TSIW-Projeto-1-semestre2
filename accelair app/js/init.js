window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-70px";
    }
  }
  
initdata();

function initdata() {
  // destinos
  if (!localStorage.fligth) {
    const flights = [
      {
      flightID: "FL0001",
      origin: "Porto, Portugal",
      destination: "San Francisco, USA",
      departure: "2025-07-27 20:00",
      arrival: "2025-07-27 22:00",
      airline: "AeroLux",
      price: 337
    },
    {
      flightID: "FL0002",
      origin: "San Francisco, USA",
      destination: "Porto, Portugal",
      departure: "2025-07-29 08:00",
      arrival: "2025-07-29 16:00",
      airline: "Oceanic Airlines",
      price: 940
    },
    {
      flightID: "FL0003",
      origin: "Lisboa, Portugal",
      destination: "San Francisco, USA",
      departure: "2025-07-26 05:00",
      arrival: "2025-07-26 17:00",
      airline: "AeroLux",
      price: 319
    },
    {
      flightID: "FL0004",
      origin: "San Francisco, USA",
      destination: "Lisboa, Portugal",
      departure: "2025-07-13 20:00",
      arrival: "2025-07-14 04:00",
      airline: "VoyageAir",
      price: 478
    },
    {
      flightID: "FL0005",
      origin: "Algarve, Portugal",
      destination: "San Francisco, USA",
      departure: "2025-07-07 18:00",
      arrival: "2025-07-07 20:00",
      airline: "VoyageAir",
      price: 347
    },
    {
      flightID: "FL0006",
      origin: "San Francisco, USA",
      destination: "Algarve, Portugal",
      departure: "2025-07-11 18:00",
      arrival: "2025-07-11 21:00",
      airline: "Oceanic Airlines",
      price: 340
    },
    {
      flightID: "FL0007",
      origin: "Porto, Portugal",
      destination: "Paris, France",
      departure: "2025-07-26 16:00",
      arrival: "2025-07-27 00:00",
      airline: "CloudNine Air",
      price: 986
    },
    {
      flightID: "FL0008",
      origin: "Paris, France",
      destination: "Porto, Portugal",
      departure: "2025-07-21 20:00",
      arrival: "2025-07-22 00:00",
      airline: "AeroLux",
      price: 215
    },
    {
      flightID: "FL0009",
      origin: "Lisboa, Portugal",
      destination: "Paris, France",
      departure: "2025-07-21 12:00",
      arrival: "2025-07-21 19:00",
      airline: "VoyageAir",
      price: 961
    },
    {
      flightID: "FL0010",
      origin: "Paris, France",
      destination: "Lisboa, Portugal",
      departure: "2025-07-22 18:00",
      arrival: "2025-07-23 00:00",
      airline: "TransGlobal",
      price: 976
    },
    {
      flightID: "FL0011",
      origin: "Algarve, Portugal",
      destination: "Paris, France",
      departure: "2025-07-25 08:00",
      arrival: "2025-07-25 12:00",
      airline: "SunAir",
      price: 144
    },
    {
      flightID: "FL0012",
      origin: "Paris, France",
      destination: "Algarve, Portugal",
      departure: "2025-07-08 16:00",
      arrival: "2025-07-08 23:00",
      airline: "Oceanic Airlines",
      price: 882
    },
    {
      flightID: "FL0013",
      origin: "Porto, Portugal",
      destination: "Barcelona, Spain",
      departure: "2025-07-15 05:00",
      arrival: "2025-07-15 13:00",
      airline: "Oceanic Airlines",
      price: 126
    },
    {
      flightID: "FL0014",
      origin: "Barcelona, Spain",
      destination: "Porto, Portugal",
      departure: "2025-07-21 08:00",
      arrival: "2025-07-21 12:00",
      airline: "Oceanic Airlines",
      price: 435
    },
    {
      flightID: "FL0015",
      origin: "Lisboa, Portugal",
      destination: "Barcelona, Spain",
      departure: "2025-07-30 20:00",
      arrival: "2025-07-31 06:00",
      airline: "CloudNine Air",
      price: 217
    },
    {
      flightID: "FL0016",
      origin: "Barcelona, Spain",
      destination: "Lisboa, Portugal",
      departure: "2025-07-16 15:00",
      arrival: "2025-07-16 21:00",
      airline: "TransGlobal",
      price: 398
    },
    {
      flightID: "FL0017",
      origin: "Algarve, Portugal",
      destination: "Barcelona, Spain",
      departure: "2025-07-26 07:00",
      arrival: "2025-07-26 11:00",
      airline: "Global Fly",
      price: 805
    },
    {
      flightID: "FL0018",
      origin: "Barcelona, Spain",
      destination: "Algarve, Portugal",
      departure: "2025-07-12 10:00",
      arrival: "2025-07-12 20:00",
      airline: "SkyJet Airways",
      price: 534
    },
    {
      flightID: "FL0019",
      origin: "Porto, Portugal",
      destination: "Istanbul, Turkey",
      departure: "2025-07-15 19:00",
      arrival: "2025-07-16 02:00",
      airline: "CloudNine Air",
      price: 527
    },
    {
      flightID: "FL0020",
      origin: "Istanbul, Turkey",
      destination: "Porto, Portugal",
      departure: "2025-07-30 17:00",
      arrival: "2025-07-30 23:00",
      airline: "Oceanic Airlines",
      price: 759
    },
    {
      flightID: "FL0021",
      origin: "Lisboa, Portugal",
      destination: "Istanbul, Turkey",
      departure: "2025-07-10 14:00",
      arrival: "2025-07-10 20:00",
      airline: "Oceanic Airlines",
      price: 143
    },
    {
      flightID: "FL0022",
      origin: "Istanbul, Turkey",
      destination: "Lisboa, Portugal",
      departure: "2025-07-02 14:00",
      arrival: "2025-07-02 23:00",
      airline: "CloudNine Air",
      price: 764
    },
    {
      flightID: "FL0023",
      origin: "Algarve, Portugal",
      destination: "Istanbul, Turkey",
      departure: "2025-07-04 06:00",
      arrival: "2025-07-04 14:00",
      airline: "AeroLux",
      price: 947
    },
    {
      flightID: "FL0024",
      origin: "Istanbul, Turkey",
      destination: "Algarve, Portugal",
      departure: "2025-07-21 10:00",
      arrival: "2025-07-21 13:00",
      airline: "AeroLux",
      price: 588
    },
    {
      flightID: "FL0025",
      origin: "Porto, Portugal",
      destination: "New York, USA",
      departure: "2025-07-27 09:00",
      arrival: "2025-07-27 14:00",
      airline: "EuroWings",
      price: 146
    },
    {
      flightID: "FL0026",
      origin: "New York, USA",
      destination: "Porto, Portugal",
      departure: "2025-07-11 12:00",
      arrival: "2025-07-11 22:00",
      airline: "CloudNine Air",
      price: 993
    },
    {
      flightID: "FL0027",
      origin: "Lisboa, Portugal",
      destination: "New York, USA",
      departure: "2025-07-29 07:00",
      arrival: "2025-07-29 17:00",
      airline: "SunAir",
      price: 561
    },
    {
      flightID: "FL0028",
      origin: "New York, USA",
      destination: "Lisboa, Portugal",
      departure: "2025-07-30 13:00",
      arrival: "2025-07-30 17:00",
      airline: "Global Fly",
      price: 539
    },
    {
      flightID: "FL0029",
      origin: "Algarve, Portugal",
      destination: "New York, USA",
      departure: "2025-07-16 11:00",
      arrival: "2025-07-16 21:00",
      airline: "Oceanic Airlines",
      price: 106
    },
    {
      flightID: "FL0030",
      origin: "New York, USA",
      destination: "Algarve, Portugal",
      departure: "2025-07-07 18:00",
      arrival: "2025-07-07 20:00",
      airline: "CloudNine Air",
      price: 120
    },
    {
      flightID: "FL0031",
      origin: "Porto, Portugal",
      destination: "Kyoto, Japan",
      departure: "2025-07-28 15:00",
      arrival: "2025-07-29 03:00",
      airline: "CloudNine Air",
      price: 897
    },
    {
      flightID: "FL0032",
      origin: "Kyoto, Japan",
      destination: "Porto, Portugal",
      departure: "2025-07-09 16:00",
      arrival: "2025-07-09 19:00",
      airline: "SkyJet Airways",
      price: 417
    },
    {
      flightID: "FL0033",
      origin: "Lisboa, Portugal",
      destination: "Kyoto, Japan",
      departure: "2025-07-29 20:00",
      arrival: "2025-07-29 22:00",
      airline: "Global Fly",
      price: 922
    },
    {
      flightID: "FL0034",
      origin: "Kyoto, Japan",
      destination: "Lisboa, Portugal",
      departure: "2025-07-20 20:00",
      arrival: "2025-07-21 05:00",
      airline: "Air Horizon",
      price: 811
    },
    {
      flightID: "FL0035",
      origin: "Algarve, Portugal",
      destination: "Kyoto, Japan",
      departure: "2025-07-11 13:00",
      arrival: "2025-07-11 22:00",
      airline: "CloudNine Air",
      price: 787
    },
    {
      flightID: "FL0036",
      origin: "Kyoto, Japan",
      destination: "Algarve, Portugal",
      departure: "2025-07-26 18:00",
      arrival: "2025-07-27 04:00",
      airline: "Global Fly",
      price: 350
    },
    {
      flightID: "FL0037",
      origin: "Porto, Portugal",
      destination: "Cape Town, South Africa",
      departure: "2025-07-15 13:00",
      arrival: "2025-07-16 01:00",
      airline: "Oceanic Airlines",
      price: 988
    },
    {
      flightID: "FL0038",
      origin: "Cape Town, South Africa",
      destination: "Porto, Portugal",
      departure: "2025-07-29 06:00",
      arrival: "2025-07-29 09:00",
      airline: "CloudNine Air",
      price: 827
    },
    {
      flightID: "FL0039",
      origin: "Lisboa, Portugal",
      destination: "Cape Town, South Africa",
      departure: "2025-07-23 05:00",
      arrival: "2025-07-23 15:00",
      airline: "TransGlobal",
      price: 288
    },
    {
      flightID: "FL0040",
      origin: "Cape Town, South Africa",
      destination: "Lisboa, Portugal",
      departure: "2025-07-10 16:00",
      arrival: "2025-07-10 23:00",
      airline: "SunAir",
      price: 239
    },
    {
      flightID: "FL0041",
      origin: "Algarve, Portugal",
      destination: "Cape Town, South Africa",
      departure: "2025-07-27 08:00",
      arrival: "2025-07-27 11:00",
      airline: "TransGlobal",
      price: 763
    },
    {
      flightID: "FL0042",
      origin: "Cape Town, South Africa",
      destination: "Algarve, Portugal",
      departure: "2025-07-27 16:00",
      arrival: "2025-07-28 02:00",
      airline: "SkyJet Airways",
      price: 865
    },
    {
      flightID: "FL0043",
      origin: "Porto, Portugal",
      destination: "Dubai, UAE",
      departure: "2025-07-02 14:00",
      arrival: "2025-07-02 19:00",
      airline: "EuroWings",
      price: 951
    },
    {
      flightID: "FL0044",
      origin: "Dubai, UAE",
      destination: "Porto, Portugal",
      departure: "2025-07-13 16:00",
      arrival: "2025-07-14 04:00",
      airline: "CloudNine Air",
      price: 107
    },
    {
      flightID: "FL0045",
      origin: "Lisboa, Portugal",
      destination: "Dubai, UAE",
      departure: "2025-07-18 13:00",
      arrival: "2025-07-18 20:00",
      airline: "Global Fly",
      price: 260
    },
    {
      flightID: "FL0046",
      origin: "Dubai, UAE",
      destination: "Lisboa, Portugal",
      departure: "2025-07-28 08:00",
      arrival: "2025-07-28 18:00",
      airline: "VoyageAir",
      price: 331
    },
    {
      flightID: "FL0047",
      origin: "Algarve, Portugal",
      destination: "Dubai, UAE",
      departure: "2025-07-29 12:00",
      arrival: "2025-07-29 15:00",
      airline: "EuroWings",
      price: 402
    },
    {
      flightID: "FL0048",
      origin: "Dubai, UAE",
      destination: "Algarve, Portugal",
      departure: "2025-07-15 07:00",
      arrival: "2025-07-15 09:00",
      airline: "AeroLux",
      price: 925
    },
    {
      flightID: "FL0049",
      origin: "Porto, Portugal",
      destination: "Zermatt, Switzerland",
      departure: "2025-07-05 14:00",
      arrival: "2025-07-06 00:00",
      airline: "Oceanic Airlines",
      price: 712
    },
    {
      flightID: "FL0050",
      origin: "Zermatt, Switzerland",
      destination: "Porto, Portugal",
      departure: "2025-07-06 10:00",
      arrival: "2025-07-06 18:00",
      airline: "AeroLux",
      price: 177
    },
    {
      flightID: "FL0051",
      origin: "Lisboa, Portugal",
      destination: "Zermatt, Switzerland",
      departure: "2025-07-26 20:00",
      arrival: "2025-07-26 23:00",
      airline: "Oceanic Airlines",
      price: 614
    },
    {
      flightID: "FL0052",
      origin: "Zermatt, Switzerland",
      destination: "Lisboa, Portugal",
      departure: "2025-07-01 11:00",
      arrival: "2025-07-01 13:00",
      airline: "SunAir",
      price: 980
    },
    {
      flightID: "FL0053",
      origin: "Algarve, Portugal",
      destination: "Zermatt, Switzerland",
      departure: "2025-07-06 19:00",
      arrival: "2025-07-07 07:00",
      airline: "CloudNine Air",
      price: 113
    },
    {
      flightID: "FL0054",
      origin: "Zermatt, Switzerland",
      destination: "Algarve, Portugal",
      departure: "2025-07-24 14:00",
      arrival: "2025-07-24 17:00",
      airline: "Air Horizon",
      price: 555
    },
    {
      flightID: "FL0055",
      origin: "Porto, Portugal",
      destination: "Amsterdam, Netherlands",
      departure: "2025-07-14 15:00",
      arrival: "2025-07-14 23:00",
      airline: "Global Fly",
      price: 623
    },
    {
      flightID: "FL0056",
      origin: "Amsterdam, Netherlands",
      destination: "Porto, Portugal",
      departure: "2025-07-02 17:00",
      arrival: "2025-07-03 03:00",
      airline: "SkyJet Airways",
      price: 230
    },
    {
      flightID: "FL0057",
      origin: "Lisboa, Portugal",
      destination: "Amsterdam, Netherlands",
      departure: "2025-07-20 11:00",
      arrival: "2025-07-20 20:00",
      airline: "SkyJet Airways",
      price: 545
    },
    {
      flightID: "FL0058",
      origin: "Amsterdam, Netherlands",
      destination: "Lisboa, Portugal",
      departure: "2025-07-01 11:00",
      arrival: "2025-07-01 23:00",
      airline: "SkyJet Airways",
      price: 148
    },
    {
      flightID: "FL0059",
      origin: "Algarve, Portugal",
      destination: "Amsterdam, Netherlands",
      departure: "2025-07-15 15:00",
      arrival: "2025-07-15 19:00",
      airline: "Global Fly",
      price: 736
    },
    {
      flightID: "FL0060",
      origin: "Amsterdam, Netherlands",
      destination: "Algarve, Portugal",
      departure: "2025-07-14 11:00",
      arrival: "2025-07-14 23:00",
      airline: "VoyageAir",
      price: 538
    },
    {
      flightID: "FL0061",
      origin: "Porto, Portugal",
      destination: "Rome, Italy",
      departure: "2025-07-04 12:00",
      arrival: "2025-07-05 00:00",
      airline: "CloudNine Air",
      price: 155
    },
    {
      flightID: "FL0062",
      origin: "Rome, Italy",
      destination: "Porto, Portugal",
      departure: "2025-07-15 14:00",
      arrival: "2025-07-15 22:00",
      airline: "SunAir",
      price: 886
    },
    {
      flightID: "FL0063",
      origin: "Lisboa, Portugal",
      destination: "Rome, Italy",
      departure: "2025-07-26 10:00",
      arrival: "2025-07-26 19:00",
      airline: "CloudNine Air",
      price: 390
    },
    {
      flightID: "FL0064",
      origin: "Rome, Italy",
      destination: "Lisboa, Portugal",
      departure: "2025-07-13 15:00",
      arrival: "2025-07-13 18:00",
      airline: "Air Horizon",
      price: 686
    },
    {
      flightID: "FL0065",
      origin: "Algarve, Portugal",
      destination: "Rome, Italy",
      departure: "2025-07-04 10:00",
      arrival: "2025-07-04 12:00",
      airline: "CloudNine Air",
      price: 902
    },
    {
      flightID: "FL0066",
      origin: "Rome, Italy",
      destination: "Algarve, Portugal",
      departure: "2025-07-12 15:00",
      arrival: "2025-07-12 23:00",
      airline: "SunAir",
      price: 151
    },
    {
      flightID: "FL0067",
      origin: "Porto, Portugal",
      destination: "Sydney, Australia",
      departure: "2025-07-29 20:00",
      arrival: "2025-07-29 23:00",
      airline: "SunAir",
      price: 519
    },
    {
      flightID: "FL0068",
      origin: "Sydney, Australia",
      destination: "Porto, Portugal",
      departure: "2025-07-02 06:00",
      arrival: "2025-07-02 10:00",
      airline: "VoyageAir",
      price: 507
    },
    {
      flightID: "FL0069",
      origin: "Lisboa, Portugal",
      destination: "Sydney, Australia",
      departure: "2025-07-03 09:00",
      arrival: "2025-07-03 12:00",
      airline: "SunAir",
      price: 612
    },
    {
      flightID: "FL0070",
      origin: "Sydney, Australia",
      destination: "Lisboa, Portugal",
      departure: "2025-07-26 07:00",
      arrival: "2025-07-26 13:00",
      airline: "EuroWings",
      price: 866
    },
    {
      flightID: "FL0071",
      origin: "Algarve, Portugal",
      destination: "Sydney, Australia",
      departure: "2025-07-28 09:00",
      arrival: "2025-07-28 21:00",
      airline: "VoyageAir",
      price: 739
    },
    {
      flightID: "FL0072",
      origin: "Sydney, Australia",
      destination: "Algarve, Portugal",
      departure: "2025-07-28 11:00",
      arrival: "2025-07-28 19:00",
      airline: "EuroWings",
      price: 772
    },
    {
      flightID: "FL0073",
      origin: "Porto, Portugal",
      destination: "Cairo, Egypt",
      departure: "2025-07-04 12:00",
      arrival: "2025-07-04 15:00",
      airline: "Oceanic Airlines",
      price: 490
    },
    {
      flightID: "FL0074",
      origin: "Cairo, Egypt",
      destination: "Porto, Portugal",
      departure: "2025-07-10 07:00",
      arrival: "2025-07-10 13:00",
      airline: "Air Horizon",
      price: 505
    },
    {
      flightID: "FL0075",
      origin: "Lisboa, Portugal",
      destination: "Cairo, Egypt",
      departure: "2025-07-24 18:00",
      arrival: "2025-07-24 21:00",
      airline: "SkyJet Airways",
      price: 340
    },
    {
      flightID: "FL0076",
      origin: "Cairo, Egypt",
      destination: "Lisboa, Portugal",
      departure: "2025-07-02 18:00",
      arrival: "2025-07-03 01:00",
      airline: "AeroLux",
      price: 467
    },
    {
      flightID: "FL0077",
      origin: "Algarve, Portugal",
      destination: "Cairo, Egypt",
      departure: "2025-07-28 14:00",
      arrival: "2025-07-28 18:00",
      airline: "VoyageAir",
      price: 299
    },
    {
      flightID: "FL0078",
      origin: "Cairo, Egypt",
      destination: "Algarve, Portugal",
      departure: "2025-07-22 15:00",
      arrival: "2025-07-22 18:00",
      airline: "SkyJet Airways",
      price: 351
    },
    {
      flightID: "FL0079",
      origin: "Porto, Portugal",
      destination: "Prague, Czech Republic",
      departure: "2025-07-13 08:00",
      arrival: "2025-07-13 10:00",
      airline: "AeroLux",
      price: 853
    },
    {
      flightID: "FL0080",
      origin: "Prague, Czech Republic",
      destination: "Porto, Portugal",
      departure: "2025-07-04 14:00",
      arrival: "2025-07-04 22:00",
      airline: "EuroWings",
      price: 380
    },
    {
      flightID: "FL0081",
      origin: "Lisboa, Portugal",
      destination: "Prague, Czech Republic",
      departure: "2025-07-27 20:00",
      arrival: "2025-07-28 02:00",
      airline: "Global Fly",
      price: 612
    },
    {
      flightID: "FL0082",
      origin: "Prague, Czech Republic",
      destination: "Lisboa, Portugal",
      departure: "2025-07-20 17:00",
      arrival: "2025-07-20 22:00",
      airline: "Oceanic Airlines",
      price: 750
    },
    {
      flightID: "FL0083",
      origin: "Algarve, Portugal",
      destination: "Prague, Czech Republic",
      departure: "2025-07-13 06:00",
      arrival: "2025-07-13 09:00",
      airline: "VoyageAir",
      price: 176
    },
    {
      flightID: "FL0084",
      origin: "Prague, Czech Republic",
      destination: "Algarve, Portugal",
      departure: "2025-07-07 19:00",
      arrival: "2025-07-08 01:00",
      airline: "Oceanic Airlines",
      price: 590
    },
    {
      flightID: "FL0085",
      origin: "Porto, Portugal",
      destination: "Tokyo, Japan",
      departure: "2025-07-30 15:00",
      arrival: "2025-07-30 22:00",
      airline: "Air Horizon",
      price: 392
    },
    {
      flightID: "FL0086",
      origin: "Tokyo, Japan",
      destination: "Porto, Portugal",
      departure: "2025-07-16 06:00",
      arrival: "2025-07-16 09:00",
      airline: "Global Fly",
      price: 598
    },
    {
      flightID: "FL0087",
      origin: "Lisboa, Portugal",
      destination: "Tokyo, Japan",
      departure: "2025-07-18 19:00",
      arrival: "2025-07-19 01:00",
      airline: "VoyageAir",
      price: 194
    },
    {
      flightID: "FL0088",
      origin: "Tokyo, Japan",
      destination: "Lisboa, Portugal",
      departure: "2025-07-29 10:00",
      arrival: "2025-07-29 21:00",
      airline: "Global Fly",
      price: 106
    },
    {
      flightID: "FL0089",
      origin: "Algarve, Portugal",
      destination: "Tokyo, Japan",
      departure: "2025-07-29 19:00",
      arrival: "2025-07-30 04:00",
      airline: "SkyJet Airways",
      price: 125
    },
    {
      flightID: "FL0090",
      origin: "Tokyo, Japan",
      destination: "Algarve, Portugal",
      departure: "2025-07-26 08:00",
      arrival: "2025-07-26 16:00",
      airline: "SkyJet Airways",
      price: 211
    },
    {
      flightID: "FL0091",
      origin: "Porto, Portugal",
      destination: "Bangkok, Thailand",
      departure: "2025-07-22 17:00",
      arrival: "2025-07-22 23:00",
      airline: "Global Fly",
      price: 101
    },
    {
      flightID: "FL0092",
      origin: "Bangkok, Thailand",
      destination: "Porto, Portugal",
      departure: "2025-07-04 20:00",
      arrival: "2025-07-05 03:00",
      airline: "Global Fly",
      price: 220
    },
    {
      flightID: "FL0093",
      origin: "Lisboa, Portugal",
      destination: "Bangkok, Thailand",
      departure: "2025-07-20 17:00",
      arrival: "2025-07-21 02:00",
      airline: "CloudNine Air",
      price: 759
    },
    {
      flightID: "FL0094",
      origin: "Bangkok, Thailand",
      destination: "Lisboa, Portugal",
      departure: "2025-07-01 12:00",
      arrival: "2025-07-01 21:00",
      airline: "SunAir",
      price: 543
    },
    {
      flightID: "FL0095",
      origin: "Algarve, Portugal",
      destination: "Bangkok, Thailand",
      departure: "2025-07-10 15:00",
      arrival: "2025-07-10 17:00",
      airline: "TransGlobal",
      price: 700
    },
    {
      flightID: "FL0096",
      origin: "Bangkok, Thailand",
      destination: "Algarve, Portugal",
      departure: "2025-07-18 06:00",
      arrival: "2025-07-18 12:00",
      airline: "VoyageAir",
      price: 974
    },
    {
      flightID: "FL0097",
      origin: "Porto, Portugal",
      destination: "Rio de Janeiro, Brazil",
      departure: "2025-07-28 09:00",
      arrival: "2025-07-28 21:00",
      airline: "Air Horizon",
      price: 718
    },
    {
      flightID: "FL0098",
      origin: "Rio de Janeiro, Brazil",
      destination: "Porto, Portugal",
      departure: "2025-07-09 17:00",
      arrival: "2025-07-10 04:00",
      airline: "AeroLux",
      price: 791
    },
    {
      flightID: "FL0099",
      origin: "Lisboa, Portugal",
      destination: "Rio de Janeiro, Brazil",
      departure: "2025-07-16 20:00",
      arrival: "2025-07-17 04:00",
      airline: "Air Horizon",
      price: 711
    },
    {
      flightID: "FL0100",
      origin: "Rio de Janeiro, Brazil",
      destination: "Lisboa, Portugal",
      departure: "2025-07-06 19:00",
      arrival: "2025-07-07 03:00",
      airline: "VoyageAir",
      price: 228
    },
    {
      flightID: "FL0101",
      origin: "Algarve, Portugal",
      destination: "Rio de Janeiro, Brazil",
      departure: "2025-07-07 14:00",
      arrival: "2025-07-07 22:00",
      airline: "VoyageAir",
      price: 736
    },
    {
      flightID: "FL0102",
      origin: "Rio de Janeiro, Brazil",
      destination: "Algarve, Portugal",
      departure: "2025-07-11 07:00",
      arrival: "2025-07-11 10:00",
      airline: "VoyageAir",
      price: 259
    },
    {
      flightID: "FL0103",
      origin: "Porto, Portugal",
      destination: "Reykjavik, Iceland",
      departure: "2025-07-23 09:00",
      arrival: "2025-07-23 11:00",
      airline: "CloudNine Air",
      price: 104
    },
    {
      flightID: "FL0104",
      origin: "Reykjavik, Iceland",
      destination: "Porto, Portugal",
      departure: "2025-07-22 13:00",
      arrival: "2025-07-22 20:00",
      airline: "VoyageAir",
      price: 608
    },
    {
      flightID: "FL0105",
      origin: "Lisboa, Portugal",
      destination: "Reykjavik, Iceland",
      departure: "2025-07-10 07:00",
      arrival: "2025-07-10 19:00",
      airline: "SkyJet Airways",
      price: 126
    },
    {
      flightID: "FL0106",
      origin: "Reykjavik, Iceland",
      destination: "Lisboa, Portugal",
      departure: "2025-07-22 15:00",
      arrival: "2025-07-22 20:00",
      airline: "Global Fly",
      price: 211
    },
    {
      flightID: "FL0107",
      origin: "Algarve, Portugal",
      destination: "Reykjavik, Iceland",
      departure: "2025-07-04 09:00",
      arrival: "2025-07-04 21:00",
      airline: "SunAir",
      price: 385
    },
    {
      flightID: "FL0108",
      origin: "Reykjavik, Iceland",
      destination: "Algarve, Portugal",
      departure: "2025-07-15 15:00",
      arrival: "2025-07-15 22:00",
      airline: "EuroWings",
      price: 161
    },
    {
      flightID: "FL0109",
      origin: "Porto, Portugal",
      destination: "Bali, Indonesia",
      departure: "2025-07-11 14:00",
      arrival: "2025-07-11 16:00",
      airline: "Air Horizon",
      price: 686
    },
    {
      flightID: "FL0110",
      origin: "Bali, Indonesia",
      destination: "Porto, Portugal",
      departure: "2025-07-30 08:00",
      arrival: "2025-07-30 14:00",
      airline: "TransGlobal",
      price: 825
    },
    {
      flightID: "FL0111",
      origin: "Lisboa, Portugal",
      destination: "Bali, Indonesia",
      departure: "2025-07-27 08:00",
      arrival: "2025-07-27 19:00",
      airline: "Air Horizon",
      price: 308
    },
    {
      flightID: "FL0112",
      origin: "Bali, Indonesia",
      destination: "Lisboa, Portugal",
      departure: "2025-07-09 11:00",
      arrival: "2025-07-09 19:00",
      airline: "Global Fly",
      price: 199
    },
    {
      flightID: "FL0113",
      origin: "Algarve, Portugal",
      destination: "Bali, Indonesia",
      departure: "2025-07-18 18:00",
      arrival: "2025-07-19 05:00",
      airline: "Global Fly",
      price: 759
    },
    {
      flightID: "FL0114",
      origin: "Bali, Indonesia",
      destination: "Algarve, Portugal",
      departure: "2025-07-30 09:00",
      arrival: "2025-07-30 14:00",
      airline: "Oceanic Airlines",
      price: 752
    },
    {
      flightID: "FL0115",
      origin: "Porto, Portugal",
      destination: "Toronto, Canada",
      departure: "2025-07-04 13:00",
      arrival: "2025-07-04 17:00",
      airline: "Air Horizon",
      price: 988
    },
    {
      flightID: "FL0116",
      origin: "Toronto, Canada",
      destination: "Porto, Portugal",
      departure: "2025-07-14 16:00",
      arrival: "2025-07-15 00:00",
      airline: "EuroWings",
      price: 790
    },
    {
      flightID: "FL0117",
      origin: "Lisboa, Portugal",
      destination: "Toronto, Canada",
      departure: "2025-07-10 18:00",
      arrival: "2025-07-11 03:00",
      airline: "SkyJet Airways",
      price: 398
    },
    {
      flightID: "FL0118",
      origin: "Toronto, Canada",
      destination: "Lisboa, Portugal",
      departure: "2025-07-13 10:00",
      arrival: "2025-07-13 16:00",
      airline: "Oceanic Airlines",
      price: 805
    },
    {
      flightID: "FL0119",
      origin: "Algarve, Portugal",
      destination: "Toronto, Canada",
      departure: "2025-07-11 16:00",
      arrival: "2025-07-11 22:00",
      airline: "VoyageAir",
      price: 259
    },
    {
      flightID: "FL0120",
      origin: "Toronto, Canada",
      destination: "Algarve, Portugal",
      departure: "2025-07-04 17:00",
      arrival: "2025-07-05 02:00",
      airline: "VoyageAir",
      price: 591
    }      
   ];    
   loalStorage.setItem("destinations", JSON.stringify(destinations));
  }

  // destinos
 if (!localStorage.destination) {
   const destinations = [
     {
      destinationID: "dest001",
      name: "Grand Heritage Inn",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/grandheritageinn1.jpg",
      location: "Cape Town, South Africa",
      price: 2950,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest002",
      name: "Grand Heritage Inn",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/grandheritageinn2.jpg",
      location: "Cairo, Egypt",
      price: 1575,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest003",
      name: "Cultural Palace",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/culturalpalace3.jpg",
      location: "Prague, Czech Republic",
      price: 1360,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest004",
      name: "Grand Heritage Inn",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/grandheritageinn4.jpg",
      location: "New York, USA",
      price: 2145,
      category: "Beach Tourism"
    },
    {
      destinationID: "dest005",
      name: "Seaside Bliss Resort",
      destinationDescription: "Discover stunning architecture and rich traditions.",
      image: "https://example.com/images/seasideblissresort5.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 1478,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest006",
      name: "Golden Dunes Resort",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/goldendunesresort6.jpg",
      location: "Bali, Indonesia",
      price: 1861,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest007",
      name: "Harbor Lights Hotel",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/harborlightshotel7.jpg",
      location: "Cairo, Egypt",
      price: 1855,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest008",
      name: "Mystic River Lodge",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/mysticriverlodge8.jpg",
      location: "Amsterdam, Netherlands",
      price: 1777,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest009",
      name: "Royal Orchid Hotel",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/royalorchidhotel9.jpg",
      location: "San Francisco, USA",
      price: 1316,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest010",
      name: "Harbor Lights Hotel",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/harborlightshotel10.jpg",
      location: "New York, USA",
      price: 1331,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest011",
      name: "Sunset Resort",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/sunsetresort11.jpg",
      location: "Reykjavik, Iceland",
      price: 2910,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest012",
      name: "Alpine Heights",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/alpineheights12.jpg",
      location: "Bangkok, Thailand",
      price: 1810,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest013",
      name: "Golden Dunes Resort",
      destinationDescription: "A hidden gem for travelers seeking something new.",
      image: "https://example.com/images/goldendunesresort13.jpg",
      location: "Istanbul, Turkey",
      price: 2731,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest014",
      name: "Ocean Breeze Hotel",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/oceanbreezehotel14.jpg",
      location: "San Francisco, USA",
      price: 2625,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest015",
      name: "Cultural Palace",
      destinationDescription: "Explore ancient history and modern attractions.",
      image: "https://example.com/images/culturalpalace15.jpg",
      location: "Dubai, UAE",
      price: 2044,
      category: "Religious Tourism"
    },
    {
      destinationID: "dest016",
      name: "Ocean Breeze Hotel",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/oceanbreezehotel16.jpg",
      location: "Kyoto, Japan",
      price: 2163,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest017",
      name: "Serenity Stay",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/serenitystay17.jpg",
      location: "Dubai, UAE",
      price: 2131,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest018",
      name: "Seaside Bliss Resort",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/seasideblissresort18.jpg",
      location: "Toronto, Canada",
      price: 2228,
      category: "Religious Tourism"
    },
    {
      destinationID: "dest019",
      name: "Mystic River Lodge",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/mysticriverlodge19.jpg",
      location: "Toronto, Canada",
      price: 1068,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest020",
      name: "Cultural Palace",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/culturalpalace20.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 2664,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest021",
      name: "Sunset Resort",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/sunsetresort21.jpg",
      location: "Prague, Czech Republic",
      price: 2331,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest022",
      name: "Ocean Breeze Hotel",
      destinationDescription: "Explore ancient history and modern attractions.",
      image: "https://example.com/images/oceanbreezehotel22.jpg",
      location: "Reykjavik, Iceland",
      price: 1499,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest023",
      name: "Sunset Resort",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/sunsetresort23.jpg",
      location: "Amsterdam, Netherlands",
      price: 1984,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest024",
      name: "Crystal Coast Resort",
      destinationDescription: "Explore ancient history and modern attractions.",
      image: "https://example.com/images/crystalcoastresort24.jpg",
      location: "Dubai, UAE",
      price: 1125,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest025",
      name: "Adventure Retreat",
      destinationDescription: "A hidden gem for travelers seeking something new.",
      image: "https://example.com/images/adventureretreat25.jpg",
      location: "Paris, France",
      price: 1157,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest026",
      name: "Adventure Retreat",
      destinationDescription: "Explore ancient history and modern attractions.",
      image: "https://example.com/images/adventureretreat26.jpg",
      location: "Cape Town, South Africa",
      price: 2967,
      category: "Religious Tourism"
    },
    {
      destinationID: "dest027",
      name: "Adventure Retreat",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/adventureretreat27.jpg",
      location: "Tokyo, Japan",
      price: 2436,
      category: "Religious Tourism"
    },
    {
      destinationID: "dest028",
      name: "Sunset Resort",
      destinationDescription: "Discover stunning architecture and rich traditions.",
      image: "https://example.com/images/sunsetresort28.jpg",
      location: "Cairo, Egypt",
      price: 2941,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest029",
      name: "Twilight Bay Inn",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/twilightbayinn29.jpg",
      location: "Toronto, Canada",
      price: 1722,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest030",
      name: "Cultural Palace",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/culturalpalace30.jpg",
      location: "Kyoto, Japan",
      price: 1809,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest031",
      name: "Serenity Stay",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/serenitystay31.jpg",
      location: "Barcelona, Spain",
      price: 1730,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest032",
      name: "Urban Oasis Hotel",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/urbanoasishotel32.jpg",
      location: "Rome, Italy",
      price: 1948,
      category: "Beach Tourism"
    },
    {
      destinationID: "dest033",
      name: "Lagoon Escape",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/lagoonescape33.jpg",
      location: "Cairo, Egypt",
      price: 2248,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest034",
      name: "Harbor Lights Hotel",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/harborlightshotel34.jpg",
      location: "Istanbul, Turkey",
      price: 1585,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest035",
      name: "Urban Oasis Hotel",
      destinationDescription: "Discover stunning architecture and rich traditions.",
      image: "https://example.com/images/urbanoasishotel35.jpg",
      location: "Kyoto, Japan",
      price: 1713,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest036",
      name: "Harbor Lights Hotel",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/harborlightshotel36.jpg",
      location: "Toronto, Canada",
      price: 2937,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest037",
      name: "Adventure Retreat",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/adventureretreat37.jpg",
      location: "Cape Town, South Africa",
      price: 1836,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest038",
      name: "Twilight Bay Inn",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/twilightbayinn38.jpg",
      location: "Toronto, Canada",
      price: 2737,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest039",
      name: "Harbor Lights Hotel",
      destinationDescription: "A hidden gem for travelers seeking something new.",
      image: "https://example.com/images/harborlightshotel39.jpg",
      location: "Kyoto, Japan",
      price: 1573,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest040",
      name: "Alpine Heights",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/alpineheights40.jpg",
      location: "Amsterdam, Netherlands",
      price: 2324,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest041",
      name: "Adventure Retreat",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/adventureretreat41.jpg",
      location: "Rome, Italy",
      price: 1039,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest042",
      name: "Alpine Heights",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/alpineheights42.jpg",
      location: "Istanbul, Turkey",
      price: 1345,
      category: "Religious Tourism"
    },
    {
      destinationID: "dest043",
      name: "Timeless Sands Hotel",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/timelesssandshotel43.jpg",
      location: "Toronto, Canada",
      price: 1261,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest044",
      name: "Adventure Retreat",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/adventureretreat44.jpg",
      location: "Cape Town, South Africa",
      price: 2870,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest045",
      name: "Golden Dunes Resort",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/goldendunesresort45.jpg",
      location: "Paris, France",
      price: 1637,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest046",
      name: "Urban Oasis Hotel",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/urbanoasishotel46.jpg",
      location: "Toronto, Canada",
      price: 1494,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest047",
      name: "Alpine Heights",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/alpineheights47.jpg",
      location: "Istanbul, Turkey",
      price: 1627,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest048",
      name: "Lagoon Escape",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/lagoonescape48.jpg",
      location: "Sydney, Australia",
      price: 1506,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest049",
      name: "Lagoon Escape",
      destinationDescription: "Discover stunning architecture and rich traditions.",
      image: "https://example.com/images/lagoonescape49.jpg",
      location: "Tokyo, Japan",
      price: 2664,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest050",
      name: "Royal Orchid Hotel",
      destinationDescription: "A hidden gem for travelers seeking something new.",
      image: "https://example.com/images/royalorchidhotel50.jpg",
      location: "Cape Town, South Africa",
      price: 2513,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest051",
      name: "Twilight Bay Inn",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/twilightbayinn51.jpg",
      location: "Cairo, Egypt",
      price: 1854,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest052",
      name: "Golden Dunes Resort",
      destinationDescription: "A hidden gem for travelers seeking something new.",
      image: "https://example.com/images/goldendunesresort52.jpg",
      location: "Barcelona, Spain",
      price: 2918,
      category: "Beach Tourism"
    },
    {
      destinationID: "dest053",
      name: "Urban Oasis Hotel",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/urbanoasishotel53.jpg",
      location: "Dubai, UAE",
      price: 2202,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest054",
      name: "Grand Heritage Inn",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/grandheritageinn54.jpg",
      location: "Toronto, Canada",
      price: 2469,
      category: "Beach Tourism"
    },
    {
      destinationID: "dest055",
      name: "Cultural Palace",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/culturalpalace55.jpg",
      location: "Paris, France",
      price: 2915,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest056",
      name: "Alpine Heights",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/alpineheights56.jpg",
      location: "Sydney, Australia",
      price: 2188,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest057",
      name: "Harbor Lights Hotel",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/harborlightshotel57.jpg",
      location: "Toronto, Canada",
      price: 1194,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest058",
      name: "Timeless Sands Hotel",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/timelesssandshotel58.jpg",
      location: "Toronto, Canada",
      price: 1580,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest059",
      name: "Serenity Stay",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/serenitystay59.jpg",
      location: "Bali, Indonesia",
      price: 1384,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest060",
      name: "Grand Heritage Inn",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/grandheritageinn60.jpg",
      location: "San Francisco, USA",
      price: 1497,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest061",
      name: "Royal Orchid Hotel",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/royalorchidhotel61.jpg",
      location: "Kyoto, Japan",
      price: 1644,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest062",
      name: "Urban Oasis Hotel",
      destinationDescription: "A hidden gem for travelers seeking something new.",
      image: "https://example.com/images/urbanoasishotel62.jpg",
      location: "Dubai, UAE",
      price: 2735,
      category: "Beach Tourism"
    },
    {
      destinationID: "dest063",
      name: "Grand Heritage Inn",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/grandheritageinn63.jpg",
      location: "Tokyo, Japan",
      price: 1509,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest064",
      name: "Mystic River Lodge",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/mysticriverlodge64.jpg",
      location: "Amsterdam, Netherlands",
      price: 2646,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest065",
      name: "Ocean Breeze Hotel",
      destinationDescription: "Discover stunning architecture and rich traditions.",
      image: "https://example.com/images/oceanbreezehotel65.jpg",
      location: "Rome, Italy",
      price: 1537,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest066",
      name: "Timeless Sands Hotel",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/timelesssandshotel66.jpg",
      location: "Bangkok, Thailand",
      price: 1324,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest067",
      name: "Emerald Hills Hotel",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/emeraldhillshotel67.jpg",
      location: "Rome, Italy",
      price: 1474,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest068",
      name: "Mystic River Lodge",
      destinationDescription: "Explore ancient history and modern attractions.",
      image: "https://example.com/images/mysticriverlodge68.jpg",
      location: "New York, USA",
      price: 1779,
      category: "Religious Tourism"
    },
    {
      destinationID: "dest069",
      name: "Urban Oasis Hotel",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/urbanoasishotel69.jpg",
      location: "San Francisco, USA",
      price: 1134,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest070",
      name: "Serenity Stay",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/serenitystay70.jpg",
      location: "Istanbul, Turkey",
      price: 2231,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest071",
      name: "Timeless Sands Hotel",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/timelesssandshotel71.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 2671,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest072",
      name: "Seaside Bliss Resort",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/seasideblissresort72.jpg",
      location: "Cape Town, South Africa",
      price: 1369,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest073",
      name: "Emerald Hills Hotel",
      destinationDescription: "Discover stunning architecture and rich traditions.",
      image: "https://example.com/images/emeraldhillshotel73.jpg",
      location: "Barcelona, Spain",
      price: 1887,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest074",
      name: "Lagoon Escape",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/lagoonescape74.jpg",
      location: "New York, USA",
      price: 1559,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest075",
      name: "Harbor Lights Hotel",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/harborlightshotel75.jpg",
      location: "Istanbul, Turkey",
      price: 1794,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest076",
      name: "Ocean Breeze Hotel",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/oceanbreezehotel76.jpg",
      location: "Prague, Czech Republic",
      price: 1498,
      category: "Religious Tourism"
    },
    {
      destinationID: "dest077",
      name: "Mystic River Lodge",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/mysticriverlodge77.jpg",
      location: "Rome, Italy",
      price: 1516,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest078",
      name: "Emerald Hills Hotel",
      destinationDescription: "Explore ancient history and modern attractions.",
      image: "https://example.com/images/emeraldhillshotel78.jpg",
      location: "Bangkok, Thailand",
      price: 1767,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest079",
      name: "Mountain View Lodge",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/mountainviewlodge79.jpg",
      location: "Tokyo, Japan",
      price: 1310,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest080",
      name: "Seaside Bliss Resort",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/seasideblissresort80.jpg",
      location: "New York, USA",
      price: 2143,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest081",
      name: "Timeless Sands Hotel",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/timelesssandshotel81.jpg",
      location: "Cairo, Egypt",
      price: 2223,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest082",
      name: "Adventure Retreat",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/adventureretreat82.jpg",
      location: "Istanbul, Turkey",
      price: 1922,
      category: "Beach Tourism"
    },
    {
      destinationID: "dest083",
      name: "Cultural Palace",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/culturalpalace83.jpg",
      location: "Cape Town, South Africa",
      price: 2784,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest084",
      name: "Adventure Retreat",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/adventureretreat84.jpg",
      location: "Prague, Czech Republic",
      price: 2244,
      category: "Wildlife Tourism"
    },
    {
      destinationID: "dest085",
      name: "Crystal Coast Resort",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/crystalcoastresort85.jpg",
      location: "Kyoto, Japan",
      price: 2754,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest086",
      name: "Twilight Bay Inn",
      destinationDescription: "Perfect for a relaxing and luxurious getaway.",
      image: "https://example.com/images/twilightbayinn86.jpg",
      location: "Kyoto, Japan",
      price: 1922,
      category: "Eco Tourism"
    },
    {
      destinationID: "dest087",
      name: "Grand Heritage Inn",
      destinationDescription: "Explore ancient history and modern attractions.",
      image: "https://example.com/images/grandheritageinn87.jpg",
      location: "Istanbul, Turkey",
      price: 2595,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest088",
      name: "Grand Heritage Inn",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/grandheritageinn88.jpg",
      location: "New York, USA",
      price: 2043,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest089",
      name: "Adventure Retreat",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/adventureretreat89.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 1840,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest090",
      name: "Mystic River Lodge",
      destinationDescription: "Enjoy a blend of modernity and natural beauty.",
      image: "https://example.com/images/mysticriverlodge90.jpg",
      location: "Barcelona, Spain",
      price: 2074,
      category: "Heritage Tourism"
    },
    {
      destinationID: "dest091",
      name: "Skyline Suites",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/skylinesuites91.jpg",
      location: "Zermatt, Switzerland",
      price: 1273,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest092",
      name: "Mountain View Lodge",
      destinationDescription: "A hidden gem for travelers seeking something new.",
      image: "https://example.com/images/mountainviewlodge92.jpg",
      location: "Barcelona, Spain",
      price: 1574,
      category: "Beach Tourism"
    },
    {
      destinationID: "dest093",
      name: "Emerald Hills Hotel",
      destinationDescription: "Ideal for adventurers and nature lovers.",
      image: "https://example.com/images/emeraldhillshotel93.jpg",
      location: "Zermatt, Switzerland",
      price: 1301,
      category: "Adventure Tourism"
    },
    {
      destinationID: "dest094",
      name: "Timeless Sands Hotel",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/timelesssandshotel94.jpg",
      location: "Cairo, Egypt",
      price: 1044,
      category: "Religious Tourism"
    },
    {
      destinationID: "dest095",
      name: "Skyline Suites",
      destinationDescription: "A bustling city full of life and energy.",
      image: "https://example.com/images/skylinesuites95.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 1892,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest096",
      name: "Emerald Hills Hotel",
      destinationDescription: "A lively hub of entertainment and shopping.",
      image: "https://example.com/images/emeraldhillshotel96.jpg",
      location: "Tokyo, Japan",
      price: 1908,
      category: "Urban Tourism"
    },
    {
      destinationID: "dest097",
      name: "Cultural Palace",
      destinationDescription: "A hidden gem for travelers seeking something new.",
      image: "https://example.com/images/culturalpalace97.jpg",
      location: "San Francisco, USA",
      price: 2851,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest098",
      name: "Ocean Breeze Hotel",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/oceanbreezehotel98.jpg",
      location: "Amsterdam, Netherlands",
      price: 2059,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest099",
      name: "Skyline Suites",
      destinationDescription: "A beautiful and culturally rich destination.",
      image: "https://example.com/images/skylinesuites99.jpg",
      location: "Amsterdam, Netherlands",
      price: 1039,
      category: "Cultural Tourism"
    },
    {
      destinationID: "dest100",
      name: "Grand Heritage Inn",
      destinationDescription: "Experience world-class cuisine and scenic views.",
      image: "https://example.com/images/grandheritageinn100.jpg",
      location: "Istanbul, Turkey",
      price: 1180,
      category: "Beach Tourism"
    },
     // Adicione mais voos conforme necessário
   ];
   localStorage.setItem("flights", JSON.stringify(flights));
  }

 // USERS
   if (!localStorage.users) {
     const users = [
      {
        username: "admin1",
        password: "admin",
        exp: 0,
        banner: "",
        userimage: "",
        aboutuser: "",
        admin: 1,
        funds: 3000,
      },
      {
        username: "user1",
        password: "user1",
        exp: 0,
        banner: "",
        userimage: "",
        aboutuser: "",
        admin: 0,
        funds: 2000,
      },
       // Adicione mais usuários conforme necessário
     ];
     localStorage.setItem("users", JSON.stringify(users));
   }
 }
 
 import SearchView from './views/searchView.js';
 
 document.addEventListener('DOMContentLoaded', () => {
   new SearchView('form');
 });