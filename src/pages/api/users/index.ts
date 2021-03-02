import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { method } = req;

        // permissão de acessos via url
        switch (method) {
            case 'GET':
                // Get data from your database
                const { db } = await connectToDatabase();
                const data = await db.collection('user').find().toArray();

                res.status(200).json(data);
                break
            case 'PUT':
                // Update or create data in your database
                //res.status(200).json({ id, name: name || `User ${id}` })
                break
            default:
                res.setHeader('Allow', ['GET', 'PUT'])
                res.status(405).end(`Method ${method} Not Allowed`)
        }


    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })

    }
}

export default handler;