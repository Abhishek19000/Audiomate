import { Router } from "express";

const router= Router();

router.get("/",(req,res)=>
{
    res.send("User with the get method")
})

export default router;