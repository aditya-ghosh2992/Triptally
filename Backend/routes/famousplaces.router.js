import express from "express";
import {jammukashmirfamousplaces,westbengalfamousplaces,rajasthanfamousplaces,punjabfamousplaces,madhyapradeshfamousplaces,biharfamousplaces,assamfamousplaces,gujaratfamousplaces,andhrapradeshfamousplaces,uttarpradeshfamousplaces,delhifamousplaces} from "../controllers/famousplaces.js";
const famousplaces_router = express.Router();

famousplaces_router.get('/jammukashmir',jammukashmirfamousplaces)
famousplaces_router.get('/andhrapradesh',andhrapradeshfamousplaces)
famousplaces_router.get('/westbengal',westbengalfamousplaces)
famousplaces_router.get('/rajasthan',rajasthanfamousplaces)
famousplaces_router.get('/punjab',punjabfamousplaces)
famousplaces_router.get('/madhyapradesh',madhyapradeshfamousplaces)
famousplaces_router.get('/bihar',biharfamousplaces)
famousplaces_router.get('/gujarat',gujaratfamousplaces)
famousplaces_router.get('/assam',assamfamousplaces)
famousplaces_router.get('/uttarpradesh',uttarpradeshfamousplaces)
famousplaces_router.get('/delhi',delhifamousplaces)

export default famousplaces_router;