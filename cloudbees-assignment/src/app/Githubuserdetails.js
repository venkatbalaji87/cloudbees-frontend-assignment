import { useState } from "react";

function GithubUserDetails() {
    const [userName, setUserName] = useState("")
    const [userjsondata, setUserJsonData] = useState([])
    const [showUserDetails, setShowUserDetails] = useState(false);

    const handleOnClick = () => {
        setShowUserDetails(true)
        fetch(`https://api.github.com/users/${userName}?username=${userName}`)
            .then(response => response.json())
            .then(data => setUserJsonData(data))
            .catch(error => console.error(error));
    }
    return (
        <>
            <div className="flex items-center justify-center text-black m-4">
                GITHUB USER DETAILS
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="search-user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search User</label>
                    <input
                        type="text"
                        id="search-user"
                        onChange={(event) => setUserName(event.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User" required />
                </div>
                <div>
                    <button type="button" onClick={() => handleOnClick()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-7">Search User</button>
                </div>
            </div>
            {
                showUserDetails ? <div className="grid grid-cols-3 gap-8">
                    <div>
                        <img src={userjsondata.avatar_url} alt="User Name" height="100px" width="100px" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NAME</label>
                        <span>{userjsondata.name || "--"}</span>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GITHUB URL</label>
                        <span className="text-wrap"><a href={userjsondata?.html_url} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ">{userjsondata?.html_url || "--"}</a></span>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NO. OF FOLLOWERS</label>
                        <span>{userjsondata?.followers || "0"}</span>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NO. OF PUBLIC REPOS</label>
                        <span>{userjsondata?.public_repos || "0"}</span>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BLOG</label>
                        <span className="text-wrap"><a href={userjsondata?.blog} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ">{userjsondata?.blog || "--"}</a></span>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GITHUB ID</label>
                        <span>{userjsondata?.id || "--"}</span>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">TYPE</label>
                        <span>{userjsondata?.type || "--"}</span>
                    </div>
                </div> :
                    <div className="grid grid-cols-3 gap-8 top-28 left-32">
                        No USERDATA FOUND..!!!
                    </div>
            }
        </>
    )
}

export default GithubUserDetails;