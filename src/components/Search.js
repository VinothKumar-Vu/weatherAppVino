import { useState } from "react"
import { GEO_API_URL, geoApiOptions } from "./api"
import { AsyncPaginate } from "react-select-async-paginate"

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null)

  const handleOnChange = (e) => {
    setSearch(e)
    onSearchChange(e) // event handler function // and pass the data that we got from the input
  }

  const loadOptions = async (e) => {
    try {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${e}`, geoApiOptions);
      const data = await response.json(); // Parse the response as JSON

      const options = data.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }))
      return { options }
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <AsyncPaginate placeholder="Search for city" debounceTimeout={1000} value={search}
      onChange={handleOnChange} loadOptions={loadOptions} //for loading options

    />
  )
}

export default Search
