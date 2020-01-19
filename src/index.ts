
import axios,{AxiosResponse} from 'axios'
import commander from 'commander'
interface IWeatherRes{
 status:string,
 count:string,
 info:string,
 infocode:string,
 lives:ILive[],
}

interface ILive{
  province:string,
  city:string,
  adcode:string,
  weather:string,
  temperature:string,
  winddirection:string,
  windpower:string,
  humidity:string,
  reporttime:string
}

const url="https://restapi.amap.com/v3/weather/weatherInfo"
const key='dc633326579056763330883d8f25bba3'


commander.version('1.0.0').option("-c, --city [name]","Add a city name").parse(process.argv)

if(process.argv.slice(2).length===0){
  commander.outputHelp()
  process.exit()
}
axios.get(`${url}?city=${encodeURI(commander.city)}&key=${key}`).then((res:AxiosResponse<IWeatherRes>)=>{
  console.log(res.data.lives)
}).catch(()=>{console.log('服务异常')})