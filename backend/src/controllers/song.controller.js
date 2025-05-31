import {Song} from "../models/song.model.js";

export const getAllSongs= async (req,res,next)=>{
    try {
        //-1 =Descending => newest-> oldest
        //1 =Ascending => oldest->newest
        const songs=await Song.find().sort({createdAt:-1});
        return res.json(songs);
    } catch (error) {
        next(error);
    }
}