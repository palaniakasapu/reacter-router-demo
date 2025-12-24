import { useParams } from "react-router-dom";
export const UserDetails = () => {
    const {userId} = useParams()
    
    return(
        <div>
            <h2>User Details Page {userId}</h2>
        </div>
    )
}
