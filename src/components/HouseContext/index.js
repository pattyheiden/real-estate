import React, { useState, useEffect ,createContext } from "react";
import { Data } from "../../../data";


export const HouseContext = createContext({
  country: "Estado (todos)",
  setCountry: () => {},
  countries: [],
  property: "Propriedade (todos)",
  setProperty: () => {},
  properties: [],
  price: "Preço estimado (todos)",
  setPrice: () => {},
  houses: [],
  loading: false,
});

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(Data);
  const [country, setCountry] = useState("Estado (todos)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Propriedade (todos)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Preço estimado (todos)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })    
    const uniqueCountries = ['Estado (todos)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  },[]);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    })    
    const uniqueProperties = ['Propriedade (todos)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  },[]);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(' ').includes('(todos)');
    }
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);
    const newHouses = Data.filter((house) => {
      const housePrice = parseInt(house.price);
      if( house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }
      if(isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if(!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      if(isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      if(isDefault(country) && isDefault(property) && !isDefault(price)) {
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if(!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      if(!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if(isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false)
      );
    }, 1000);   
  };

  return (    
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;