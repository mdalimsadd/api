export default async function handler(req, res) {
  const params = new URLSearchParams({
    fdate1: "2025-10-30 00:00:00",
    fdate2: "2025-10-30 23:59:59",
    frange: "",
    fclient: "",
    fnum: "",
    fcli: "",
    fgdate: "",
    fgmonth: "",
    fgrange: "",
    fgclient: "",
    fgnumber: "",
    fgcli: "",
    fg: 0,
    sEcho: 1,
    iColumns: 9,
    sColumns: ",,,,,,,,",
    iDisplayStart: 0,
    iDisplayLength: 25,
    mDataProp_0: 0,
    mDataProp_1: 1,
    mDataProp_2: 2,
    mDataProp_3: 3,
    mDataProp_4: 4,
    mDataProp_5: 5,
    mDataProp_6: 6,
    mDataProp_7: 7,
    mDataProp_8: 8,
    sSearch: "",
    bRegex: "false",
    iSortCol_0: 0,
    sSortDir_0: "desc",
    iSortingCols: 1,
    _: Date.now()
  });

  const apiUrl = `http://109.236.84.81/ints/agent/res/data_smscdr.php?${params.toString()}`;

  const response = await fetch(apiUrl, {
    headers: {
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "Authorization": `Bearer ${process.env.API_TOKEN}`, // ✅ Securely use your API key
      "X-Requested-With": "XMLHttpRequest",
    }
  });

  const data = await response.text();
  res.status(200).send(data);
}
