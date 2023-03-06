import { useEffect, useState } from "react";
import { getInstitutes } from "../api";

// use this function to get geoJSON object when DB info change in order to update the institutes.json file
export const useGeoInstitutes = () => {

  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    const fetchInstitutes = async () => {
      const institutesRes = await getInstitutes();
      console.log("🚀 ~ file: getGeoInstitutes.js:13 ~ fetchInstitutes ~ institutesRes:", institutesRes)
      setInstitutes(institutesRes)
    }
    fetchInstitutes()
    
  }, []);
      

  
      

  const resGeoInstitutes = 
  {
    type: "FeatureCollection",
    features: institutes.map((institute) => {
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ institute.long, institute.lat],
        },
        properties: { 
          id: institute.institute_id,
          cooperation: institute.Cooperation_eng,
          address: institute.address,
          agreement_1: institute.agreement_1_eng,
          agreement_2: institute.agreement_2_eng,
          chinese_director: institute.chinese_director,
          chinese_director_email: institute.chinese_director_email,
          chinese_director_profile: institute.chinese_director_profile_eng,
          city_name: institute.city_name_eng,
          country_name: institute.country_name_eng,
          email_1: institute.email_1,
          email_2: institute.email_2,
          extension: institute.extension,
          institute_id: institute.institute_id,
          local_director: institute.local_director,
          local_director_email: institute.local_director_email,
          local_director_profile: institute.local_director_profile_eng,
          logo: institute.logo,
          phone: institute.phone,
          phone_2: institute.phone_2,
          place: institute.place_eng,
          type: institute.type_eng,
          website: institute.website,
          year: institute.year,
        },
      };
    }),
  };
  
  return resGeoInstitutes
  
}

