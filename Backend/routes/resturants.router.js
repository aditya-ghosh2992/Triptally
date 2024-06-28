import express from "express";
import {jammukashmirresturants,westbengalresturants,rajasthanresturants,madhyapradeshresturants,biharresturants,gujaratresturants,assamresturants,andhrapradeshresturants,uttarpradeshresturants,delhiresturants} from "../controllers/resturant.js"
const resturant_router = express.Router();

resturant_router.get('/jammukashmir',jammukashmirresturants)
resturant_router.get('/westbengal',westbengalresturants)
resturant_router.get('/rajasthan',rajasthanresturants)
resturant_router.get('/andhrapradesh',andhrapradeshresturants)
resturant_router.get('/punjab',rajasthanresturants)
resturant_router.get('/assam',assamresturants)
resturant_router.get('/bihar',biharresturants)
resturant_router.get('/gujarat',gujaratresturants)
resturant_router.get('/madhyapradesh',madhyapradeshresturants)
resturant_router.get('/uttarpradesh',uttarpradeshresturants)
resturant_router.get('/delhi',delhiresturants)
export default resturant_router;