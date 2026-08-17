window.EMERGENCY_DATA = {
  verified: "2026-08-17",
  sources: {
    SI: "https://www.gov.si/en/topics/emergency-call/",
    AT: "https://www.oesterreich.gv.at/en/themen/notfaelle_unfaelle_und_kriminalitaet/notrufnummern.html",
    HU: "https://digital-strategy.ec.europa.eu/en/policies/112"
  },
  countries: {
    SI: { name: "Slovenia", general: "112", police: "113", ambulance: "112", fire: "112", note: "112 dispatches medical, fire, mountain and other rescue services. Police emergency: 113." },
    AT: { name: "Austria", general: "112", police: "133", ambulance: "144", fire: "122", note: "Mountain rescue: 140. Health advice and pharmacy service: 1450." },
    HU: { name: "Hungary", general: "112", police: "112", ambulance: "112", fire: "112", note: "Use 112 for police, ambulance or fire. The operator dispatches the required service." }
  },
  stops: [
    {name:"Hajdoše / Ptuj", country:"SI", lat:46.4261, lng:15.8272},
    {name:"Bad Kleinkirchheim", country:"AT", lat:46.8100, lng:13.8000},
    {name:"Klagenfurt / Wörthersee", country:"AT", lat:46.6237, lng:14.3128},
    {name:"Bled", country:"SI", lat:46.3635, lng:14.0984},
    {name:"Postojna", country:"SI", lat:45.7831, lng:14.2054},
    {name:"Vintgar Gorge", country:"SI", lat:46.4040, lng:14.0810},
    {name:"Lake Bohinj / Vogel", country:"SI", lat:46.2851, lng:13.8878},
    {name:"Budapest", country:"HU", lat:47.4979, lng:19.0402},
    {name:"Aquaworld Budapest", country:"HU", lat:47.5694, lng:19.1090},
    {name:"Buda Castle", country:"HU", lat:47.4963, lng:19.0398},
    {name:"Margaret Island", country:"HU", lat:47.5296, lng:19.0477}
  ],
  days: [
    {stop:0}, {stop:1}, {stop:1}, {stop:1}, {stop:2},
    {stop:3}, {stop:3}, {stop:4}, {stop:5}, {stop:6},
    {stop:7}, {stop:8}, {stop:9}, {stop:10}, {stop:7}
  ]
};
