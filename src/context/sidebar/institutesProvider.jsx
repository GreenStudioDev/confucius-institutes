// import React, { useContext, useEffect, useReducer, useState } from "react";
// import { institutesContext, institutesState, institutesReducer } from "..";
// import { getInstitutes } from "../../api";
// // import { useGeoInstitutes } from "../../helpers";

// export const InstitutesProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(institutesReducer, institutesState);


//   const [institutes, setInstitutes] = useState([]);

//   useEffect(() => {
//     const fetchInstitutes = async () => {
//       const institutesRes = await getInstitutes();
//       setInstitutes(institutesRes)
//     }
//     fetchInstitutes()
//     // setInstitutes(institutesData)
//     // dispatch({
//     //   type: "getInstitutes",
//     //   payload: institutes,
//     // })
    
//   }, []);




//   return (
//     <institutesContext.Provider
//       value={{
//         ...state,
//         institutes,
//       }}
//     >
//       {children}
//     </institutesContext.Provider>
//   );
// };

// export const useInstituteValue = () => useContext(institutesContext);
