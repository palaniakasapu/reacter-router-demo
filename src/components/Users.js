import { Outlet, useSearchParams } from "react-router-dom";
export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveParms = searchParams.get('filter') === 'Active';
    return(
        <div>
            <h3>User1</h3>
            <h3>User2</h3>
            <h3>User3</h3>
            <Outlet />
            <div>
                <button onClick={() => {setSearchParams({filter:"Active"})}}>Active Users</button>
                <button onClick={() => {setSearchParams({})}}>Reset Filters</button>
            </div>
            {
                showActiveParms ? <h2>Showing active user</h2> : <h2>Showing all users</h2>
            }
        </div>
    )
}
