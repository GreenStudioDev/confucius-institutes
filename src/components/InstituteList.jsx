import "../App.css";
import { useContext, useState } from "react";
import { mapContext } from "../context";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { getListData } from "../helpers/getListData";
import { getFlag } from "../helpers";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const InstituteList = () => {
  const { map } = useContext(mapContext);

  const [open, setOpen] = useState(false);

  const handleClick = (i) => {
    setOpen(i);
    if (i === open) {
      setOpen(i);
    }
  };

  const DataList = getListData();

  return (
    <>
      {DataList.map((country, i) => {
        let countryName = country.countriesInstitutes.name;
        return (
          <List key={`mainList-${i}`}>
            <ListItem key={`li-${i}`} onClick={() => handleClick(i)}>
              <ListItemIcon key={`listItemIcon-${i}`}>
                <img
                  key={`listItemImage-${i}`}
                  src={getFlag(countryName)}
                  alt={`bandera de ${countryName}`}
                  style={{ width: 50 }}
                />
              </ListItemIcon>
              <ListItemText key={`listItemText-${i}`} primary={countryName} />
              {open === i ? (
                <ExpandLess key={`icon1-${i}`} />
              ) : (
                <ExpandMore key={`icon2-${i}`} />
              )}
            </ListItem>
            <List key={`collapsePrimaryList-${i}`}>
              <Collapse
                key={`collapse-${i}`}
                in={open === i}
                timeout="auto"
                unmountOnExit
              >
                <List key={`collapseLI-${i}`} sx={{ flexDirection: "column" }}>
                  {country.countriesInstitutes.institutes.map((items, ix) => {
                    let onClick = () => {
                      map.flyTo({
                        center: items.institute.institute_coords,
                        zoom: 15,
                        pitch: 63,
                        bearing: 80,
                      });
                    };
                    return (
                      <ListItem
                        key={`licont-${ix}`}
                        sx={{
                          flexDirection: "column",
                          alignItems: "flex-start",
                          cursor: "pointer",
                        }}
                        onClick={onClick}
                      >
                        <ListItemText
                          key={items.institute.institute_coords[0] + ix}
                          sx={{ textAlign: "left", color: "green" }}
                          primary={items.institute.institute_name}
                        />
                        <ListItemText
                          key={items.institute.institute_coords[1] + ix}
                          primary={items.institute.institute_address}
                        />

                        <ListItemText
                          key={items.institute.institute_coords + ix}
                          primary={items.institute.institute_city}
                        />
                        <hr />
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </List>
        );
      })}
    </>
  );
};
