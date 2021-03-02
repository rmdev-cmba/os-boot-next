
import { connectToDatabase } from '../../src/utils/mongodb';

export default function Home({ isConnected }) {
    return (
        <div className="container">
            
            <main>
                <h1 className="title">
                    Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
                </h1>

                {isConnected ? (
                    <h2 className="subtitle">You are connected to MongoDB</h2>
                ) : (
                        <h2 className="subtitle">
                            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
          for instructions.
                        </h2>
                    )}
            </main>
        </div>
    )

}

export async function getServerSideProps(context) {
    const { client } = await connectToDatabase()

    const isConnected = await client.isConnected()

    return {
        props: { isConnected },
    }
}
