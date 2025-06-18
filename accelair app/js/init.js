//import * as destination from "./models/destinationmodels.js";
//import * as users from "./models/usermodels.js";

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
  if (!localStorage.flight) {
    const flight = [
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
   localStorage.setItem("flight", JSON.stringify(flight));
  }

  // destinos
 if (!localStorage.destination) {
   const destination = [
     {
      destinationID: "dest001",
      name: "Grand Heritage Inn",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "Cape Town, South Africa",
      price: 2950,
      counter: 99,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest002",
      name: "Grand Heritage Inn",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "Cairo, Egypt",
      price: 1575,
      counter: 8,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest003",
      name: "Cultural Palace",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/culturalpalace.jpg",
      location: "Prague, Czech Republic",
      price: 1360,
      counter: 7,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest004",
      name: "Grand Heritage Inn",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "New York, USA",
      price: 2145,
      counter: 1,
      duration: "3",
      category: "Beach"
    },
    {
      destinationID: "dest005",
      name: "Seaside Bliss Resort",
      Description: "Discover stunning architecture and rich traditions.",
      image: "/accelair app/img/seasideblissresort.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 1478,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest006",
      name: "Golden Dunes Resort",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/goldendunesresort.jpg",
      location: "Bali, Indonesia",
      price: 1861,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest007",
      name: "Harbor Lights Hotel",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/harborlightshoteljpg",
      location: "Cairo, Egypt",
      price: 1855,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest008",
      name: "Mystic River Lodge",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/mysticriverlodge.jpg",
      location: "Amsterdam, Netherlands",
      price: 1777,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest009",
      name: "Royal Orchid Hotel",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/royalorchidhotel.jpg",
      location: "San Francisco, USA",
      price: 1316,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest010",
      name: "Harbor Lights Hotel",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/harborlightshotel.jpg",
      location: "New York, USA",
      price: 1331,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest011",
      name: "Sunset Resort",
      Description: "Experience world-class cuisine and scenic views.",
      image: "accelair app/img/sunsetresort.jpg", 
      location: "Reykjavik, Iceland",
      price: 2910,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest012",
      name: "Alpine Heights",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/alpineheights.jpg",
      location: "Bangkok, Thailand",
      price: 1810,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest013",
      name: "Golden Dunes Resort",
      Description: "A hidden gem for travelers seeking something new.",
      image: "/accelair app/img/goldendunesresort.jpg",
      location: "Istanbul, Turkey",
      price: 2731,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest014",
      name: "Ocean Breeze Hotel",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/oceanbreezehotel.jpg",
      location: "San Francisco, USA",
      price: 2625,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest015",
      name: "Cultural Palace",
      Description: "Explore ancient history and modern attractions.",
      image: "/accelair app/img/culturalpalace.jpg",
      location: "Dubai, UAE",
      price: 2044,
      counter: 0,
      duration: "3",
      category: "Religious"
    },
    {
      destinationID: "dest016",
      name: "Ocean Breeze Hotel",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/oceanbreezehotel.jpg",
      location: "Kyoto, Japan",
      price: 2163,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest017",
      name: "Serenity Stay",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/serenitystay.jpg",
      location: "Dubai, UAE",
      price: 2131,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest018",
      name: "Seaside Bliss Resort",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/seasideblissresort.jpg",
      location: "Toronto, Canada",
      price: 2228,
      counter: 0,
      duration: "3",
      category: "Religious"
    },
    {
      destinationID: "dest019",
      name: "Mystic River Lodge",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/mysticriverlodge.jpg",
      location: "Toronto, Canada",
      price: 1068,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest020",
      name: "Cultural Palace",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/culturalpalace.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 2664,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest021",
      name: "Sunset Resort",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/sunsetresort.jpg",
      location: "Prague, Czech Republic",
      price: 2331,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest022",
      name: "Ocean Breeze Hotel",
      Description: "Explore ancient history and modern attractions.",
      image: "/accelair app/img/oceanbreezehotel.jpg",
      location: "Reykjavik, Iceland",
      price: 1499,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest023",
      name: "Sunset Resort",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/sunsetresort.jpg",
      location: "Amsterdam, Netherlands",
      price: 1984,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest024",
      name: "Crystal Coast Resort",
      Description: "Explore ancient history and modern attractions.",
      image: "/accelair app/img/crystalcoastresort.jpg",
      location: "Dubai, UAE",
      price: 1125,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest025",
      name: "Adventure Retreat",
      Description: "A hidden gem for travelers seeking something new.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Paris, France",
      price: 1157,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest026",
      name: "Adventure Retreat",
      Description: "Explore ancient history and modern attractions.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Cape Town, South Africa",
      price: 2967,
      counter: 0,
      duration: "3",
      category: "Religious"
    },
    {
      destinationID: "dest027",
      name: "Adventure Retreat",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Tokyo, Japan",
      price: 2436,
      counter: 0,
      duration: "3",
      category: "Religious"
    },
    {
      destinationID: "dest028",
      name: "Sunset Resort",
      Description: "Discover stunning architecture and rich traditions.",
      image: "/accelair app/img/sunsetresort.jpg",
      location: "Cairo, Egypt",
      price: 2941,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest029",
      name: "Twilight Bay Inn",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/twilightbayinn.jpg",
      location: "Toronto, Canada",
      price: 1722,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest030",
      name: "Cultural Palace",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/culturalpalace.jpg",
      location: "Kyoto, Japan",
      price: 1809,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest031",
      name: "Serenity Stay",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/serenitystay.jpg",
      location: "Barcelona, Spain",
      price: 1730,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest032",
      name: "Urban Oasis Hotel",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/urbanoasishotel.jpg",
      location: "Rome, Italy",
      price: 1948,
      counter: 0,
      duration: "3",
      category: "Beach"
    },
    {
      destinationID: "dest033",
      name: "Lagoon Escape",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/lagoonescape.jpg",
      location: "Cairo, Egypt",
      price: 2248,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest034",
      name: "Harbor Lights Hotel",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/harborlightshotel.jpg",
      location: "Istanbul, Turkey",
      price: 1585,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest035",
      name: "Urban Oasis Hotel",
      Description: "Discover stunning architecture and rich traditions.",
      image: "/accelair app/img/urbanoasishotel.jpg",
      location: "Kyoto, Japan",
      price: 1713,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest036",
      name: "Harbor Lights Hotel",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/harborlightshotel.jpg",
      location: "Toronto, Canada",
      price: 2937,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest037",
      name: "Adventure Retreat",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Cape Town, South Africa",
      price: 1836,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest038",
      name: "Twilight Bay Inn",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/twilightbayinn.jpg",
      location: "Toronto, Canada",
      price: 2737,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest039",
      name: "Harbor Lights Hotel",
      Description: "A hidden gem for travelers seeking something new.",
      image: "/accelair app/img/harborlightshotel.jpg",
      location: "Kyoto, Japan",
      price: 1573,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest040",
      name: "Alpine Heights",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/alpineheights.jpg",
      location: "Amsterdam, Netherlands",
      price: 2324,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest041",
      name: "Adventure Retreat",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Rome, Italy",
      price: 1039,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest042",
      name: "Alpine Heights",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/alpineheights.jpg",
      location: "Istanbul, Turkey",
      price: 1345,
      counter: 0,
      duration: "3",
      category: "Religious"
    },
    {
      destinationID: "dest043",
      name: "Timeless Sands Hotel",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/timelesssandshotel.jpg",
      location: "Toronto, Canada",
      price: 1261,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest044",
      name: "Adventure Retreat",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Cape Town, South Africa",
      price: 2870,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest045",
      name: "Golden Dunes Resort",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/goldendunesresort.jpg",
      location: "Paris, France",
      price: 1637,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest046",
      name: "Urban Oasis Hotel",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/urbanoasishotel.jpg",
      location: "Toronto, Canada",
      price: 1494,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest047",
      name: "Alpine Heights",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/alpineheights.jpg",
      location: "Istanbul, Turkey",
      price: 1627,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest048",
      name: "Lagoon Escape",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/lagoonescape.jpg",
      location: "Sydney, Australia",
      price: 1506,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest049",
      name: "Lagoon Escape",
      Description: "Discover stunning architecture and rich traditions.",
      image: "/accelair app/img/lagoonescape.jpg",
      location: "Tokyo, Japan",
      price: 2664,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest050",
      name: "Royal Orchid Hotel",
      Description: "A hidden gem for travelers seeking something new.",
      image: "/accelair app/img/royalorchidhotel.jpg",
      location: "Cape Town, South Africa",
      price: 2513,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest051",
      name: "Twilight Bay Inn",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/twilightbayinn.jpg",
      location: "Cairo, Egypt",
      price: 1854,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest052",
      name: "Golden Dunes Resort",
      Description: "A hidden gem for travelers seeking something new.",
      image: "/accelair app/img/goldendunesresort.jpg",
      location: "Barcelona, Spain",
      price: 2918,
      counter: 0,
      duration: "3",
      category: "Beach"
    },
    {
      destinationID: "dest053",
      name: "Urban Oasis Hotel",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/urbanoasishotel.jpg",
      location: "Dubai, UAE",
      price: 2202,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest054",
      name: "Grand Heritage Inn",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "Toronto, Canada",
      price: 2469,
      counter: 0,
      duration: "3",
      category: "Beach"
    },
    {
      destinationID: "dest055",
      name: "Cultural Palace",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/culturalpalace.jpg",
      location: "Paris, France",
      price: 2915,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest056",
      name: "Alpine Heights",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/alpineheights.jpg",
      location: "Sydney, Australia",
      price: 2188,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest057",
      name: "Harbor Lights Hotel",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/harborlightshotel.jpg",
      location: "Toronto, Canada",
      price: 1194,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest058",
      name: "Timeless Sands Hotel",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/timelesssandshotel.jpg",
      location: "Toronto, Canada",
      price: 1580,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest059",
      name: "Serenity Stay",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/serenitystay.jpg",
      location: "Bali, Indonesia",
      price: 1384,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest060",
      name: "Grand Heritage Inn",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "San Francisco, USA",
      price: 1497,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest061",
      name: "Royal Orchid Hotel",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/royalorchidhotel.jpg",
      location: "Kyoto, Japan",
      price: 1644,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest062",
      name: "Urban Oasis Hotel",
      Description: "A hidden gem for travelers seeking something new.",
      image: "/accelair app/img/urbanoasishotel.jpg",
      location: "Dubai, UAE",
      price: 2735,
      counter: 0,
      duration: "3",
      category: "Beach"
    },
    {
      destinationID: "dest063",
      name: "Grand Heritage Inn",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "Tokyo, Japan",
      price: 1509,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest064",
      name: "Mystic River Lodge",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/mysticriverlodge.jpg",
      location: "Amsterdam, Netherlands",
      price: 2646,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest065",
      name: "Ocean Breeze Hotel",
      Description: "Discover stunning architecture and rich traditions.",
      image: "/accelair app/img/oceanbreezehotel.jpg",
      location: "Rome, Italy",
      price: 1537,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest066",
      name: "Timeless Sands Hotel",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/timelesssandshotel.jpg",
      location: "Bangkok, Thailand",
      price: 1324,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest067",
      name: "Emerald Hills Hotel",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/emeraldhillshotel.jpg",
      location: "Rome, Italy",
      price: 1474,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest068",
      name: "Mystic River Lodge",
      Description: "Explore ancient history and modern attractions.",
      image: "/accelair app/img/mysticriverlodge.jpg",
      location: "New York, USA",
      price: 1779,
      counter: 0,
      duration: "3",
      category: "Religious"
    },
    {
      destinationID: "dest069",
      name: "Urban Oasis Hotel",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/urbanoasishotel.jpg",
      location: "San Francisco, USA",
      price: 1134,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest070",
      name: "Serenity Stay",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/serenitystay.jpg",
      location: "Istanbul, Turkey",
      price: 2231,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest071",
      name: "Timeless Sands Hotel",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/timelesssandshotel.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 2671,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest072",
      name: "Seaside Bliss Resort",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/seasideblissresort.jpg",
      location: "Cape Town, South Africa",
      price: 1369,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest073",
      name: "Emerald Hills Hotel",
      Description: "Discover stunning architecture and rich traditions.",
      image: "/accelair app/img/emeraldhillshotel.jpg",
      location: "Barcelona, Spain",
      price: 1887,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest074",
      name: "Lagoon Escape",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/lagoonescape.jpg",
      location: "New York, USA",
      price: 1559,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest075",
      name: "Harbor Lights Hotel",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/harborlightshotel.jpg",
      location: "Istanbul, Turkey",
      price: 1794,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest076",
      name: "Ocean Breeze Hotel",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/oceanbreezehotel.jpg",
      location: "Prague, Czech Republic",
      price: 1498,
      counter: 0,
      duration: "3",
      category: "Religious"
    },
    {
      destinationID: "dest077",
      name: "Mystic River Lodge",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/mysticriverlodge.jpg",
      location: "Rome, Italy",
      price: 1516,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest078",
      name: "Emerald Hills Hotel",
      Description: "Explore ancient history and modern attractions.",
      image: "/accelair app/img/emeraldhillshotel.jpg",
      location: "Bangkok, Thailand",
      price: 1767,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest079",
      name: "Mountain View Lodge",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/mountainviewlodge.jpg",
      location: "Tokyo, Japan",
      price: 1310,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest080",
      name: "Seaside Bliss Resort",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/seasideblissresort.jpg",
      location: "New York, USA",
      price: 2143,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest081",
      name: "Timeless Sands Hotel",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/timelesssandshotel.jpg",
      location: "Cairo, Egypt",
      price: 2223,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest082",
      name: "Adventure Retreat",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Istanbul, Turkey",
      price: 1922,
      counter: 0,
      duration: "3",
      category: "Beach"
    },
    {
      destinationID: "dest083",
      name: "Cultural Palace",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/culturalpalace.jpg",
      location: "Cape Town, South Africa",
      price: 2784,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest084",
      name: "Adventure Retreat",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Prague, Czech Republic",
      price: 2244,
      counter: 0,
      duration: "3",
      category: "Wildlife"
    },
    {
      destinationID: "dest085",
      name: "Crystal Coast Resort",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/crystalcoastresort.jpg",
      location: "Kyoto, Japan",
      price: 2754,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest086",
      name: "Twilight Bay Inn",
      Description: "Perfect for a relaxing and luxurious getaway.",
      image: "/accelair app/img/twilightbayinn.jpg",
      location: "Kyoto, Japan",
      price: 1922,
      counter: 0,
      duration: "3",
      category: "Eco"
    },
    {
      destinationID: "dest087",
      name: "Grand Heritage Inn",
      Description: "Explore ancient history and modern attractions.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "Istanbul, Turkey",
      price: 2595,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest088",
      name: "Grand Heritage Inn",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "New York, USA",
      price: 2043,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest089",
      name: "Adventure Retreat",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/adventureretreat.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 1840,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest090",
      name: "Mystic River Lodge",
      Description: "Enjoy a blend of modernity and natural beauty.",
      image: "/accelair app/img/mysticriverlodge.jpg",
      location: "Barcelona, Spain",
      price: 2074,
      counter: 0,
      duration: "3",
      category: "Heritage"
    },
    {
      destinationID: "dest091",
      name: "Skyline Suites",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/skylinesuites.jpg",
      location: "Zermatt, Switzerland",
      price: 1273,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest092",
      name: "Mountain View Lodge",
      Description: "A hidden gem for travelers seeking something new.",
      image: "/accelair app/img/mountainviewlodge.jpg",
      location: "Barcelona, Spain",
      price: 1574,
      counter: 0,
      duration: "3",
      category: "Beach"
    },
    {
      destinationID: "dest093",
      name: "Emerald Hills Hotel",
      Description: "Ideal for adventurers and nature lovers.",
      image: "/accelair app/img/emeraldhillshotel.jpg",
      location: "Zermatt, Switzerland",
      price: 1301,
      counter: 0,
      duration: "3",
      category: "Adventure"
    },
    {
      destinationID: "dest094",
      name: "Timeless Sands Hotel",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/timelesssandshotel.jpg",
      location: "Cairo, Egypt",
      price: 1044,
      counter: 0,
      duration: "3",
      category: "Religious"
    },
    {
      destinationID: "dest095",
      name: "Skyline Suites",
      Description: "A bustling city full of life and energy.",
      image: "/accelair app/img/skylinesuites.jpg",
      location: "Rio de Janeiro, Brazil",
      price: 1892,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest096",
      name: "Emerald Hills Hotel",
      Description: "A lively hub of entertainment and shopping.",
      image: "/accelair app/img/emeraldhillshotel.jpg",
      location: "Tokyo, Japan",
      price: 1908,
      counter: 0,
      duration: "3",
      category: "Urban"
    },
    {
      destinationID: "dest097",
      name: "Cultural Palace",
      Description: "A hidden gem for travelers seeking something new.",
      image: "/accelair app/img/culturalpalace.jpg",
      location: "San Francisco, USA",
      price: 2851,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest098",
      name: "Ocean Breeze Hotel",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/oceanbreezehotel.jpg",
      location: "Amsterdam, Netherlands",
      price: 2059,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest099",
      name: "Skyline Suites",
      Description: "A beautiful and culturally rich destination.",
      image: "/accelair app/img/skylinesuites.jpg",
      location: "Amsterdam, Netherlands",
      price: 1039,
      counter: 0,
      duration: "3",
      category: "Cultural"
    },
    {
      destinationID: "dest100",
      name: "Grand Heritage Inn",
      Description: "Experience world-class cuisine and scenic views.",
      image: "/accelair app/img/grandheritageinn.jpg",
      location: "Istanbul, Turkey",
      price: 1180,
      counter: 0,
      duration: "3",
      category: "Beach"
    },
     // Adicione mais voos conforme necessário
   ];
   localStorage.setItem("destination", JSON.stringify(destination));
  }
  else {
       destination = JSON.parse(localStorage.getItem("destination"));
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
      {
        username: "user2",
        password: "user2",
        exp: 3000,
        banner: "",
        userimage: "",
        aboutuser: "",
        admin: 0,
        funds: 6000,
      },
       // Adicione mais usuários conforme necessário
     ];
     localStorage.setItem("users", JSON.stringify(users));
   }
    else {
       users = JSON.parse(localStorage.getItem("users"));
  }
 }
 
function exposeAdminData() {
  // Flights
  window.voos = JSON.parse(localStorage.getItem("flight")) || [];
  // Destinations (as names for admin modal)
  window.destinos = (JSON.parse(localStorage.getItem("destination")) || []).map(d => d.location || d.name || d.destination || "");
  // Users (as types or usernames for admin modal)
  window.users = (JSON.parse(localStorage.getItem("users")) || []).map(u => u.type || u.username || u.name || "");
}

// Call after data initialization
if (typeof window !== 'undefined') {
  exposeAdminData();
}

/* import SearchView from './views/searchView.js';
 
 document.addEventListener('DOMContentLoaded', () => {
   new SearchView('form');
 });*/

