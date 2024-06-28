import express from "express";
import { jammuandkashmirhotels,westbengalhotels,rajasthanhotels,punjabhotels,madhyapradeshhotels,biharhotels,gujarathotels,assamhotels,andhrapradeshhotels,uttarpradheshhotels,delhihotels} from "../controllers/hotels.js";
const hotels_router = express.Router();

hotels_router.get('/jammukashmir',jammuandkashmirhotels);
hotels_router.get('/andhrapradesh',andhrapradeshhotels);
hotels_router.get('/westbengal',westbengalhotels);
hotels_router.get('/rajasthan',rajasthanhotels);
hotels_router.get('/punjab',punjabhotels);
hotels_router.get('/bihar',biharhotels);
hotels_router.get('/assam',assamhotels);
hotels_router.get('/gujarat',gujarathotels);
hotels_router.get('/madhyapradesh',madhyapradeshhotels);
hotels_router.get('/uttarpradesh',uttarpradheshhotels);
hotels_router.get('/delhi',delhihotels);
export default hotels_router;