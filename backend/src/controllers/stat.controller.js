import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";

export const getStats= async (req,res,next)=>
{
    try {
        // "This is not the optimised approach, we have to wait one process to fininsh and then move to next one"
        // const totalSongs= await Song.countDocuments();
        // const totalUsers=await User.countDocuments();
        // const totalAlbums= await Album.countDocuments();

        const [totalUsers,totalAlbums,totalSongs,uniqueArtists]=await Promise.all([
            User.countDocuments(),
            Album.countDocuments(),
            Song.countDocuments(),

            Song.aggregate([
                {
                    $unionWith:{
                        coll:"albums",
                        pipeline:[],
                    }
                },
                {
                    $group:{
                        _id:"$artist",
                    }
                },
                {
                    $count:"count",
                }
            ])
        ]);
        res.status(200).json({
            totalAlbums,
            totalSongs,
            totalUsers,
            totalArtists: uniqueArtists[0].count || 0,
        })
    } catch (error) {
        next(error);
    }
}