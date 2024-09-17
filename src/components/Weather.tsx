// import { useEffect, useState } from "react";
// import axios from "axios";
// const Weather = () => {
//   const apikey = `08cab777988e2536c2d99c36589fd12b`;
//   const url = `http://api.openweathermap.org/data/2.5/weather`;
//   interface WeatherData {
//     main?: {
//       temp: number;
//       temp_max: number;
//       temp_min: number;
//       humidity: number;
//     };
//     weather?: {
//       description: string;
//     };
//     coord?: {
//       lon: number;
//       lat: number;
//     };
//     // weather[0]?:{
//     //     id:number;
//     //     main:string;
//     //     description:string;
//     // };
//   }
  
//   const [weatherdata, setweatherdata] = useState<WeatherData>({});
//   const [city, setcity] = useState("");
//   useEffect(() => {}, []);
//   const handlecitychange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setcity(e.target.value);
//   };
//   const handlesearch = async () => {
//     const newurl = `${url}?q=${city}&appid=${apikey}&units=metric`;
//     try {
//       const response = await axios.get(newurl);
//       setweatherdata(response.data);
//       console.log(response);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="enter the city"
//         value={city}
//         onChange={handlecitychange}
//       />
//       <button onClick={handlesearch}>Search the weather</button>
//       <h1>weather data:{}</h1>
//       <h1>Weather in {city}</h1>
//       <p>Temperature: {weatherdata.main ? weatherdata.main.temp : ""}°C</p>
//       <p>
//         Max temperature: {weatherdata.main ? weatherdata.main.temp_max : ""}°C
//       </p>
//       <p>
//         Min temperature: {weatherdata.main ? weatherdata.main.temp_min : ""}°C
//       </p>
//       <p>Humidity: {weatherdata.main ? weatherdata.main.humidity : ""}%</p>
//       <p>
//         Weather Condition:{" "}
//         {weatherdata.weather ? weatherdata.weather[0].description : ""}
//       </p>
//       <p>
//         Longitude and Latitude:{" "}
//         {weatherdata.coord
//           ? `${weatherdata.coord.lon}, ${weatherdata.coord.lat}`
//           : ""}
//       </p>
//       <p>Pressure: {weatherdata.main ? weatherdata.main.pressure : ""} hPa</p>
//     </div>
//   );
// };

// export default Weather;
import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const apikey = `08cab777988e2536c2d99c36589fd12b`;
  const url = `http://api.openweathermap.org/data/2.5/weather`;

  interface WeatherData {
    main?: {
      temp: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
      pressure: number; // added pressure property
    };
    weather?: {
      description: string;
    }[];
    coord?: {
      lon: number;
      lat: number;
    };
  }

  const [weatherdata, setweatherdata] = useState<WeatherData>({});
  const [city, setcity] = useState("");
  const [error,seterror]=useState(null)

  useEffect(() => {}, []);

  const handlecitychange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcity(e.target.value);
  };

  const handlesearch = async () => {
    const newurl = `${url}?q=${city}&appid=${apikey}&units=metric`;
    try {
      const response = await axios.get(newurl);
      setweatherdata(response.data);
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      seterror(error)
    }
  };
  return (
    <div style={{textAlign:'center',padding:20}}>
        {
        error?<h2>There is an error in the city name</h2>:
        <div style={{ textAlign: "center", padding: 20 }}>
      <input
        type="text"
        placeholder="enter the city"
        value={city}
        onChange={handlecitychange}
        style={{ width: 200, height: 30, padding: 10, fontSize: 18 ,fontStyle:'italic'}}
      />
      <button
        onClick={handlesearch}
        style={{ backgroundColor: "#4CAF50", color: "#fff", padding: 20, fontSize: 18,margin:20,borderRadius:10 }}
      >
        Search the weather
      </button>
      <h1 style={{ fontSize: 50, fontWeight: "bold",backgroundColor:'red' }}>weather data:</h1>
      <h1 style={{ fontSize: 30, fontWeight: "bold" ,backgroundColor:'orange'}}>Weather in {city}</h1>
      <p style={{ fontSize: 18 ,backgroundColor:'grey',color:'black',fontFamily:'cursive'}}>
        Temperature: {weatherdata.main ? weatherdata.main.temp : ""}°C
      </p>
      <p style={{ fontSize: 18 ,backgroundColor:'grey',color:'black',fontFamily:'cursive'}}>
        Max temperature: {weatherdata.main ? weatherdata.main.temp_max : ""}°C
      </p>
      <p style={{ fontSize: 18 ,backgroundColor:'grey',color:'black',fontFamily:'cursive'}}>
        Min temperature: {weatherdata.main ? weatherdata.main.temp_min : ""}°C
      </p>
      <p style={{ fontSize: 18 ,backgroundColor:'grey',color:'black',fontFamily:'cursive'}}>
        Humidity: {weatherdata.main ? weatherdata.main.humidity : ""}%
      </p>
      <p style={{ fontSize: 18 ,backgroundColor:'grey',color:'black',fontFamily:'cursive'}}>
        Weather Condition:{" "}
        {weatherdata.weather ? weatherdata.weather[0].description : ""}
      </p>
      <p style={{ fontSize: 18 ,backgroundColor:'grey',color:'black',fontFamily:'cursive'}}>
        Longitude and Latitude:{" "}
        {weatherdata.coord
          ? `${weatherdata.coord.lon}, ${weatherdata.coord.lat}`
          : ""}
      </p>
      <p style={{ fontSize: 18 ,backgroundColor:'grey',color:'black',fontFamily:'cursive'}}>
        Pressure: {weatherdata.main ? weatherdata.main.pressure : ""} hPa
      </p>
    </div>
    }
    </div>
  );
};

export default Weather;