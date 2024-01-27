async function getData() {
    const res = await fetch('https://api.github.com/users');
    return res.json();
}

export default async function GithubUserList() {
    const data = await getData();
    return (
        <div className="m-5">
            <div className="flex items-center justify-center text-black m-4">
                GITHUB USER LIST
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                LOGIN NAME
                            </th>
                            <th scope="col" className="px-6 py-3">
                                GITHUB URL
                            </th>
                            <th scope="col" className="px-6 py-3">
                                TYPES
                            </th>
                            <th scope="col" className="px-6 py-3">
                                NO. OF REPOS
                            </th>
                            <th scope="col" className="px-6 py-3">
                                NO. OF FOLLOWERS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((items, index) => {
                                return (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{items.login.toUpperCase()}</td>
                                    <td className="px-6 py-4"><a href={items.html_url} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">{items.html_url}</a></td>
                                    <td className="px-6 py-4">{items.type.toUpperCase()}</td>
                                    <td className="px-6 py-4">{items.repos_url.length}</td>
                                    <td className="px-6 py-4">{items.followers_url.length}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

