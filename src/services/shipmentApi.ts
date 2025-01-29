"use server"

//--------------------------------------------------------getReq
export async function getReq() {
   const res = await fetch("https://api.shipengine.com/v1/carriers",{
    method: "GET",
    headers: {
      "API-Key" : process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
      "Content-Type": "application/json"
    }
   })

   const data = await res.json()

   return data
}





//--------------------------------------------------------postReq

interface Data {
  name: string
  phone: string
  address: string
  city: string
}



export async function postReq(item: Data) {

  const {name, phone, address, city} = item

  const res = await fetch("https://api.shipengine.com/v1/labels",{
    method: "POST",
    headers: {
      "API-Key" : process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "shipment": {
        "carrier_id": "se-1570529",
        "service_code": "usps_priority_mail_express",
        "ship_to": {
          "name": name,
          "phone": phone,
          "address_line1": address,
          "city_locality": city,
          "state_province": "CA",
          "postal_code": "95128",
          "country_code": "US",
          "address_residential_indicator": "yes"
        },
        "ship_from": {
          "name": "Bilal",
          "company_name": "Abc company",
          "phone": "+03001234567",
          "address_line1": "123 Main St",
          "city_locality": "Karachi",
          "state_province": "TX",
          "postal_code": "78731",
          "country_code": "US",
          "address_residential_indicator": "no"
        },
        "packages": [
          {
            "weight": {
              "value": 20,
              "unit": "ounce"
            },
            "dimensions": {
              "height": 12,
              "width": 6,
              "length": 10,
              "unit": "inch"
            }
          }
        ]
      }
    })
  })

  const data = await res.json()

  // console.log("🍊",data);

  return data
  
}

