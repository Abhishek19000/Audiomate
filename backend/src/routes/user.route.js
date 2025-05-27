import { Router } from "express";

const router= Router();

router.get("/like",(req,res)=>
{
    res.send("User with the get method")
})

export default router;