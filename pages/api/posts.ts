import type {
    NextApiRequest,
    NextApiResponse
} from 'next';
import {
    PrismaClient
} from '.prisma/client';

const prisma = new PrismaClient();

const PostApiPath = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        console.log('hice un get');
        const posts = await prisma.post.findMany({
        });
        res.status(200).json({
            posts
        });
    }
    if (req.method === 'POST') {
      const postCreated = await prisma.post.create({
        data: {
         biome: req.body.biome,
         author: req.body.author,
         location: req.body.location,
         title: req.body.title,
         description: req.body.description,
         image: req.body.image,
         average_score: req.body.average_score,
       },
      });
      res.status(200).json({ post: postCreated });
 }
};

export default PostApiPath;