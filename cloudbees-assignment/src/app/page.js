import dynamic from 'next/dynamic'
import Tab from './Tab';

const WithCustomLoading = dynamic(
    () => import('./Tab'),
    {
        loading: () => <p className="flex items-center justify-center">Loading...</p>,
    }
)

export default function Home() {
    return (
        <main className='m-5'>
            <WithCustomLoading/>
        </main>
    );
}
